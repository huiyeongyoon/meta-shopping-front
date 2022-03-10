import Vue from 'vue'
import VueRouter from 'vue-router'
import jwtDecode from 'jwt-decode'
import store from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/mypage',
    component: () => import('../views/login/mypage.vue')
  },
  {
    path: '/edit',
    component: () => import('../views/login/edit.vue')
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
