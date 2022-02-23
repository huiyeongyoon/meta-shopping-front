<template>
  <div>
    <Header />
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
            <b-button>일반 구매자</b-butto
            n>
            <b-button>판매자</b-button>
            <b-button>관리자</b-button>
          </b-button-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
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
