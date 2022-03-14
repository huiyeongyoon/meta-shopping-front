<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-button-group vertical>
          <b-button style="width: 300px; height: 100px" class="button" @click="changepwd">회원 비빌번호 변경</b-button>
          <b-button style="width: 300px; height: 100px" class="button" @click="changephone"
            >회원 전화번호 변경</b-button
          >
          <b-button style="width: 300px; height: 100px" class="button" @click="changeinfo"
            >회원 기타 정보 관리</b-button
          >
        </b-button-group>
      </b-col>
      <b-col>
        <b-button style="width: 300px; height: 300px" class="button">주문 관리</b-button>
      </b-col>
      <b-col>
        <b-button style="width: 300px; height: 300px" class="button" @click="withdrawal">회원 탈퇴</b-button>
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
      setTimeout(() => {
        this.$router.go('/')
      }, 500)
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
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
