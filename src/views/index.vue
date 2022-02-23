<template>
  <div>
    <div class="separate-body"></div>
    <router-view />
    <app-sidebar />
  </div>
</template>

<script>
import Footer from '../components/common/Footer.vue'

export default {
  components: {
    'app-sidebar': Footer
  }
}
</script>
