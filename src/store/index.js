import Vue from 'vue'
import Vuex from 'vuex'
import HttpServices from '@/services/httpServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: 'Versión: 1.0.0',
    layout: 'login-layout',
    urlApi: 'https://identitytoolkit.googleapis.com/v1/',
    signUp: 'accounts:signUp?key=AIzaSyDRLE8mG1a5THtSb48HOAbzl7p8fAfHJxc',
    signIn: 'accounts:signInWithPassword?key=AIzaSyDRLE8mG1a5THtSb48HOAbzl7p8fAfHJxc',
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
    },
    isFormErrors: false,
    userAuth: {}
  },
  actions: {
    SetLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout)
    },
    setStep({ commit }, payload) {
      commit('SET_STEP', payload)
    },
    setFormHasAnError({ commit }, payload) {
      commit('SET_FORM_HAS_AN_ERROR', payload)
    },
    async registerUser({ state }, payload) {
      try {
        let url = state.urlApi + state.signUp
        let parameters = JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        return await HttpServices.postRequest(url, parameters)
      } catch (error) {
        console.error(error)
      }
    },
    async login({ state }, payload){
      try {
        let url = state.urlApi + state.signIn
        let parameters = JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        return await HttpServices.postRequest(url, parameters)
      } catch (error) {
        console.error(error)
      }
    },
    setLoacalStorage({ commit }, payload) {
      commit('LOCALSTORAGE_PROCESSES', payload)
    }
  },
  mutations: {
    SET_LAYOUT(state, layout) {
      state.layout = layout
    },
    SET_STEP(state, payload) {
      state.step = payload
    },
    SET_FORM_HAS_AN_ERROR(state, payload) {
      state.isFormErrors = payload
    },
    LOCALSTORAGE_PROCESSES(state, payload) {
      if (payload.localStorageObject) {
        let convertObjetctToJson = JSON.stringify(payload.localStorageObject)
        switch (payload.action) {
          case 'setItem':
            window.localStorage.setItem(payload.name, convertObjetctToJson)
            break
        
          default:
            break
        }
      }
      state.userAuth = payload
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
