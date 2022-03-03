import { fetchProductList } from '../../api/index.js'

const state = {
  productLists: []
}

// 정체
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
  // FETCH_PRODUCTLIST(context) {
  //   fetchProductList()
  //     .then(response => {
  //       console.log(response.data)
  //       context.commit('SET_PRODUCTLIST', response.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  FETCH_PRODUCT_LIST({ commit }) {
    fetchProductList()
      .then(({ data }) => {
        commit('SET_PRODUCT_LIST', data.rows)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// const mutations = {
//   addOneItem(state, todoItem) {
//     const obj = { completed: false, item: todoItem }
//     localStorage.setItem(todoItem, JSON.stringify(obj))
//     state.todoItems.push(obj)
//   },
//   removeOneItem(state, payload) {
//     localStorage.removeItem(payload.todoItem.item)
//     state.todoItems.splice(payload.index, 1)
//   },
//   toggleOneItem(state, payload) {
//     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed // 위애꺼랑 아래꺼 차이점
//     localStorage.removeItem(payload.todoItem.item)
//     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
//   },
//   clearAllItems(state) {
//     localStorage.clear()
//     state.todoItems = []
//   }
// }

export default {
  state,
  getters,
  mutations,
  actions
}
