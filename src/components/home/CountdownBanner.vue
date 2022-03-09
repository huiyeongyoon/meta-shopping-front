<template>
  <div class="bgwhite hov-img-zoom pos-relative p-b-20per-ssm">
    <img src="https://picsum.photos/720/539/?image=401" alt="IMG-BANNER">

    <div class="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20">
      <div class="t-center">
        <a href="product-detail.html" class="dis-block s-text3 p-b-5">
          Gafas sol Hawkers one
        </a>

        <span class="block2-oldprice m-text7 p-r-5">
          $29.50
        </span>

        <span class="block2-newprice m-text8">
          $15.90
        </span>
      </div>

      <div class="flex-c-m p-t-44 p-t-30-xl" ref="countdown">
        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 days">
            69
          </span>

          <span class="s-text5">
            days
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 hours">
            04
          </span>

          <span class="s-text5">
            hrs
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 minutes">
            32
          </span>

          <span class="s-text5">
            mins
          </span>
        </div>

        <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5">
          <span class="m-text10 p-b-1 seconds">
            05
          </span>

          <span class="s-text5">
            secs
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
      // lessipe: public/vendor/countdowntime/countdowntime.js 파일에 구현되어있습니다.
      $(this.$refs.countdown).initializeClock(new Date(Date.parse(new Date()) + 69 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000));
    }
  }
</script>
