import {fetchSignIn} from '@/api/signIn'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from '@/router/history'

export const setAuth = (auth) => ({
    type: 'SET_AUTH',
    auth
});

export const setErrors = (error) => ({
    type: 'SET_ERRORS',
    error
});

export const signIn = (email, password) =>
  (dispatch) => fetchSignIn(email, password)
        .catch((e) => {
            console.error('erreur server: ', e);
        })
        .then(response => setTimeout(() => {
          if(response.errors.length > 0) {
            dispatch(setErrors(response.errors))
          }
          else if(response.isSignedIn){
            dispatch(setAuth(response))
            if (response.isAdmin) history.push('/dashboard')
            else history.push('/')
          }
        }, 0))
