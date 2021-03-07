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
        item-key="id"
        fixed-header
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
        <template v-slot:item.dataIdentificationCard="{ item }">
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
                :color="getColor(item.datosPersonales.genero)"
                dark
            >
                {{ item.datosPersonales.genero === true ? 'Mujer' : 'Hombre'}}
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
            console.log('Entro');
            return grade ? 'red' : 'green'
        }
    }
  }
</script>
