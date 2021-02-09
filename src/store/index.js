import Vue from 'vue'
import Vuex from 'vuex'
import HttpServices from '@/services/httpServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: 'Versión: 1.0.0',
    layout: 'login-layout',
    urlApi: 'https://identitytoolkit.googleapis.com/v1/',
    signUp: 'accounts:signUp?key=AIzaSyA81YBBwmpt4F8HngOk9CH3HzgvCWbCqhU',
    signIn: 'accounts:signInWithPassword?key=AIzaSyA81YBBwmpt4F8HngOk9CH3HzgvCWbCqhU',
    nutrikadDB: 'https://nutrikad-online-94-default-rtdb.firebaseio.com/',
    step: 1,
    rules: {
      emailRules: [
        v => !!v || 'E-mail es obligarorio',
        v => /.+@.+\...+/.test(v) || 'E-mail no es válido'
      ],
      passwordRules: [
        v =>
          /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/.test(v) ||
          'Introduce al menos 8 caracteres, 1 Mayúscula, 1 Minúscula y 1 Número'
      ],
      textRules: [
        v => !!v || 'Campo obligarorio',
        v =>
          /^(?=.*[a-zA-Z]).{3,100}$/.test(v) ||
          'Al parecer tienes un nombre muy corto'
      ],
      dateRules: [
        v => !!v || 'Campo obligarorio'
      ],
      numberRules: [
        v => !!v || 'Campo obligarorio',
        v =>
          /^(?=.*[0-9]).{1,2}$/.test(v) ||
          'Tu edad es incorrecta'
      ],
      phoneRules: [
        v => !!v || 'Campo obligarorio',
        v =>
          /^(?=.*[0-9]).{10,10}$/.test(v) ||
          'Tu número celular es incorrecto'
      ],
      weightRules: [
        v => !!v || 'Campo obligarorio',
        v =>
          /^(0|[1-9]\d*)(.\d+)?$/.test(v) ||
          "El valor que ingresaste es incorrecto, solo se permiten números"
      ]
    },
    isFormErrors: false,
    userAuth: {},
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/img/dashboard.jpg',
    drawer: null,
    font: "font-family: 'Calibri' !important;"
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
    async login({ state, commit }, payload) {
      try {
        let url = state.urlApi + state.signIn
        let parameters = JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        const response = await HttpServices.postRequest(url, parameters)
        if (!response.error) {
          commit('SET_USER_AUTH', response)
        }
        return response
      } catch (error) {
        console.error(error)
      }
    },
    async register({ state }, payload) {
      try {
        let url = state.nutrikadDB + 'patient-register/' + state.userAuth.localId +
                  '.json?auth=' + state.userAuth.idToken
        let parameters = JSON.stringify({
          dataIdentificationCard: payload.dataIdentificationCard,
          clinicHistory: payload.clinicHistory,
          isRegisteredUser: payload.isRegisteredUser
        })
        return await HttpServices.putRequest(url, parameters)
      } catch (error) {
        console.error(error)
      }
    },
    async getRegister({ state }, payload) {
      try {
        const url = state.nutrikadDB + 'patient-register/' +
                    payload.localId + '.json?auth=' + payload.idToken
        return await HttpServices.getRequest(url)
      } catch (error) {
        console.error(error)
      }
    },
    async getDataUser({ state }, payload) {
      try {
        const url = state.nutrikadDB + 'patient-register/' +
                    payload.localId + '/' +
                    payload.id + '.json?auth=' + payload.idToken
        return await HttpServices.getRequest(url)
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
    SET_USER_AUTH(state, payload) {
      state.userAuth = payload
    },
    LOCALSTORAGE_PROCESSES(payload) {
      if (payload.localStorageObject) {
        console.log('estructLocalstorage', payload);
        switch (payload.action) {
          case 'setItem':
            window.localStorage.setItem(payload.name, JSON.stringify(payload.localStorageObject))
            break
          case 'getItem':
            window.localStorage.removeItem(payload.name)
            break
          case 'removeItem':
            window.localStorage.removeItem(payload.name, JSON.stringify(payload.localStorageObject))
            break
          default:
            break
        }
      }
    },
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    }
  },
  modules: {},
  getters: {
    getStep(state) {
      return state.step
    },
    getrules(state) {
      return state.rules
    }
  }
})
