<template>
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="section-title">
            <h4>New product</h4>
          </div>
        </div>
        <div class="col-lg-8 col-md-8">
          <ul class="filter__controls">
            <!-- 코드 중복 해결 방법 -->
            <li class="active" @click="createCategory">All</li>
            <li @click="getCategory('Women')">Women’s</li>
            <li @click="getCategory('Men')">Men’s</li>
            <li @click="getCategory('Kids')">Kid’s</li>
            <li @click="getCategory('Accessories')">Accessories</li>
            <li @click="getCategory('Cosmetics')">Cosmetics</li>
            <!-- 코드 중복 해결 방법 -->
          </ul>
        </div>
      </div>
      <div class="row property__gallery">
        <div
          v-for="(product, index) in productLists"
          :key="product.id"
          class="col-lg-3 col-md-4 col-sm-6 mix women"
          @click="detail(index)"
        >
          <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
              <div class="label new">New</div>
              <img :src="`${localhostNumber}/${productLists[index].ProductImageFiles[0].filename}`" />
              <ul class="product__hover">
                <li>
                  <a href="#">
                    <span class="icon_heart_alt"><i class="fa-solid fa-cart-shopping"></i></span
                  ></a>
                </li>
                <li>
                  <a href="#">
                    <span class="icon_bag_alt"><i class="fa-solid fa-heart"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="product__item__text">
              <h6>
                <a href="#">{{ product.productName }}</a>
              </h6>
              {{ product.productDesc }}
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="product__price">{{ product.productPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

const { VUE_APP_SERVER } = process.env
export default {
  data() {
    return {
      localhostNumber: VUE_APP_SERVER,
      productLists: []
    }
  },
  computed: {
    ...mapGetters(['storedProdutList'])
  },
  created() {
    const that = this

    function getProductListCategoryData() {
      setTimeout(() => {
        that.createCategory()
      }, 500)
    }

    async function getStoreData() {
      that.$store.dispatch('FETCH_PRODUCT_LIST')
      await getProductListCategoryData()
    }

    getStoreData()
  },
  methods: {
    // 코드 중복 해결 방법
    createCategory() {
      const length = this.storedProdutList.length
      this.productLists = []
      for (let i = 0; i < length; i++) {
        this.productLists.push(this.storedProdutList[i])
      }
    },
    getCategory(param) {
      const length = this.storedProdutList.length
      this.productLists = []
      for (let i = 0; i < length; i++) {
        if (this.storedProdutList[i].categoryCode === param) {
          console.log(this.storedProdutList[i])
          this.productLists.push(this.storedProdutList[i])
        }
      }
    },
    detail(index) {
      this.$router.push({
        //params를 넘겨줄때에는 push할때 path보단 name을 사용
        name: 'productDetail',
        params: this.productLists[index]
      })
    }
  }
}
</script>
