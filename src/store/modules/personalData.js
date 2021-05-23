import HttpServices from '@/services/httpServices'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        isRegisteredUser: false,
        createDate: new Date(),
        identificationCard: {
            UUID: null,
            name: null,
            lastName: null,
            motherLastName: null,
            dateOfBirth: null,
            age: null,
            gender: false,
            phoneNumber: null
        },
        clinicHistory: {
            actualWeight: null,
            height: null,
            measurements: {
              waist: null,
              chest: null,
              hip: null
            },
            isPregnant: null,
            isBreastfeeding: null,
            monthsPostpartum: 0,
            allergiesIntolerance: {
              isHeadach: false,
              isBadDigestion: false,
              isReflux: false,
              isActivePerson: false,
              responseActivePersonTime: null,
              responseActivePersonTypeExercise: null,
              isBeMedical: false
            }
        }
    },
    actions: {
        async sendRegisterInformation({ rootState }, payload) {
            let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}user-register-information.json`
            let parameters = JSON.stringify({
                name: payload.name,
                phoneNumber: payload.phoneNumber,
                email: payload.email,
                select: payload.select
            })
            let register = ''
            await HttpServices.postRequest(url, parameters).then(response => {
                register = response
            })
            return register
        },
        async sendRegister({ state, rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    localId,
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}patient-register/${localId}.json?auth=${idToken}`
                state.identificationCard.UUID = localId
                let parameters = JSON.stringify({
                    dataIdentificationCard: state.identificationCard,
                    clinicHistory: state.clinicHistory,
                    isRegisteredUser: true,
                    createDate: state.createDate
                })

                await HttpServices.putRequest(url, parameters).then(response => {
                    if (response.error) {
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: response.error,
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'red darken-3'
                            }
                        }
                        rootState.Steps.loading = false
                    } else {
                        window.localStorage.setItem('registeredUser', JSON.stringify({
                            isRegistered: true,
                            gender: state.identificationCard.gender,
                            name: state.identificationCard.name,
                            lastName: state.identificationCard.lastName,
                            motherLastName: state.identificationCard.motherLastName
                        }))
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: 'Tu registro fue éxitoso',
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'green darken-3'
                            }
                        }

                        setTimeout(location.reload(), 3000);

                        rootState.Steps.loading = false
                        rootState.Steps.numberOfSteps = 1
                        state.isRegisteredUser = false
                        state.identificationCard = {
                            name: '',
                            lastName: '',
                            motherLastName: '',
                            dateOfBirth: '',
                            age: '',
                            gender: false,
                            phoneNumber: ''
                        }
                        state.clinicHistory = {
                            actualWeight: '',
                            height: null,
                            measurements: {
                              waist: null,
                              chest: null,
                              hip: null
                            },
                            isPregnant: '',
                            isBreastfeeding: '',
                            monthsPostpartum: 0,
                            allergiesIntolerance: {
                              isHeadach: false,
                              isBadDigestion: false,
                              isReflux: false,
                              isActivePerson: false,
                              responseActivePersonTime: '',
                              responseActivePersonTypeExercise: '',
                              isBeMedical: false
                            }
                        }
                    }
                })
            }
        },
        async getRegisters({ rootState }) {
            const {
                idToken
            } = JSON.parse(window.localStorage.getItem('userAuth'))
            let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}patient-register.json?auth=${idToken}`

            const response = await HttpServices.getRequest(url)
            if (response.error) {
                window.localStorage.removeItem('userAuth')
                window.localStorage.removeItem('userInfo')
                window.localStorage.removeItem('registeredUser')
                router.push("/")
            }

            console.log('response', response)
            const patientesRegister = []
            for (let id in response){
                patientesRegister.push(response[id])
            }
            return patientesRegister
        },
        async getProgressWeithAll({ rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}progress-weight.json?auth=${idToken}`
                const responseWeight = await HttpServices.getRequest(url)
                if (responseWeight.error === 'Auth token is expired'){
                    window.localStorage.removeItem('userAuth')
                    window.localStorage.removeItem('userInfo')
                    window.localStorage.removeItem('registeredUser')
                    router.push("/")
                }
            let newArray = []
            for (let id in responseWeight) {
                newArray.push(responseWeight[id])
            }
                return newArray
            } else {
                window.localStorage.removeItem('userAuth')
                window.localStorage.removeItem('userInfo')
                window.localStorage.removeItem('registeredUser')
                router.push("/")
            }
        },
        async getProgressWeith({ rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    localId,
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}progress-weight/${localId}.json?auth=${idToken}`
                const responseWeight = await HttpServices.getRequest(url)
                if (responseWeight.error === 'Auth token is expired'){
                    window.localStorage.removeItem('userAuth')
                    window.localStorage.removeItem('userInfo')
                    window.localStorage.removeItem('registeredUser')
                    router.push("/")
                }
                return responseWeight
            } else {
                window.localStorage.removeItem('userInfo')
                window.localStorage.removeItem('registeredUser')
                router.push("/")
            }
        },
        async sendProgressWeigth({ rootState }, payload) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    localId,
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}progress-weight/${localId}.json?auth=${idToken}`
                let parameters = JSON.stringify({
                    UUID: localId,
                    firstWeight: parseFloat(payload.firstWeight),
                    secondWeight: parseFloat(payload.secondWeight),
                    thirdWeight: parseFloat(payload.thirdWeight),
                    fourthWeight: parseFloat(payload.fourthWeight)
                })
                let responseWeight = ''
                await HttpServices.putRequest(url, parameters).then(response => {
                    responseWeight = response
                })
                return responseWeight
            } else {
                window.localStorage.removeItem('userInfo')
                window.localStorage.removeItem('registeredUser')
                router.push('/')
            }
        },
        cancelRegister() {
            this.cleanRegister
        },
        cleanRegister({ state, rootState }) {
            rootState.Steps.numberOfSteps = 1
            state.isRegisteredUser = false
            state.identificationCard = {
                name: '',
                lastName: '',
                motherLastName: '',
                dateOfBirth: '',
                age: '',
                gender: false,
                phoneNumber: ''
            }
            state.clinicHistory = {
                actualWeight: '',
                height: null,
                measurements: {
                  waist: null,
                  chest: null,
                  hip: null
                },
                isPregnant: '',
                isBreastfeeding: '',
                monthsPostpartum: 0,
                allergiesIntolerance: {
                  isHeadach: false,
                  isBadDigestion: false,
                  isReflux: false,
                  isActivePerson: false,
                  responseActivePersonTime: '',
                  responseActivePersonTypeExercise: '',
                  isBeMedical: false
                }
            }
        }
    },
    mutatios: {},
    getters: {
        getPersonalData(state) {
            return state.identificationCard
        },
        getClinicHistoryData(state) {
            return state.clinicHistory
        },
        getIsRegisteredUser(state) {
            return state.isRegisteredUser
        }
    }
}
