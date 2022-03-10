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
    withdrawal() {
      console.log(this.$store.getters.TokenUser.userId)
      this.$store.dispatch('actUserDelete', this.$store.getters.TokenUser.id) //회원 탈퇴 액션
      this.$store.dispatch('authLogout')
    }
  }
}
</script>

<style></style>
