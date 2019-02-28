const mysql = require('mysql')
const isProduction = require('./isProduction')
var pool = isProduction('pool')
const sqlRequest = {

  ifEmailExist: function(email, callback){
    var connexion = isProduction('connexion')
    var query = 'SELECT id FROM users WHERE email = ?'
    connexion.connect()
    connexion.query(query, [email], function select (error, results) {
      if (error) {
        connexion.end()
        return;
      }
      if (results.length > 0) {
        callback(true)
      } else {
        callback(false)
      }
        connexion.end()
    })
  },

  setPassword: function(email, password, name, first_name, callback) {
    var connexion = isProduction('connexion')
    var post  = {email: email, password: password, name: name, first_name:first_name, available:1}
    var query = 'INSERT INTO users SET ?'
    connexion.connect();
    connexion.query(query, post, function(error, result) {
      if (error) {
        console.log(error)
        connexion.end()
        return
      } else {
        callback(result)
      }
    })
  },

  checkUserRight: function(email, callback){
    var connexion = isProduction('connexion')
    var query = 'SELECT * FROM users WHERE email = ?'
    connexion.connect()
    connexion.query(query, [email], function(error, results) {
      if (error) {
        connexion.end()
        return
      }
      if(results) {
        if (results[0].available === 1) {
            callback(results[0])
        } else if (results[0].available !== 1) {
            callback('waitForConfirm')
          }
        }
      })
   },

  validateAccount: function(email, callback){
    var connexion = isProduction('connexion')
    var query = 'UPDATE users SET available = ? WHERE email = ?'
    connexion.connect()
    connexion.query(query, [1, email], function(error, results) {
      if (error) {
        connexion.end()
        return
      }
      if(results){
        callback(true)
      }
    })
  },

  loadPassword: function(email, callback){
    var connexion = isProduction('connexion')
    var query = 'SELECT id, password FROM users WHERE email = ?'
    connexion.connect()
    connexion.query(query, [email], function(error, result){
      if (error) {
        connexion.end()
        return
      }
      if(result) {
        callback(result[0].password)
      }
    })
  },

  setStyles: (id, element, styles, callback) => {
    console.log(id, element, styles)
    var connexion = isProduction('connexion')
    var query = 'REPLACE INTO `styles` SET `id`= ?,`element`= ?, `styles`= ?'
    connexion.connect();
    connexion.query(query, [id, element, styles], (error, result) => {
      if (error) {
        console.log(error)
        connexion.end()
        return
      } else {
        callback(result)
      }
    })
  },

  getStyles:function(element, callback){
    var connexion = isProduction('connexion')
    var query = 'SELECT * FROM styles WHERE element = ?'
    connexion.connect()
    connexion.query(query, [element], (error, results) => {
      if (error) {
        console.log(error)
        connexion.end();
        return
      }
      else {
        callback(results)
      }
      connexion.end()
    })
  },

  setLeaf: (id, title, layouts, contents, callback) => {
    console.log('?????:::)')
    var query = 'REPLACE INTO `leaves` SET `id`= ?,`title`= ?, `layouts`= ?, `contents`= ? '
    pool.query(query, [id, title, layouts, contents], (error, results) => {
      if (error) {
        console.log(error)
        return
      }
      else {
        callback(results)
      }
    })

    console.log(`All Connections ${pool._allConnections.length}`);
    console.log(`Acquiring Connections ${pool._acquiringConnections.length}`);
    console.log(`Free Connections ${pool._freeConnections.length}`);
    console.log(`Queue Connections ${pool._connectionQueue.length}`);

    pool.on('release', function (connection) {
      console.log('Connection %d released setLeaf', connection.threadId);
    })
  },

  deleteLeaf: (id, callback ) => {
    console.log(id)
    var connexion = isProduction('connexion')
    var query = 'DELETE FROM leaves WHERE id = ?'
    connexion.connect();
    connexion.query(query, [id] , (error, result) => {
      if (error) {
        connexion.end()
        return
      } else {
        callback(result)
      }
    })
  },

  getLeaf: function(id, callback){

    var query = 'SELECT * FROM leaves WHERE id = ?'
    pool.query(query, [id], (error, results) => {

      if (error) {
        console.log(error)
        return
      }
      else {
        callback(results)
      }
    })
    pool.on('release', function (connection) {
      console.log('Connection %d released getLeaf', connection.threadId);
    })
  },


  getLeaves: function(callback){
    var query = 'SELECT * FROM leaves'
    pool.query(query, (error, results) => {
      if (error) {
        console.log(error)
        return
      }
      else {
        callback(results)
      }
    })
    pool.on('release', function (connection) {
      console.log('Connection %d released getLeaves', connection.threadId);
    })
  },


}

module.exports = sqlRequest
