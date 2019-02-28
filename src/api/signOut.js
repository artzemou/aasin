import axios from './axios'

export const fetchSignOut = () =>
    axios.post('signOut')
        .then(response =>
          response.data
        )
