import HttpServices from '@/services/httpServices'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        isRegisteredUser: false,
        createDate: new Date(),
        datosPersonales: {
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaNac: '',
            edad: '',
            genero: true,
            telefono: '',
            estadoCivil: '',
            ocupacion: '',
            padecimientoActual: ''
        },
        antecedentesHeredofamiliares: {
            diabetes: false,
            cancer: false,
            hipertencionArtereal: false,
            obesidad: false,
            cardiopatias: false,
            hepaticos: false,
            dislipidemias: false,
            otros: ''
        },
        antecedentesPersonalesPatologicos: {
            quirurgicos: false,
            obesidad: false,
            estrenimiento: false,
            dislipidemias: false,
            anemia: false,
            hemorroides: false,
            cancer: false,
            gastritis: false,
            diverticulos: false,
            hipertencionArtereal: false,
            colitis: false,
            otros: ''
        },
        antecedentesGinecoObstetricos: {
            menarca: false,
            fum: false,
            climaterio: false,
            noGestas: 0,
            noPartos: 0,
            abortos: false,
            complicaciones: '',
            semanasGestacion: 0,
            anticonceptivos: false,
            caracteristicasCiclo: ''
        },
        antecedentesPersonalesNoPatologicos: {
            tabaquismo: false,
            alcoholismo: false,
            alergias: '',
            intolerancias: '',
            averacionesAlimentarias: '',
            cambiosIngesta: '',
            causas: '',
            tratamientoDieteticoPrevio: '',
            tiempo: '',
            resultado: '',
            tratamientoFarma: '',
            actividadFicica: false,
            sedentarismo: false,
            moderado: false,
            activo: false,
            ejercicio: '',
            frecuencia: '',
            duracion: ''
        },
        comidas: {
            desayuno: {
                hora: '',
                descripcion: ''
            },
            comida: {
                hora: '',
                descripcion: ''
            },
            cena: {
                hora: '',
                descripcion: ''
            },
            mediaManana: {
                hora: '',
                descripcion: ''
            },
            mediaTarde: {
                hora: '',
                descripcion: ''
            },
            adicional: {
                hora: '',
                descripcion: ''
            }
        },
        antropometria: {
            cintura: 0,
            cadera: 0,
            estatura: 0,
            peso: 0
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
                    datosPersonales: state.datosPersonales,
                    antecedentesHeredofamiliares: state.antecedentesHeredofamiliares,
                    antecedentesPersonalesPatologicos: state.antecedentesPersonalesPatologicos,
                    antecedentesGinecoObstetricos: state.antecedentesGinecoObstetricos,
                    antecedentesPersonalesNoPatologicos: state.antecedentesPersonalesNoPatologicos,
                    comidas: state.comidas,
                    antropometria: state.antropometria,
                    isRegisteredUser: state,
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
                            gender: true,
                            name: 'Merari',
                            lastName: 'Aguilar',
                            motherLastName: 'LLL'
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
            const patientesRegister = []
            for (let id in response){
                patientesRegister.push(response[id])
            }
            return patientesRegister
        },
        async getProgressWeith({ rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    localId,
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}progress-weight/${localId}.json?auth=${idToken}`
                const responseWeight = await HttpServices.getRequest(url)
                return responseWeight
            } else {
                router.push('/')
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
                    firstWeight: payload.firstWeight,
                    secondWeight: payload.secondWeight,
                    thirdWeight: payload.thirdWeight
                })
                let responseWeight = ''
                await HttpServices.putRequest(url, parameters).then(response => {
                    responseWeight = response
                })
                return responseWeight
            } else {
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
        getDatosPersonales(state) {
            return state.datosPersonales
        },
        getAntecedentesHeredofamiliares(state) {
            return state.antecedentesHeredofamiliares
        },
        getAntecedentesPersonalesPatologicos(state) {
            return state.antecedentesPersonalesPatologicos
        },
        getAntecedentesGinecoObstetricos(state) {
            return state.antecedentesGinecoObstetricos
        },
        getAntecedentesPersonalesNoPatologicos(state) {
            return state.antecedentesPersonalesNoPatologicos
        },
        getAntropometria(state) {
            return state.antropometria
        },
        getComidas(state) {
            return state.comidas
        },
        getIsRegisteredUser(state) {
            return state.isRegisteredUser
        }
    }
}
