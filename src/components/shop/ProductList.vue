<template>
  <div class="row">
    <template v-for="product in products">
      <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
        <Product :product="product" />
      </div>
    </template>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  import Product from '@/components/Product.vue';

  export default {
    computed: {
      ...mapState('product', {
        products: state => state.products
      })
    },
    created() {
      this.$store.dispatch('product/setProducts');
    },
    components: {
      Product
    }
  }
</script>