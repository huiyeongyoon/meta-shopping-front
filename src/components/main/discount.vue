<template>
  <section class="discount">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 p-0">
          <div class="discount__pic">
            <img src="../../../img/discount.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 p-0">
          <div class="discount__text">
            <div class="discount__text__title">
              <span>Discount</span>
              <h2>Spring 2022</h2>
              <h5><span>Sale</span> 50%</h5>
            </div>
            <div id="countdown-time" class="discount__countdown">
              <div class="countdown__item">
                <span>{{ getDate.days }}</span>
                <p>Day</p>
              </div>
              <div class="countdown__item">
                <span>{{ getDate.hours }}</span>
                <p>hour</p>
              </div>
              <div class="countdown__item">
                <span>{{ getDate.minutes }}</span>
                <p>Min</p>
              </div>
              <div class="countdown__item">
                <span>{{ getDate.seconds }}</span>
                <p>Sec</p>
              </div>
            </div>
            <a href="#">Shop now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['storedCountdown']),
    getDate() {
      return this.storedCountdown
    }
  },
  created() {
    this.$store.dispatch('FETCH_COUNT')
  }
}
</script>

<style></style>
