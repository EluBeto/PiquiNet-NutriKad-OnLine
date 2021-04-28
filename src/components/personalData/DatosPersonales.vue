<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="350px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formIdentificationCard"
            v-model="arraySteps.arrayOfSteps[1].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">datos personales</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select
                :rules="rules.campoObligatorio"
                v-model="datosPersonales.tipoConsulta"
                :items="tipoConsultas"
                label="Tipo de Consulta"
                prepend-icon="mdi-account"
                required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.nombre"
                type="text"
                prepend-icon="mdi-account"
                label="Nombre"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.apellidoPaterno"
                type="text"
                prepend-icon="mdi-account"
                label="Apellido Paterno"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.apellidoMaterno"
                type="text"
                prepend-icon="mdi-account"
                label="Apellido Materno"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.dateRules"
                v-model="datosPersonales.fechaNac"
                prepend-icon="mdi-calendar"
                type="date"
                label="Fecha de nacimiento"
                color="primary"
                required
                @focusout="edad"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="datosPersonales.edad"
                prepend-icon="mdi-account"
                type="number"
                label="Edad"
                color="primary"
                required
                disabled
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                maxlength="10"
                :rules="rules.phoneRules"
                v-model="datosPersonales.telefono"
                prepend-icon="mdi-phone"
                label="Número de celular"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.ocupacion"
                type="text"
                prepend-icon="mdi-account-tie"
                label="Ocupación"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select
                :rules="rules.campoObligatorio"
                v-model="datosPersonales.estadoCivil"
                :items="estadoCivil"
                label="Estado Civil"
                prepend-icon="mdi-account"
                required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.direccion"
                type="text"
                prepend-icon="mdi-account-supervisor"
                label="Dirección"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="datosPersonales.padecimientoActual"
                type="text"
                prepend-icon="mdi-head-question-outline"
                label="Padecimiento Actual"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="datosPersonales.genero"
                label="¿Es mujer?"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'DatosPersonales',
  inject: ['$validator'],
  data: () => ({
    tipoConsultas: ['On Line', 'Precencial'],
    estadoCivil: ['Soltera(o)', 'Casada(o)', 'Viuda(o)', 'Divorciada(o)', 'Union Libre']
  }),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    datosPersonales() {
      return this.$store.getters['PersonalData/getDatosPersonales']
    },
    calculaEdad() {
      let hoy = new Date();
      let cumpleanos = new Date(this.datosPersonales.fechaNac);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      let m = hoy.getMonth() - cumpleanos.getMonth();

      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--
      }
      return edad
    }
  },
  methods: {
    edad() {
      this.datosPersonales.edad = this.calculaEdad
    }
  }
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.scroll {
  overflow-y: scroll
}
</style>
