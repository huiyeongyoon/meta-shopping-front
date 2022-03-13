<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <br />
          <h2 class="subject">회원 수정페이지 입니다.</h2>
          <br />
          <br />
          <b-form-group label-cols="3" label="닉네임" label-for="nickname">
            <b-form-input id="nickname" v-model="user.userNickname"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="이메일" label-for="email">
            <b-form-input id="email" v-model="user.userEmail"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="이메일 수신동의" label-for="role">
            <b-form-radio-group v-model="user.emailCheck" :options="emailcheck.options"></b-form-radio-group>
          </b-form-group>

          <b-form-group label-cols="3" label="주소" label-for="address">
            <b-input-group>
              <b-form-input id="address1" v-model="user.userAddress1" placeholder="우편번호" disabled></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" @click="clickAddress">주소검색</b-button>
              </b-input-group-append>
            </b-input-group>
            <b-form-input id="address2" v-model="user.userAddress2" placeholder="도로주소" disabled></b-form-input>
            <b-form-input
              id="address3"
              v-model="user.userAddress3"
              placeholder="상세주소를 입력해주세요"
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group>
            <b-button @click="submit()">확인</b-button>
            <b-button @click="$router.push('/')">취소</b-button>
          </b-form-group>
          <br />
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data() {
    return {
      user: jwtDecode(localStorage.getItem('token')),
      emailcheck: {
        options: [
          { value: 'y', text: '동의' },
          { value: 'n', text: '비동의' }
        ]
      }
    }
  },
  destroyed() {
    console.log('out edit')
  },
  methods: {
    // 회원가입 제출 메소드
    submit() {
      if (!this.user.userNickname) {
        this.$bvToast.toast('닉네임을 입력하세요.', {
          title: 'Fail',
          variant: 'danger',
          solid: true
        })
        return 0
      }
      if (!this.user.userEmail) {
        this.$bvToast.toast('이메일을 입력하세요.', {
          title: 'Fail',
          variant: 'danger',
          solid: true
        })
        return 0
      }
      if (!this.user.userAddress1) {
        this.$bvToast.toast('주소를 입력해주세요.', {
          title: 'Fail',
          variant: 'danger',
          solid: true
        })
        return 0
      }
      if (!this.user.userAddress3) {
        this.$bvToast.toast('상세주소를 입력해주세요', {
          title: 'Fail',
          variant: 'danger',
          solid: true
        })
        return 0
      }
      this.$router.push('/')
      this.$bvToast.toast('회원정보가 수정되었습니다.', {
        title: 'Fail',
        variant: 'success',
        solid: true
      })
      this.$store.dispatch('actUserUpdate', this.user)
    },
    // 카카오 주소 API 사용 메소드
    clickAddress() {
      const that = this
      new window.daum.Postcode({
        oncomplete: function (data) {
          that.user.userAddress1 = data.zonecode
          that.user.userAddress2 = data.roadAddress
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
