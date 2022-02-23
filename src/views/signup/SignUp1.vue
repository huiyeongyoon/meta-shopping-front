<template>
  <div>
    <br />
    <h1 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h1>
    <br />
    <p class="center">가입하실 유형을 선택해 주세요</p>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-button-group class="button">
            <b-button href="#" @click="$router.push('/signup2')">일반 구매자</b-button>
            <b-button>판매자</b-button>
            <b-button>관리자</b-button>
          </b-button-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
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
