<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-7">
          <div class="footer__about">
            <div class="footer__logo">
              <a href="./index.html"><img src="img/logo.png" alt="" /></a>
            </div>
            <p>메타쇼핑에 오신것을 환영합니다.</p>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-5">
          <div class="footer__widget">
            <h6>Quick links</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-4">
          <div class="footer__widget">
            <h6>Account</h6>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Orders Tracking</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-8 col-sm-8">
          <div class="footer__widget">
            <h6>고객센터 02-1234-5678</h6>
            <ul>
              <li><a>서울특별시 강남구 역삼동 826-39</a></li>
              <li><a>MetaShopping@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  padding-top: 55px;
}

.footer__about {
  margin-bottom: 30px;
}

.footer__about p {
  margin-bottom: 20px;
}

.footer__logo {
  margin-bottom: 20px;
}

.footer__payment a {
  margin-right: 6px;
  margin-bottom: 10px;
  display: inline-block;
}

.footer__payment a:last-child {
  margin-right: 0;
}

.footer__widget {
  margin-bottom: 30px;
}

.footer__widget h6 {
  color: #111111;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.footer__widget ul li {
  list-style: none;
}

.footer__widget ul li a {
  font-size: 14px;
  color: #666666;
  line-height: 30px;
}
</style>
