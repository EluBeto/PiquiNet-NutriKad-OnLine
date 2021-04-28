<template>
  <v-container justify="center">
    <v-card>
      <v-card-title>
        Registro de pacientes
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar paciente"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="GetHeadersTable"
          :items="patientsRegister"
          :search="search"
          class="elevation-1"
          locale="es-mx"
          multi-sort
          item-key="datosPersonales.nombre"
          fixed-header
          :expanded.sync="expanded"
          show-expand
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
        <template v-slot:expanded-item="{ headers, item }" class=" align-content-lg-end">
          <td :colspan="headers.length">
            <v-row class="ma-2">
              <v-col cols="12" sm="6" md="4">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em;">Más información</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row align-content-sm="left">
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Peso:
                        <v-chip color="primary" small>
                          {{ item.antropometria.peso }} kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Estatura:
                        <v-chip color="primary" small>
                          {{ item.antropometria.estatura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Cintura:
                        <v-chip color="primary" small>
                          {{ item.antropometria.cintura }} cm.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Cadera:
                        <v-chip color="primary" small>
                          {{ item.antropometria.cadera}} cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Estado Civil:
                        <v-chip color="primary" small>
                          {{ item.datosPersonales.estadoCivil }}
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Ocupación:
                        <v-chip color="primary" small>
                          {{ item.datosPersonales.ocupacion }}
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Padecimiento Actual:
                        <v-chip color="primary" small>
                          {{ item.datosPersonales.padecimientoActual }}
                        </v-chip>
                      </v-col>
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
              <v-col cols="12" sm="6" md="4">
                <v-btn color="primary" @click="iniciarConsulta(item.datosPersonales)">Iniciar Consulta</v-btn>
              </v-col>
              <!--
              <v-col cols="12" sm="4">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em;">Histórico de medidas</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col class="text-center"  cols="12" sm="12" style="font-size: 1.0em;">
                        09 de Marzo
                      </v-col>
                      <v-col class="text-center" cols="12" sm="12" style="font-size: 1.0em;">
                        Cintura:
                        <v-chip color="primary" small>
                          113 cm.
                        </v-chip>
                        | Cadera:
                        <v-chip color="primary" small>
                          125 cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col class="text-center"  cols="12" sm="12" style="font-size: 1.0em;">
                        28 de Marzo
                      </v-col>
                      <v-col class="text-center" cols="12" sm="12" style="font-size: 1.0em;">
                        Cintura:
                        <v-chip color="primary" small>
                          110 cm.
                        </v-chip>
                        | Cadera:
                        <v-chip color="primary" small>
                          123 cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col class="text-center"  cols="12" sm="12" style="font-size: 1.0em;">
                        19 de Abril
                      </v-col>
                      <v-col class="text-center" cols="12" sm="12" style="font-size: 1.0em;">
                        Cintura:
                        <v-chip color="primary" small>
                          104 cm.
                        </v-chip>
                        | Cadera:
                        <v-chip color="primary" small>
                          120 cm.
                        </v-chip>
                      </v-col>
                      <v-divider></v-divider>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Prox. 10 de Mayo:
                        <v-chip color="warning" small>
                          Pendiente ...
                        </v-chip>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em;">Histórico de peso</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        09 de Mar.:
                        <v-chip color="primary" small>
                          {{ item.antropometria.peso }} kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        28 de Mar.:
                        <v-chip color="primary" small>
                          107.400 kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        19 de Abr.:
                        <v-chip color="primary" small>
                          103.900 kg.
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        Prox. 10 de Mayo:
                        <v-chip color="warning" small>
                          Pendiente ...
                        </v-chip>
                      </v-col>
                      <v-col cols="12" sm="12" style="font-size: 1.0em;">
                        <v-card
                            class="mx-auto text-center"
                            color="green"
                            dark
                            max-width="600"
                        >
                          <v-card-text>
                            <v-sheet color="rgba(0, 0, 0, .12)">
                              <v-sparkline
                                  :value="value"
                                  color="rgba(255, 255, 255, .7)"
                                  height="100"
                                  padding="24"
                              >
                                <template v-slot:label="item">
                                  {{ item.value }}
                                </template>
                              </v-sparkline>
                            </v-sheet>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              -->
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
        dialog: false
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
            text: 'Apellido paterno',
            value: 'datosPersonales.apellidoPaterno',
          },
          {
            text: 'Apellido Materno',
            value: 'datosPersonales.apellidoMaterno',
          },
          {
            text: 'Edad',
            value: 'datosPersonales.edad',
          },
          {
            text: 'Fecha de Nacimiento',
            value: 'datosPersonales.fechaNac',
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
      getColor(grade) {
        return grade ? '#f8bacf' : '#27c6da'
      },
      sendWhats(phone, name) {
        return "https://api.whatsapp.com/send?phone=52" + phone + "&text=¡Hola,%20" + name + "!"
      },
      iniciarConsulta(paciente) {
        this.$store.state.PersonalData.nobreCompleto = `${paciente.nombre} ${paciente.apellidoPaterno} ${paciente.apellidoMaterno}`
        this.$store.state.PersonalData.datosPersonales.idPaciente = paciente.idPaciente
        this.dialog = true
      }
    }
  }
</script>
