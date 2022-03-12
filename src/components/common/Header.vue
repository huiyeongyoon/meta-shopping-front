<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="row">
      <div class="col-xl-3 col-lg-2">
        <div class="header__logo">
          <a href="#"><img src="../../../img/logo.png" alt="" /></a>
        </div>
      </div>
      <div class="col-xl-6 col-lg-7">
        <nav class="header__menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li @click="womenCategory">
              <a href="#">Women’s</a>
              <ul class="dropdown">
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Shop Cart</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>
            <li @click="menCategory">
              <a href="#">Men’s</a>
              <ul class="dropdown">
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Shop Cart</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Shop</a>
              <ul class="dropdown">
                <li><a href="#">Product Details</a></li>
                <li><a href="#">Shop Cart</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-3">
        <div class="header__right">
          <div v-if="!token" class="header__right__auth">
            <a @click="userLogin">Login</a>
            <a @click="$router.push('/signup1')">Register</a>
          </div>
          <div v-else-if="token" class="header__right__auth">
            <a>{{ userinfo.userNickname }}님 환영합니다.</a>
            <a @click="$router.push('/mypage')">my page</a>
            <a @click="userLogout">Logout</a>
          </div>
          <ul class="header__right__widget">
            <li>
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-heart"></i>
                <!-- <div class="tip">2</div> -->
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>
                <!-- <div class="tip">2</div> -->
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="canvas__open">
      <i class="fa fa-bars"></i>
    </div>
    <!-- 로그인 모달 -->
    <Login />
  </header>
  <!-- Header Section End -->
</template>

<script>
import Login from '../../views/login/login.vue'
import jwtDecode from 'jwt-decode'
export default {
  components: {
    Login
  },
  data() {
    return {
      token: localStorage.getItem('token'), // 토큰
      userinfo: jwtDecode(localStorage.getItem('token')) //유저정보
    }
  },
  computed: {
    setUserInfo() {
      return this.$store.getters.TokenUser
    }
  },
  watch: {
    setUserInfo(value) {
      this.userinfo = value
      console.log('watch userinfo: ', value)
    }
  },
  created() {
    // 로컬 스토리지에 토큰 저장소가 없을시 생성
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', null)
    }
  },
  methods: {
    userLogin() {
      this.$bvModal.show('login-inform')
    },
    userLogout() {
      this.$bvToast.toast('로그아웃 되었습니다.', {
        title: '로그아웃',
        variant: 'success',
        solid: true
      })
      this.$store.dispatch('authLogout')
      //새로고침
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 1000)
      this.userinfo = null
    },
    menCategory() {
      console.log('men')
    },
    womenCategory() {
      console.log('women')
    }
  }
}
</script>

<style scoped>
/*---------------------
  Helper CSS
-----------------------*/

.header {
  background: #ffffff;
  -webkit-box-shadow: 0px 5px 10px rgba(91, 91, 91, 0.1);
  box-shadow: 0px 5px 10px rgba(91, 91, 91, 0.1);
}

.header__logo {
  padding: 26px 50px;
}

.header__logo a {
  display: inline-block;
}

.header__menu {
  padding: 30px 0 27px;
}

.header__menu ul {
  margin: 0;
}
.header__menu ul li {
  list-style: none;
  display: inline-block;
  margin-right: 40px;
  position: relative;
}

.header__menu ul li.active a:after {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.header__menu ul li:hover a:after {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.header__menu ul li:hover .dropdown {
  top: 27px;
  opacity: 1;
  visibility: visible;
}

.header__menu ul li:last-child {
  margin-right: 0;
}

.header__menu ul li .dropdown {
  position: absolute;
  left: 0;
  top: 56px;
  width: 150px;
  background: #111111;
  text-align: left;
  padding: 2px 0;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
}

.header__menu ul li .dropdown li {
  display: block;
  margin-right: 0;
}

.header__menu ul li .dropdown li a {
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  padding: 8px 20px;
  text-transform: capitalize;
}

.header__menu ul li .dropdown li a:after {
  display: none;
}

.header__menu ul li a {
  font-size: 15px;
  text-transform: uppercase;
  color: #111111;
  font-weight: 500;
  display: block;
  padding: 2px 0;
  position: relative;
}

.header__menu ul li a:after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #ca1515;
  content: '';
  -webkit-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
}

.header__right {
  text-align: right;
  padding: 30px 50px 30px;
}

.header__right__auth {
  display: inline-block;
  margin-right: 25px;
}

.header__right__auth a {
  font-size: 12px;
  color: #666666;
  position: relative;
  margin-right: 8px;
}

.header__right__auth a:last-child {
  margin-right: 0;
}

.header__right__auth a:last-child:after {
  display: none;
}

.header__right__auth a:after {
  position: absolute;
  right: -8px;
  top: -2px;
  content: '/';
  font-size: 13px;
}

.header__right__widget {
  display: inline-block;
}

.header__right__widget li {
  list-style: none;
  display: inline-block;
  font-size: 18px;
  color: #111111;
  margin-right: 20px;
  cursor: pointer;
}

.header__right__widget li:last-child {
  margin-right: 0;
}

.header__right__widget li a {
  font-size: 18px;
  color: #111111;
  position: relative;
}

.header__right__widget li a .tip {
  position: absolute;
  right: -12px;
  top: -11px;
  height: 18px;
  width: 18px;
  background: #111111;
  font-size: 10px;
  font-weight: 500;
  color: #ffffff;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
}

.offcanvas-menu-wrapper {
  display: none;
}

.canvas__open {
  display: none;
}
</style>
