<template>
  <section class="services spad">
    <div class="container">
      <div class="row">
        <div v-for="service in services" :key="service.id" class="col-lg-3 col-md-4 col-sm-6">
          <div class="services__item">
            <h6>{{ service.subject }}</h6>
            <p>{{ service.serviceDetail }}</p>
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
      services: [
        { id: 1, subject: 'Free Shipping', serviceDetail: 'For all oder over $99' },
        { id: 2, subject: 'Money Back Guarantee', serviceDetail: 'If good have Problems' },
        { id: 3, subject: 'Online Support 24/7', serviceDetail: 'Dedicated support' },
        { id: 4, subject: 'Payment Secure', serviceDetail: '100% secure payment' }
      ]
    }
  }
}
</script>
