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
  </div>
</template>

<script>
export default {}
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
</style>
