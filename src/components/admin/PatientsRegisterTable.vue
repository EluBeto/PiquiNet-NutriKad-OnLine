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
      <template v-slot:item.datosPersonales="{ item }">
        <div class="text-uppercase" style="font-size: 2.1em; margin-left: -30px;">
          {{ item.datosPersonales.genero }}
        </div>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td></td>
        <td colspan="1">
          <tr>
            <th style="color: #4caf50">Medidas</th>
          </tr>
          <tr>
            <th class="text-left">
              Peso: {{ item.antropometria.peso }} KG
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Estatura: {{ item.antropometria.estatura }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Cintura: {{ item.antropometria.cintura }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Cadera: {{ item.antropometria.cadera }} CM
            </th>
          </tr>
        </td>
        <td colspan="1">
          <tr>
            <th style="color: #4caf50">Mas Datos</th>
          </tr>
          <tr>
            <th class="text-left">
              Telefono: {{ item.antropometria.telefono }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Estado Civil: {{ item.antropometria.estadoCivil }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Ocupación: {{ item.antropometria.ocupacion }} CM
            </th>
          </tr>
          <tr>
            <th class="text-left">
              Padecimientos: {{ item.antropometria.padecimientoActual }} CM
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
    },
    mounted() {
      console.log('MMM: ', this.patientsRegister)
    }
  }
</script>
