<template>
  <v-stepper
    v-model="stepsProperties.numberOfSteps"
    vertical
  >
    <div
        v-for="step in stepsProperties.arrayOfSteps" :key="step.id"
    >
        <v-stepper-step
            :complete="stepsProperties.numberOfSteps > step.id"
            :step="step.id"
            class="display-5"
        >
            {{
                step.title
            }}
            <small>
                {{
                    step.subTitle
                }}
            </small>
        </v-stepper-step>

        <v-stepper-content :step="step.id">
            <WelcomeMessage  v-if="step.id === 1"></WelcomeMessage>
            <IdentificationFile  v-if="step.id === 2"></IdentificationFile>
            <ClinicHistory  v-if="step.id === 3"></ClinicHistory>
            <AllergiesIntolerance  v-if="step.id === 4"></AllergiesIntolerance>
            <Indications  v-if="step.id === 5"></Indications>
            <v-btn
                class="my-2"
                :color="step.btnColor"
                :disabled="!step.isValid && step.id != 1"
                @click.prevent="validateForm(step.id, step.isValid)"
            >
                {{
                    step.primaryBtnTitle
                }}
            </v-btn>
            <v-btn
                v-if="step.requiresSecondaryButton && step.id != 5"
                text
                @click="stepsProperties.numberOfSteps --"
            >
                Regresar
            </v-btn>
            <v-btn
                v-if="step.id === 5"
                color="red darken-3primary"
                text
                @click="cancelRegister"
            >
                Cancelar
            </v-btn>
         </v-stepper-content>
        <MessageAlerts class="mt-3"
            v-if="alerts.snackbar.modelMessage"
        ></MessageAlerts>
        <Dialogs v-if="dialog.isShowDialog"></Dialogs>
    </div>
  </v-stepper>
</template>

<script>
import MessageAlerts from '../forms/MessageAlerts'
import Dialogs from '../forms/Dialogs'
import WelcomeMessage from '../personalData/WelcomeMessage'
import IdentificationFile from '../personalData/IdentificationFile'
import ClinicHistory from '../personalData/ClinicHistory'
import AllergiesIntolerance from '../personalData/AllergiesIntolerance'
import Indications from '../personalData/Indications'

export default {
    name: 'Steps',
    components: {
        MessageAlerts,
        Dialogs,
        WelcomeMessage,
        IdentificationFile,
        ClinicHistory,
        AllergiesIntolerance,
        Indications
    },
    data: () => ({}),
    provide() {
        return {
            $validator: this.$validator
        }
    },
    computed: {
        stepsProperties() {
            return this.$store.getters['Steps/getSteps']
        },
        personalParameters() {
            return this.$store.getters['PersonalData/getPersonalData']
        },
        clinicHistoryParameters() {
            return this.$store.getters['PersonalData/getClinicHistoryData']
        },
        alerts() {
            return this.$store.getters['MessageAlerts/getAlerts']
        },
        dialog() {
            return this.$store.getters['Dialogs/getDialog']
        },
        validPersonalData() {
            const {
                name,
                lastName,
                motherLastName,
                dateOfBirth,
                age,
                phoneNumber
            } = this.personalParameters
            return !!name && !!lastName && !!motherLastName
                && !!dateOfBirth && !!age && !!phoneNumber
        },
        validClinicHistory() {
            const {
             actualWeight,
             height,
             measurements
            } = this.clinicHistoryParameters
            return !!actualWeight && height && !!measurements
        }
    },
    methods: {
        validateForm(id, isValid) {
            let validations = {
                id: 0,
                isValid: false,
                isDataValid: false,
                message: ''
            }
            switch (id) {
                case 1:
                    this.stepsProperties.numberOfSteps ++
                    break;
                case 2:
                    validations.id = id
                    validations.isValid = isValid
                    validations.isDataValid = this.validPersonalData
                    validations.message = '¡Hey! Faltan datos de tu (Ficha de Identificación).'
                    this.validationOfDataAndPropertiesToShowSeccion(validations)
                    break;
                case 3:
                    validations.id = id
                    validations.isValid = isValid
                    validations.isDataValid = this.validClinicHistory
                    validations.message = '¡Hey! Faltan datos de tu (Historia clínica).'
                    this.validationOfDataAndPropertiesToShowSeccion(validations)
                    break;
                case 5:
                    if (validations.isValid && validations.isDataValid) {
                      this.stepsProperties.arrayOfSteps[validations.id].isValid = true
                      this.stepsProperties.numberOfSteps ++
                    } else {
                      this.sendRegister()
                    }
                    break;
                default:
                    this.stepsProperties.arrayOfSteps[id].isValid = true
                    this.stepsProperties.numberOfSteps ++
                    break;
            }
        },
        validationOfDataAndPropertiesToShowSeccion(validations) {
            if (validations.isValid && validations.isDataValid) {
                this.stepsProperties.arrayOfSteps[validations.id].isValid = true
                this.stepsProperties.numberOfSteps ++
            } else {
                this.showAlert(validations.message)
            }
        },
        sendRegister() {
            this.stepsProperties.loading = true
            this.$store.state.Dialogs = {
                width: '500',
                isShowDialog: true,
                card: {
                    title: 'Consentimiento',
                    text: `Por este acto se permite informar que el/la persona hace constar en este documento que la información
                            proporcionada por la Nutrióloga tratante, le es suficiente para tomar su decisión sobre el consentimiento solicitado y
                            la vez manifiesta libremente al acceder y aceptar este reto; mismo que es totalmente responsable al decidir continuar
                            este plan nutricional, como también lo es de su salud.`,
                    cardActions: {
                        btnColor: 'primary',
                        btnTitle: 'Acepto',
                        btnAction: 'PersonalData/sendRegister'
                    }
                }
            }
            this.$store.state.Dialogs.isShowDialog = true
        },
        cancelRegister() {
            this.$store.state.Dialogs = {
                width: '500',
                isShowDialog: true,
                card: {
                    title: 'Cancelar Registro',
                    text: `¿Estas segu@ de que quieres cancera tu registro?,
                    perderás todo lo que ingresaste en las secciones.`,
                    cardActions: {
                        btnColor: 'primary',
                        btnTitle: 'Acepto',
                        btnAction: 'PersonalData/cancelRegister'
                    }
                }
            }
            this.$store.state.Dialogs.isShowDialog = true
        },
        showAlert(message) {
            this.$store.state.MessageAlerts = {
                type: 'snackbar',
                snackbar: {
                    isShow: true,
                    modelMessage: true,
                    multiLine: true,
                    message: message,
                    snackbar: false,
                    btnTitle: 'Cerrar',
                    btnColor: 'white',
                    color: 'red darken-3'
                }
            }
        }
    }
}
</script>
