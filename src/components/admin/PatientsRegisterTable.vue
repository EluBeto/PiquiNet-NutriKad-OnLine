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
        item-key="id"
        fixed-header
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
