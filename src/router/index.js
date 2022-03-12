import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/signup1',
    component: () => import('../views/signup/signUp1.vue')
  },
  {
    path: '/signup2',
    component: () => import('../views/signup/signUp2.vue')
  },
  {
    path: '/productdetail',
    component: () => import('../views/product/productDetail.vue')
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
    component: () => import('../components/common/notFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
