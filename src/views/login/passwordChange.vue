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
        <b-form-group label-cols="3" label="새 비밀번호" label-for="password">
          <b-form-input
            id="password"
            v-model="newPassword"
            type="password"
            placeholder="8자 이상 넣으세요"
          ></b-form-input>
          <b-input-group>
            <b-form-input id="password2" v-model="newPassword2" type="password"></b-form-input>
            <b-input-group-append>
              <b-button variant="primary" @click="passwordCheck">비밀번호 확인</b-button>
            </b-input-group-append>
          </b-input-group>
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
      newPassword: null,
      newPassword2: null,
      passwordcheck: null,
      user: jwtDecode(localStorage.getItem('token'))
    }
  },
  created() {
    console.log(this.user.userPhone)
  },
  methods: {
    checkPwd() {
      if (this.passwordcheck) {
        this.user.userPassword = this.newPassword
        this.$store.dispatch('actUserUpdate', this.user)
      }
    },
    passwordCheck() {
      if (String(this.newPassword).length > 7) {
        if (this.newPassword === this.newPassword2) {
          this.$bvToast.toast('비빌번호 확인 완료했습니다', {
            title: '사용가능합니다.',
            variant: 'success',
            solid: true
          })
          this.passwordcheck = true
          return 0
        }
      }
      this.$bvToast.toast('비밀번호 확인 부탁드립니다.', {
        title: '실패하였습니다.',
        variant: 'danger',
        solid: true
      })
      this.passwordcheck = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
