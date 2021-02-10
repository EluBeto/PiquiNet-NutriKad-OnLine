import Vue from 'vue'
import Vuex from 'vuex'
import HttpServices from '@/services/httpServices'
import Rules from './modules/rules'
import Dialogs from './modules/dialogs'
import PersonalData from './modules/personalData'
import AuthenticationProcesses from './modules/authenticationProcesses'
import DataBaseConnectionPaths from './modules/dataBaseConnectionPaths'
import MessageAlerts from './modules/messageAlerts'
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
    isFormErrors: false,
    userAuth: {},
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/img/dashboard.jpg',
    drawer: null,
    font: "font-family: 'Calibri' !important;",
    date: new Date()
  },
  actions: {
    SetLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout)
    },
    setStep({ commit }, payload) {
      commit('SET_STEP', payload)
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
  getters: {
    getStep(state) {
      return state.step
    },
    getrules(state) {
      return state.rules
    }
  },
  modules: {
    Rules,
    Dialogs,
    PersonalData,
    AuthenticationProcesses,
    DataBaseConnectionPaths,
    MessageAlerts
  },
})
