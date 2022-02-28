import { fetchProductList } from '../../api/index.js'

// 1
const state = {
  productLists: []
}

const getters = {
  storedProdutList(state) {
    return state.productLists
  }
}

const mutations = {
  SET_PRODUCTLIST(state, product) {
    state.productLists = product
  }
}

// 2
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
  FETCH_PRODUCTLIST({ commit }) {
    fetchProductList()
      .then(({ data }) => {
        commit('SET_PRODUCTLIST', data)
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
  actions,
  mutations,
  getters
}
