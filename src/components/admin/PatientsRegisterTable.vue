<template>
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
      <template v-slot:expanded-item="{ headers, item }" class=" align-content-lg-end">
        <td :colspan="headers.length">
          <v-row class="ma-2">
            <v-col cols="12" sm="4">
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
                        {{ item.antropometria.estadoCivil}}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Ocupación:
                      <v-chip color="primary" small>
                        {{ item.antropometria.ocupacion}}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Padecimiento Actual:
                      <v-chip color="primary" small>
                        {{ item.antropometria.padecimientoActual}}
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
            <v-col cols="12" sm="4">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Antecedentes Heredo Familiares</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Diabetes:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.diabetes ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Cancer:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.cancer ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      HTA:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.hipertencionArtereal ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Obesidad:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.obesidad ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Cardiopatias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.cardiopatias ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Hepaticos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.hepaticos ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Dislipidemias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.dislipidemias ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      otros:
                      <v-chip color="primary" small>
                        {{ item.antecedentesHeredofamiliares.otros }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Antecedentes Personales Patologicos</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      quirurgicos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.quirurgicos ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      obesidad:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.obesidad ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      dislipidemias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.dislipidemias ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      anemia:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.anemia ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      hemorroides:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.hemorroides ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      cancer:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.cancer ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      gastritis:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.gastritis ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      diverticulos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.diverticulos ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      colitis:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.colitis ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      otros:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesPatologicos.otros }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="ma-2">
            <v-col cols="12" sm="4">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Antecedentes Gineco Obstetricos</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      menarca:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.menarca }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      fum:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.fum }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      climaterio:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.climaterio ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      noGestas:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.noGestas }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      noPartos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.noGestas ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      abortos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.abortos ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      complicaciones:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.complicaciones }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      semanasGestacion:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.semanasGestacion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      anticonceptivos:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.anticonceptivos }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      caracteristicasCiclo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesGinecoObstetricos.caracteristicasCiclo }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Antecedentes Personales No Patologicos</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      tabaquismo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.tabaquismo }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      alcoholismo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.alcoholismo }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      alergias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.alergias }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      intolerancias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.obesidad }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      averacionesAlimentarias:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.averacionesAlimentarias }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      cambiosIngesta:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.cambiosIngesta }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      causas:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.causas }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      tratamientoDieteticoPrevio:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.tratamientoDieteticoPrevio }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      tiempo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.tiempo }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      resultado:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.resultado }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      actividadFicica:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.actividadFicica ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      sedentarismo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.sedentarismo ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      moderado:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.moderado ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      activo:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.activo ? 'Si' : 'No' }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      ejercicio:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.ejercicio }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      frecuencia:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.frecuencia }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      duracion:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.duracion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      motivo Consulta:
                      <v-chip color="primary" small>
                        {{ item.antecedentesPersonalesNoPatologicos.motivoConsulta }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Comidas</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      desayuno:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.adicional.hora }}
                        descripcion: {{ item.comidas.adicional.descripcion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      comida:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.comida.hora }}
                        descripcion: {{ item.comidas.comida.descripcion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      cena:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.cena.hora }}
                        descripcion: {{ item.comidas.cena.descripcion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      mediaManana:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.mediaManana.hora }}
                        descripcion: {{ item.comidas.mediaManana.descripcion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      mediaTarde:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.mediaTarde.hora }}
                        descripcion: {{ item.comidas.mediaTarde.descripcion }}
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      adicional:
                      <v-chip color="primary" small>
                        Hora: {{ item.comidas.adicional.hora }}
                        descripcion: {{ item.comidas.adicional.descripcion }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
  name: 'PatientsRegisterTable',
  props: {
      patientsRegister: {}
  },
    data () {
      return {
        expanded: [],
        search: ''
      }
    },
    computed: {
      GetHeadersTable() {
        return [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
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
      }
    }
  }
</script>
