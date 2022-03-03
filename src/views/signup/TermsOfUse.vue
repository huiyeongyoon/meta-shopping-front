<template>
  <div>
    <b-modal
      id="signup-inform"
      :ok-disabled="!status"
      :title="title"
      variant="success"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @ok="$router.push('/signup2')"
    >
      <div>
        <pre>
          이 약관은 메타쇼핑 주식회사(이하 "회사")가 운영하는
          메타쇼핑 홈페이지와 메타쇼핑 입점한 의류업체에서
          제공하는 전자상거래 관련 서비스(이하 "서비스")를 
          이용함에 있어 상품 또는 용역을 거래하는 자 간의 
          권리, 의무 등 기타 필요사항, 회원과 회사간의 
          권리, 의무, 책임사항 및 회원의 서비스 이용절차 등에 
          관한 사항을 규정함을 목적으로 합니다.
        </pre>
      </div>
      <b-form-checkbox v-model="status" @click="accept"> 약관에 동의합니다. </b-form-checkbox>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '이용약관',
      status: false,
      headerBgVariant: 'info',
      headerTextVariant: 'white',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'info',
      footerTextVariant: 'dark'
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    accept() {
      if (this.status === true) {
        this.status = false
      } else this.status = true
    }
  }
}
</script>

<<<<<<< Updated upstream:src/views/signup/TermsOfUse.vue
<style lang="scss" scoped></style>
=======
<style></style>
>>>>>>> Stashed changes:src/views/signup/inform.vue
