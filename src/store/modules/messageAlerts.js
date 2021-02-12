export default {
    namespaced: true,
    state: {
        type: '',
        snackbar: {
            modelMessage: false,
            multiLine: true,
            message: '',
            snackbar: false,
            btnTitle: '',
            btnColor: '',
            color: ''
        },
        alert: {
            isShow: false,
            message: ''
        }
    },
    actions: {
        clearAlert({ state }, payload) {
            state.type = ''
            state.snackbar = {
                modelMessage: payload,
                multiLine: true,
                message: '',
                snackbar: payload,
                btnTitle: '',
                btnColor: '',
                color: ''
            }
            state.alert = {
                isShow: payload,
                message: ''
            } 
        }
    },
    mutations: {},
    getters: {
        getAlerts(state) {
            return state
        }
    }
}
