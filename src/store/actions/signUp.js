import {fetchSignUp} from '@/api/signUp'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import history from '@/router/history'
import {setAuth} from '@/store/actions/signIn'

//accountStatus is an action state
export const setAccountStatus = (accountStatus) => ({
    type: 'SET_ACCOUNT_STATUS',
    accountStatus
});


export const signUp = (firstName, name, email, password) =>
  (dispatch) => {fetchSignUp(firstName, name, email, password)
        .catch((e) => {
            console.error('erreur server: ', e)
        })

        .then((response) => setTimeout(() => {
            console.log(response)
            dispatch(setAccountStatus(response.accountStatus))
            if(response.created) {
              // dispatch(setAuth(response))
              history.push('/signIn')
            } else {
              null
            }
        }, 0))}
