<template>
  <div>
    <b-modal
      id="admin-inform"
      :title="title"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
      @ok="checkPwd()"
    >
      <div>
        <b-form-group label-cols="4" label="관리자 비밀번호" label-for="adminpwd">
          <b-form-input id="adminpwd" v-model="adminPassword" type="password"></b-form-input>
        </b-form-group>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '관리자 확인',
      headerBgVariant: 'info',
      headerTextVariant: 'white',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'info',
      footerTextVariant: 'dark',
      adminPassword: null
    }
  },
  computed: {},
  watch: {
    infoData(value) {
      this.adminPassword = value
    }
  },
  created() {
    this.adminPassword = this.infoData
  },
  methods: {
    checkPwd() {
      if (this.adminPassword === '123') {
        this.$router.push('/signup2')
      } else {
        this.$bvToast.toast('비밀번호가 틀립니다..', {
          title: 'Fail',
          variant: 'danger',
          solid: true
        })
      }
      this.adminPassword = null
    }
  }
}
</script>

<style lang="scss" scoped></style>
