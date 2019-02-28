import axios from './axios'

export const fetchSignUp = (firstName, name, email, password) =>
    axios.post('signUp', {
      email: email,
      password: password,
      firstName: firstName,
      name: name
    })
        .then(response =>
          response.data
        )
