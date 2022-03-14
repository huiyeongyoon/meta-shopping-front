<template>
  <section class="product-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="product__details__pic">
            <div class="product__details__slider__content">
              <div class="product__details__pic__slider owl-carousel">
                <img
                  :src="`${localhostNumber}/${ProductImageFiles[0].filename}`"
                  data-hash="product-1"
                  class="product__big__img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product__details__text">
            <h3>{{ productName }}</h3>
            <span>( {{ productHits }} reviews )</span>
            <div class="product__details__price">{{ productPrice }}</div>
            <p>
              {{ productDesc }}
            </p>
            <div class="product__details__button">
              <div class="quantity">
                <span>Quantity:</span>
                <div class="pro-qty">
                  <input v-model="quantity" type="text" />
                </div>
              </div>
              <button class="cart-btn" @click="orderProduct">주문하기</button>
            </div>
            <div class="totalAmount">
              <span>결제금액:</span>
              <span>{{ productPrice * quantity }}</span>
            </div>
            <div class="product__details__widget">
              <ul>
                <li>
                  <span>Available color:</span>
                  <div class="color__checkbox">
                    <label for="red">
                      <input
                        id="red"
                        v-model="productColor"
                        type="radio"
                        name="color__radio"
                        value="red"
                        @click="selectColor('red')"
                      />
                      <span class="checkmark"></span>
                    </label>
                    <label for="black">
                      <input
                        id="black"
                        v-model="productColor"
                        type="radio"
                        name="color__radio"
                        value="black"
                        @click="selectColor('black')"
                      />
                      <span class="checkmark black-bg"></span>
                    </label>
                    <label for="brown">
                      <input
                        id="brown"
                        v-model="productColor"
                        type="radio"
                        name="color__radio"
                        value="brown"
                        @click="selectColor('brown')"
                      />
                      <span class="checkmark grey-bg"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <span>Available size:</span>
                  <div class="size__btn">
                    <label for="xs-btn" :class="{ active: isActive }">
                      <input id="xs-btn" v-model="productSizes" value="xs" type="radio" @click="selectSize('xs')" />
                      xs
                    </label>
                    <label for="s-btn" :class="{ active: isActive }">
                      <input id="s-btn" v-model="productSizes" value="s" type="radio" @click="selectSize('s')" />
                      s
                    </label>
                    <label for="m-btn" :class="{ active: isActive }">
                      <input id="m-btn" v-model="productSizes" value="m" type="radio" @click="selectSize('m')" />
                      m
                    </label>
                    <label for="l-btn" :class="{ active: isActive }">
                      <input id="l-btn" v-model="productSizes" value="l" type="radio" @click="selectSize('l')" />
                      l
                    </label>
                  </div>
                </li>
                <li>
                  <span>Promotions:</span>
                  <p>Free shipping</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { VUE_APP_SERVER } = process.env
import axios from 'axios'
export default {
  data() {
    // const index = this.$route.params.id
    return {
      isActive: '',
      localhostNumber: VUE_APP_SERVER,
      productName: this.$route.params.productName,
      productPrice: this.$route.params.productPrice,
      productStock: this.$route.params.productStock,
      productDesc: this.$route.params.productDesc,
      productHits: this.$route.params.productHits,
      productSizes: this.$route.params.sizes,
      productColor: this.$route.params.color,
      ProductImageFiles: this.$route.params.ProductImageFiles,
      quantity: 0
    }
  },
  methods: {
    orderProduct() {
      // axios
      //   .post('', data)
      //   .then(res => {
      //     this.result = res.data
      //   })
      //   .catch(err => {
      //     console.log('실패', err)
      //   })
      // this.$router.push({
      //   path: '/'
      // })
    },
    selectColor(param) {
      this.productColor = param
    },
    selectSize(param) {
      this.productSizes = param
    }
  }
}
</script>

<style scoped>
.totalAmount {
  padding-left: -5px;
}
.totalAmount span {
  font-size: 30px;
}
</style>
