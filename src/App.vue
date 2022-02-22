<template>
  <!-- 1번 template 생성 -->
  <div id="app">
    <Header />
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
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

html,
body {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #111111;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}

h6 {
  font-size: 16px;
}

p {
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: #666666;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 15px 0;
}

img {
  max-width: 100%;
}

input:focus,
select:focus,
button:focus,
textarea:focus {
  outline: none;
}

a:hover,
a:focus {
  text-decoration: none;
  outline: none;
}

ul,
ol {
  padding: 0;
  margin: 0;
}
</style>
