import axios from './axios'

export const fetchSignIn = (email, password) =>
    axios.post('signIn', {
      email: email,
      password: password
    })
        .then(response =>
          response.data
        )
