import HttpServices from '@/services/httpServices'

export default {
    namespaced: true,
    state: {
        isRegisteredUser: false,
        createDate: new Date(),
        identificationCard: {
            name: '',
            lastName: '',
            motherLastName: '',
            dateOfBirth: '',
            age: '',
            gender: false,
            phoneNumber: ''
        },
        clinicHistory: {
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
    },
    actions: {
        async sendRegister({ state, rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    localId,
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}patient-register/${localId}.json?auth=${idToken}`

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
                                message: 'Tu registro fue exitoso',
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'green darken-3'
                            }
                        }
                        setTimeout(location.reload(), 2000);
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