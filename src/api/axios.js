import axios from 'axios'

export const port = process.env.PORT || 8080
export const host = 'localhost'

var baseURL = 'http://localhost:' + port + '/'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://e1428ffe20af4ac58ce22435ed8f642d.yatu.ws'
}

console.log(baseURL, process.env.NODE_ENV)
export default axios.create({
  baseURL: baseURL,
  timeout: 0,
})
