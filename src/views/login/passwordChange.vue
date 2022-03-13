<template>
  <div>
    <b-modal
      id="pwdchange-inform"
      :title="title"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @ok="checkPwd()"
    >
      <div>
        <b-form-group label-cols="4" label="비밀번호" label-for="pwd">
          <b-form-input id="pwd" v-model="pwd" type="password"></b-form-input>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      title: '비밀번호 변경',
      headerBgVariant: 'info',
      headerTextVariant: 'white',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'info',
      footerTextVariant: 'dark',
      pwd: null,
      user: jwtDecode(localStorage.getItem('token'))
    }
  },
  created() {
    console.log(this.user.userPhone)
  },
  methods: {
    checkPwd() {
      this.user.userPassword = this.pwd
      this.$store.dispatch('actUserUpdate', this.user)
    }
  }
}
</script>

<style lang="scss" scoped></style>
