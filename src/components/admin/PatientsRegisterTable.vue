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
              color="#C6FF00"
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
            <v-row class="ma-0">
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #B2DFDB">
                    Consulta Inicial
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" md="12" sm="12">
                        <table>
                          <tr>
                            <td>Peso</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.peso }} kg.
                              </v-chip>
                            </td>
                            <td>Edad Met.</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Cintura</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.cintura }} cm
                              </v-chip>
                            </td>
                            <td>Cadera</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>%Grasa</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.porcentajeGrasa }}
                              </v-chip>
                            </td>
                            <td>%Musculo</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.porcentajeMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>IMC</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.imc }}
                              </v-chip>
                            </td>
                            <td>Grasa Vic.</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.antropometria.grasaBiceral }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Glucosa</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.clinico === undefined ? '0' : item.clinico.glucosa }}
                              </v-chip>
                            </td>
                            <td>T/A</td>
                            <td>
                              <v-chip color="#80DEEA" small style="font-size: 0.9em;">
                                {{ item.clinico === undefined ? '0' : item.clinico.ta }}
                              </v-chip>
                            </td>
                          </tr>
                        </table>
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
                      <v-col cols="12" sm="12" md="12">
                        <table>
                          <tr>
                            <td>Peso</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.peso }} kg.
                              </v-chip>
                            </td>
                            <td>Edad Met.</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Cintura</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.cintura }} cm
                              </v-chip>
                            </td>
                            <td>Cadera</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>%Grasa</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.pGrasa }}
                              </v-chip>
                            </td>
                            <td>%Musculo</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.pMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>IMC</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.imc }}
                              </v-chip>
                            </td>
                            <td>Grasa Vic.</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.grasa }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Glucosa</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.glucosa === undefined ? '0' : historicoAntepasada.glucosa}}
                              </v-chip>
                            </td>
                            <td>T/A</td>
                            <td>
                              <v-chip color="#FFE082" small style="font-size: 0.9em;">
                                {{ historicoAntepasada.ta }}
                              </v-chip>
                            </td>
                          </tr>
                        </table>
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
                      <v-col cols="12" sm="12" md="12">
                        <table>
                          <tr>
                            <td>Peso</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.peso }} kg.
                              </v-chip>
                            </td>
                            <td>Edad Met.</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Cintura</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.cintura }} cm
                              </v-chip>
                            </td>
                            <td>Cadera</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>%Grasa</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.pGrasa }}
                              </v-chip>
                            </td>
                            <td>%Musculo</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.pMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>IMC</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.imc }}
                              </v-chip>
                            </td>
                            <td>Grasa Vic.</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.grasa }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td>Glucosa</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.glucosa === undefined ? '0' : historicoPasada.glucosa }}
                              </v-chip>
                            </td>
                            <td>T/A</td>
                            <td>
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em;">
                                {{ historicoPasada.ta }}
                              </v-chip>
                            </td>
                          </tr>
                        </table>
                      </v-col>
                      <!--
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
                      -->
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-card-title class="text-center" :style="`font-size: 1.5em; background: ${calculaNivelPesoColor}`">
                    {{ calculaNivelPeso }}
                  </v-card-title>
                  <v-card-text>
                    <v-row class="text-center">
                      <v-col cols="12" sm="6" md="6" style="font-size: 0.9em;">
                        {{ textPesoPerdido }}
                        <v-chip :color="calculaNivelPesoColor" small style="font-size: 0.9em;">
                          {{ calculaPesoPerdido }} kg
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" style="font-size: 0.9em;">
                        {{ textlaCmPerdidos }}
                        <v-chip :color="calculaNivelPesoColor"  small style="font-size: 0.9em;">
                          {{ calculaCmPerdidos }} cm
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                      </v-col>
                      <v-col cols="12" sm="6" md="6" class="text-center">
                        <v-img :src="calculaNivelPesoImg" width="55" height="136"></v-img>
                      </v-col>
                      <v-col cols="12" sm="6" md="2">
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
              <v-col cols="12" sm="6" md="5" v-if="isShowMoreInfo">
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
                          {{ historicoPasada.observaciones === null ? 'NA' : historicoPasada.observaciones }}
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
        imcNivel: '',
        idPaciente: '',
        historicoAntepasada: {
          fecha: '',
          peso: '',
          pGrasa: '',
          pMusculo: '',
          cintura: '',
          cadera: '',
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
          cadera: '',
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
      },
      calculaPesoPerdido() {
        let kilosPerdidos = 0
        let pesoInicial = parseFloat(this.$store.state.PersonalData.antropometria.peso)
        let pesoActual = parseFloat(this.historicoPasada.peso)

        if (pesoActual < pesoInicial) {
          kilosPerdidos = pesoInicial - pesoActual
          return kilosPerdidos.toFixed(2)
        }
        if (pesoActual > pesoInicial) {
          kilosPerdidos = pesoActual - pesoInicial
          return kilosPerdidos.toFixed(2)
        }
        if (pesoInicial === pesoActual) {
          kilosPerdidos = pesoActual - pesoInicial
          return kilosPerdidos.toFixed(2)
        }
        return kilosPerdidos.toFixed(2)
      },
      calculaCmPerdidos() {
        let cmPerdidos = 0
        let cinturaInicial = parseInt(this.$store.state.PersonalData.antropometria.cintura)
        let cinturaActual = parseInt(this.historicoPasada.cintura)

        if (cinturaActual < cinturaInicial) {
          cmPerdidos = cinturaInicial - cinturaActual
          return cmPerdidos
        }
        if (cinturaActual > cinturaInicial) {
          cmPerdidos = cinturaActual - cinturaInicial
          return cmPerdidos
        }
        if (cinturaInicial === cinturaActual) {
          cmPerdidos = cinturaActual - cinturaInicial
          return cmPerdidos
        }
        return cmPerdidos
      },
      textPesoPerdido() {
        let kilosPerdidos = ''
        let pesoInicial = parseFloat(this.$store.state.PersonalData.antropometria.peso)
        let pesoActual = parseFloat(this.historicoPasada.peso)

        if (pesoActual < pesoInicial) {
          kilosPerdidos = 'kg. Perdidos'
          return kilosPerdidos
        }
        if (pesoActual > pesoInicial) {
          kilosPerdidos = 'kg. Ganados'
          return kilosPerdidos
        }
        if (pesoInicial === pesoActual) {
          kilosPerdidos = 'Esta Igual'
          return kilosPerdidos
        }
        return kilosPerdidos
      },
      textlaCmPerdidos() {
        let cmPerdidos = ''
        let cinturaInicial = parseInt(this.$store.state.PersonalData.antropometria.cintura)
        let cinturaActual = parseInt(this.historicoPasada.cintura)
        if (cinturaActual < cinturaInicial) {
          return 'cm. Perdidos'
        }
        if (cinturaActual > cinturaInicial) {
          return 'cm. Ganados'
        }
        if (cinturaInicial === cinturaActual) {
          return 'Esta Igual'
        }
        return cmPerdidos
      },
      calculaNivelPeso() {
        let nivel = ''
        if (parseFloat(this.imcNivel) <= 18.5) {
          return 'Persona Insuficiente'
        }
        if (parseFloat(this.imcNivel) >= 18.6 && parseFloat(this.imcNivel) <= 24.9) {
          return 'Normal'
        }
        if (parseFloat(this.imcNivel) >= 25 && parseFloat(this.imcNivel) <= 29.9) {
          return 'Sobrepeso'
        }
        if (parseFloat(this.imcNivel) >= 30 && parseFloat(this.imcNivel) <= 34.9) {
          return 'Obesidad'
        }
        if (parseFloat(this.imcNivel) >= 35) {
          return 'Obesidad Extrema'
        }
        return nivel
      },
      calculaNivelPesoColor() {
        let nivel = ''
        if (parseFloat(this.imcNivel) <= 18.5) {
          return '#BBDEFB'
        }
        if (parseFloat(this.imcNivel) >= 18.6 && parseFloat(this.imcNivel) <= 24.9) {
          return '#A5D6A7'
        }
        if (parseFloat(this.imcNivel) >= 25 && parseFloat(this.imcNivel) <= 29.9) {
          return '#FFF176'
        }
        if (parseFloat(this.imcNivel) >= 30 && parseFloat(this.imcNivel) <= 34.9) {
          return '#FFCC80'
        }
        if (parseFloat(this.imcNivel) >= 35) {
          return '#FF7043'
        }
        return nivel
      },
      calculaNivelPesoImg() {
        let nivel = ''
        let genero = this.$store.state.PersonalData.datosPersonales.genero

        if (parseFloat(this.imcNivel) <= 18.5) {
          return genero ? 'img/IMC/M-PI.jpeg' : 'img/IMC/H-PI.jpeg'
        }
        if (parseFloat(this.imcNivel) >= 18.6 && parseFloat(this.imcNivel) <= 24.9) {
          return genero ? 'img/IMC/M-PN.jpeg' : 'img/IMC/H-PN.jpeg'
        }
        if (parseFloat(this.imcNivel) >= 25 && parseFloat(this.imcNivel) <= 29.9) {
          return genero ? 'img/IMC/M-PS.jpeg' : 'img/IMC/H-PS.jpeg'
        }
        if (parseFloat(this.imcNivel) >= 30 && parseFloat(this.imcNivel) <= 34.9) {
          return genero ? 'img/IMC/M-PO.jpeg' : 'img/IMC/H-PO.jpeg'
        }
        if (parseFloat(this.imcNivel) >= 35) {
          return genero ? 'img/IMC/M-POE.jpeg' : 'img/IMC/H-POE.jpeg'
        }
        return nivel
      }
    },
    methods: {
      showInfo({item}) {
        if (!this.isShowInfo && this.idPaciente === '' || this.idPaciente != item.datosPersonales.idPaciente) {
          this.idPaciente = item.datosPersonales.idPaciente
          this.isShowInfo = true
          this.$store.commit('SET_PROCESSING_REQUEST', true)
          this.$store.state.PersonalData.datosPersonales.idPaciente = item.datosPersonales.idPaciente
          this.$store.state.PersonalData.datosPersonales.genero = item.datosPersonales.genero

          this.$store.dispatch('PersonalData/getHistoricoConsultas').then(response => {
            if (response[0] === 'Auth token is expired') {
              window.localStorage.removeItem('userAuth')
              window.localStorage.removeItem('userInfo')
              window.localStorage.removeItem('registeredUser')
              this.$store.dispatch('MessageAlerts/clearAlert', false)
              this.$store.dispatch('AuthenticationProcesses/clearAuthenticationProcesses', false)
              this.$router.push('/')
            } else {
              this.$store.state.PersonalData.antropometria.peso =  response[0].antropometria.peso
              this.$store.state.PersonalData.antropometria.cintura =  response[0].antropometria.cintura
              if (response.length >= 2) {
                this.isSubsecuente = true
                this.historicoAntepasada.fecha = new Date(response[response.length -2].createDate)
                this.historicoAntepasada.peso = response[response.length -2].antropometria.peso
                this.historicoAntepasada.pGrasa = response[response.length -2].antropometria.porcentajeGrasa
                this.historicoAntepasada.pMusculo = response[response.length -2].antropometria.porcentajeMusculo
                this.historicoAntepasada.cintura = response[response.length -2].antropometria.cintura
                this.historicoAntepasada.cadera = response[response.length -2].antropometria.cadera
                this.historicoAntepasada.imc = response[response.length -2].antropometria.imc
                this.historicoAntepasada.edadMetabolica = response[response.length -2].antropometria.edadMetabolica
                this.historicoAntepasada.grasa = response[response.length -2].antropometria.grasaBiceral
                this.historicoAntepasada.glucosa = response[response.length -2].clinico.glucosa
                this.historicoAntepasada.ta = response[response.length -2].clinico.ta

                this.historicoPasada.fecha = new Date(response[response.length -1].createDate)
                this.historicoPasada.peso = response[response.length -1].antropometria.peso
                this.historicoPasada.pGrasa = response[response.length -1].antropometria.porcentajeGrasa
                this.historicoPasada.pMusculo = response[response.length -1].antropometria.porcentajeMusculo
                this.historicoPasada.cintura = response[response.length -1].antropometria.cintura
                this.historicoPasada.cadera = response[response.length -1].antropometria.cadera
                this.historicoPasada.imc = response[response.length -1].antropometria.imc
                this.historicoPasada.edadMetabolica = response[response.length -1].antropometria.edadMetabolica
                this.historicoPasada.grasa = response[response.length -1].antropometria.grasaBiceral
                this.historicoPasada.glucosa = response[response.length -1].clinico.glucosa
                this.historicoPasada.ta = response[response.length -1].clinico.ta

              } else {
                this.isSubsecuente = false
                this.historicoPasada.fecha = new Date(response[response.length -1].createDate)
                this.historicoPasada.peso = response[response.length -1].antropometria.peso
                this.historicoPasada.pGrasa = response[response.length -1].antropometria.porcentajeGrasa
                this.historicoPasada.pMusculo = response[response.length -1].antropometria.porcentajeMusculo
                this.historicoPasada.cintura = response[response.length -1].antropometria.cintura
                this.historicoPasada.cadera = response[response.length -1].antropometria.cadera
                this.historicoPasada.imc = response[response.length -1].antropometria.imc
                this.historicoPasada.edadMetabolica = response[response.length -1].antropometria.edadMetabolica
                this.historicoPasada.grasa = response[response.length -1].antropometria.grasaBiceral
                this.historicoPasada.glucosa = response[response.length -1].clinico.glucosa
                this.historicoPasada.ta = response[response.length -1].clinico.ta
                this.imcNivel =  response[response.length -1].clinico.imc
              }
              this.historicoPasada.malestar = response[response.length -1].clinico.malestaresGeneral
              this.historicoPasada.observaciones = response[response.length -1].habitos.observaciones
              this.historicoPasada.objetivos = response[response.length -1].habitos.objetivos
              this.imcNivel =   this.historicoPasada.imc
            }

            this.$store.commit('SET_PROCESSING_REQUEST', false)
            this.$store.commit('PersonalData/SET_TEMP_DATA')
          })
        } else {
          this.isShowInfo = false
          this.isShowMoreInfo = false
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

              this.$store.commit('PersonalData/SET_TEMP_DATA')
              this.$store.commit('SET_PROCESSING_REQUEST', false)

              this.dialog = true
              if (window.localStorage.getItem('tempAntropometria') === null) {
                this.$store.state.PersonalData.antropometria.peso = ''
                this.$store.state.PersonalData.antropometria.cintura = ''
              }
            }
          }
        })
      }
    }
  }
</script>
