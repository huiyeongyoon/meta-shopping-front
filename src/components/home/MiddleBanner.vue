<template>
  <section class="banner2 bg5 p-t-55 p-b-55">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
          <div class="hov-img-zoom pos-relative">
            <img src="https://picsum.photos/720/539/?image=765" alt="IMG-BANNER">

            <div class="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15">
							<span class="m-text9 p-t-45 fs-20-sm">
								The Beauty
							</span>

              <h3 class="l-text1 fs-35-sm">
                Lookbook
              </h3>

              <a href="/" class="s-text4 hov2 p-t-20 ">
                View Collection
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15">
          <CountdownBanner />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import CountdownBanner from './CountdownBanner.vue';

  export default {
    components: {
      CountdownBanner
    }
  }
</script>
