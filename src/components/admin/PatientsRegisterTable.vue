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
        :headers="headers"
        :items="patientsRegister"
        :search="search"
        class="elevation-1"
        locale="es-mx"
        multi-sort
        item-key="dataIdentificationCard.phoneNumber"
        fixed-header
        :expanded.sync="expanded"
        show-expand
    >
        <template v-slot:item.dataIdentificationCard="{ item }">
            <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
                {{ item.dataIdentificationCard.name }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard="{ item }">
            <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
                {{ item.dataIdentificationCard.lastName }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard="{ item }">
            <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
                {{ item.dataIdentificationCard.motherLastName }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard="{ item }">
            <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
                {{ item.dataIdentificationCard.age }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard="{ item }">
            <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
                {{ item.dataIdentificationCard.dateOfBirth }}
            </div>
        </template>
        <template v-slot:item.dataIdentificationCard="{ item }">
            <v-chip
                :color="getColor(item.dataIdentificationCard.gender)"
                dark
            >
                {{ item.dataIdentificationCard.gender === true ? 'Mujer' : 'Hombre'}}
            </v-chip>
        </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td></td>
        <td>
          <tr>
            <th style="color: #4caf50">Medidas</th>
          </tr>
          <tr>
            <th class="text-left">
              Peso: {{ item.clinicHistory.actualWeight }} KG
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Estatura: {{ item.clinicHistory.height }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Cintura: {{ item.clinicHistory.measurements.waist }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Cadera: {{ item.clinicHistory.measurements.hip}} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Pecho: {{ item.clinicHistory.measurements.chest }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Telefono: {{ item.dataIdentificationCard.phoneNumber }}
            </th>
          </tr>
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
            console.log('Entro');
            return grade ? 'red' : 'green'
        }
    }
  }
</script>
