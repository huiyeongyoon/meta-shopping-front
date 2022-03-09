<template>
  <section class="banner bgwhite p-t-40 p-b-40">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="product in firstColumn">
            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img :src="product.image" alt="IMG-BENNER">

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <router-link to="/" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  {{ product.linkText }}
                </router-link>
              </div>
            </div>
          </template>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <template v-for="product in secondColumn">
            <!-- block1 -->
            <div class="block1 hov-img-zoom pos-relative m-b-30">
              <img :src="product.image" alt="IMG-BENNER">

              <div class="block1-wrapbtn w-size2">
                <!-- Button -->
                <router-link to="/" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                  {{ product.linkText }}
                </router-link>
              </div>
            </div>
          </template>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          <!-- block1 -->
          <div class="block1 hov-img-zoom pos-relative m-b-30">
            <img :src="thirdColumn.image" alt="IMG-BENNER">

            <div class="block1-wrapbtn w-size2">
              <!-- Button -->
              <router-link to="/" class="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                {{ thirdColumn.linkText }}
              </router-link>
            </div>
          </div>

          <!-- block2 -->
          <div class="block2 wrap-pic-w pos-relative m-b-30">
            <img src="images/icons/bg-01.jpg" alt="IMG">

            <div class="block2-content sizefull ab-t-l flex-col-c-m">
              <h4 class="m-text4 t-center w-size3 p-b-8">
                Sign up & get 20% off
              </h4>

              <p class="t-center w-size4">
                Be the frist to know about the latest fashion news and get exclu-sive offers
              </p>

              <div class="w-size2 p-t-25">
                <!-- Button -->
                <a href="#" class="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('product', {
        products: state => state.bestProducts
      }),
      firstColumn() {
        if (this.products.length >= 2) {
          return this.products.slice(0, 2);
        }

        return [];
      },
      secondColumn() {
        if (this.products.length >= 4) {
          return this.products.slice(2, 4);
        }

        return [];
      },
      thirdColumn() {
        if (this.products.length >= 5) {
          return this.products[4];
        }

        return [];
      }
    },
    created() {
      this.$store.dispatch('product/setBestProducts');
    }
  }
</script>