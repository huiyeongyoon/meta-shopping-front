<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'

export default {
  components: {
    'app-header': Header,

    'app-footer': Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
@import '../dist/css';

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
