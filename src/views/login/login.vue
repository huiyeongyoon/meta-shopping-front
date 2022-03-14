<template>
  <div>
    <b-modal id="login-inform" :title="title" @ok="onSubmit()">
      <b-form-group label-cols="3" label="아이디" label-for="name">
        <b-form-input id="name" v-model="user.userId"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="3" label="비밀번호" label-for="name">
        <b-form-input id="password" v-model="user.userPassword" type="password"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      title: '로그인',
      user: {
        userId: null,
        userPassword: null
      }
    }
  },
  computed: {
    tokenUser() {
      return this.$store.getters.TokenUser
    },
    loading() {
      return this.$store.getters.TokenLoading
    },
    error() {
      return this.$store.getters.TokenError
    }
  },
  watch: {
    tokenUser(value) {
      if (value && value.id && value.id > 0) {
        // 로그인이 완료된 상황
        // this.$router.push('/') // 메인 페이지 이동
        this.$bvToast.toast('로그인 되었습니다.', {
          title: '로그인 성공',
          variant: 'success',
          solid: true
        })
      }
    },
    error(errValue) {
      if (errValue !== null) {
        // 메세지 출력
        this.$bvToast.toast('아이디/비밀번호를 확인해 주세요.', {
          title: '로그인 에러',
          variant: 'danger',
          solid: true
        })
      }
    }
  },
  created() {
    // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
    const token = localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      const today = new Date()
      const expDate = new Date(decodedToken.exp * 1000)
      console.log(expDate.toDateString)
      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우
        this.$router.push('/') // 메인 페이지 이동
      } else {
        // 토큰이 만료된 경우
        localStorage.setItem('token', null) // 토큰 삭제
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authLogin', this.user)
      console.log('userId', this.user)
      // 새로고침
      setTimeout(() => {
        this.$router.go(this.$router.currentRoute)
      }, 1000)
      if (this.$router.path !== '/') {
        this.$router.push('/')
      }
      this.user.userId = null
      this.user.userPassword = null
    }
  }
}
</script>

<style lang="scss" scoped></style>
