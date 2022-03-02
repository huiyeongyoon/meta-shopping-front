import api from '../apiUtil'
import jwtDecode from 'jwt-decode'

/*
  테스트용 토큰
  {
    "id": 1,
    "userid": "hong",
    "name": "홍길동",
    "role": "leader",
    "iat": 1639466985,
    "exp": 1954826985
  }
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiaG9uZyIsIm5hbWUiOiLtmY3quLjrj5kiLCJyb2xlIjoibGVhZGVyIiwiaWF0IjoxNjM5NDY2OTg1LCJleHAiOjE5NTQ4MjY5ODV9.-hTy681tbe62pV9tjArzc5Ig33frnh9j_NjegGiHJNw
  */
// const testToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcmlkIjoiaG9uZyIsIm5hbWUiOiLtmY3quLjrj5kiLCJyb2xlIjoibGVhZGVyIiwiaWF0IjoxNjM5NDY2OTg1LCJleHAiOjE5NTQ4MjY5ODV9.-hTy681tbe62pV9tjArzc5Ig33frnh9j_NjegGiHJNw'

const stateInit = {
  TokenUser: {
    userid: null,
    userPassword: null,
    userName: null,
    userPhone: null,
    userEmail: null,
    userProfile: null,
    userNickname: null,
    userRole: null,
    emailCheck: null,
    userGrade: null,
    userAddress1: null,
    userAddress2: null,
    userAddress3: null,
    updatedPwDate: null,
    createdAt: null
  }
}

export default {
  state: {
    TokenUser: { ...stateInit.TokenUser }, // token에서 추출한 사용자 정보
    Loading: false,
    Error: null
  },
  getters: {
    TokenUser: state => state.TokenUser,
    TokenLoading: state => state.Loading,
    TokenError: state => state.Error
  },
  mutations: {
    setTokenUser(state, data) {
      state.TokenUser = data
    },
    setLoading(state, data) {
      state.Loading = data
      state.Error = null
    },
    setError(state, data) {
      state.Loading = false
      state.Error = data
      state.TokenUser = { ...stateInit.TokenUser }
    },
    clearError(state) {
      state.Error = null
    },
    setLogout(state) {
      state.Loading = false
      state.Error = null
      state.TokenUser = { ...stateInit.TokenUser }
    }
  },
  actions: {
    authLogin(context, payload) {
      // 로그인 처리

      // 상태값 초기화
      context.commit('clearError')
      context.commit('setLoading', true)
      console.log('로그인 액션 ')

      /* RestApi 호출 */

      api
        .post('/api/auths/token', payload)
        .then(response => {
          const token = response.headers.token
          const decodedToken = jwtDecode(token)

          // 정상인 경우 처리
          context.commit('setLoading', false)
          console.log('decodedToken ', decodedToken)
          context.commit('setTokenUser', decodedToken)
          console.log('TokenUser ', this.getters.TokenUser)
          localStorage.setItem('userName', this.getters.TokenUser.userName) //유저이름 로컬 저장
          localStorage.setItem('userNickname', this.getters.TokenUser.userNickname) //유저이름 로컬 저장
          localStorage.setItem('userRole', this.getters.TokenUser.userRole) //유저이름 로컬 저장
          localStorage.setItem('useraddress1', this.getters.TokenUser.userAddress1) //유저주소 로컬 저장
          localStorage.setItem('useraddress2', this.getters.TokenUser.userAddress2) //유저주소 로컬 저장
          localStorage.setItem('useraddress3', this.getters.TokenUser.userAddress3) //유저주소 로컬 저장
        })
        .catch(error => {
          // 에러인 경우 처리
          context.commit('setLoading', false)
          context.commit('setError', error)
          console.log('error')
        })
    },
    async authLogout(context) {
      // 로그아웃 처리

      // 상태값 초기화
      context.commit('clearError')
      context.commit('setLoading', true)
      localStorage.removeItem('userName') // 유저정보 로컬삭제
      localStorage.removeItem('userNickname') //유저이름 로컬 저장
      localStorage.removeItem('userRole') //유저이름 로컬 저장
      localStorage.removeItem('useraddress1') // 유저정보 로컬삭제
      localStorage.removeItem('useraddress2') // 유저정보 로컬삭제
      localStorage.removeItem('useraddress3') // 유저정보 로컬삭제
      localStorage.removeItem('token') // 토큰 삭제
      context.commit('setLogout') // 로그아웃 처리

      /* 테스트 데이터 세팅 */
      // setTimeout(() => {
      //   context.commit('setLogout') // 로그아웃 처리
      //   localStorage.removeItem('token') // 토큰 삭제
      // }, 1000) // 처리 시간을 1초로 주었다.

      /* RestApi 호출 */
      // api 결과와 관계없이 로컬에서는 로그아웃 처리 함

      try {
        await api.delete('/api/auths/token') // await를 걸지 않으면 토큰삭제 후 전송될 수 있음
      } catch (err) {
        console.log(err)
      }
    },
    authTokenUser(context, payload) {
      // 토큰사용자 설정
      const decodedToken = jwtDecode(payload)
      context.commit('setTokenUser', decodedToken)
    }
  }
}
