<template>
  <v-container>
    <v-card elevation="0">
      <v-card-subtitle>
       <h3> Paciente: {{ $store.state.PersonalData.nobreCompleto }} </h3>
      </v-card-subtitle>
      <v-tabs
          v-model="tab"
          background-color="light-green lighten-4"
          color="black"
          center-active
      >
        <v-tab
            v-for="item in items"
            :key="item.tab"
            :hidden="!item.isAllowed"
            @click="guardaTempData()"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in items"
            :key="item.tab"
        >
          <Antropometria v-if="item.content === 1"></Antropometria>
          <Clinico v-if="item.content === 2"></Clinico>
          <Dietetico v-if="item.content === 3"></Dietetico>
          <CambioHabitos v-if="item.content === 4"></CambioHabitos>
        </v-tab-item>
      </v-tabs-items>
      <v-card-actions class="text-center">
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-btn block v-if="tab === 3"
                   @click="enviaRegistroConsulta()"
                   color="primary"
            >Guardar</v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-btn block v-if="tab === 3"
                   @click="cancelRegister()"
                   color="error"
            >Cancelar</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
    <MessageAlerts class="mt-3"
                   v-if="alerts.snackbar.modelMessage"
    ></MessageAlerts>
    <Dialogs v-if="dialog.isShowDialog"></Dialogs>
  </v-container>
</template>

<script>
import MessageAlerts from '../forms/MessageAlerts'
import Dialogs from '../forms/Dialogs'
import Antropometria from '@/components/personalData/Antropometria'
import Clinico from '@/components/personalData/Clinico'
import Dietetico from '@/components/personalData/Dietetico'
import CambioHabitos from '@/components/personalData/CambioHabitos'
export default {
  name: "CunsultasSubsecuentes",
  components: {
    MessageAlerts,
    Dialogs,
    Antropometria,
    Clinico,
    Dietetico,
    CambioHabitos
  },
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Antropometria', content: 1, isAllowed: true },
        { tab: 'Clinico', content: 2, isAllowed: true },
        { tab: 'Dietetico', content: 3, isAllowed: true },
        { tab: 'Cambio de Habitos', content: 4, isAllowed: true }
      ]
    }
  },
  provide() {
    return {
      $validator: this.$validator
    }
  },
  computed: {
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
        izquierdo,
        derecho
      } = this.datosAntropometricos
      return !!peso && !!estatura && !!imc
          && !!porcentajeGrasa && !!porcentajeMusculo && !!cintura
          && !!cadera && !!icc && !!espalda
          && !!pectoral && !!cinturaAlta && !!izquierdo.pbiRelajado
          && !!izquierdo.pbiFlexionado && !!izquierdo.ppa && !!izquierdo.pp
          && !!derecho.pbiFlexionado && !!derecho.ppa && !!derecho.pp
          && !!derecho.pbiRelajado
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
    guardaTempData() {
      if (this.validaAntropometria) {
        window.localStorage.setItem('tempAntropometria', JSON.stringify(this.datosAntropometricos))
      }
      if (this.validaClinico) {
        window.localStorage.setItem('tempClinico', JSON.stringify(this.clinico))
      }
      if (this.validaDietetico) {
        window.localStorage.setItem('tempDietetico', JSON.stringify(this.dietetico))
      }
      if (this.validaHabitos) {
        window.localStorage.setItem('tempHabitos', JSON.stringify(this.habitos))
      }
    },
    enviaRegistroConsulta() {
      if (this.validaAntropometria && this.validaClinico
          && this.validaDietetico && this.validaHabitos) {
        this.$store.commit('SET_PROCESSING_REQUEST', true)
        this.$store.dispatch('PersonalData/sendHistoricoConsulta', this.$store.state.PersonalData.datosPersonales.idPaciente).then(resp => {
          console.log('resp', resp)
          if (resp) {
            this.tab = 0
          }
        })
      } else {
        this.showAlert('¡Hey! Faltan Datos por Completar.')
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

<style scoped>

</style>
