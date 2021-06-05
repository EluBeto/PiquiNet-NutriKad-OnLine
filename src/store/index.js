import Vue from 'vue'
import Vuex from 'vuex'
import Rules from './modules/rules'
import Dialogs from './modules/dialogs'
import PersonalData from './modules/personalData'
import AuthenticationProcesses from './modules/authenticationProcesses'
import DataBaseConnectionPaths from './modules/dataBaseConnectionPaths'
import MessageAlerts from './modules/messageAlerts'
import Steps from './modules/steps'
import Foods from './modules/foods'
import ShoppingList from './modules/shoppingList'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userAuth: {},
    version: 'Versión: 1.0.2',
    layout: 'login-layout',
    step: 1,
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: '/img/dashboard.jpg',
    drawer: null,
    processingRequest: false
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
            localStorage.removeItem(payload.name)
            break
        }
      }
    },
    SET_USER_AUTH(state, payload) {
      state.userAuth = payload
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
    isShowPlan() {
      const date = new Date()
      let dateNow = date.getDate()
      let monthNow = date.toDateString()
      return dateNow >= 5 && dateNow <= 30 && monthNow.includes('Jun')
    }
  },
  modules: {
    Rules,
    Dialogs,
    PersonalData,
    AuthenticationProcesses,
    DataBaseConnectionPaths,
    MessageAlerts,
    Steps,
    Foods,
    ShoppingList
  },
})
