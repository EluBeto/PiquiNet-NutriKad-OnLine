export default {
    namespaced: true,
    state: {
        type: '',
        snackbar: {
            isShow: false,
            modelMessage: '',
            multiLine: true,
            message: '',
            snackbar: false,
            btnTitle: '',
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
                isShow: payload,
                modelMessage: payload,
                multiLine: true,
                message: '',
                snackbar: payload,
                btnTitle: '',
                color: ''
            }
            state.alert = {
                isShow: payload,
                message: ''
            } 
        }
    },
    mutations: {},
    getters: {}
}
