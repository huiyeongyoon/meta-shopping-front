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

router.beforeEach(async (to, from, next) => {
  console.log('router.beforeEach')
  // console.log('router.beforeEach', to, from)
  const token = window.localStorage.getItem('token')

  // TODO: 리다이렉트 페이지 처리(이동하려던 페이지로 이동시킬 수 있다.)

  try {
    const decodedToken = jwtDecode(token) // 토큰디코딩
    const today = new Date() // 오늘날짜
    const expDate = new Date(decodedToken.exp * 1000) // 토큰에서 만료일추출

    if (expDate && expDate >= today) {
      // 토큰이 유효한 경우

      // 1. tokenUser정보가 없어진 경우 다시 갱신한다.
      const tokenUser = store.getters['TokenUser']
      if (!tokenUser || !tokenUser.id > 0) {
        store.dispatch('authTokenUser', token)
      }

      next()
    } else {
      // 토큰이 만료된 경우
    }
  } catch (err) {
    // 토큰 추출이 실패한 경우에 대한 처리
  }
})

export default router
