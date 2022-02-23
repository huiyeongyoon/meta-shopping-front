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

<style src="./assets/style/main.css"></style>
