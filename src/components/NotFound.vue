<template>
  <div>
    <Header />
    <h1 class="text-6-">404</h1>
    <p class="text-36 subheading mb-3">Page not found!</p>
    <p class="mb-5 text-muted text-18">Sorry! The page you were looking for doesn't exist.</p>
    <a class="btn btn-lg btn-primary btn-rounded" href="/">Go back to home</a>
    <Footer />
  </div>
</template>

<script>
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
