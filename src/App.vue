<template>
  <!-- 1번 template 생성 -->
  <div id="app">
    <Header />
    <Input />
    <List />
    <Footer />
  </div>
</template>

<script>
// 2번 문서 만든후 import 해오기
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  // 3번 컴포넌트에 추가하기
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
