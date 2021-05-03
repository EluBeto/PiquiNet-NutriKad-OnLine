<template>
  <v-card>
    <v-card-title style="font-size: 1.5em;">
      Nutri Pacientes
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
        :headers="headers"
        :items="patientsRegister"
        :search="search"
        class="elevation-1"
        style="font-size: 1.5em;"
        locale="es-mx"
        multi-sort
        item-key="dataIdentificationCard.name"
        fixed-header
        :expanded.sync="expanded"
        show-expand
    >
        <template v-slot:item.dataIdentificationCard.name="{ item }">
            <div class="text-uppercase" style="font-size: 1.0em;">
                {{ item.dataIdentificationCard.name }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard.lastName="{ item }">
            <div class="text-uppercase" style="font-size: 1.0em;">
                {{ item.dataIdentificationCard.lastName }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard.motherLastName="{ item }">
            <div class="text-uppercase" style="font-size: 1.0em;">
                {{ item.dataIdentificationCard.motherLastName }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard.age="{ item }">
            <div class="text-uppercase" style="font-size: 1.0em;">
                {{ item.dataIdentificationCard.age }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard.dateOfBirth="{ item }">
            <div class="text-uppercase" style="font-size: 1.0em;">
                {{ item.dataIdentificationCard.dateOfBirth }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard.gender="{ item }">
            <v-chip
                :color="getColor(item.dataIdentificationCard.gender)"
                small
            >
                {{ item.dataIdentificationCard.gender === true ? 'Mujer' : 'Hombre'}}
            </v-chip>
        </template>
      <template v-slot:expanded-item="{ headers, item }" class=" align-content-lg-end">
        <td :colspan="headers.length">
          <v-row class="ma-2">
            <v-col cols="12" sm="6">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Más información</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row align-content-sm="left">
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Peso:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.actualWeight }} kg.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Estatura:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.height }} cm.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Cintura:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.measurements.waist }} cm.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Cadera:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.measurements.hip}} cm.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Pecho:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.measurements.chest }} cm.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Contacto:
                      <a :href="'tel:' + item.dataIdentificationCard.phoneNumber">
                        <v-icon>mdi mdi-phone</v-icon>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a :href="sendWhats(item.dataIdentificationCard.phoneNumber, item.dataIdentificationCard.name)" target="_blank">
                        <v-icon>mdi mdi-whatsapp</v-icon>
                      </a>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card>
                <v-card-title class="text-center" style="font-size: 1.5em;">Histórico de peso</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Semana 1:
                      <v-chip color="primary" small>
                        {{ item.clinicHistory.actualWeight }} kg.
                      </v-chip>
                    </v-col>
                    <v-col cols="12" sm="12" style="font-size: 1.0em;">
                      Semana 2:
                      <v-chip color="warning" small>
                        Pendiente ...
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
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'dataIdentificationCard.name',
          },
          {
            text: 'Apellido paterno',
            value: 'dataIdentificationCard.lastName',
          },
          {
            text: 'Apellido Materno',
            value: 'dataIdentificationCard.motherLastName',
          },
          {
            text: 'Edad',
            value: 'dataIdentificationCard.age',
          },
          {
            text: 'Fecha de Nacimiento',
            value: 'dataIdentificationCard.dateOfBirth',
          },
          {
            text: 'Sexo',
            value: 'dataIdentificationCard.gender',
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
