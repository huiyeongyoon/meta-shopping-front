<template>
  <!-- Categories Section Begin -->
  <section class="categories">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 p-0">
          <div class="categories__item categories__large__item set-bg-img1">
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
            <div
              v-for="productCategory in productCategories"
              :key="productCategory.id"
              class="col-lg-6 col-md-6 col-sm-6 p-0"
            >
              <div class="categories__item" :class="productCategory.image">
                <div class="categories__text">
                  <h4>{{ productCategory.productCategories }}</h4>
                  <p>{{ productCategory.productListCounts }}s</p>
                  <a href="#">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      productCategories: [
        { id: 1, productCategory: 'Men’s fashion', productListCounts: '358 items', image: 'set-bg-img2' },
        { id: 2, productCategory: 'Kid’s fashion', productListCounts: '273 items', image: 'set-bg-img3' },
        { id: 3, productCategory: 'Cosmetics', productListCounts: '159 items', image: 'set-bg-img4' },
        { id: 4, productCategory: 'Accessories', productListCounts: '792 items', image: 'set-bg-img5' }
      ]
    }
  }
}
</script>

<style scoped>
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
</style>
