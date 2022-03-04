const state = {
  inputTime: new Date('March 07, 2022, 0:00:00').getTime(),
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

const getters = {
  storedCountdown(state) {
    let { days, hours, minutes, seconds } = state
    return { days, hours, minutes, seconds }
  }
}

const mutations = {
  SET_COUNTDOWN(state, payload) {
    state.days = Math.ceil(payload / (1000 * 60 * 60 * 24))
    state.hours = Math.ceil((payload % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    state.minutes = Math.ceil((payload % (1000 * 60 * 60)) / (1000 * 60))
    state.seconds = Math.ceil((payload % (1000 * 60)) / 1000)
  }
}

const actions = {
  FETCH_COUNT({ commit, state }) {
    if (state.inputTime > 0) {
      setInterval(() => {
        const today = new Date().getTime()
        const gap = state.inputTime - today
        commit('SET_COUNTDOWN', gap)
      }, 1000)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
