<template>
  <div>
    <Header />
    <br />
    <h1 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h1>
    <br />
    <br />
    <b-form-group label-cols="3" label="이름" label-for="name">
      <b-form-input id="name" v-model="user.name"></b-form-input>
    </b-form-group>
    <b-form-group label-cols="3" label="아이디" label-for="userid">
      <b-form-input id="userid" v-model="user.userid"></b-form-input>
    </b-form-group>
    <b-form-group label-cols="3" label="비밀번호" label-for="password">
      <b-form-input id="password" v-model="user.password" type="password"></b-form-input>
    </b-form-group>
    <b-form-group label-cols="3" label="사용자권한" label-for="role">
      <b-form-radio-group v-model="user.role" :options="userRole.options"></b-form-radio-group>
    </b-form-group>
    <b-form-group label-cols="3" label="이메일" label-for="email">
      <b-form-input id="email" v-model="user.email"></b-form-input>
    </b-form-group>
    <b-form-group label-cols="3" label="전화번호" label-for="phone">
      <b-form-input id="phone" v-model="user.phone"></b-form-input>
    </b-form-group>
    <b-form-group v-if="inputMode === 'update'" label-cols="3" label="등록일시" label-for="createdAt">
      <b-form-input id="createdAt" v-model="user.createdAt" disabled></b-form-input>
    </b-form-group>
    <br />
    <Footer id="footer" />
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: {
        id: null,
        name: null,
        userid: null,
        password: null,
        role: null,
        email: null,
        phone: null,
        updatedPwDate: null,
        createdAt: null
      },
      userRole: {
        default: 'member', // 기본값
        options: [
          { value: 'leader', text: '팀장' },
          { value: 'member', text: '팀원' },
          { value: 'member', text: '팀원' }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* #footer {
  position: fixed;
  bottom: 0;
} */
.subject {
  text-align: center;
}
.center {
  text-align: center;
}
</style>
