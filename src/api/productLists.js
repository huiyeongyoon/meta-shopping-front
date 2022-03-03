import axios from 'axios'

const config = {
  baseUrl: 'http://localhost:3000'
}

function fetchProductLists() {
  return axios.get(`${config.baseUrl}/products`)
}

export { fetchProductLists }
