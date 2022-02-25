import axios from 'axios'

// 1. HTTP resquest response 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. api 함수들 정리
function fetchProductList() {
  return axios.get(`${config.baseUrl}news/1.json`)
}

export { fetchProductList }
