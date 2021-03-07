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
            <DatosPersonales  v-if="step.id === 2"></DatosPersonales>
            <AntecedentesHeredofamiliares v-if="step.id === 3"></AntecedentesHeredofamiliares>
            <AntecedentesPersonalesPatologicos v-if="step.id === 4"></AntecedentesPersonalesPatologicos>
            <AntecedentesGinecoObstetricos v-if="step.id === 5"></AntecedentesGinecoObstetricos>
            <AntecedentesPersonalesNoPatologicos v-if="step.id === 6"></AntecedentesPersonalesNoPatologicos>
            <Antropometria v-if="step.id === 7"></Antropometria>
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
                v-if="step.requiresSecondaryButton && step.id != 7"
                text
                @click="stepsProperties.numberOfSteps --"
            >
                Regresar
            </v-btn>
            <v-btn
                v-if="step.id === 7"
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
import DatosPersonales from "@/components/personalData/DatosPersonales"
import AntecedentesHeredofamiliares from "@/components/personalData/AntecedentesHeredofamiliares"
import AntecedentesPersonalesPatologicos from "@/components/personalData/AntecedentesPersonalesPatologicos"
import AntecedentesGinecoObstetricos from "@/components/personalData/AntecedentesGinecoObstetricos"
import AntecedentesPersonalesNoPatologicos from "@/components/personalData/AntecedentesPersonalesNoPatologicos"
import Antropometria from "@/components/personalData/Antropometria"

export default {
  name: 'Steps',
    components: {
      MessageAlerts,
      Dialogs,
      WelcomeMessage,
      DatosPersonales,
      AntecedentesHeredofamiliares,
      AntecedentesPersonalesPatologicos,
      AntecedentesGinecoObstetricos,
      AntecedentesPersonalesNoPatologicos,
      Antropometria
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
        datosPersonales() {
            return this.$store.getters['PersonalData/getDatosPersonales']
        },
        datosAntropometricos() {
          return this.$store.getters['PersonalData/getAntropometria']
        },
        alerts() {
            return this.$store.getters['MessageAlerts/getAlerts']
        },
        dialog() {
            return this.$store.getters['Dialogs/getDialog']
        },
        validaDatosPersonales() {
          console.log('DATA: ', this.datosPersonales)
            const {
              nombre,
              apellidoPaterno,
              apellidoMaterno,
              fechaNac,
              edad,
              telefono,
              estadoCivil,
              ocupacion
            } = this.datosPersonales
            return !!nombre && !!apellidoPaterno && !!apellidoMaterno
                && !!fechaNac && !!edad && !!telefono && !!estadoCivil
                && !!ocupacion
        },
        validaAntropometria() {
          const {
            cintura,
            cadera,
            estatura,
            peso
          } = this.datosAntropometricos
          return !!cintura && !!cadera && !!estatura
              && !!peso
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
                    validations.isDataValid = this.validaDatosPersonales
                    validations.message = '¡Hey! Faltan Datos Personales, por completar.'
                    this.validationOfDataAndPropertiesToShowSeccion(validations)
                    break;
                case 7:
                    validations.id = id
                    validations.isValid = isValid
                    validations.isDataValid = this.validaAntropometria
                    validations.message = '¡Hey! Faltan Datos de Antropometría, por completar.'
                    this.validationOfDataAndPropertiesToShowSeccion(validations)
                    break;
                default:
                    this.stepsProperties.arrayOfSteps[id].isValid = true
                    this.stepsProperties.numberOfSteps ++
                    break;
            }
        },
        validationOfDataAndPropertiesToShowSeccion(validations) {
            if (validations.isValid && validations.isDataValid) {
              if (validations.id === 7) {
                this.sendRegister()
              } else {
                this.stepsProperties.arrayOfSteps[validations.id].isValid = true
                this.stepsProperties.numberOfSteps ++
              }
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
                    text: `¿Estas segua de que quieres cancera tu registro?,
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
