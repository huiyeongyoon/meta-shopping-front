<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <br />
          <h1 class="subject">회원 수정페이지 입니다.</h1>
          <br />
          <br />
          <!-- <b-form-group label-cols="3" label="비밀번호" label-for="password">
            <b-form-input
              id="password"
              v-model="user.userPassword"
              type="password"
              placeholder="8자 이상 넣으세요"
            ></b-form-input>
            <b-input-group>
              <b-form-input id="password2" v-model="userPassword2" type="password"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" @click="passwordCheck">비밀번호 확인</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group> -->
          <b-form-group label-cols="3" label="닉네임" label-for="nickname">
            <b-form-input id="nickname" v-model="user.userNickname"></b-form-input>
          </b-form-group>
          <!-- <b-form-group label-cols="3" label="성별" label-for="role">
            <b-form-radio-group></b-form-radio-group>
          </b-form-group> -->
          <b-form-group label-cols="3" label="이메일" label-for="email">
            <b-form-input id="email" v-model="user.userEmail"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="이메일 수신동의" label-for="role">
            <b-form-radio-group v-model="user.emailCheck" :options="emailcheck.options"></b-form-radio-group>
          </b-form-group>
          <b-form-group label-cols="3" label="전화번호" label-for="phone">
            <b-input-group>
              <b-form-select
                id="phone1"
                v-model="user.userPhone1"
                style="width: 100px"
                :options="userPhone1.options"
              ></b-form-select>
              <p style="width: 50px; text-align: center; font-size: 40px">-</p>
              <b-input-group-append>
                <b-input
                  id="phone2"
                  v-model="user.userPhone2"
                  style="width: 120px"
                  maxlength="4"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                ></b-input>
                <p style="width: 50px; text-align: center; font-size: 40px">-</p>
                <b-input
                  id="phone3"
                  v-model="user.userPhone3"
                  style="width: 120px"
                  maxlength="4"
                  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                ></b-input>
              </b-input-group-append>
            </b-input-group>
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
      },
      passwordcheck: null,
      userPassword2: null,
      userPhone1: {
        options: [
          { value: '010', text: '010' },
          { value: '011', text: '011' },
          { value: '02', text: '02' },
          { value: '031', text: '031' },
          { value: '032', text: '032' },
          { value: '033', text: '033' },
          { value: '041', text: '041' },
          { value: '042', text: '042' },
          { value: '043', text: '043' },
          { value: '044', text: '044' },
          { value: '051', text: '051' },
          { value: '052', text: '052' },
          { value: '053', text: '053' },
          { value: '054', text: '054' },
          { value: '055', text: '055' },
          { value: '061', text: '061' },
          { value: '062', text: '062' },
          { value: '063', text: '063' },
          { value: '064', text: '064' }
        ]
      },
      userPhone2: this.user.userPhone.split('-')[1],
      userPhone3: this.user.userPhone.split('-')[2]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {
    console.log('out edit')
  },
  methods: {
    // 회원가입 제출 메소드
    submit() {
      setTimeout(() => {
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
        // if (!this.user.userPhone) {
        //   this.$bvToast.toast('전화번호를 입력하세요.', {
        //     title: 'Fail',
        //     variant: 'danger',
        //     solid: true
        //   })
        //   return 0
        // }
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
        this.$store.dispatch('actUserUpdate', this.user)
      }, 1000)
    },
    // 카카오 주소 API 사용 메소드
    clickAddress() {
      const that = this
      new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data)
          that.user.userAddress1 = data.zonecode
          that.user.userAddress2 = data.roadAddress
          // localStorage.setItem('address1', data)
        }
      }).open()
    }
    // // 아이디 체크 메소드
    // idCheck() {
    //   this.$store.dispatch('actUserIdCheck', this.user.userId)
    //   console.log('idcheckmethod :', this.$store.getters.Idcheck)
    // },
    // 비밀번호 체크 메소드
    //   passwordCheck() {
    //     if (String(this.user.userPassword).length > 7) {
    //       if (this.user.userPassword === this.userPassword2) {
    //         this.$bvToast.toast('비빌번호 확인 완료했습니다', {
    //           title: '사용가능합니다.',
    //           variant: 'success',
    //           solid: true
    //         })
    //         this.passwordcheck = true
    //         return 0
    //       }
    //     }
    //     this.$bvToast.toast('비밀번호 확인 부탁드립니다.', {
    //       title: '실패하였습니다.',
    //       variant: 'danger',
    //       solid: true
    //     })
    //     this.passwordcheck = false
    //   }
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
