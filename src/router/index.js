import Vue from 'vue'
import VueRouter from 'vue-router'
import jwtDecode from 'jwt-decode'
import store from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/main/main.vue'),
    meta: { header: false, noLogin: true }
  },
  {
    path: '/mypage',
    component: () => import('../views/login/mypage.vue'),
    meta: { header: false, noLogin: true }
  },
  {
    path: '*',
    component: () => import('../components/NotFound.vue'),
    meta: { header: false, noLogin: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async (to, from, next) => {
//   console.log('router.beforeEach', to, from)
//   next()
//   const noLogin = to.meta.noLogin // 이동할 페이지에서 로그인 허용여부 확인
//   console.log('before router nologin', noLogin)
//   localStorage.getItem('token')
// })

export default router
