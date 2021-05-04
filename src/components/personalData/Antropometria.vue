<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      :height="`${isMedidasExtremidades ? '880px' : '450px'}`"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntropometriaCard"
            v-model="arraySteps.arrayOfSteps[6].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antropometría</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.peso"
                type="text"
                prepend-icon="mdi-weight-kilogram"
                label="Peso Actual (Kg)"
                color="primary"
                @keyup="calculaIMC"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.decimal"
                v-model="antropometria.estatura"
                type="text"
                prepend-icon="mdi-human-male-height"
                label="Estatura (mts)"
                color="primary"
                @keyup="calculaIMC"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.imc"
                type="text"
                prepend-icon="mdi-arm-flex-outline"
                label="IMC"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.porcentajeGrasa"
                type="text"
                prepend-icon="mdi-percent-outline"
                label="Porcentaje de Grasa"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.porcentajeMusculo"
                type="text"
                prepend-icon="mdi-percent-outline"
                label="Porcentaje de Musculo"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.cintura"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cintura (cm)"
                color="primary"
                @keyup="calculaICC"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.cadera"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cadera (cm)"
                color="primary"
                @keyup="calculaICC"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.icc"
                type="text"
                prepend-icon="mdi-ruler"
                label="ICC"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.espalda"
                type="text"
                prepend-icon="mdi-ruler"
                label="Espalda"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.pectoral"
                type="text"
                prepend-icon="mdi-ruler"
                label="Pectoral"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.cinturaAlta"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cintura Alta"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.campoObligatorio"
                v-model="antropometria.edadMetabolica"
                type="number"
                prepend-icon="mdi-ruler"
                label="Edad Metabolica"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.campoObligatorio"
                v-model="antropometria.grasaBiceral"
                type="number"
                prepend-icon="mdi-ruler"
                label="Grasa Viceral"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="isMedidasExtremidades"
                label="Medir Extremidades"
            ></v-switch>
          </v-col>
        </v-row>
        <v-divider v-if="isMedidasExtremidades"></v-divider>
        <br>
        <v-row v-if="isMedidasExtremidades">
          <v-col cols="12" sm="6" md="6">
            <v-card class="mx-auto">
              <v-card-title class="text-center">
                <p class="display-1 text--primary">
                  Izquierdo
                </p>
              </v-card-title>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.izquierdo.pbiRelajado"
                        type="text"
                        prepend-icon="mdi-arm-flex-outline"
                        label="PBI Relajado"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.izquierdo.pbiFlexionado"
                        type="text"
                        prepend-icon="mdi-arm-flex-outline"
                        label="PBI Flexionado"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.izquierdo.ppa"
                        type="text"
                        prepend-icon="mdi-seat-legroom-extra"
                        label="PPA"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.izquierdo.pp"
                        type="text"
                        prepend-icon="mdi-seat-legroom-extra"
                        label="PP"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-card class="mx-auto">
              <v-card-title class="text-center">
                <p class="display-1 text--primary">
                  Derecho
                </p>
              </v-card-title>
              <v-card-text>
                <v-row class="ma-0">
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.derecho.pbiRelajado"
                        type="text"
                        prepend-icon="mdi-arm-flex-outline"
                        label="PBI Relajado"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.derecho.pbiFlexionado"
                        type="text"
                        prepend-icon="mdi-arm-flex-outline"
                        label="PBI Flexionado"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.derecho.ppa"
                        type="text"
                        prepend-icon="mdi-seat-legroom-extra"
                        label="PPA"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                        :rules="rules.weightRules"
                        v-model="antropometria.derecho.pp"
                        type="text"
                        prepend-icon="mdi-seat-legroom-extra"
                        label="PP"
                        color="primary"
                        required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'Antropometria',
  inject: ['$validator'],
  data: () => ({
    isMedidasExtremidades: false
  }),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    antropometria() {
      return this.$store.getters['PersonalData/getAntropometria']
    }
  },
  methods: {
    calculaIMC() {
      let imc = 0
      let estatura = this.$store.state.PersonalData.antropometria.estatura
      let peso = this.$store.state.PersonalData.antropometria.peso
      if (estatura > 0 && peso > 0) {
        let estaturaCuadrado = estatura * estatura
        imc = peso / estaturaCuadrado
        this.$store.state.PersonalData.antropometria.imc = imc.toFixed(2)
      }
    },
    calculaICC() {
      let icc = 0
      let cintura = this.$store.state.PersonalData.antropometria.cintura
      let cadera = this.$store.state.PersonalData.antropometria.cadera
      if (cintura > 0 && cadera > 0) {
        icc = cintura / cadera
        this.$store.state.PersonalData.antropometria.icc = icc.toFixed(2)
      }
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
