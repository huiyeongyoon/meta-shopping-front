import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import ProductList from './modules/productList'
import Countdown from './modules/countdown'
import Login from './modules/login'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    ProductList,
    Countdown
    Login,
  }
})
