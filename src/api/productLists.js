import axios from 'axios'
const { VUE_APP_SERVER } = process.env

const config = {
  baseUrl: VUE_APP_SERVER
}

function fetchProductLists() {
  return axios.get(`${config.baseUrl}/products`)
}

export { fetchProductLists }
