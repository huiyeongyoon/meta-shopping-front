import axios from 'axios'

const api = axios.create()

// request(요청)시 아래의 로직이 인터셉트 된다.
api.interceptors.request.use(
  async request => {
    // header.token 전송
    console.log('api request')
    const token = localStorage.getItem('token')
    request.headers.token = token

    return request
  },
  async error => {
    return Promise.reject(error)
  }
)

// response(응답)시 아래의 로직이 인터셉트 된다.
api.interceptors.response.use(
  async response => {
    // header.token 자동 갱신
    console.log('apiUtil login : ', response)
    const token = response.headers.token // token을 header에서 받은 경우

    if (token) {
      localStorage.setItem('token', token)
    }

    return response
  },
  async error => {
    return Promise.reject(error)
  }
)

export default api
