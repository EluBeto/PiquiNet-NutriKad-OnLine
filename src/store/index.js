import Vue from 'vue'
import Vuex from 'vuex'
import Rules from './modules/rules'
import Dialogs from './modules/dialogs'
import PersonalData from './modules/personalData'
import AuthenticationProcesses from './modules/authenticationProcesses'
import DataBaseConnectionPaths from './modules/dataBaseConnectionPaths'
import MessageAlerts from './modules/messageAlerts'
import Steps from './modules/steps'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: 'Versión: 1.0.0',
    layout: 'login-layout',
    step: 1,
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/img/dashboard.jpg',
    drawer: null
  },
  actions: {
    SetLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout)
    },
    setStep({ commit }, payload) {
      commit('SET_STEP', payload)
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
        switch (payload.action) {
          case 'setItem':
            localStorage.setItem(payload.name, payload.localStorageObject)
            break
          case 'getItem':
            localStorage.getItem(payload.name)
            break
          case 'removeItem':
            localStorage.removeItem(payload.name, payload.localStorageObject)
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
    }
  },
  modules: {
    Rules,
    Dialogs,
    PersonalData,
    AuthenticationProcesses,
    DataBaseConnectionPaths,
    MessageAlerts,
    Steps
  },
})
