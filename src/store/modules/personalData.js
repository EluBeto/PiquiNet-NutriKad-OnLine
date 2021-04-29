import HttpServices from '@/services/httpServices'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        nobreCompleto: '',
        medidasHistorico: {
            fecha: '',
            peso: '',
            cintura: '',
            cadera: '',
            imc: '',
            edadMetabolica: '',
            grasaBiceral: ''
        },
        isActive: false,
        createDate: new Date(),
        datosPersonales: {
            idPaciente: '',
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaNac: '',
            edad: '',
            genero: false,
            telefono: '',
            estadoCivil: '',
            ocupacion: '',
            padecimientoActual: '',
            direccion: '',
            tipoConsulta: ''
        },
        antecedentesHeredofamiliares: {
            diabetes: '',
            cancer: '',
            hipertencionArtereal: '',
            obesidad: '',
            cardiopatias: '',
            hepaticos: '',
            dislipidemias: '',
            otros: ''
        },
        antecedentesPersonalesPatologicos: {
            quirurgicos: '',
            obesidad: '',
            estrenimiento: '',
            dislipidemias: '',
            anemia: '',
            hemorroides: '',
            cancer: '',
            gastritis: '',
            diverticulos: '',
            hipertencionArtereal: '',
            colitis: '',
            otros: ''
        },
        antecedentesGinecoObstetricos: {
            menarca: '',
            fum: '',
            climaterio: '',
            noGestas: '',
            noPartos: '',
            abortos: false,
            complicaciones: '',
            semanasGestacion: '',
            anticonceptivos: '',
            caracteristicasCiclo: ''
        },
        antecedentesPersonalesNoPatologicos: {
            tabaquismo: '',
            alcoholismo: '',
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
            duracion: '',
            motivoConsulta: ''
        },
        comidas: {
            noComidas: '',
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
            peso: '',
            estatura: '',
            imc: '',
            porcentajeGrasa: '',
            porcentajeMusculo: '',
            cintura: '',
            cadera: '',
            icc: '',
            espalda: '',
            pectoral: '',
            cinturaAlta: '',
            edadMetabolica: '',
            grasaBiceral: '',
            izquierdo: {
                pbiRelajado: '',
                pbiFlexionado: '',
                ppa: '',
                pp: ''
            },
            derecho: {
                pbiRelajado: '',
                pbiFlexionado: '',
                ppa: '',
                pp: ''
            }
        },
        clinico: {
            glucosa: '',
            ta: '',
            hidratacion: '',
            noEvacuaciones: '',
            evacuaciones: '',
            malestaresGeneral: ''
        },
        dietetico: {
            apegoPlan: '',
            escalaSueno: '',
            horaDespertar: '',
            horaDormir: '',
            emociones: '',
            conductasAlimentarias: '',
            logros: '',
            areasOportuidad: ''
        },
        habitos: {
            pasosDiarios: '',
            ejercicio: '',
            controlHambreSaciedad: '',
            porciones: '',
            organizacion: '',
            calificacion: '',
            objetivos: '',
            observaciones: ''
        }
    },
    actions: {
        async sendHistoricoConsulta({ state, rootState }, payload) {
            let resp = false
            const {
                idToken
            } = JSON.parse(localStorage.getItem('userAuth'))
            let fechaAltaConsulta = state.createDate
            let urlHistorico = `${rootState.DataBaseConnectionPaths.pathToDataBase}historico-consultas/${payload}/${fechaAltaConsulta.toDateString()}.json?auth=${idToken}`
            let parametersHistorico = JSON.stringify({
                antropometria: state.antropometria,
                clinico: state.clinico,
                dietetico: state.dietetico,
                habitos: state.habitos,
                createDate: state.createDate
            })
            HttpServices.putRequest(urlHistorico, parametersHistorico).then(respuesta => {
                if (respuesta.response !== undefined) {
                    if (respuesta.response.message === 'Failed to fetch') {
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: 'Error de red, verifique su conexion e intente nuevamente',
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'red darken-3'
                            }
                        }
                        rootState.processingRequest = false
                        rootState.Steps.loading = false
                    }
                } else {
                    if (respuesta.error) {
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: respuesta.error,
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'red darken-3'
                            }
                        }
                        rootState.processingRequest = false
                    } else {
                        resp = true
                        rootState.processingRequest = false
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
                        rootState.processingRequest = false
                    }
                }
            })
            return resp
        },
        async getHistoricoConsultas({ state, rootState }) {
            const {
                idToken
            } = JSON.parse(window.localStorage.getItem('userAuth'))
            let uID = state.datosPersonales.idPaciente
            let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}historico-consultas/${uID}.json?auth=${idToken}`
            const registros = []
            await HttpServices.getRequest(url).then(historicoConsultas => {
                if (historicoConsultas.response !== undefined){
                    if (historicoConsultas.response.message === 'Failed to fetch') {
                        rootState.processingRequest = false
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: 'Error de red, verifique su conexion e intente nuevamente',
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'red darken-3'
                            }
                        }
                    }
                }  else {
                    for (let id in historicoConsultas){
                        registros.push(historicoConsultas[id])
                    }
                }
            })
            return registros
        },
        async sendRegister({ state, rootState }) {
            if (localStorage.getItem('userAuth') != null) {
                const {
                    idToken
                } = JSON.parse(localStorage.getItem('userAuth'))
                const uID = `${state.datosPersonales.nombre.substring(0, 1)}${state.datosPersonales.apellidoPaterno.substring(0, 1)}${state.datosPersonales.apellidoMaterno.substring(0, 1)}-${state.datosPersonales.fechaNac.replace('-', '')}`
                let url = `${rootState.DataBaseConnectionPaths.pathToDataBase}patient-register/${uID.replace(' ', '')}.json?auth=${idToken}`
                state.datosPersonales.idPaciente = uID
                let parameters = JSON.stringify({
                    datosPersonales: state.datosPersonales,
                    antecedentesHeredofamiliares: state.antecedentesHeredofamiliares,
                    antecedentesPersonalesPatologicos: state.antecedentesPersonalesPatologicos,
                    antecedentesGinecoObstetricos: state.antecedentesGinecoObstetricos,
                    antecedentesPersonalesNoPatologicos: state.antecedentesPersonalesNoPatologicos,
                    comidas: state.comidas,
                    antropometria: state.antropometria,
                    clinico: state.clinico,
                    dietetico: state.dietetico,
                    habitos: state.habitos,
                    isActive: true,
                    createDate: state.createDate
                })

                await HttpServices.putRequest(url, parameters).then(response => {
                    if (response.response !== undefined) {
                        if (response.response.message === 'Failed to fetch') {
                            rootState.MessageAlerts = {
                                type: 'snackbar',
                                snackbar: {
                                    isShow: true,
                                    modelMessage: true,
                                    multiLine: true,
                                    message: 'Error de red, verifique su conexion e intente nuevamente',
                                    snackbar: false,
                                    btnTitle: 'Cerrar',
                                    btnColor: 'white',
                                    color: 'red darken-3'
                                }
                            }
                            rootState.processingRequest = false
                            rootState.Steps.loading = false
                        }
                    } else {
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
                            rootState.processingRequest = false
                            rootState.Steps.loading = false
                        } else {
                            const {
                                idToken
                            } = JSON.parse(localStorage.getItem('userAuth'))
                            let fechaAltaConsulta = state.createDate
                            let urlHistorico = `${rootState.DataBaseConnectionPaths.pathToDataBase}historico-consultas/${uID}/${fechaAltaConsulta.toDateString()}.json?auth=${idToken}`
                            let parametersHistorico = JSON.stringify({
                                antropometria: state.antropometria,
                                clinico: state.clinico,
                                dietetico: state.dietetico,
                                habitos: state.habitos,
                                createDate: state.createDate
                            })
                            HttpServices.putRequest(urlHistorico, parametersHistorico).then(respuesta => {
                                if (respuesta.error) {
                                    rootState.MessageAlerts = {
                                        type: 'snackbar',
                                        snackbar: {
                                            isShow: true,
                                            modelMessage: true,
                                            multiLine: true,
                                            message: respuesta.error,
                                            snackbar: false,
                                            btnTitle: 'Cerrar',
                                            btnColor: 'white',
                                            color: 'red darken-3'
                                        }
                                    }
                                    rootState.processingRequest = false
                                    rootState.Steps.loading = false
                                } else {
                                    rootState.processingRequest = false
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
                                    rootState.Steps.loading = false
                                    rootState.Steps.numberOfSteps = 1
                                    state.isRegisteredUser = false
                                }
                            })
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
            const patientesRegister = []
            await HttpServices.getRequest(url).then(response => {
                if (response.response !== undefined){
                    if (response.response.message === 'Failed to fetch') {
                        rootState.MessageAlerts = {
                            type: 'snackbar',
                            snackbar: {
                                isShow: true,
                                modelMessage: true,
                                multiLine: true,
                                message: 'Error de red, verifique su conexion e intente nuevamente',
                                snackbar: false,
                                btnTitle: 'Cerrar',
                                btnColor: 'white',
                                color: 'red darken-3'
                            }
                        }
                    }
                }  else {
                    for (let id in response){
                        patientesRegister.push(response[id])
                    }
                }
            })
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
                    isShow: payload.isShow
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
        cancelRegister({ commit, rootState }) {
            rootState.Steps.numberOfSteps = 1
            commit('SET_PERSONAL_DATA')
        }
    },
    mutations: {
        SET_TEMP_DATA(state) {
            if (window.localStorage.getItem('tempDatosPersonales') !== null) {
                let tempDatosPersonales = JSON.parse(window.localStorage.getItem('tempDatosPersonales'))
                state.datosPersonales.nombre = tempDatosPersonales.nombre
                state.datosPersonales.apellidoPaterno = tempDatosPersonales.apellidoPaterno
                state.datosPersonales.apellidoMaterno = tempDatosPersonales.apellidoMaterno
                state.datosPersonales.fechaNac = tempDatosPersonales.fechaNac
                state.datosPersonales.edad = tempDatosPersonales.edad
                state.datosPersonales.genero = tempDatosPersonales.genero
                state.datosPersonales.telefono = tempDatosPersonales.telefono
                state.datosPersonales.estadoCivil = tempDatosPersonales.estadoCivil
                state.datosPersonales.ocupacion = tempDatosPersonales.ocupacion
                state.datosPersonales.padecimientoActual = tempDatosPersonales.padecimientoActual
                state.datosPersonales.direccion = tempDatosPersonales.direccion
                state.datosPersonales.tipoConsulta = tempDatosPersonales.tipoConsulta
            }

            if (window.localStorage.getItem('tempAntecedentesHeredofamiliares') !== null) {
                let tempAntecedentesHeredofamiliares = JSON.parse(window.localStorage.getItem('tempAntecedentesHeredofamiliares'))
                state.antecedentesHeredofamiliares.diabetes = tempAntecedentesHeredofamiliares.diabetes
                state.antecedentesHeredofamiliares.cancer = tempAntecedentesHeredofamiliares.cancer
                state.antecedentesHeredofamiliares.hipertencionArtereal = tempAntecedentesHeredofamiliares.hipertencionArtereal
                state.antecedentesHeredofamiliares.obesidad = tempAntecedentesHeredofamiliares.obesidad
                state.antecedentesHeredofamiliares.cardiopatias = tempAntecedentesHeredofamiliares.cardiopatias
                state.antecedentesHeredofamiliares.hepaticos = tempAntecedentesHeredofamiliares.hepaticos
                state.antecedentesHeredofamiliares.dislipidemias = tempAntecedentesHeredofamiliares.dislipidemias
                state.antecedentesHeredofamiliares.otros = tempAntecedentesHeredofamiliares.otros
            }

            if (window.localStorage.getItem('tempAntecedentesPersonalesPatologicos') !== null) {
                let tempAntecedentesPersonalesPatologicos = JSON.parse(window.localStorage.getItem('tempAntecedentesPersonalesPatologicos'))
                state.antecedentesPersonalesPatologicos.quirurgicos = tempAntecedentesPersonalesPatologicos.quirurgicos
                state.antecedentesPersonalesPatologicos.obesidad = tempAntecedentesPersonalesPatologicos.obesidad
                state.antecedentesPersonalesPatologicos.estrenimiento = tempAntecedentesPersonalesPatologicos.estrenimiento
                state.antecedentesPersonalesPatologicos.dislipidemias = tempAntecedentesPersonalesPatologicos.dislipidemias
                state.antecedentesPersonalesPatologicos.anemia = tempAntecedentesPersonalesPatologicos.anemia
                state.antecedentesPersonalesPatologicos.hemorroides = tempAntecedentesPersonalesPatologicos.hemorroides
                state.antecedentesPersonalesPatologicos.cancer = tempAntecedentesPersonalesPatologicos.cancer
                state.antecedentesPersonalesPatologicos.gastritis = tempAntecedentesPersonalesPatologicos.gastritis
                state.antecedentesPersonalesPatologicos.diverticulos = tempAntecedentesPersonalesPatologicos.diverticulos
                state.antecedentesPersonalesPatologicos.hipertencionArtereal = tempAntecedentesPersonalesPatologicos.hipertencionArtereal
                state.antecedentesPersonalesPatologicos.colitis = tempAntecedentesPersonalesPatologicos.colitis
                state.antecedentesPersonalesPatologicos.otros = tempAntecedentesPersonalesPatologicos.otros
            }

            if (window.localStorage.getItem('tempAntecedentesGinecoObstetricos') !== null) {
                let tempAntecedentesGinecoObstetricos = JSON.parse(window.localStorage.getItem('tempAntecedentesGinecoObstetricos'))
                state.antecedentesGinecoObstetricos.menarca = tempAntecedentesGinecoObstetricos.menarca
                state.antecedentesGinecoObstetricos.fum = tempAntecedentesGinecoObstetricos.fum
                state.antecedentesGinecoObstetricos.climaterio = tempAntecedentesGinecoObstetricos.climaterio
                state.antecedentesGinecoObstetricos.noGestas = tempAntecedentesGinecoObstetricos.noGestas
                state.antecedentesGinecoObstetricos.noPartos = tempAntecedentesGinecoObstetricos.noPartos
                state.antecedentesGinecoObstetricos.abortos = tempAntecedentesGinecoObstetricos.abortos
                state.antecedentesGinecoObstetricos.complicaciones = tempAntecedentesGinecoObstetricos.complicaciones
                state.antecedentesGinecoObstetricos.semanasGestacion = tempAntecedentesGinecoObstetricos.semanasGestacion
                state.antecedentesGinecoObstetricos.anticonceptivos = tempAntecedentesGinecoObstetricos.anticonceptivos
                state.antecedentesGinecoObstetricos.caracteristicasCiclo = tempAntecedentesGinecoObstetricos.caracteristicasCiclo
            }

            if (window.localStorage.getItem('tempAntecedentesPersonalesNoPatologicos') !== null) {
                let tempAntecedentesPersonalesNoPatologicos = JSON.parse(window.localStorage.getItem('tempAntecedentesPersonalesNoPatologicos'))
                state.antecedentesPersonalesNoPatologicos.tabaquismo = tempAntecedentesPersonalesNoPatologicos.tabaquismo
                state.antecedentesPersonalesNoPatologicos.alcoholismo = tempAntecedentesPersonalesNoPatologicos.alcoholismo
                state.antecedentesPersonalesNoPatologicos.alergias = tempAntecedentesPersonalesNoPatologicos.alergias
                state.antecedentesPersonalesNoPatologicos.intolerancias = tempAntecedentesPersonalesNoPatologicos.intolerancias
                state.antecedentesPersonalesNoPatologicos.averacionesAlimentarias = tempAntecedentesPersonalesNoPatologicos.averacionesAlimentarias
                state.antecedentesPersonalesNoPatologicos.cambiosIngesta = tempAntecedentesPersonalesNoPatologicos.cambiosIngesta
                state.antecedentesPersonalesNoPatologicos.causas = tempAntecedentesPersonalesNoPatologicos.causas
                state.antecedentesPersonalesNoPatologicos.tratamientoDieteticoPrevio = tempAntecedentesPersonalesNoPatologicos.tratamientoDieteticoPrevio
                state.antecedentesPersonalesNoPatologicos.tiempo = tempAntecedentesPersonalesNoPatologicos.tiempo
                state.antecedentesPersonalesNoPatologicos.resultado = tempAntecedentesPersonalesNoPatologicos.resultado
                state.antecedentesPersonalesNoPatologicos.tratamientoFarma = tempAntecedentesPersonalesNoPatologicos.tratamientoFarma
                state.antecedentesPersonalesNoPatologicos.actividadFicica = tempAntecedentesPersonalesNoPatologicos.actividadFicica
                state.antecedentesPersonalesNoPatologicos.sedentarismo = tempAntecedentesPersonalesNoPatologicos.sedentarismo
                state.antecedentesPersonalesNoPatologicos.moderado = tempAntecedentesPersonalesNoPatologicos.moderado
                state.antecedentesPersonalesNoPatologicos.activo = tempAntecedentesPersonalesNoPatologicos.activo
                state.antecedentesPersonalesNoPatologicos.ejercicio = tempAntecedentesPersonalesNoPatologicos.ejercicio
                state.antecedentesPersonalesNoPatologicos.frecuencia = tempAntecedentesPersonalesNoPatologicos.frecuencia
                state.antecedentesPersonalesNoPatologicos.duracion = tempAntecedentesPersonalesNoPatologicos.duracion
                state.antecedentesPersonalesNoPatologicos.motivoConsulta = tempAntecedentesPersonalesNoPatologicos.motivoConsulta
            }

            if (window.localStorage.getItem('tempComidas') !== null) {
                let tempComidas = JSON.parse(window.localStorage.getItem('tempComidas'))
                state.comidas.noComidas = tempComidas.noComidas
                state.comidas.desayuno.hora = tempComidas.desayuno.hora
                state.comidas.desayuno.descripcion = tempComidas.desayuno.descripcion
                state.comidas.comida.hora = tempComidas.comida.hora
                state.comidas.comida.descripcion = tempComidas.comida.descripcion
                state.comidas.mediaManana.hora = tempComidas.mediaManana.hora
                state.comidas.mediaManana.descripcion = tempComidas.mediaManana.descripcion
                state.comidas.mediaTarde.hora = tempComidas.mediaTarde.hora
                state.comidas.mediaTarde.descripcion = tempComidas.mediaTarde.descripcion
                state.comidas.cena.hora = tempComidas.cena.hora
                state.comidas.cena.descripcion = tempComidas.cena.descripcion
                state.comidas.adicional.hora = tempComidas.adicional.hora
                state.comidas.adicional.descripcion = tempComidas.adicional.descripcion
            }

            if (window.localStorage.getItem('tempAntropometria') !== null) {
                let tempAntropometria = JSON.parse(window.localStorage.getItem('tempAntropometria'))
                state.antropometria.peso = tempAntropometria.peso
                state.antropometria.estatura = tempAntropometria.estatura
                state.antropometria.imc = tempAntropometria.imc
                state.antropometria.porcentajeGrasa = tempAntropometria.porcentajeGrasa
                state.antropometria.porcentajeMusculo = tempAntropometria.porcentajeMusculo
                state.antropometria.cintura = tempAntropometria.cintura
                state.antropometria.cadera = tempAntropometria.cadera
                state.antropometria.icc = tempAntropometria.icc
                state.antropometria.espalda = tempAntropometria.espalda
                state.antropometria.pectoral = tempAntropometria.pectoral
                state.antropometria.cinturaAlta = tempAntropometria.cinturaAlta
                state.antropometria.izquierdo.pbiRelajado = tempAntropometria.izquierdo.pbiRelajado
                state.antropometria.izquierdo.pbiFlexionado = tempAntropometria.izquierdo.pbiFlexionado
                state.antropometria.izquierdo.ppa = tempAntropometria.izquierdo.ppa
                state.antropometria.izquierdo.pp = tempAntropometria.izquierdo.pp
                state.antropometria.derecho.pbiRelajado = tempAntropometria.derecho.pbiRelajado
                state.antropometria.derecho.pbiFlexionado = tempAntropometria.derecho.pbiFlexionado
                state.antropometria.derecho.ppa = tempAntropometria.derecho.ppa
                state.antropometria.derecho.pp = tempAntropometria.derecho.pp
            }

            if (window.localStorage.getItem('tempClinico') !== null) {
                let tempClinico = JSON.parse(window.localStorage.getItem('tempClinico'))
                state.clinico.glucosa = tempClinico.glucosa
                state.clinico.ta = tempClinico.ta
                state.clinico.hidratacion = tempClinico.hidratacion
                state.clinico.noEvacuaciones = tempClinico.noEvacuaciones
                state.clinico.evacuaciones = tempClinico.evacuaciones
                state.clinico.malestaresGeneral = tempClinico.malestaresGeneral
            }

            if (window.localStorage.getItem('tempDietetico') !== null) {
                let tempDietetico = JSON.parse(window.localStorage.getItem('tempDietetico'))
                state.dietetico.apegoPlan = tempDietetico.apegoPlan
                state.dietetico.escalaSueno = tempDietetico.escalaSueno
                state.dietetico.horaDespertar = tempDietetico.horaDespertar
                state.dietetico.horaDormir = tempDietetico.horaDormir
                state.dietetico.emociones = tempDietetico.emociones
                state.dietetico.conductasAlimentarias = tempDietetico.conductasAlimentarias
                state.dietetico.logros = tempDietetico.logros
                state.dietetico.areasOportuidad = tempDietetico.areasOportuidad
            }

            if (window.localStorage.getItem('tempHabitos') !== null) {
                let tempHabitos = JSON.parse(window.localStorage.getItem('tempHabitos'))
                state.habitos.pasosDiarios = tempHabitos.pasosDiarios
                state.habitos.ejercicio = tempHabitos.ejercicio
                state.habitos.controlHambreSaciedad = tempHabitos.controlHambreSaciedad
                state.habitos.porciones = tempHabitos.porciones
                state.habitos.organizacion = tempHabitos.organizacion
                state.habitos.calificacion = tempHabitos.calificacion
                state.habitos.observaciones = tempHabitos.observaciones
            }
        },
        SET_PERSONAL_DATA(state) {
            window.localStorage.removeItem('tempDatosPersonales')
            window.localStorage.removeItem('tempAntecedentesHeredofamiliares')
            window.localStorage.removeItem('tempAntecedentesPersonalesPatologicos')
            window.localStorage.removeItem('tempAntecedentesGinecoObstetricos')
            window.localStorage.removeItem('tempAntecedentesPersonalesNoPatologicos')
            window.localStorage.removeItem('tempComidas')
            window.localStorage.removeItem('tempAntropometria')
            window.localStorage.removeItem('tempClinico')
            window.localStorage.removeItem('tempDietetico')
            window.localStorage.removeItem('tempHabitos')

            state.isRegisteredUser = false
            state.datosPersonales.nombre = ''
            state.datosPersonales.apellidoPaterno = ''
            state.datosPersonales.apellidoMaterno = ''
            state.datosPersonales.fechaNac = ''
            state.datosPersonales.edad = ''
            state.datosPersonales.genero = false
            state.datosPersonales.telefono = ''
            state.datosPersonales.estadoCivil = ''
            state.datosPersonales.ocupacion = ''
            state.datosPersonales.padecimientoActual = ''
            state.datosPersonales.direccion = ''
            state.datosPersonales.tipoConsulta = ''

            state.antecedentesHeredofamiliares.diabetes = ''
            state.antecedentesHeredofamiliares.cancer = ''
            state.antecedentesHeredofamiliares.hipertencionArtereal = ''
            state.antecedentesHeredofamiliares.obesidad = ''
            state.antecedentesHeredofamiliares.cardiopatias = ''
            state.antecedentesHeredofamiliares.hepaticos = ''
            state.antecedentesHeredofamiliares.dislipidemias = ''
            state.antecedentesHeredofamiliares.otros = ''

            state.antecedentesPersonalesPatologicos.quirurgicos = ''
            state.antecedentesPersonalesPatologicos.obesidad = ''
            state.antecedentesPersonalesPatologicos.estrenimiento = ''
            state.antecedentesPersonalesPatologicos.dislipidemias = ''
            state.antecedentesPersonalesPatologicos.anemia = ''
            state.antecedentesPersonalesPatologicos.hemorroides = ''
            state.antecedentesPersonalesPatologicos.cancer = ''
            state.antecedentesPersonalesPatologicos.gastritis = ''
            state.antecedentesPersonalesPatologicos.diverticulos = ''
            state.antecedentesPersonalesPatologicos.hipertencionArtereal = ''
            state.antecedentesPersonalesPatologicos.colitis = ''
            state.antecedentesPersonalesPatologicos.otros = ''

            state.antecedentesGinecoObstetricos.menarca = ''
            state.antecedentesGinecoObstetricos.fum = ''
            state.antecedentesGinecoObstetricos.climaterio = ''
            state.antecedentesGinecoObstetricos.noGestas = ''
            state.antecedentesGinecoObstetricos.noPartos = ''
            state.antecedentesGinecoObstetricos.abortos = false
            state.antecedentesGinecoObstetricos.complicaciones = ''
            state.antecedentesGinecoObstetricos.semanasGestacion = ''
            state.antecedentesGinecoObstetricos.anticonceptivos = ''
            state.antecedentesGinecoObstetricos.caracteristicasCiclo = ''

            state.antecedentesPersonalesNoPatologicos.tabaquismo = ''
            state.antecedentesPersonalesNoPatologicos.alcoholismo = ''
            state.antecedentesPersonalesNoPatologicos.alergias = ''
            state.antecedentesPersonalesNoPatologicos.intolerancias = ''
            state.antecedentesPersonalesNoPatologicos.averacionesAlimentarias = ''
            state.antecedentesPersonalesNoPatologicos.cambiosIngesta = ''
            state.antecedentesPersonalesNoPatologicos.causas = ''
            state.antecedentesPersonalesNoPatologicos.tratamientoDieteticoPrevio = ''
            state.antecedentesPersonalesNoPatologicos.tiempo = ''
            state.antecedentesPersonalesNoPatologicos.resultado = ''
            state.antecedentesPersonalesNoPatologicos.tratamientoFarma = ''
            state.antecedentesPersonalesNoPatologicos.actividadFicica = false
            state.antecedentesPersonalesNoPatologicos.sedentarismo = false
            state.antecedentesPersonalesNoPatologicos.moderado = false
            state.antecedentesPersonalesNoPatologicos.activo = false
            state.antecedentesPersonalesNoPatologicos.ejercicio = ''
            state.antecedentesPersonalesNoPatologicos.frecuencia = ''
            state.antecedentesPersonalesNoPatologicos.duracion = ''
            state.antecedentesPersonalesNoPatologicos.motivoConsulta = ''

            state.comidas.noComidas = ''
            state.comidas.desayuno.hora = ''
            state.comidas.desayuno.descripcion = ''
            state.comidas.comida.hora = ''
            state.comidas.comida.descripcion = ''
            state.comidas.mediaManana.hora = ''
            state.comidas.mediaManana.descripcion = ''
            state.comidas.mediaTarde.hora = ''
            state.comidas.mediaTarde.descripcion = ''
            state.comidas.cena.hora = ''
            state.comidas.cena.descripcion = ''
            state.comidas.adicional.hora = ''
            state.comidas.adicional.descripcion = ''

            state.antropometria.peso = ''
            state.antropometria.estatura = ''
            state.antropometria.imc = ''
            state.antropometria.porcentajeGrasa = ''
            state.antropometria.porcentajeMusculo = ''
            state.antropometria.cintura = ''
            state.antropometria.cadera = ''
            state.antropometria.icc = ''
            state.antropometria.espalda = ''
            state.antropometria.pectoral = ''
            state.antropometria.cinturaAlta = ''
            state.antropometria.izquierdo.pbiRelajado = ''
            state.antropometria.izquierdo.pbiFlexionado = ''
            state.antropometria.izquierdo.ppa = ''
            state.antropometria.izquierdo.pp = ''
            state.antropometria.derecho.pbiRelajado = ''
            state.antropometria.derecho.pbiFlexionado = ''
            state.antropometria.derecho.ppa = ''
            state.antropometria.derecho.pp = ''

            state.clinico.glucosa = ''
            state.clinico.ta = ''
            state.clinico.hidratacion = ''
            state.clinico.noEvacuaciones = ''
            state.clinico.evacuaciones = ''
            state.clinico.malestaresGeneral = ''

            state.dietetico.apegoPlan = ''
            state.dietetico.escalaSueno = ''
            state.dietetico.horaDespertar = ''
            state.dietetico.horaDormir = ''
            state.dietetico.emociones = ''
            state.dietetico.conductasAlimentarias = ''
            state.dietetico.logros = ''
            state.dietetico.areasOportuidad = ''

            state.habitos.pasosDiarios = ''
            state.habitos.ejercicio = ''
            state.habitos.controlHambreSaciedad = ''
            state.habitos.porciones = ''
            state.habitos.organizacion = ''
            state.habitos.calificacion = ''
            state.habitos.observaciones = ''
            state.habitos.objetivos = ''
        }
    },
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
        getComidas(state) {
            return state.comidas
        },
        getAntropometria(state) {
            return state.antropometria
        },
        getClinico(state) {
            return state.clinico
        },
        getDietetico(state) {
            return state.dietetico
        },
        getHabitos(state) {
            return state.habitos
        },
        getIsRegisteredUser(state) {
            return state.isRegisteredUser
        },
        getHistoricoConsulta(state) {
            return state.medidasHistorico
        }
    }
}
