<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <br />
          <h1 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h1>
          <br />
          <br />
          <b-form-group label-cols="3" label="이름" label-for="name">
            <b-form-input id="name" v-model="user.userName"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="닉네임" label-for="nickname">
            <b-form-input id="nickname" v-model="user.userNickname"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="성별" label-for="role">
            <b-form-radio-group v-model="user.userGender" :options="userGender.options"></b-form-radio-group>
          </b-form-group>
          <b-form-group label-cols="3" label="아이디" label-for="userid">
            <b-form-input id="userId" v-model="user.userId"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="비밀번호" label-for="password">
            <b-form-input id="password" v-model="user.userPassword" type="password"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="사용자권한" label-for="role">
            <b-form-radio-group v-model="user.userRole" :options="userRole.options" disabled></b-form-radio-group>
          </b-form-group>
          <b-form-group label-cols="3" label="이메일" label-for="email">
            <b-form-input id="email" v-model="user.userEmail"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="이메일 수신동의" label-for="role">
            <b-form-radio-group v-model="user.emailCheck" :options="emailCheck.options"></b-form-radio-group>
          </b-form-group>
          <b-form-group label-cols="3" label="전화번호" label-for="phone">
            <b-form-input id="phone" v-model="user.userPhone"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="주소" label-for="address">
            <b-input-group>
              <b-form-input id="address1" v-model="user.userAddress1" disabled></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" @click="clickAddress">주소검색</b-button>
              </b-input-group-append>
            </b-input-group>
            <b-form-input id="address2" v-model="user.userAddress2" disabled></b-form-input>
            <b-form-input id="address3" v-model="user.userAddress3"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="등록일시" label-for="createdAt">
            <b-form-input id="createdAt" v-model="user.createdAt" disabled></b-form-input>
          </b-form-group>
          <br />
          <b-form-group>
            <b-button @click="submit()">확인</b-button>
            <b-button @click="$router.push('/')">취소</b-button>
          </b-form-group>
          <br />
          {{ this.$store.getters.User }}
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userId: null,
        userPassword: null,
        userName: null,
        userPhone: null,
        userEmail: null,
        userProfile: null,
        userNickname: null,
        userRole: this.$store.getters.User.userRole || localStorage.getItem('userRole') || null,
        emailCheck: null,
        userGrade: null,
        userAddress1: null,
        userAddress2: null,
        userAddress3: null,
        updatedPwDate: null,
        createdAt: null
      },
      userRole: {
        options: [
          { value: 1, text: '일반 회원' },
          { value: 2, text: '관리자' }
        ]
      },
      emailCheck: {
        options: [
          { value: 'y', text: '동의' },
          { value: 'n', text: '비동의' }
        ]
      },
      userGender: {
        options: [
          { value: 1, text: '남자' },
          { value: 2, text: '여자' }
        ]
      }
    }
  },
  created() {
    console.log('in sign2')
    if (localStorage.getItem('userRole') !== this.$store.getters.User.userRole) {
      console.log('if sign2')
      localStorage.setItem('userRole', this.$store.getters.User.userRole)
    }
  },
  mounted() {},
  destroyed() {
    localStorage.removeItem('userRole')
    console.log('out sign2')
  },
  methods: {
    submit() {
      console.log(this.user)
      this.$router.push('/')
      this.$store.dispatch('actUserInsert', this.user)
    },
    clickAddress() {
      const that = this
      new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data)
          that.user.userAddress1 = data.roadAddress
          that.user.userAddress2 = data.buildingName
          // localStorage.setItem('address1', data)
        }
      }).open()
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
</style>
