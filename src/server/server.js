import express from 'express'
import compression from 'compression'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import App from '@/app'
import Html from '@/server/html'
import {reducer} from '@/store/reducers/index'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {host, port} from '@/api/axios'
import {fetchUsers} from '@/api/users'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import async from 'async'

import sqlRequest from 'modules/sqlRequest'
import encryptionUtil from 'modules/encryptionUtil'
import { flushToHTML } from 'styled-jsx/server'


const server = express();
const favicon = require('serve-favicon')

server.use(favicon('./public/fav.ico'))

server.use(bodyParser.json({limit: "50mb"}))
server.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Methods', 'POST')
    next();
});
server.use('/public', express.static('dist'), express.static('public'))
server.use(compression())

server.use(cookieSession({
  name: 'session',
  keys: ['**************'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
server.use((req, res, next) => {
  if(!req.session.auth) {
      req.session.auth = {
      isSignedIn: false,
      isAdmin: false,
      errors: [],
      email: '',
      password: ''
    }
  }
  next()
})


const renderWithReduxState = (reduxState, location, context) => {
    const store = createStore(reducer, reduxState)
    const appWithRouter = (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    )

    const body = renderToString(appWithRouter)
    const styles = flushToHTML()

    const title = location.slice(1)
    //const style = 'style'
    return Html({
        body,
        title,
        reduxState,
        styles
    })
}

server.post('/results', (req, res) => {
  sqlRequest.getPackages((results) => {
    res.setHeader('Content-Type', 'application/json');
    const context = {}
    const app = renderWithReduxState({results}, req.url, context)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(results))
  })
});

server.post('/getLeaves', (req, res) => {
  sqlRequest.getLeaves((results) => {
    res.setHeader('Content-Type', 'application/json')
    const context = {}
    const app = renderWithReduxState({results}, req.url, context)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(results))
  })
})

server.post('/getLeaf', (req, res) => {
  sqlRequest.getLeaf(req.body.id, (results) => {
    res.setHeader('Content-Type', 'application/json')
    const context = {}
    const app = renderWithReduxState({}, req.url, context)
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(results[0]))
  })
})

server.post('/deleteLeaf', (req, res) => {
  sqlRequest.deleteLeaf(req.body.id, (results) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(results[0]))
  })
})

server.post('/setLeaf', (req, res) => {
  async.parallel([
    (next) => {
      sqlRequest.setLeaf(req.body.id, JSON.stringify(req.body.title), JSON.stringify(req.body.layouts), JSON.stringify(req.body.contents),  (result) => {
          res.setHeader('Content-Type', 'application/json')
          res.status(200).send(JSON.stringify(result.insertId))
          next(result.insertId)
      })

    }], (err, results) => {
            console.log(results, err, '....')
          })

})

server.post('/setStyles', (req, res) => {
  sqlRequest.setStyles(req.body.id, req.body.element, JSON.stringify(req.body.styles), (result) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(result.insertId))
  })
})

server.post('/getStyles', (req, res) => {
  sqlRequest.getStyles(req.body.element, (result) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(result[0]))
  })
})

server.post('/signIn', (req, res) => {
  sqlRequest.ifEmailExist(req.body.email, (isTrue) => {
    if(isTrue){
      sqlRequest.loadPassword(req.body.email, (encryptedBdd) => {
        encryptionUtil.compare( req.body.password, encryptedBdd, (isTrue) => {
          if(isTrue){
            sqlRequest.checkUserRight(req.body.email, (userAccess) => {
              if(userAccess.admin){
                req.session.auth.email = req.body.email
                req.session.auth.password = req.body.password
                req.session.auth.isSignedIn = true
                req.session.auth.isAdmin = true
                req.session.auth.errors = []
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(req.session.auth))

              } else if (userAccess.available) {
                req.session.auth.email = req.body.email
                req.session.auth.password = req.body.password
                req.session.auth.isSignedIn = true
                req.session.auth.isAdmin = false
                req.session.auth.errors = []
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(req.session.auth))
              }
            })
          } else {
            console.log('incorrect password')
            req.session.auth.errors = ['Mot de passe incorrect.']
            res.setHeader('Content-Type', 'application/json')
            res.status(200).send(JSON.stringify(req.session.auth))
          }
        })
      })
    } else {
      console.log('user not exist')
      req.session.auth.errors = ['Aucun compte associé à cet email.']
      res.status(200).send(JSON.stringify(req.session.auth))
    }
  })
})

server.post('/setLocale', (req, res, next) => {
  console.log(req.body.locale)
  req.session.locale = req.body.locale
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(req.session.locale))
})


server.post('/signOut', (req, res, next) => {
  req.session.auth.isSignedIn = false
  req.session.auth.isAdmin = false
  req.session.auth.email = ''
  req.session.auth.password = ''
  req.session.auth.errors = []
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify(req.session.auth))
})

server.post('/signUp', (req, res, next) => {
  sqlRequest.ifEmailExist(req.body.email, (isTrue) => {
    if (!isTrue) {
      encryptionUtil.encrypt(req.body.password, (encrypted) => {
        sqlRequest.setPassword(req.body.email, encrypted, req.body.name, req.body.firstName, (result) => {
          console.log('account signed up')
          req.session.auth.email = req.body.email
          req.session.auth.password = req.body.password
          res.setHeader('Content-Type', 'application/json')
          res.status(200).send(JSON.stringify({created:true, accountStatus: 'Votre compte a bien été créé.'}))
          //send confirmation email
        })
      })
    } else {
      console.log('account already signed up')
      res.setHeader('Content-Type', 'application/json')
      res.status(200).send(JSON.stringify({created:false, accountStatus: 'Cet email correspond déjà à un autre utilisateur.'}))
    }
  })
})


server.get('/users', (req, res) => {
    fetchUsers()
        .catch((e) => {
            console.error('error while fetching /users: ', e)
            return [];
        })
        .then(users => {
            const context = {users}
            const app = renderWithReduxState({users}, req.url, context)
            res.status(200).send(app)
        })
        .catch(e => res.status(500).send(e))
});



server.get('*', (req, res) => {
    const context = {}
    const app = renderWithReduxState({
      auth: req.session.auth,
      i18n: {
        locale: req.session.locale || 'fr'
      }
    }, req.url, context)

    if (context.url) {
         console.log('will redirect to ', context.url)
         res.redirect(context.url)
         return
    }
    res.status(200).send(app)
});


server.listen(port, () => {
  console.log(`Serving at ${port}`)
})
