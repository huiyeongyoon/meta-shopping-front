<template>
  <div>
    <br />
    <h1 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h1>
    <br />
    <br />
    <br />
    <p class="center">가입하실 유형을 선택해 주세요</p>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-button-group class="button">
            <b-button @click="selectRole(1)">일반 회원</b-button>
            <!--이용약관 모달 -->
            <Inform />
            <b-button @click="selectRole(2)">관리자</b-button>
          </b-button-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Inform from './inform.vue'
export default {
  components: {
    Inform
  },
  methods: {
    selectRole(params) {
      this.$bvModal.show('signup-inform')
      console.log('sign1 role: ', params)
      this.$store.dispatch('actUserRole', params)
    }
  }
}
</script>

<style scoped>
.subject {
  text-align: center;
}
.center {
  text-align: center;
}
.button {
  width: 500px;
  height: 100px;
}
</style>
