export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    },
    totalQty(state) {
      return state.items.reduce((sum, item) => sum + item.qty, 0);
    }
  },
  mutations: {
    addItem(state, item) {
      const cartItems = state.items.filter(cartItem => cartItem.id === item.id);

      if (cartItems.length === 0) {
        state.items.push({
          ...item,
          qty: 1
        });
      } else {
        cartItems[0].qty ++;
      }
    },
    delItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    },
    changeQty(state, {id, qty}) {
      const cartItem = state.items.filter(cartItem => cartItem.id === id);

      if (cartItem.length !== 0) {
        if (cartItem[0].qty + qty <= 0) {
          const index = state.items.findIndex(cartItem => cartItem.id === id);

          state.items.splice(index, 1);
        } else {
          cartItem[0].qty += qty;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    delItem({ commit }, id) {
      commit('delItem', id);
    },
    increaseQty({ commit }, id) {
      commit('changeQty', {
        id,
        qty: 1
      })
    },
    decreaseQty({ commit }, id) {
      commit('changeQty', {
        id,
        qty: -1
      })
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  }
}