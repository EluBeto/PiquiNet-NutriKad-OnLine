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
            <DatosPersonales  v-if="step.id === 1"></DatosPersonales>
            <AntecedentesHeredofamiliares v-if="step.id === 2"></AntecedentesHeredofamiliares>
            <AntecedentesPersonalesPatologicos v-if="step.id === 3"></AntecedentesPersonalesPatologicos>
            <AntecedentesGinecoObstetricos v-if="step.id === 4"></AntecedentesGinecoObstetricos>
            <AntecedentesPersonalesNoPatologicos v-if="step.id === 5"></AntecedentesPersonalesNoPatologicos>
            <Comidas v-if="step.id === 6"></Comidas>
            <Antropometria v-if="step.id === 7"></Antropometria>
            <Clinico v-if="step.id === 8"></Clinico>
            <Dietetico v-if="step.id === 9"></Dietetico>
            <CambioHabitos v-if="step.id === 10"></CambioHabitos>
            <v-btn
                class="my-2"
                :color="step.btnColor"
                :disabled="!step.isValid"
                @click.prevent="validateForm(step.id, step.isValid)"
            >
                {{
                    step.primaryBtnTitle
                }}
            </v-btn>
            <v-btn
                v-if="step.requiresSecondaryButton"
                text
                @click="stepsProperties.numberOfSteps --"
            >
                Regresar
            </v-btn>
          <v-btn
              v-if="step.id === 10"
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
import DatosPersonales from "@/components/personalData/DatosPersonales"
import AntecedentesHeredofamiliares from "@/components/personalData/AntecedentesHeredofamiliares"
import AntecedentesPersonalesPatologicos from "@/components/personalData/AntecedentesPersonalesPatologicos"
import AntecedentesGinecoObstetricos from "@/components/personalData/AntecedentesGinecoObstetricos"
import AntecedentesPersonalesNoPatologicos from "@/components/personalData/AntecedentesPersonalesNoPatologicos"
import Antropometria from "@/components/personalData/Antropometria"
import Comidas from "@/components/personalData/Comidas"
import Clinico from "@/components/personalData/Clinico"
import Dietetico from "@/components/personalData/Dietetico"
import CambioHabitos from "@/components/personalData/CambioHabitos"

export default {
  name: 'Steps',
  components: {
    MessageAlerts,
    Dialogs,
    DatosPersonales,
    AntecedentesHeredofamiliares,
    AntecedentesPersonalesPatologicos,
    AntecedentesGinecoObstetricos,
    AntecedentesPersonalesNoPatologicos,
    Antropometria,
    Comidas,
    Clinico,
    Dietetico,
    CambioHabitos
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
    antecedentesHeredofamiliares() {
      return this.$store.getters['PersonalData/getAntecedentesHeredofamiliares']
    },
    antecedentesPersonalesPatologicos() {
      return this.$store.getters['PersonalData/getAntecedentesPersonalesPatologicos']
    },
    antecedentesGinecoObstetricos() {
      return this.$store.getters['PersonalData/getAntecedentesGinecoObstetricos']
    },
    antecedentesPersonalesNoPatologicos() {
      return this.$store.getters['PersonalData/getAntecedentesPersonalesNoPatologicos']
    },
    comidas() {
      return this.$store.getters['PersonalData/getComidas']
    },
    datosAntropometricos() {
      return this.$store.getters['PersonalData/getAntropometria']
    },
    clinico() {
      return this.$store.getters['PersonalData/getClinico']
    },
    dietetico() {
      return this.$store.getters['PersonalData/getDietetico']
    },
    habitos() {
      return this.$store.getters['PersonalData/getHabitos']
    },
    alerts() {
      return this.$store.getters['MessageAlerts/getAlerts']
    },
    dialog() {
      return this.$store.getters['Dialogs/getDialog']
    },
    validaDatosPersonales() {
      const {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNac,
        edad,
        telefono,
        estadoCivil,
        ocupacion,
        tipoConsulta
      } = this.datosPersonales
      return !!nombre && !!apellidoPaterno && !!apellidoMaterno
          && !!fechaNac && !!edad && !!telefono && !!estadoCivil
          && !!ocupacion && !!tipoConsulta
    },
    validaAntecedentesHeredofamiliares() {
      const {
        diabetes,
        cancer,
        hipertencionArtereal,
        obesidad,
        cardiopatias,
        hepaticos,
        dislipidemias
      } = this.antecedentesHeredofamiliares
      return !!diabetes && !!cancer && !!hipertencionArtereal
          && !!obesidad && !!cardiopatias && !!hepaticos && !!dislipidemias
    },
    validaAntecedentesPersonalesPatologicos() {
      const {
        quirurgicos,
        obesidad,
        estrenimiento,
        dislipidemias,
        anemia,
        hemorroides,
        cancer,
        gastritis,
        diverticulos,
        hipertencionArtereal,
        colitis
      } = this.antecedentesPersonalesPatologicos
      return !!quirurgicos && !!obesidad && !!estrenimiento
          && !!dislipidemias && !!anemia && !!hemorroides
          && !!cancer && !!gastritis && !!diverticulos
          && !!hipertencionArtereal && !!colitis
    },
    validaAntecedentesGinecoObstetricos() {
      if (this.datosPersonales.genero) {
        const {
          menarca,
          fum,
          climaterio,
          anticonceptivos,
          caracteristicasCiclo
        } = this.antecedentesGinecoObstetricos
        return !!menarca && !!fum && !!anticonceptivos
            && !!caracteristicasCiclo && !!climaterio
      } else {
        return true
      }
    },
    validaAntecedentesPersonalesNoPatologicos() {
      const {
        tabaquismo,
        alcoholismo,
        alergias,
        intolerancias,
        averacionesAlimentarias,
        cambiosIngesta,
        causas,
        tratamientoDieteticoPrevio,
        tiempo,
        resultado,
        tratamientoFarma,
        motivoConsulta
      } = this.antecedentesPersonalesNoPatologicos
      return !!tabaquismo && !!alcoholismo && !!alergias
          && !!intolerancias && !!averacionesAlimentarias && !!cambiosIngesta
          && !!causas && !!tratamientoDieteticoPrevio && !!tiempo
          && !!resultado && !!tratamientoFarma && !!motivoConsulta
    },
    validaComidas() {
      const {
        noComidas,
      } = this.comidas
      return !!noComidas
    },
    validaAntropometria() {
      const {
        peso,
        estatura,
        imc,
        porcentajeGrasa,
        porcentajeMusculo,
        cintura,
        cadera,
        icc,
        espalda,
        pectoral,
        cinturaAlta,
        edadMetabolica,
        grasaBiceral
      } = this.datosAntropometricos
      return !!peso && !!estatura && !!imc
          && !!porcentajeGrasa && !!porcentajeMusculo && !!cintura
          && !!cadera && !!icc && !!espalda
          && !!pectoral && !!cinturaAlta && !!edadMetabolica && !!grasaBiceral
    },
    validaClinico() {
      const {
        glucosa,
        ta,
        hidratacion,
        noEvacuaciones,
        evacuaciones,
        malestaresGeneral
      } = this.clinico
      return !!glucosa && !!ta && !!hidratacion
          && !!noEvacuaciones && !!evacuaciones && !!malestaresGeneral
    },
    validaDietetico() {
      const {
        apegoPlan,
        escalaSueno,
        horaDespertar,
        horaDormir,
        emociones,
        conductasAlimentarias,
        logros,
        areasOportuidad
      } = this.dietetico
      return !!apegoPlan && !!escalaSueno && !!horaDespertar
          && !!horaDormir && !!emociones && !!conductasAlimentarias
          && !!logros && !!areasOportuidad
    },
    validaHabitos() {
      const {
        pasosDiarios,
        ejercicio,
        controlHambreSaciedad,
        porciones,
        organizacion,
        calificacion,
        observaciones
      } = this.habitos
      return !!pasosDiarios && !!ejercicio && !!controlHambreSaciedad
          && !!porciones && !!organizacion && !!calificacion
          && !!observaciones
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
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaDatosPersonales
          validations.message = '¡Hey! Faltan Datos Personales, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 2:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaAntecedentesHeredofamiliares
          validations.message = '¡Hey! Faltan Antecedentes Heredo Familiares, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 3:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaAntecedentesPersonalesPatologicos
          validations.message = '¡Hey! Faltan Antecedentes Personales Patologicos, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 4:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaAntecedentesGinecoObstetricos
          validations.message = '¡Hey! Faltan Antecedentes Gineco Obstetricos, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 5:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaAntecedentesPersonalesNoPatologicos
          validations.message = '¡Hey! Faltan Antecedentes Personales No Patologicos, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 6:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaComidas
          validations.message = '¡Hey! Faltan Datos en Comidas, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 7:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaAntropometria
          validations.message = '¡Hey! Faltan Datos de Antropometría, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 8:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaClinico
          validations.message = '¡Hey! Faltan Datos Clínicos, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 9:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaDietetico
          validations.message = '¡Hey! Faltan Datos Dietéticos, por completar.'
          this.validationOfDataAndPropertiesToShowSeccion(validations)
          break;
        case 10:
          validations.id = id
          validations.isValid = isValid
          validations.isDataValid = this.validaHabitos
          validations.message = '¡Hey! Faltan Datos Hábitos, por completar.'
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
        switch (validations.id) {
          case 1:
            window.localStorage.setItem('tempDatosPersonales', JSON.stringify(this.datosPersonales))
            break;
          case 2:
            window.localStorage.setItem('tempAntecedentesHeredofamiliares', JSON.stringify(this.antecedentesHeredofamiliares))
            break;
          case 3:
            window.localStorage.setItem('tempAntecedentesPersonalesPatologicos', JSON.stringify(this.antecedentesPersonalesPatologicos))
            break;
          case 4:
            window.localStorage.setItem('tempAntecedentesGinecoObstetricos', JSON.stringify(this.antecedentesGinecoObstetricos))
            break;
          case 5:
            window.localStorage.setItem('tempAntecedentesPersonalesNoPatologicos', JSON.stringify(this.antecedentesPersonalesNoPatologicos))
            break;
          case 6:
            window.localStorage.setItem('tempComidas', JSON.stringify(this.comidas))
            break;
          case 7:
            window.localStorage.setItem('tempAntropometria', JSON.stringify(this.datosAntropometricos))
            break;
          case 8:
            window.localStorage.setItem('tempClinico', JSON.stringify(this.clinico))
            break;
          case 9:
            window.localStorage.setItem('tempDietetico', JSON.stringify(this.dietetico))
            break;
          case 10:
            window.localStorage.setItem('tempHabitos', JSON.stringify(this.habitos))
            break;
        }
        if (validations.id === 10) {
          this.$store.commit('SET_PROCESSING_REQUEST', true)
          this.$store.dispatch('PersonalData/sendRegister')
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
  },
  created() {
    this.$store.commit('PersonalData/SET_TEMP_DATA')
  }
}
</script>
