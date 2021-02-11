import HttpServices from '@/services/httpServices'
export default {
    namespaced: true,
    state: {
        isErrorAuth: false,
        errorMessage: '',
        userAuth: {},
        validForm: false,
        loading: false,
        login: {
            email: '',
            password: '',
            showPassword: false
        },
        log: {
            email: '',
            password: '',
            confirmPassword: '',
            showPassword: false,
            showConfirmPassword: false
        }
    },
    actions: {
        async userRegistration({ rootState }, payload) {
            let url = rootState.DataBaseConnectionPaths.urlApi +
                      rootState.DataBaseConnectionPaths.signUp +
                      rootState.DataBaseConnectionPaths.key
            let parameters = JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
            return await HttpServices.postRequest(url, parameters)
        },
        async login({ rootState, commit }, payload) {
            let url = rootState.DataBaseConnectionPaths.urlApi +
                      rootState.DataBaseConnectionPaths.signIn +
                      rootState.DataBaseConnectionPaths.key
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
        },
        setFormHasAnError({ commit }, payload) {
            commit('SET_FORM_HAS_AN_ERROR', payload)
        },
        clearAuthenticationProcesses({ state }, payload) {
            state.isErrorAuth = payload
            state.errorMessage= ''
            state.userAuth= {}
            state.validForm= payload
            state.loading= payload
            state.login = {
                email: '',
                password: '',
                showPassword: payload
            }
            state.log = {
                email: '',
                password: '',
                confirmPassword: '',
                showPassword: payload,
                showConfirmPassword: payload
            }
        }
    },
    mutations: {
        SET_USER_AUTH(state, payload) {
          state.userAuth = payload
        },
        SET_FORM_HAS_AN_ERROR(state, payload) {
          state.isErrorAuth = payload
        }
    },
    getters: {}
}