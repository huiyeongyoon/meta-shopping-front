<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <br />
          <h2 class="subject">메타 쇼핑 회원가입 페이지 입니다.</h2>
          <br />
          <br />
          <b-form-group label-cols="3" label="아이디" label-for="id">
            <b-input-group>
              <b-form-input id="id" v-model="user.userId"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" @click="idCheck">아이디 중복확인</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
          <b-form-group label-cols="3" label="비밀번호" label-for="password">
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
          </b-form-group>
          <b-form-group label-cols="3" label="이름" label-for="name">
            <b-form-input id="name" v-model="user.userName"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="닉네임" label-for="nickname">
            <b-form-input id="nickname" v-model="user.userNickname"></b-form-input>
          </b-form-group>
          <b-form-group label-cols="3" label="성별" label-for="role">
            <b-form-radio-group v-model="user.usergender" :options="usergender.options"></b-form-radio-group>
          </b-form-group>
          <b-form-group label-cols="3" label="사용자권한" label-for="role">
            <b-form-radio-group
              id="role"
              v-model="user.userRole"
              :options="userRole.options"
              disabled
            ></b-form-radio-group>
          </b-form-group>
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
        userRole: this.$store.getters.User.userRole || localStorage.getItem('userRole'),
        emailCheck: null,
        userGrade: this.$store.getters.User.userGrade,
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
      emailcheck: {
        options: [
          { value: 'y', text: '동의' },
          { value: 'n', text: '비동의' }
        ]
      },
      usergender: {
        options: [
          { value: 1, text: '남자' },
          { value: 2, text: '여자' }
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
      userPhone2: null,
      userPhone3: null
    }
  },
  computed: {
    //아이디 체크값
    watchIdcheck() {
      return this.$store.getters.IdCheck
    }
  },
  watch: {
    // 아이디 체크값 변할떄 마다 체크
    watchIdcheck(value) {
      console.log('aa :', value)

      if (value === 1) {
        this.$bvToast.toast('해당 아이디는 사용가능합니다.', {
          title: '확인되었습니다.',
          variant: 'success',
          solid: true
        })
      } else if (value === 2) {
        this.$bvToast.toast('중복된 아이디가 있습니다.', {
          title: '사용 불가능 합니다.',
          variant: 'danger',
          solid: true
        })
      }
    }
  },
  created() {
    this.$store.dispatch('actUserList')
    if (
      localStorage.getItem('userRole') !== this.$store.getters.User.userRole &&
      this.$store.getters.User.userRole !== null
    ) {
      localStorage.setItem('userRole', this.$store.getters.User.userRole)
    }
  },
  mounted() {},
  destroyed() {
    console.log('out sign2')
  },
  methods: {
    // 회원가입 제출 메소드
    submit() {
      this.user.userPhone = this.userPhone1 + this.userPhone2 + this.userPhone3

      setTimeout(() => {
        if (this.watchIdcheck !== 1 || this.user.userId === null) {
          this.$bvToast.toast('아이디 중복확인을 해주세요.', {
            title: 'Fail',
            variant: 'danger',
            solid: true
          })
          return 0
        }
        if (!this.passwordcheck) {
          this.$bvToast.toast('비밀번호를 확인 및 입력해주세요', {
            title: 'Fail',
            variant: 'danger',
            solid: true
          })
          return 0
        }
        if (!this.user.userName) {
          this.$bvToast.toast('이름을 입력하세요.', {
            title: 'Fail',
            variant: 'danger',
            solid: true
          })
          return 0
        }
        if (!this.user.userNickname) {
          this.$bvToast.toast('닉네임을 입력하세요.', {
            title: 'Fail',
            variant: 'danger',
            solid: true
          })
          return 0
        }
        if (!this.user.usergender) {
          this.$bvToast.toast('성별을 체크하세요.', {
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
        if (!this.user.emailCheck) {
          this.$bvToast.toast('이메일 체크를 해주세요.', {
            title: 'Fail',
            variant: 'danger',
            solid: true
          })
          return 0
        }
        if (!this.user.userPhone) {
          this.$bvToast.toast('전화번호를 입력하세요.', {
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
        this.$store.dispatch('actUserInsert', this.user)
        localStorage.removeItem('userRole')
      }, 1000)
    },
    // 카카오 주소 API 사용 메소드
    clickAddress() {
      const that = this //카카오 API안에서 this 사용하기 위해
      new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data)
          that.user.userAddress1 = data.zonecode
          that.user.userAddress2 = data.roadAddress
          // localStorage.setItem('address1', data)
        }
      }).open()
    },
    // 아이디 체크 메소드
    idCheck() {
      this.$store.dispatch('actUserIdCheck', this.user.userId)
      console.log('idcheckmethod :', this.$store.getters.Idcheck)
    },
    // 비밀번호 체크 메소드
    passwordCheck() {
      if (String(this.user.userPassword).length > 7) {
        if (this.user.userPassword === this.userPassword2) {
          this.$bvToast.toast('비빌번호 확인 완료했습니다', {
            title: '사용가능합니다.',
            variant: 'success',
            solid: true
          })
          this.passwordcheck = true
          return 0
        }
      }
      this.$bvToast.toast('비밀번호 확인 부탁드립니다.', {
        title: '실패하였습니다.',
        variant: 'danger',
        solid: true
      })
      this.passwordcheck = false
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
