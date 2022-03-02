<template>
  <div>
    <!-- Categories Section Begin -->
    <section class="categories">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 p-0">
            <div class="categories__item categories__large__item set-bg set-bg-img1">
              <div class="categories__text">
                <h1>Women’s fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna
                  aliquapendisse ultrices gravida.
                </p>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div class="categories__item set-bg set-bg-img2">
                  <div class="categories__text">
                    <h4>Men’s fashion</h4>
                    <p>358 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div class="categories__item set-bg set-bg-img3">
                  <div class="categories__text">
                    <h4>Kid’s fashion</h4>
                    <p>273 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div class="categories__item set-bg set-bg-img4">
                  <div class="categories__text">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 p-0">
                <div class="categories__item set-bg set-bg-img5">
                  <div class="categories__text">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Categories Section End -->

    <!-- Product Section Begin -->
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
              <li class="active" data-filter="*">All</li>
              <li data-filter=".women">Women’s</li>
              <li data-filter=".men">Men’s</li>
              <li data-filter=".kid">Kid’s</li>
              <li data-filter=".accessories">Accessories</li>
              <li data-filter=".cosmetic">Cosmetics</li>
            </ul>
          </div>
        </div>
        <div class="row property__gallery">
          <div class="col-lg-3 col-md-4 col-sm-6 mix women">
            <div class="product__item">
              <div v-for="product in storedProdutList" :key="product.item" class="product__item">
                <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                  <div class="label new">New</div>
                  <ul class="product__hover">
                    <li>
                      <a href="img/product/product-1.jpg" class="image-popup"><span class="arrow_expand"></span></a>
                      <a href="../../../img/product/product-1.jpg" class="image-popup"
                        ><span class="arrow_expand"></span
                      ></a>
                    </li>
                    <li>
                      <a href="#"><span class="icon_heart_alt"></span></a>
                    </li>
                    <li>
                      <a href="#"><span class="icon_bag_alt"></span></a>
                    </li>
                  </ul>
                </div>
                <div class="product__item__text">
                  <h6><a href="#">Buttons tweed blazer</a></h6>
                  <h6>
                    <a href="#">{{ product }}</a>
                  </h6>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Section End -->

    <!-- 왜 key에 item이 들어갈까? -->
  </div>
</template>

<script>
//import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['storedProdutList'])
  },
  created() {
    this.$store.dispatch('FETCH_PRODUCTLIST')
  }
}
</script>

<style>
/*---------------------
  Categories
-----------------------*/

.categories {
  overflow: hidden;
  margin-top: 10px;
}

.categories .container-fluid {
  padding-right: 5px;
}

.categories__item {
  height: 314px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
}

.categories__item.categories__large__item {
  height: 638px;
  padding-left: 70px;
}

.categories__item.categories__large__item .categories__text {
  max-width: 480px;
}

.categories__item.categories__large__item .categories__text p {
  margin-bottom: 15px;
}

.categories__text h1 {
  font-family: 'Cookie', cursive;
  color: #111111;
  margin-bottom: 5px;
}

.categories__text h4 {
  color: #111111;
  font-weight: 700;
}

.categories__text p {
  margin-bottom: 10px;
}

.categories__text a {
  font-size: 14px;
  color: #111111;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  padding: 0 0 3px;
  display: inline-block;
}

.categories__text a:after {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #ca1515;
  content: '';
}

.set-bg-img1 {
  background-image: url('../../../img/categories/category-1.jpg');
}

.set-bg-img2 {
  background-image: url('../../../img/categories/category-2.jpg');
}

.set-bg-img3 {
  background-image: url('../../../img/categories/category-3.jpg');
}

.set-bg-img4 {
  background-image: url('../../../img/categories/category-4.jpg');
}

.set-bg-img5 {
  background-image: url('../../../img/categories/category-5.jpg');
}

/*---------------------
  Product
-----------------------*/

.product {
  padding-top: 60px;
  padding-bottom: 50px;
}

.filter__controls {
  text-align: right;
  margin-bottom: 50px;
}

.filter__controls li {
  font-size: 14px;
  list-style: none;
  display: inline-block;
  color: #111111;
  margin-right: 35px;
  position: relative;
  cursor: pointer;
}

.filter__controls li.active:after {
  opacity: 1;
}

.filter__controls li:after {
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 100%;
  background: #ca1515;
  content: '';
  opacity: 0;
}

.filter__controls li:last-child {
  margin-right: 0;
}

.product__item {
  margin-bottom: 35px;
}

.product__item:hover .product__hover li {
  opacity: 1;
  top: 0;
}

.product__item.sale .product__item__pic .label {
  background: #ca1515;
}

.product__item.sale .product__item__text .product__price {
  color: #ca1515;
}

.product__item__pic {
  height: 360px;
  position: relative;
  overflow: hidden;
}

.product__item__pic .label {
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  display: inline-block;
  padding: 2px 8px;
  text-transform: uppercase;
  position: absolute;
  left: 10px;
  top: 10px;
}

.product__item__pic .label.new {
  background: #36a300;
}

.product__item__pic .label.stockout {
  background: #111111;
}

.product__item__pic .label.stockblue {
  background: #0066bd !important;
}

.product__item__pic .label.sale {
  background: #ca1515;
}

.product__hover {
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 30px;
  text-align: center;
}

.product__hover li {
  list-style: none;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  top: 100px;
  opacity: 0;
}

.product__hover li:nth-child(1) {
  -webkit-transition: all 0.4s ease 0.1s;
  -o-transition: all 0.4s ease 0.1s;
  transition: all 0.4s ease 0.1s;
}

.product__hover li:nth-child(2) {
  -webkit-transition: all 0.4s ease 0.15s;
  -o-transition: all 0.4s ease 0.15s;
  transition: all 0.4s ease 0.15s;
}

.product__hover li:nth-child(3) {
  -webkit-transition: all 0.4s ease 0.2s;
  -o-transition: all 0.4s ease 0.2s;
  transition: all 0.4s ease 0.2s;
}

.product__hover li:last-child {
  margin-right: 0;
}

.product__hover li:hover a {
  background: #ca1515;
}

.product__hover li:hover a span {
  color: #ffffff;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.product__hover li a {
  font-size: 18px;
  color: #111111;
  display: block;
  height: 45px;
  width: 45px;
  background: #ffffff;
  line-height: 48px;
  text-align: center;
  border-radius: 50%;
  -webkit-transition: all, 0.5s;
  -o-transition: all, 0.5s;
  transition: all, 0.5s;
}

.product__hover li a span {
  position: relative;
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: all, 0.3s;
  -o-transition: all, 0.3s;
  transition: all, 0.3s;
  display: inline-block;
}

.product__item__text {
  text-align: center;
  padding-top: 22px;
}

.product__item__text h6 a {
  font-size: 14px;
  color: #111111;
}

.product__item__text .rating {
  line-height: 18px;
  margin-bottom: 5px;
}

.product__item__text .rating i {
  font-size: 10px;
  color: #e3c01c;
  margin-right: -4px;
}

.product__item__text .rating i:last-child {
  margin-right: 0;
}

.product__item__text .product__price {
  color: #111111;
  font-weight: 600;
}

.product__item__text .product__price span {
  font-size: 14px;
  color: #b1b0b0;
  text-decoration: line-through;
  margin-left: 4px;
}
</style>
