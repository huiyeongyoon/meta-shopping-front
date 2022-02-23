import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
// bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
