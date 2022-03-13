<template>
  <div>
    <br />
    <h2 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h2>
    <br />
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-button-group class="button">
            <b-button class="button" @click="selectRole(1)">일반 회원</b-button>
            <!--이용약관 모달 -->
            <TermsOfUse />
            <!--관리자 확인 모달 -->
            <AdminPass />
            <b-button class="button" @click="selectRole(2)">관리자</b-button>
          </b-button-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import AdminPass from './AdminPass.vue'
import TermsOfUse from './TermsOfUse.vue'
export default {
  components: {
    TermsOfUse,
    AdminPass
  },
  methods: {
    selectRole(params) {
      if (params === 1) {
        this.$bvModal.show('signup-inform')
      } else {
        this.$bvModal.show('admin-inform')
      }
      console.log('sign1 role: ', params)
      this.$store.dispatch('actUserRole', params)
    }
  }
}
</script>

<style scoped>
.subject {
  text-align: center;
}
.center {
  text-align: center;
}
.button {
  width: 500px;
  height: 100px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
