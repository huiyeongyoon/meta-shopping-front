import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  User: {
    user_id: null,
    user_pwd: null,
    user_name: null,
    user_phone: null,
    user_email: null,
    user_profile: null,
    user_nickname: null,
    email_check: null,
    user_role: null,
    user_grade: null,
    createdAt: null,
    updatedAt: null
  }
}

export default {
  state: {
    User: { ...stateInit.User },
    InsertedResult: null
  },
  getters: {
    UserList: state => state.UserList,
    User: state => state.User,
    UserInsertedResult: state => state.InsertedResult
  },
  mutations: {
    setUserList(state, data) {
      state.UserList = data
    },
    setUser(state, data) {
      state.User = data
    },
    setInsertedResult(state, date) {
      state.InsertedResult = date
    }
  },
  actions: {
    // 초기화
    actUserInit(context, payload) {
      context.commit('setUser', { ...stateInit.User })
    },

    //등록
    actUserInsert(context, payload) {
      api
        .post('/serverApi/users', payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('UserInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    }
  }
}
