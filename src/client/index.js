import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import App from '@/app'
import {reducer} from '@/store/reducers/index'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n'
import fr from '@/i18n/locales/fr'
import en from '@/i18n/locales/en'

import history from '@/router/history'



const preloadedState = window.__REDUX_STATE__ || {counter: 0, users: [], isLoading: true, locale: 'fr'};
delete window.__REDUX_STATE__;


const store = createStore(reducer, preloadedState, applyMiddleware(thunk));
const translationsObject = {
  fr,
  en
}

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject))

ReactDOM.hydrate((
    <Provider store={store}>
        <Router history={history}>
          <App/>
        </Router>
    </Provider>
), document.getElementById('root'));
