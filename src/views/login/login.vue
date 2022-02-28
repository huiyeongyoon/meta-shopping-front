<template>
  <div>
    <b-modal
      id="login-inform"
      :title="title"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @ok="onSubmit()"
    >
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
      headerBgVariant: 'light',
      headerTextVariant: 'dark',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'light',
      footerTextVariant: 'dark',
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
        this.$router.push('/') // 메인 페이지 이동
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
    const token = window.localStorage.getItem('token')
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
        window.localStorage.removeItem('token') // 토큰 삭제
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
      this.$store.dispatch('authLogin', this.user)
    }
  }
}
</script>

<style lang="scss" scoped></style>
