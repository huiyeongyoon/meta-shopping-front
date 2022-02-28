import axios from 'axios'

// 1. HTTP resquest response 기본 설정
const config = {
  // baseUrl: 'https://api.hnpwa.com/v0/news/1.json'
  baseUrl: 'http://localhost:3000/'
}

// 2. api 함수들 정리
function fetchProductList() {
  return axios.get(`${config.baseUrl}`)
}

export { fetchProductList }
