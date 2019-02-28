import {fetchSignOut} from '@/api/signOut'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from '@/router/history'
import {setAuth} from '@/store/actions/signIn'


export const signOut = () =>
  (dispatch) => fetchSignOut()
        .catch((e) => {
            console.error('erreur server: ', e)
        })
        .then((response) => setTimeout(() => {
          console.log(response)
            dispatch(setAuth(response))
            history.push('/signIn')
        }, 0))
