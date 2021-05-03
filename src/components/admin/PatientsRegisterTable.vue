<template>
  <v-container justify="center">
    <v-card>
      <v-card-title>
        <v-btn
            color="primary"
            dark
            class="mb-2"
            to="dashboard"
        >
          Nuevo Paciente
          <v-icon right>
            mdi-account-plus
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar paciente"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <br>
      <v-divider></v-divider>
      <v-card-subtitle class="text-center">
        Registro de pacientes
      </v-card-subtitle>
      <v-data-table
          :headers="GetHeadersTable"
          :items="patientsRegister"
          :search="search"
          class="elevation-1"
          locale="es-mx"
          multi-sort
          item-key="datosPersonales.idPaciente"
          fixed-header
          :expanded.sync="expanded"
          show-expand
          @item-expanded="showInfo"
      >
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.idPaciente }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.nombre }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.apellidoPaterno }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.apellidoMaterno }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.edad }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
            {{ item.datosPersonales.fechaNac }}
          </div>
        </template>
        <template v-slot:item.datosPersonales="{ item }">
          <v-chip
              color="#64B5F6"
              small
              @click="iniciarConsulta(item.datosPersonales, item.antropometria)"
          >
            {{ item.datosPersonales.genero === true ? 'Ini. Consulta' : 'Ini. Consulta'}}
          </v-chip>
        </template>
        <template v-slot:item.datosPersonales.genero="{ item }">
          <v-chip
              :color="getColor(item.datosPersonales.genero)"
              small
          >
            {{ item.datosPersonales.genero === true ? 'Mujer' : 'Hombre'}}
          </v-chip>
        </template>
        <template v-slot:item.datosPersonales.tipoConsulta="{ item }">
          <v-chip
              :color="item.datosPersonales.tipoConsulta === 'On Line' ? 'yellow lighten-4' : 'teal lighten-2'"
              small
          >
            {{ item.datosPersonales.tipoConsulta}}
          </v-chip>
        </template>
        <template v-slot:expanded-item="{ headers, item }" class="align-content-lg-end">
          <td :colspan="headers.length">
            <v-row class="ma-2">
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #B2DFDB">
                    Consulta Inicial
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Estatura:
                        <v-chip color="primary" small>
                          {{ item.antropometria.estatura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Peso:
                        <v-chip color="primary" small>
                          {{ item.antropometria.peso }} kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cintura:
                        <v-chip color="primary" small>
                          {{ item.antropometria.cintura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cadera:
                        <v-chip color="primary" small>
                          {{ item.antropometria.cadera}} cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Contacto:
                        <a :href="'tel:' + item.datosPersonales.telefono">
                          <v-icon>mdi mdi-phone</v-icon>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a :href="sendWhats(item.datosPersonales.telefono, item.datosPersonales.nombre)" target="_blank">
                          <v-icon>mdi mdi-whatsapp</v-icon>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3" v-if="isSubsecuente">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #FFF8E1">
                    Consulta: {{historicoAntepasada.fecha.toLocaleDateString()}}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" style="font-size: 0.7em;">
                        Estatura:
                        <v-chip color="primary" small style="font-size: 0.9em;">
                          {{ item.antropometria.estatura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Peso:
                        <v-chip color="primary" small>
                          {{ historicoAntepasada.peso }} kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cintura:
                        <v-chip color="primary" small>
                          {{ historicoAntepasada.cintura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cadera:
                        <v-chip color="primary" small>
                          {{ historicoAntepasada.cadera}} cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Contacto:
                        <a :href="'tel:' + item.datosPersonales.telefono">
                          <v-icon>mdi mdi-phone</v-icon>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a :href="sendWhats(item.datosPersonales.telefono, item.datosPersonales.nombre)" target="_blank">
                          <v-icon>mdi mdi-whatsapp</v-icon>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3" v-if="isSubsecuente">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #DCEDC8">
                    Ult. Consulta: {{historicoPasada.fecha.toLocaleDateString()}}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Estatura:
                        <v-chip color="primary" small>
                          {{ item.antropometria.estatura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Peso:
                        <v-chip color="primary" small>
                          {{ historicoPasada.peso }} kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cintura:
                        <v-chip color="primary" small>
                          {{ historicoPasada.cintura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Cadera:
                        <v-chip color="primary" small>
                          {{ historicoPasada.cadera}} cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Contacto:
                        <a :href="'tel:' + item.datosPersonales.telefono">
                          <v-icon>mdi mdi-phone</v-icon>
                        </a>
                        &nbsp;&nbsp;&nbsp;
                        <a :href="sendWhats(item.datosPersonales.telefono, item.datosPersonales.nombre)" target="_blank">
                          <v-icon>mdi mdi-whatsapp</v-icon>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="ma-2">
              <v-col cols="12" md="12" sm="12">
                <v-switch
                    inset
                    v-model="isShowMoreInfo"
                    label="Más Información"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="3" v-if="isShowMoreInfo">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #FFE082">Importante</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Alergias:
                        <v-chip color="#FFF3E0" small>
                          {{ item.antecedentesPersonalesNoPatologicos.alergias }}
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Aver. Alim:
                        <v-chip color="#FFF9C4" small>
                          {{ item.antecedentesPersonalesNoPatologicos.averacionesAlimentarias }}
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 0.8em;">
                        Observaciones:
                        <v-chip color="#FFCC80" small>
                          {{ $store.state.PersonalData.habitos === undefined ? 'NA' : $store.state.PersonalData.habitos.observaciones }}
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="2" v-if="isShowMoreInfo">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #B2DFDB">Otras</v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </td>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
            dark
            color="primary"
        >
          <v-btn
              icon
              dark
              @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Consulta</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn>
              {{ $store.state.PersonalData.datosPersonales.idPaciente }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <ConsultaSubsecuente></ConsultaSubsecuente>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
    import ConsultaSubsecuente from '@/components/admin/ConsultaSubsecuente'
    export default {
    name: 'PatientsRegisterTable',
    components: {
      ConsultaSubsecuente
    },
    props: {
      patientsRegister: {}
    },
    data () {
      return {
        expanded: [],
        search: '',
        dialog: false,
        isShowInfo: false,
        isShowMoreInfo: false,
        isSubsecuente: 0,
        historicoAntepasada: {
          fecha: '',
          peso: '',
          pGrasa: '',
          pMusculo: '',
          cintura: '',
          imc: '',
          edadMetabolica: '',
          grasa: '',
          glucosa: '',
          ta: '',
          malestar: '',
          observaciones: '',
          objetivos: ''
        },
        historicoPasada: {
          fecha: '',
          peso: '',
          pGrasa: '',
          pMusculo: '',
          cintura: '',
          imc: '',
          edadMetabolica: '',
          grasa: '',
          glucosa: '',
          ta: '',
          malestar: '',
          observaciones: '',
          objetivos: ''
        }
      }
    },
    computed: {
      GetHeadersTable() {
        return [
          {
            text: 'Identificador',
            align: 'start',
            sortable: false,
            value: 'datosPersonales.idPaciente',
          },
          {
            text: 'Nombre',
            value: 'datosPersonales.nombre',
          },
          {
            text: 'Apellido P.',
            value: 'datosPersonales.apellidoPaterno',
          },
          {
            text: 'Apellido M',
            value: 'datosPersonales.apellidoMaterno',
          },
          {
            text: 'Edad',
            value: 'datosPersonales.edad',
          },
          {
            text: 'Fecha de Nac.',
            value: 'datosPersonales.fechaNac',
          },
          {
            text: '',
            value: 'datosPersonales',
          },
          {
            text: 'Sexo',
            value: 'datosPersonales.genero',
          },
          {
            text: 'Tipo de Consulta',
            value: 'datosPersonales.tipoConsulta',
          }
        ]
      }
    },
    methods: {
      showInfo({item}) {
        if (!this.isShowInfo) {
          this.isShowInfo = true
          this.$store.commit('SET_PROCESSING_REQUEST', true)
          this.$store.state.PersonalData.datosPersonales.idPaciente = item.datosPersonales.idPaciente

          this.isShowInfo = false
          this.$store.dispatch('PersonalData/getHistoricoConsultas').then(response => {
            console.log('response.length ', response.length)
            if (response[0] === 'Auth token is expired') {
              window.localStorage.removeItem('userAuth')
              window.localStorage.removeItem('userInfo')
              window.localStorage.removeItem('registeredUser')
              this.$store.dispatch('MessageAlerts/clearAlert', false)
              this.$store.dispatch('AuthenticationProcesses/clearAuthenticationProcesses', false)
              this.$router.push('/')
            } else {
              if (response.length >= 2) {
                this.isSubsecuente = true
                this.historicoAntepasada.fecha = new Date(response[response.length -2].createDate)
                this.historicoAntepasada.peso = response[response.length -2].antropometria.peso
                this.historicoAntepasada.pGrasa = response[response.length -2].antropometria.porcentajeGrasa
                this.historicoAntepasada.pMusculo = response[response.length -2].antropometria.porcentajeMusculo
                this.historicoAntepasada.cintura = response[response.length -2].antropometria.cintura
                this.historicoAntepasada.imc = response[response.length -2].antropometria.imc
                this.historicoAntepasada.edadMetabolica = response[response.length -2].antropometria.edadMetabolica
                this.historicoAntepasada.grasa = response[response.length -2].antropometria.grasa
                this.historicoAntepasada.glucosa = response[response.length -2].antropometria.glucosa
                this.historicoAntepasada.ta = response[response.length -2].antropometria.ta

                this.historicoAntepasada.malestar = response[response.length -2].clinico.malestaresGeneral
                this.historicoAntepasada.observaciones = response[response.length -2].habitos.observaciones
                this.historicoAntepasada.objetivos = response[response.length -2].habitos.objetivos

                this.historicoPasada.fecha = new Date(response[response.length -1].createDate)
                this.historicoPasada.peso = response[response.length -1].antropometria.peso
                this.historicoPasada.pGrasa = response[response.length -1].antropometria.porcentajeGrasa
                this.historicoPasada.pMusculo = response[response.length -1].antropometria.porcentajeMusculo
                this.historicoPasada.cintura = response[response.length -1].antropometria.cintura
                this.historicoPasada.imc = response[response.length -1].antropometria.imc
                this.historicoPasada.edadMetabolica = response[response.length -1].antropometria.edadMetabolica
                this.historicoPasada.grasa = response[response.length -1].antropometria.grasa
                this.historicoPasada.glucosa = response[response.length -1].antropometria.glucosa
                this.historicoPasada.ta = response[response.length -1].antropometria.ta

                this.historicoPasada.malestar = response[response.length -1].clinico.malestaresGeneral
                this.historicoPasada.observaciones = response[response.length -1].habitos.observaciones
                this.historicoPasada.objetivos = response[response.length -1].habitos.objetivos

              } else {
                this.isSubsecuente = false
                this.historicoPasada.fecha = new Date(response[response.length -1].createDate)
                this.historicoPasada.peso = response[response.length -1].antropometria.peso
                this.historicoPasada.pGrasa = response[response.length -1].antropometria.porcentajeGrasa
                this.historicoPasada.pMusculo = response[response.length -1].antropometria.porcentajeMusculo
                this.historicoPasada.cintura = response[response.length -1].antropometria.cintura
                this.historicoPasada.imc = response[response.length -1].antropometria.imc
                this.historicoPasada.edadMetabolica = response[response.length -1].antropometria.edadMetabolica
                this.historicoPasada.grasa = response[response.length -1].antropometria.grasa
                this.historicoPasada.glucosa = response[response.length -1].antropometria.glucosa
                this.historicoPasada.ta = response[response.length -1].antropometria.ta

                this.historicoPasada.malestar = response[response.length -1].clinico.malestaresGeneral
                this.historicoPasada.observaciones = response[response.length -1].habitos.observaciones
                this.historicoPasada.objetivos = response[response.length -1].habitos.objetivos
              }
            }

            this.$store.commit('SET_PROCESSING_REQUEST', false)
            this.$store.commit('PersonalData/SET_TEMP_DATA')
          })
        }
      },
      getColor(grade) {
        return grade ? '#f8bacf' : '#27c6da'
      },
      sendWhats(phone, name) {
        return "https://api.whatsapp.com/send?phone=52" + phone + "&text=¡Hola,%20" + name + "!"
      },
      iniciarConsulta(paciente, medidas) {
        this.$store.commit('SET_PROCESSING_REQUEST', true)
        this.$store.state.PersonalData.nobreCompleto = `${paciente.nombre} ${paciente.apellidoPaterno} ${paciente.apellidoMaterno}`
        this.$store.state.PersonalData.datosPersonales.idPaciente = paciente.idPaciente

        this.$store.dispatch('PersonalData/getHistoricoConsultas').then(response => {
          if (response[0] === 'Auth token is expired') {
            window.localStorage.removeItem('userAuth')
            window.localStorage.removeItem('userInfo')
            window.localStorage.removeItem('registeredUser')
            this.$store.dispatch('MessageAlerts/clearAlert', false)
            this.$store.dispatch('AuthenticationProcesses/clearAuthenticationProcesses', false)
            this.$router.push('/')
          } else {
            if (response.length >= 1) {
              this.$store.state.PersonalData.medidasHistorico.peso = response[response.length -1].antropometria.peso
              this.$store.state.PersonalData.medidasHistorico.cintura = response[response.length -1].antropometria.cintura
              this.$store.state.PersonalData.medidasHistorico.cadera = response[response.length -1].antropometria.cadera
              this.$store.state.PersonalData.medidasHistorico.imc = response[response.length -1].antropometria.imc
              this.$store.state.PersonalData.medidasHistorico.edadMetabolica = response[response.length -1].antropometria.edadMetabolica
              this.$store.state.PersonalData.medidasHistorico.grasaBiceral = response[response.length -1].antropometria.grasaBiceral
              this.$store.state.PersonalData.medidasHistorico.fecha = new Date(response[response.length -1].createDate)
              this.$store.state.PersonalData.medidasHistorico.porcentajeGrasa = response[response.length -1].antropometria.porcentajeGrasa
              this.$store.state.PersonalData.medidasHistorico.porcentajeMusculo = response[response.length -1].antropometria.porcentajeMusculo
              this.$store.state.PersonalData.antropometria.estatura = medidas.estatura

              this.$store.state.PersonalData.clinicoHistorico.glucosa = response[response.length -1].clinico.glucosa
              this.$store.state.PersonalData.clinicoHistorico.ta = response[response.length -1].clinico.ta
              this.$store.state.PersonalData.clinicoHistorico.hidratacion = response[response.length -1].clinico.hidratacion
              this.$store.state.PersonalData.clinicoHistorico.noEvacuaciones = response[response.length -1].clinico.noEvacuaciones
              this.$store.state.PersonalData.clinicoHistorico.evacuaciones = response[response.length -1].clinico.evacuaciones
              this.$store.state.PersonalData.clinicoHistorico.malestaresGeneral = response[response.length -1].clinico.malestaresGeneral

              this.$store.commit('SET_PROCESSING_REQUEST', false)

              this.dialog = true

              this.$store.commit('PersonalData/SET_TEMP_DATA')
            }
          }
        })
      }
    }
  }
</script>
