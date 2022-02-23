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
            <b-button @click="$router.push('/signup2')">일반 구매자</b-button>
            <b-button @click="$router.push('/signup2')">판매자</b-button>
            <b-button @click="$router.push('/signup2')">관리자</b-button>
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
export default {
  data() {
    return {
      userRole: {
        options: [
          { value: 'buyer', text: '일반 구매자' },
          { value: 'seller', text: '판매자' },
          { value: 'admin', text: '관리자' }
        ]
      }
    }
  },
  computed: {
    sendRole() {
      return this.store.getters.UserList
    }
  },
  watch: {},
  methods: {}
}
</script>

<style scoped>
/* #footer {
  position: fixed;
  bottom: 0;
} */
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
