<template>
  <v-container>
    <v-card elevation="1">
      <v-card-subtitle class="text-center">
        <b>Datos del Paciente</b>
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <h4> Nombre: {{ $store.state.PersonalData.nobreCompleto }} </h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-card>
              <v-card-subtitle class="text-center">Medidas de ultima consulta</v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <h4>Fecha: {{ $store.state.PersonalData.medidasHistorico.fecha.substring(0, 10) }}</h4>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <h4> Peso Actual: {{ infoPeso }} </h4>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-row>
              <v-col cols="12" sm="12" md="12" v-if="this.$store.state.PersonalData.antropometria.peso !== ''">
                <h4  :style="`color: ${colorCalculoPeso}`">
                  {{ textCalculoPeso }} {{ calculaPerdidaPeso }} Kg.
                  <v-icon :color="colorCalculoPeso">
                    {{ indicadorCalculoPeso }}
                  </v-icon>
                </h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <br>
    <v-row>
      <v-col class="text-lg-end" cols="12" sm="12" md="12">
        <v-btn color="warning" @click="$store.dispatch('PersonalData/cancelRegister')">Limpiar Historia Clinica</v-btn>
      </v-col>
    </v-row>
    <v-card elevation="0">
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
    calculaIMC() {
      let imc = 0
      let estatura = this.ultimasMedidas.estatura
      let estaturaCuadrado = estatura * 2
      let peso = this.$store.state.PersonalData.antropometria.peso
      imc = peso / estaturaCuadrado
      return imc
    },
    ultimasMedidas() {
      return this.$store.getters['PersonalData/getHistoricoConsulta']
    },
    calculaPerdidaPeso() {
      let calculoPeso = 0
      let pesoAnterior = parseFloat(this.ultimasMedidas.peso)
      let pesoActual = parseFloat(this.$store.state.PersonalData.antropometria.peso)

      if(this.$store.state.PersonalData.antropometria.peso !== '') {
        if(pesoActual > pesoAnterior ) {
          calculoPeso = pesoActual - pesoAnterior
        } else {
          calculoPeso = pesoAnterior - pesoActual
        }
      }
      return calculoPeso.toFixed(2)
    },
    textCalculoPeso() {
      let texto = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if(pesoActual !== 0) {
        texto = pesoActual < pesoAnterior ? 'El paciente perdio: ' : 'El paciente gano: '
      } else {
        texto = 'El paciente morira: '
      }
      return texto
    },
    indicadorCalculoPeso() {
      let icon = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if(pesoActual !== 0) {
        icon = pesoActual < pesoAnterior ? 'mdi-menu-down-outline' : 'mdi-menu-up-outline'
      } else {
        icon = 'mdi-skull'
      }
      return icon
    },
    colorCalculoPeso() {
      let color = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if(pesoActual !== 0) {
        color = pesoActual < pesoAnterior ? 'green' : 'red'
      } else {
        color = 'black'
      }
      return color
    },
    infoPeso() {
      return this.ultimasMedidas.peso === ''
          ? 'Pendiente ...'
          : this.ultimasMedidas.peso + ' Kg.'
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
      console.log('TAB', this.tab)
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
          if (resp) {
            this.tab = 0
          }
        })
      } else {
        this.showAlert('¡Hey! Faltan Datos por Completar.')
        if (this.validaAntropometria === false) {
          this.tab = 0
        }
        if (!this.validaClinico === false) {
          this.tab = 1
        }
        if (!this.validaDietetico === false) {
          this.tab = 2
        }
        if (!this.validaHabitos === false) {
          this.tab = 3
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
