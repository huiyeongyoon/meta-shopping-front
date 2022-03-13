<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-button @click="changepwd">회원 비빌번호 변경</b-button>
        <b-button @click="changephone">회원 전화번호 변경</b-button>
        <b-button @click="changeinfo">회원 기타 정보 관리</b-button>
      </b-col>
      <b-col>
        <b-button>주문 관리</b-button>
      </b-col>
      <b-col>
        <b-button @click="withdrawal">회원 탈퇴</b-button>
      </b-col>
    </b-row>
    <br />
    <!--사용자 비밀번호 모달 -->
    <PasswordChange />
    <PhoneChange />
  </b-container>
</template>

<script>
import jwtDecode from 'jwt-decode'
import PasswordChange from './passwordChange.vue'
import PhoneChange from './phoneChange.vue'
export default {
  components: {
    PasswordChange,
    PhoneChange
  },
  data() {
    return {
      TokenUser: jwtDecode(localStorage.getItem('token'))
    }
  },
  methods: {
    withdrawal() {
      console.log('this.TokenUser.id', this.TokenUser.id)
      this.$store.dispatch('actUserDelete', this.TokenUser.id) //회원 탈퇴 액션
      this.$store.dispatch('authLogout')
      this.$router.push('/')
    },
    changeinfo() {
      // this.$bvModal.show('pwd-inform')
      this.$router.push('/edit')
    },
    changepwd() {
      this.$bvModal.show('pwdchange-inform')
    },
    changephone() {
      this.$bvModal.show('phonechange-inform')
    }
  }
}
</script>

<style>
.button {
  width: 500px;
  height: 100px;
}
</style>
