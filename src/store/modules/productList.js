import { fetchProductLists } from '../../api/main'

const state = {
  productLists: []
}

const getters = {
  storedProdutList(state) {
    return state.productLists
  }
}

const mutations = {
  SET_PRODUCT_LIST(state, payload) {
    state.productLists = payload
  }
}

const actions = {
  FETCH_PRODUCT_LIST({ commit }) {
    fetchProductLists()
      .then(({ data }) => {
        commit('SET_PRODUCT_LIST', data.rows)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
