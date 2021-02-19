import HttpServices from '@/services/httpServices'

export default {
    namespaced: true,
    state: {
        isErrorAuth: false,
        errorMessage: '',
        validForm: false,
        loading: false,
        rememberCredentials: false,
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
        },
        userInformation: {
            initials: '',
            userName: '',
            email: '',
            age: '',
            gender: false,
            isRegisteredUser: false
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
        async getUserInformation({ rootState, commit }, payload) {
            const {
                localId,
                idToken
            } = payload
            let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}patient-register/${localId}.json?auth=${idToken}`
            const response = await HttpServices.getRequest(url)
            if (response === null) return { response: 'sin registro' }
            if (response.error) return { response: response }
            
            const {
                name,
                lastName,
                motherLastName,
                gender
            } = response.dataIdentificationCard
            
            const newPayload = {
                gender: gender,
                name: name,
                lastName: lastName,
                motherLastName: motherLastName,
                isRegistered: response.isRegisteredUser
            }
            commit('SET_USER_INFORMATION', newPayload)
            return newPayload
        },
        setFormHasAnError({ commit }, payload) {
            commit('SET_FORM_HAS_AN_ERROR', payload)
        },
        clearAuthenticationProcesses({ state }, payload) {
            state.isErrorAuth = payload
            state.errorMessage= ''
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
            state.userInformation = {
                initials: '',
                userName: '',
                email: '',
                age: '',
                gender: false,
                isRegisteredUser: false
            }
        }
    },
    mutations: {
        SET_USER_AUTH(rootState, payload) {
            rootState.userAuth = payload
        },
        SET_FORM_HAS_AN_ERROR(state, payload) {
          state.isErrorAuth = payload
        },
        SET_USER_INFORMATION(state, payload) {
            state.userInformation = {
                initials: payload.initials,
                userName: payload.userName,
                email: payload.email,
                age: payload.age,
                gender: payload.gender,
                isRegisteredUser: payload.isRegisteredUser
            }
        }
    },
    getters: {
        getloginParameters(state) {
            return state
        },
        getUserInformation(state) {
            return state.userInformation
        },
        getIsRegisteredUser(state) {
            return state.userInformation.isRegisteredUser
        }
    }
}