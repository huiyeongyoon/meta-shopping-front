<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-button>회원 정보 관리</b-button>
      </b-col>
      <b-col>
        <b-button>주문 관리</b-button>
      </b-col>
      <b-col>
        <b-button @click="withdrawal">회원 탈퇴</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    async withdrawal() {
      console.log(localStorage.getItem('id'))
      this.$store.dispatch('actUserDelete', localStorage.getItem('id')) //회원 탈퇴 액션

      this.$router.push('/')
    }
  }
}
</script>

<style></style>
