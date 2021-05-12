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
            {{ item.datosPersonales.genero === true ? 'Ini. Consulta' : 'Ini. Consulta' }}
          </v-chip>
        </template>
        <template v-slot:item.datosPersonales.genero="{ item }">
          <v-chip
              :color="getColor(item.datosPersonales.genero)"
              small
              style="width: 65px;"
          >
            {{ item.datosPersonales.genero === true ? 'Mujer' : 'Hombre' }}
          </v-chip>
        </template>
        <template v-slot:item.datosPersonales.tipoConsulta="{ item }">
          <v-chip
              :color="item.datosPersonales.tipoConsulta === 'On Line' ? 'yellow lighten-4' : 'teal lighten-2'"
              small
          >
            {{ item.datosPersonales.tipoConsulta }}
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
                            <td style="text-align: right">Peso</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.peso }} kg.
                              </v-chip>
                            </td>
                            <td style="text-align: right">Edad Met.</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Cintura</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.cintura }} cm
                              </v-chip>
                            </td>
                            <td style="text-align: right">Cadera</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">%Grasa</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.porcentajeGrasa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">%Musculo</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.porcentajeMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">IMC</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.imc }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">Grasa Vic.</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.antropometria.grasaBiceral }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Glucosa</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
                                {{ item.clinico === undefined ? '0' : item.clinico.glucosa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">T/A</td>
                            <td style="text-align: left">
                              <v-chip color="#80DEEA" small style="font-size: 0.9em; width: 55px; ">
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
              <v-col cols="12" sm="6" md="3" v-if="isSubsecuente && noConsultas >= 3">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #FFF8E1">
                    Consulta: {{ historicoAntepasada.fecha.toLocaleDateString() }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <table>
                          <tr>
                            <td style="text-align: right">Peso</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082"
                                      small style="font-size: 0.9em; width: 55px"
                              >
                                {{ historicoAntepasada.peso }} kg.
                              </v-chip>
                            </td>
                            <td style="text-align: right">Edad Met.</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Cintura</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.cintura }} cm
                              </v-chip>
                            </td>
                            <td style="text-align: right">Cadera</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">%Grasa</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.pGrasa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">%Musculo</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.pMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">IMC</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.imc }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">Grasa Vic.</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.grasa }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Glucosa</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082" small style="font-size: 0.9em; width: 55px">
                                {{ historicoAntepasada.glucosa === undefined ? '0' : historicoAntepasada.glucosa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">T/A</td>
                            <td style="text-align: center">
                              <v-chip color="#FFE082"
                                      style="font-size: 0.9em;
                                      width: 55px"
                                      small
                              >
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
                    Ult. Consulta: {{ historicoPasada.fecha.toLocaleDateString() }}
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <table>
                          <tr>
                            <td style="text-align: right">Peso</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.peso }} kg.
                              </v-chip>
                            </td>
                            <td style="text-align: right">Edad Met.</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.edadMetabolica }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Cintura</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.cintura }} cm
                              </v-chip>
                            </td>
                            <td style="text-align: right">Cadera</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.cadera }} cm
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">%Grasa</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.pGrasa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">%Musculo</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.pMusculo }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">IMC</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.imc }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">Grasa Vic.</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.grasa }}
                              </v-chip>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right">Glucosa</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px; ">
                                {{ historicoPasada.glucosa === undefined ? '0' : historicoPasada.glucosa }}
                              </v-chip>
                            </td>
                            <td style="text-align: right">T/A</td>
                            <td style="text-align: left">
                              <v-chip color="#A5D6A7" small style="font-size: 0.9em; width: 55px;">
                                {{ historicoPasada.ta }}
                              </v-chip>
                            </td>
                          </tr>
                        </table>
                      </v-col>
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
                    <v-row>
                      <v-col cols="12" md="12" sm="12">
                        <table>
                          <tr>
                            <td style="text-align: left">
                              {{ textPesoPerdido }}
                            </td>
                            <td style="text-align: right">
                              <v-chip :color="calculaNivelPesoColor" small
                                      style="font-size: 0.9em; text-align: center; width: 55px;">
                                {{ calculaPesoPerdido }} kg
                              </v-chip>
                            </td>
                            <td style="text-align: left">
                              {{ textlaCmPerdidos }}
                            </td>
                            <td style="text-align: right">
                              <v-chip :color="calculaNivelPesoColor" small
                                      style="font-size: 0.9em; text-align: center; width: 55px;">
                                {{ calculaCmPerdidos }} cm
                              </v-chip>
                            </td>
                          </tr>
                        </table>
                      </v-col>
                      <v-col cols="12" md="12" sm="12" align="center" justify="center"
                      >
                        <v-img :src="calculaNivelPesoImg" width="48"></v-img>
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
              <v-col cols="12" sm="6" md="6" v-if="isShowMoreInfo">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #FFE082">Importante
                  </v-card-title>
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
                        Intolerancias:
                        <v-chip color="#B3E5FC" small>
                          {{ item.antecedentesPersonalesNoPatologicos.intolerancias }}
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
              <v-col cols="12" sm="6" md="6" v-if="isShowMoreInfo">
                <v-card>
                  <v-card-title class="text-center" style="font-size: 1.5em; background: #B2DFDB">Otras</v-card-title>
                  <v-card-text>
                    <v-row class="ma-2">
                      <v-col cols="12" md="12" sm="12">
                        <v-btn class="px-1" v-if="historicoPasada.perfilBioquimico.isPerfilB"
                               color="#B39DDB"
                               @click="isPerfilBioquimico = true"
                        >Perfil Bioquímico
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions align="center" style="background: #F5F5F5">
                    <v-row>
                      <v-col cols="12" md="6">
                        <a :href="'tel:' + item.datosPersonales.telefono">
                          <v-icon color="#263238">mdi mdi-phone</v-icon>
                        </a>
                      </v-col>
                      <v-col cols="12" md="6">
                        <a :href="sendWhats(item.datosPersonales.telefono, item.datosPersonales.nombre)"
                           target="_blank">
                          <v-icon color="#388E3C">mdi mdi-whatsapp</v-icon>
                        </a>
                      </v-col>
                    </v-row>
                  </v-card-actions>
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
    <v-dialog
        v-model="isExistData"
        persistent
        max-width="290"
    >
      <v-card>
        <v-card-title class="headline" align="center" justify="center" style="background: #FFD54F">
          ¡IMPORTANTE!
        </v-card-title>
        <br>
        <br>
        <v-card-text align="center">
          <strong>No</strong> se
          {{ btnAcction ? 'termino de registrar al paciente' : 'guardaron los datos de la consulta anterior' }}.
          <br>
          <br>
          <strong>¿Deseas {{ btnAcction ? 'editar' : 'guardar' }} ahora?</strong>
          <br>
          <br>
          <p style="color: orangered">
            Nota: si sale sin {{ btnAcction ? 'editar' : 'guardar' }} se perderan todos los datos.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="cancelarEnvio"
          >
            {{ btnAcction ? 'Salir sin editar' : 'Salir sin guardar' }}
          </v-btn>
          <v-btn
              color="green darken-1"
              outlined
              @click="btnAcction ? editaHistoria() : enviarDatosConsulta()"
          >
            {{ btnAcction ? 'Editar' : 'Guardar' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
        v-model="isPerfilBioquimico"
        persistent
        max-width="600px"
        scrollable
    >
      <v-card>
        <v-toolbar
            class="font-weight-thin"
            style="font-size: 1.2em;"
            color="#26A69A"
            dark
        >
          <strong>
            PERFIL BIOQUÍMICO
          </strong>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4" sm="4" md="12">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.fecha"
                    prepend-icon="mdi-calendar"
                    type="date"
                    label="Fecha de estudio"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.hemoglobina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Hemoglobina"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.glucosa"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Glucosa"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.colesterol"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Colesterol"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.hdl"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="HDL"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.ldl"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="LDL"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.trigliceridos"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Triglicéridos"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.acidoUrico"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Ácido Úrico"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.creatinina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Creatinina"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.fosforo"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Fósforo"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.calcio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Calcio"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.magnesio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Magnesio"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.sodio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Sodio"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.potasio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Potasio"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.cloro"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Cloro"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="historicoPasada.perfilBioquimico.albumina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Creatinina"
                    color="primary"
                    disabled
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="isPerfilBioquimico= false"
          >
            Salir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ConsultaSubsecuente from '@/components/admin/ConsultaSubsecuente'
import router from "@/router";

export default {
  name: 'PatientsRegisterTable',
  components: {
    ConsultaSubsecuente
  },
  props: {
    patientsRegister: {}
  },
  data() {
    return {
      isPerfilBioquimico: false,
      noConsultas: 1,
      isExistData: false,
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
        objetivos: '',
        perfilBioquimico: {
          isPerfilB: false,
          fecha: '',
          hemoglobina: '',
          glucosa: '',
          colesterol: '',
          hdl: '',
          ldl: '',
          trigliceridos: '',
          acidoUrico: '',
          creatinina: '',
          fosforo: '',
          calcio: '',
          magnesio: '',
          sodio: '',
          potasio: '',
          cloro: '',
          albumina: ''
        }
      },
      genero: false,
      pesoInicial: '',
      cinturaInicial: '',
      btnAcction: false,
      numberStep: 0
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
      let pesoInicial = parseFloat(this.pesoInicial)
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
      let cinturaInicial = parseInt(this.cinturaInicial)
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
      let pesoInicial = parseFloat(this.pesoInicial)
      let pesoActual = parseFloat(this.historicoPasada.peso)

      if (pesoActual < pesoInicial) {
        kilosPerdidos = 'Perdidos'
        return kilosPerdidos
      }
      if (pesoActual > pesoInicial) {
        kilosPerdidos = 'Ganados'
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
      let cinturaInicial = parseInt(this.cinturaInicial)
      let cinturaActual = parseInt(this.historicoPasada.cintura)
      if (cinturaActual < cinturaInicial) {
        return 'Perdidos'
      }
      if (cinturaActual > cinturaInicial) {
        return 'Ganados'
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
        return '#FF6E40'
      }
      return nivel
    },
    calculaNivelPesoImg() {
      let nivel = ''
      let genero = this.genero

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
      if (this.isShowInfo) {
        this.isShowInfo = false
        this.isShowMoreInfo = false
      }
      this.idPaciente = item.datosPersonales.idPaciente
      this.$store.commit('SET_PROCESSING_REQUEST', true)
      this.$store.state.PersonalData.datosPersonales.idPaciente = item.datosPersonales.idPaciente
      this.genero = item.datosPersonales.genero

      this.$store.dispatch('PersonalData/getHistoricoConsultas').then(response => {
        if (response[0] === 'Auth token is expired') {
          window.localStorage.removeItem('userAuth')
          window.localStorage.removeItem('userInfo')
          window.localStorage.removeItem('registeredUser')
          this.$store.dispatch('MessageAlerts/clearAlert', false)
          this.$store.dispatch('AuthenticationProcesses/clearAuthenticationProcesses', false)
          this.$router.push('/')
        } else {
          this.pesoInicial = response[0].antropometria.peso
          this.cinturaInicial = response[0].antropometria.cintura
          this.noConsultas = response.length
          if (response.length >= 2) {
            this.isSubsecuente = true
            this.historicoAntepasada.fecha = new Date(response[response.length - 2].createDate)
            this.historicoAntepasada.peso = response[response.length - 2].antropometria.peso
            this.historicoAntepasada.pGrasa = response[response.length - 2].antropometria.porcentajeGrasa
            this.historicoAntepasada.pMusculo = response[response.length - 2].antropometria.porcentajeMusculo
            this.historicoAntepasada.cintura = response[response.length - 2].antropometria.cintura
            this.historicoAntepasada.cadera = response[response.length - 2].antropometria.cadera
            this.historicoAntepasada.imc = response[response.length - 2].antropometria.imc
            this.historicoAntepasada.edadMetabolica = response[response.length - 2].antropometria.edadMetabolica
            this.historicoAntepasada.grasa = response[response.length - 2].antropometria.grasaBiceral
            this.historicoAntepasada.glucosa = response[response.length - 2].clinico.glucosa
            this.historicoAntepasada.ta = response[response.length - 2].clinico.ta

            this.historicoPasada.fecha = new Date(response[response.length - 1].createDate)
            this.historicoPasada.peso = response[response.length - 1].antropometria.peso
            this.historicoPasada.pGrasa = response[response.length - 1].antropometria.porcentajeGrasa
            this.historicoPasada.pMusculo = response[response.length - 1].antropometria.porcentajeMusculo
            this.historicoPasada.cintura = response[response.length - 1].antropometria.cintura
            this.historicoPasada.cadera = response[response.length - 1].antropometria.cadera
            this.historicoPasada.imc = response[response.length - 1].antropometria.imc
            this.historicoPasada.edadMetabolica = response[response.length - 1].antropometria.edadMetabolica
            this.historicoPasada.grasa = response[response.length - 1].antropometria.grasaBiceral
            this.historicoPasada.glucosa = response[response.length - 1].clinico.glucosa
            this.historicoPasada.ta = response[response.length - 1].clinico.ta

          } else {
            this.isSubsecuente = false
            this.historicoPasada.fecha = new Date(response[response.length - 1].createDate)
            this.historicoPasada.peso = response[response.length - 1].antropometria.peso
            this.historicoPasada.pGrasa = response[response.length - 1].antropometria.porcentajeGrasa
            this.historicoPasada.pMusculo = response[response.length - 1].antropometria.porcentajeMusculo
            this.historicoPasada.cintura = response[response.length - 1].antropometria.cintura
            this.historicoPasada.cadera = response[response.length - 1].antropometria.cadera
            this.historicoPasada.imc = response[response.length - 1].antropometria.imc
            this.historicoPasada.edadMetabolica = response[response.length - 1].antropometria.edadMetabolica
            this.historicoPasada.grasa = response[response.length - 1].antropometria.grasaBiceral
            this.historicoPasada.glucosa = response[response.length - 1].clinico.glucosa
            this.historicoPasada.ta = response[response.length - 1].clinico.ta
            this.imcNivel = response[response.length - 1].clinico.imc
          }
          this.historicoPasada.malestar = response[response.length - 1].clinico.malestaresGeneral
          this.historicoPasada.observaciones = response[response.length - 1].habitos.observaciones
          this.historicoPasada.objetivos = response[response.length - 1].habitos.objetivos
          this.imcNivel = this.historicoPasada.imc
          for (var x = 0; x < response.length; x++) {
            if (response[x].clinico.perfilBioquimico !== undefined) {
              this.historicoPasada.perfilBioquimico.isPerfilB = response[x].clinico.isPerfilB
              this.historicoPasada.perfilBioquimico.fecha = response[x].clinico.perfilBioquimico.fecha
              this.historicoPasada.perfilBioquimico.hemoglobina = response[x].clinico.perfilBioquimico.hemoglobina
              this.historicoPasada.perfilBioquimico.glucosa = response[x].clinico.perfilBioquimico.glucosa
              this.historicoPasada.perfilBioquimico.colesterol = response[x].clinico.perfilBioquimico.colesterol
              this.historicoPasada.perfilBioquimico.hdl = response[x].clinico.perfilBioquimico.hdl
              this.historicoPasada.perfilBioquimico.ldl = response[x].clinico.perfilBioquimico.ldl
              this.historicoPasada.perfilBioquimico.trigliceridos = response[x].clinico.perfilBioquimico.trigliceridos
              this.historicoPasada.perfilBioquimico.acidoUrico = response[x].clinico.perfilBioquimico.acidoUrico
              this.historicoPasada.perfilBioquimico.creatinina = response[x].clinico.perfilBioquimico.creatinina
              this.historicoPasada.perfilBioquimico.fosforo = response[x].clinico.perfilBioquimico.fosforo
              this.historicoPasada.perfilBioquimico.calcio = response[x].clinico.perfilBioquimico.calcio
              this.historicoPasada.perfilBioquimico.magnesio = response[x].clinico.perfilBioquimico.magnesio
              this.historicoPasada.perfilBioquimico.sodio = response[x].clinico.perfilBioquimico.sodio
              this.historicoPasada.perfilBioquimico.potasio = response[x].clinico.perfilBioquimico.potasio
              this.historicoPasada.perfilBioquimico.cloro = response[x].clinico.perfilBioquimico.cloro
              this.historicoPasada.perfilBioquimico.albumina = response[x].clinico.perfilBioquimico.albumina
            } else {
              this.historicoPasada.perfilBioquimico.isPerfilB = false
            }
          }
        }
        if (!this.isShowInfo) {
          this.isShowInfo = true
        }
        this.$store.commit('SET_PROCESSING_REQUEST', false)
        this.$store.commit('PersonalData/SET_TEMP_DATA')
      })
    },
    getColor(grade) {
      return grade ? '#f8bacf' : '#27c6da'
    },
    sendWhats(phone, name) {
      return "https://api.whatsapp.com/send?phone=52" + phone + "&text=¡Hola,%20" + name + "!"
    },
    iniciarConsulta(paciente, medidas) {
      window.localStorage.setItem('idPaciente', paciente.idPaciente)
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
            this.$store.state.PersonalData.medidasHistorico.peso = response[response.length - 1].antropometria.peso
            this.$store.state.PersonalData.medidasHistorico.cintura = response[response.length - 1].antropometria.cintura
            this.$store.state.PersonalData.medidasHistorico.cadera = response[response.length - 1].antropometria.cadera
            this.$store.state.PersonalData.medidasHistorico.imc = response[response.length - 1].antropometria.imc
            this.$store.state.PersonalData.medidasHistorico.edadMetabolica = response[response.length - 1].antropometria.edadMetabolica
            this.$store.state.PersonalData.medidasHistorico.grasaBiceral = response[response.length - 1].antropometria.grasaBiceral
            this.$store.state.PersonalData.medidasHistorico.fecha = new Date(response[response.length - 1].createDate)
            this.$store.state.PersonalData.medidasHistorico.porcentajeGrasa = response[response.length - 1].antropometria.porcentajeGrasa
            this.$store.state.PersonalData.medidasHistorico.porcentajeMusculo = response[response.length - 1].antropometria.porcentajeMusculo
            this.$store.state.PersonalData.antropometria.estatura = medidas.estatura

            this.$store.state.PersonalData.clinicoHistorico.glucosa = response[response.length - 1].clinico.glucosa
            this.$store.state.PersonalData.clinicoHistorico.ta = response[response.length - 1].clinico.ta
            this.$store.state.PersonalData.clinicoHistorico.hidratacion = response[response.length - 1].clinico.hidratacion
            this.$store.state.PersonalData.clinicoHistorico.noEvacuaciones = response[response.length - 1].clinico.noEvacuaciones
            this.$store.state.PersonalData.clinicoHistorico.evacuaciones = response[response.length - 1].clinico.evacuaciones
            this.$store.state.PersonalData.clinicoHistorico.malestaresGeneral = response[response.length - 1].clinico.malestaresGeneral

            this.$store.commit('PersonalData/SET_TEMP_DATA')
            this.$store.commit('SET_PROCESSING_REQUEST', false)

            this.dialog = true
          }
        }
      })
    },
    enviarDatosConsulta() {
      this.$store.commit('SET_PROCESSING_REQUEST', true)
      if (window.localStorage.getItem('tempDatosPersonales') !== null) {
        this.$store.state.PersonalData.datosPersonales = JSON.parse(window.localStorage.getItem('tempDatosPersonales'))
        this.$store.state.PersonalData.antecedentesHeredofamiliares = JSON.parse(window.localStorage.getItem('tempAntecedentesHeredofamiliares'))
        this.$store.state.PersonalData.antecedentesPersonalesPatologicos = JSON.parse(window.localStorage.getItem('tempAntecedentesPersonalesPatologicos'))
        this.$store.state.PersonalData.antecedentesGinecoObstetricos = JSON.parse(window.localStorage.getItem('tempAntecedentesGinecoObstetricos'))
        this.$store.state.PersonalData.antecedentesPersonalesNoPatologicos = JSON.parse(window.localStorage.getItem('tempAntecedentesPersonalesNoPatologicos'))
        this.$store.state.PersonalData.comidas = JSON.parse(window.localStorage.getItem('tempComidas'))
        this.$store.state.PersonalData.antropometria = JSON.parse(window.localStorage.getItem('tempAntropometria'))
        this.$store.state.PersonalData.clinico = JSON.parse(window.localStorage.getItem('tempClinico'))
        this.$store.state.PersonalData.dietetico = JSON.parse(window.localStorage.getItem('tempDietetico'))
        this.$store.state.PersonalData.habitos = JSON.parse(window.localStorage.getItem('tempHabitos'))
        this.$store.state.createDate = new Date()
        this.$store.dispatch('PersonalData/sendRegister')
        this.isExistData = false
      } else {
        this.$store.state.PersonalData.datosPersonales.idPaciente = window.localStorage.getItem('idPaciente')
        this.$store.state.PersonalData.antropometria = JSON.parse(window.localStorage.getItem('tempAntropometria'))
        this.$store.state.PersonalData.clinico = JSON.parse(window.localStorage.getItem('tempClinico'))
        this.$store.state.PersonalData.dietetico = JSON.parse(window.localStorage.getItem('tempDietetico'))
        this.$store.state.PersonalData.habitos = JSON.parse(window.localStorage.getItem('tempHabitos'))
        this.$store.state.createDate = new Date()
        this.$store.dispatch('PersonalData/sendHistoricoConsulta', this.$store.state.PersonalData.datosPersonales.idPaciente).then(resp => {
          resp ? this.isExistData = false : this.isExistData = false
        })
      }
    },
    cancelarEnvio() {
      this.$store.commit('PersonalData/SET_PERSONAL_DATA')
      this.isExistData = false
    },
    editaHistoria() {
      this.$store.state.Steps.numberOfSteps = this.numberStep
      router.push('dashboard')
    }
  },
  mounted() {
    if (window.localStorage.getItem('idPaciente') !== null &&
        window.localStorage.getItem('tempAntropometria') !== null &&
        window.localStorage.getItem('tempClinico') !== null &&
        window.localStorage.getItem('tempDietetico') !== null &&
        window.localStorage.getItem('tempHabitos') !== null) {
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempDatosPersonales') === null &&
        window.localStorage.getItem('tempAntecedentesHeredofamiliares') === null &&
        window.localStorage.getItem('tempAntecedentesPersonalesPatologicos') === null &&
        window.localStorage.getItem('tempAntecedentesGinecoObstetricos') === null &&
        window.localStorage.getItem('tempAntecedentesPersonalesNoPatologicos') === null &&
        window.localStorage.getItem('tempComidas') === null &&
        window.localStorage.getItem('tempAntropometria') === null &&
        window.localStorage.getItem('tempClinico') === null &&
        window.localStorage.getItem('tempDietetico') === null &&
        window.localStorage.getItem('tempHabitos') === null) {
      this.btnAcction = false
      this.numberStep = 0
      this.isExistData = false
      return
    }
    if (window.localStorage.getItem('tempDatosPersonales') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 1
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempAntecedentesHeredofamiliares') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 2
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempAntecedentesPersonalesPatologicos') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 3
      this.isExistData = true
      return
    }
    if (this.$store.state.PersonalData.datosPersonales.genero) {
      if (window.localStorage.getItem('tempAntecedentesGinecoObstetricos') !== null) {
        this.isExistData = true
      } else {
        this.btnAcction = true
        this.numberStep = 4
        this.isExistData = true
        return
      }
    }
    if (window.localStorage.getItem('tempAntecedentesPersonalesNoPatologicos') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 5
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempComidas') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 6
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempAntropometria') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 7
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempClinico') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 8
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempDietetico') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 9
      this.isExistData = true
      return
    }
    if (window.localStorage.getItem('tempHabitos') !== null) {
      this.isExistData = true
    } else {
      this.btnAcction = true
      this.numberStep = 10
      this.isExistData = true
      return
    }
  }
}
</script>
