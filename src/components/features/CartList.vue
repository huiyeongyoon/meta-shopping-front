<template>
  <div class="container-table-cart pos-relative">
    <div class="wrap-table-shopping-cart bgwhite">
      <table class="table-shopping-cart">
        <tr class="table-head">
          <th class="column-1"></th>
          <th class="column-2">Product</th>
          <th class="column-3">Price</th>
          <th class="column-4 p-l-70">Quantity</th>
          <th class="column-5">Total</th>
        </tr>

        <template v-for="item in cartItems">
          <tr class="table-row">
            <td class="column-1">
              <div class="cart-img-product b-rad-4 o-f-hidden" @click="delItem(item.id)">
                <img :src="item.image" alt="IMG-PRODUCT">
              </div>
            </td>
            <td class="column-2">{{ item.title }}</td>
            <td class="column-3">${{ item.price }}</td>
            <td class="column-4">
              <div class="flex-w bo5 of-hidden w-size17">
                <button class="btn-num-product-down color1 flex-c-m size7 bg8 eff2" @click="decrease(item.id)">
                  <i class="fs-12 fa fa-minus" aria-hidden="true"></i>
                </button>

                <input class="size8 m-text18 t-center num-product" type="number" name="num-product1" :value="item.qty">

                <button class="btn-num-product-up color1 flex-c-m size7 bg8 eff2" @click="increase(item.id)">
                  <i class="fs-12 fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>
            </td>
            <td class="column-5">${{ item.price }}</td>
          </tr>
        </template>

      </table>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('cart', {
        cartItems: state => state.items
      })
    },
    methods: {
      delItem(id) {
        this.$store.dispatch('cart/delItem', id);
      },
      increase(id) {
        this.$store.dispatch('cart/increaseQty', id);
      },
      decrease(id) {
        this.$store.dispatch('cart/decreaseQty', id);
      }
    }
  }
</script>