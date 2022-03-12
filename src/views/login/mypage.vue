<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-button @click="changeinfo">회원 정보 관리</b-button>
      </b-col>
      <b-col>
        <b-button>주문 관리</b-button>
      </b-col>
      <b-col>
        <b-button @click="withdrawal">회원 탈퇴</b-button>
      </b-col>
    </b-row>
    <br />
  </b-container>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
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
      this.$router.push('/edit')
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
