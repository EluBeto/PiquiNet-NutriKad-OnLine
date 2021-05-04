<template>
  <v-container>
    <v-card elevation="1">
      <v-card-subtitle class="text-center">
        <b>Datos del Paciente</b>
      </v-card-subtitle>
      <v-divider></v-divider>
      <HistoricoAntropometrico v-if="tab === 0 || tab === null || tab === 2 || tab === 3"></HistoricoAntropometrico>
      <HistoricoClinico v-if="tab === 1"></HistoricoClinico>
    </v-card>
    <br>
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-btn block v-if="tab === 3"
               @click="enviaRegistroConsulta()"
               color="primary"
        >Guardar</v-btn>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-btn block v-if="tab === 3"
               @click="cancelRegister()"
               color="error"
        >Cancelar</v-btn>
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-btn block color="warning" @click="$store.dispatch('PersonalData/cancelRegister')">Limpiar Historia Clinica
        <v-icon right>
          mdi-delete
        </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <br>
    <v-card elevation="0">
      <v-tabs
          v-model="tab"
          background-color="light-green lighten-4"
          color="black"
          center-active
      >
        <v-tab
            v-for="item in items"
            :key="item.content"
            :hidden="!item.isAllowed"
            @click="guardaTempData(item.content)"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in items"
            :key="item.content"
        >
          <Antropometria v-if="item.content === 1"></Antropometria>
          <Clinico v-if="item.content === 2"></Clinico>
          <Dietetico v-if="item.content === 3"></Dietetico>
          <CambioHabitos v-if="item.content === 4"></CambioHabitos>
        </v-tab-item>
      </v-tabs-items>
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
import HistoricoAntropometrico from "@/components/historicoConsulta/HistoricoAntropometrico";
import HistoricoClinico from "@/components/historicoConsulta/HistoricoClinico";

export default {
  name: "CunsultasSubsecuentes",
  components: {
    MessageAlerts,
    Dialogs,
    Antropometria,
    Clinico,
    Dietetico,
    CambioHabitos,
    HistoricoAntropometrico,
    HistoricoClinico
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
    calculaIMC() {
      let imc = 0
      let estatura = this.$store.state.PersonalData.antropometria.estatura
      let peso = this.$store.state.PersonalData.antropometria.peso
      if (estatura > 0 && peso > 0) {
        let estaturaCuadrado = estatura * estatura
        imc = peso / estaturaCuadrado
      }
      return imc.toFixed(2)
    },
    ultimasMedidas() {
      return this.$store.getters['PersonalData/getHistoricoConsulta']
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
    guardaTempData(tab) {
      this.tab = tab
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

        window.localStorage.setItem('tempHabitos', JSON.stringify(this.habitos))

        this.$store.commit('SET_PROCESSING_REQUEST', true)
        this.$store.dispatch('PersonalData/sendHistoricoConsulta', this.$store.state.PersonalData.datosPersonales.idPaciente).then(resp => {
          if (resp) {
            this.tab = 0
          } else {
            this.tab = 0
          }
        })
      } else {
        if (this.validaAntropometria === false) {
          this.showAlert('¡Hey! Faltan Datos de Atropometria por Completar.')
          this.tab = 0
          return
        }
        if (this.validaClinico === false) {
          this.showAlert('¡Hey! Faltan Datos Clínicos por Completar.')
          this.tab = 1
          return
        }
        if (this.validaDietetico === false) {
          this.showAlert('¡Hey! Faltan Datos Dietéticos por Completar.')
          this.tab = 2
          return
        }
        if (this.validaHabitos === false) {
          this.showAlert('¡Hey! Faltan Datos en Cambio de Hábitos por Completar.')
          this.tab = 3
          return
        }
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
  }
}
</script>

<style scoped>

</style>
