import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  User: {
    userId: null,
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
    UserList: [],
    User: { ...stateInit.User },
    InsertedResult: null,
    UpdatedResult: null,
    DeletedResult: null,
    InputMode: null
  },
  getters: {
    UserList: state => state.UserList,
    User: state => state.User,
    UserInsertedResult: state => state.InsertedResult,
    UserUpdatedResult: state => state.UpdatedResult,
    UserDeletedResult: state => state.DeletedResult,
    UserInputMode: state => state.InputMode
  },
  mutations: {
    setUserRole(state, data) {
      state.User.userRole = data
    },
    setUserGrade(state, data) {
      state.User.userGrade = data
    },
    setUserList(state, data) {
      state.UserList = data
    },
    setUser(state, data) {
      state.User = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    },
    setDeletedResult(state, data) {
      state.DeletedResult = data
    },
    setInputMode(state, data) {
      state.InputMode = data
    }
  },
  actions: {
    //유저 권한 및 등급 설정
    actUserRole(context, payload) {
      //초기화
      context.commit('setUser', { ...stateInit.User })

      console.log('setUserRole :', payload)
      context.commit('setUserRole', payload)
      console.log('setUserRole2 :', this.state.User.User.userRole)
      if (payload === 1) {
        context.commit('setUserGrade', '일반 구매자')
      } else {
        context.commit('setUserGrade', '관리자')
      }
    },
    // 리스트 조회
    actUserList(context, payload) {
      /* RestAPI 호출 */
      api
        .get('/api/users', { params: payload })
        .then(response => {
          const userList = response && response.data && response.data.rows
          context.commit('setUserList', userList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserList.error', error)
          context.commit('setUserList', [])
        })
    },
    // 등록
    actUserInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)

      /* RestAPI 호출 */
      api
        .post('/api/users', payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    },
    // 초기화
    actUserInit(context, payload) {
      context.commit('setUser', { ...stateInit.User })
    },
    // 입력모드
    actUserInputMode(context, payload) {
      context.commit('setInputMode', payload)
    },
    // 상세정보 조회
    actUserInfo(context, payload) {
      // 상태값 초기화
      context.commit('setUser', { ...stateInit.User })

      /* RestAPI 호출 */
      api
        .get(`/api/users/${payload}`)
        .then(response => {
          const user = response && response.data
          context.commit('setUser', user)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserInfo.error', error)
          context.commit('setUser', -1)
        })
    },
    // 수정
    actUserUpdate(context, payload) {
      // 상태값 초기화
      context.commit('setUpdatedResult', null)

      /* RestAPI 호출 */
      api
        .put(`/api/users/${payload.id}`, payload)
        .then(response => {
          const updatedResult = response && response.data && response.data.updatedCount
          context.commit('setUpdatedResult', updatedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserUpdate.error', error)
          context.commit('setUpdatedResult', -1)
        })
    },
    // 삭제
    actUserDelete(context, payload) {
      // 상태값 초기화
      context.commit('setDeletedResult', null)

      /* RestAPI 호출 */
      api
        .delete(`/api/users/${payload}`)
        .then(response => {
          const deletedResult = response && response.data && response.data.deletedCount
          context.commit('setDeletedResult', deletedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserDelete.error', error)
          context.commit('setDeletedResult', -1)
        })
    }
  }
}
