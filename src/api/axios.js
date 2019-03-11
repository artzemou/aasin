import axios from 'axios';

export const port = process.env.PORT || 1313;
export const host = 'localhost';

var baseURL = 'http://localhost:' + port + '/'
// if (process.env.NODE_ENV === 'production') {
//   baseURL = 'http://1d99d8b5c5ea421585b15bb0c70173fd.yatu.ws'
// }

console.log(baseURL, process.env.NODE_ENV)
export default axios.create({
  baseURL: baseURL,
  timeout: 0
});