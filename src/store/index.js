import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    loginRules: {
      emailRules: [
        v => !!v || 'E-mail es obligarorio',
        v => /.+@.+\...+/.test(v) || 'E-mail no es válido'
      ],
      passwordRules: [
        v =>
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/.test(v) ||
          'Introduce al menos 8 caracteres, 1 Mayúscula, 1 Minúscula y 1 Número'
      ]
    }
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
    },
    getLoginRules(state) {
      return state.loginRules
    }
  }
})
