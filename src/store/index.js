import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1
  },
  actions: {
    setStep({ commit }, payload) {
      commit('SET_STEP', payload)
    }
  },
  mutations: {
    SET_STEP(state, payload) {
      state.step = payload
    }
  },
  modules: {},
  getters: {
    getStep(state) {
      return state.step
    }
  }
})
