import axios from 'axios'

const http = axios.create({
  baseURL: '//api.github.com'
})

// request interceptor
http.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// repsonse interceptor
http.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default http