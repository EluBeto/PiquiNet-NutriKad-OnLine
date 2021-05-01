<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="350px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesGinecoObstetricosCard"
            v-model="arraySteps.arrayOfSteps[4].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes gineco-obstetricos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.dateRules"
                v-model="antecedentesGinecoObstetricos.fum"
                label="Fecha de ultima menstruación"
                prepend-icon="mdi-calendar"
                type="date"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.menarca"
                label="¿Menarca?"
                type="text"
                prepend-icon="mdi-face-woman-shimmer"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.climaterio"
                prepend-icon="mdi-face-woman-shimmer"
                type="text"
                label="¿Climaterio? (menopausia)"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.anticonceptivos"
                prepend-icon="mdi-face-woman-shimmer"
                type="text"
                label="¿Anticonceptivos hormonales?"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                :disabled="!datosPersonales.genero"
                inset
                v-model="antecedentesGinecoObstetricos.isEmbarazada"
                label="¿Has estado embarazada?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3" v-if="antecedentesGinecoObstetricos.isEmbarazada">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.numberRules"
                v-model="antecedentesGinecoObstetricos.noGestas"
                prepend-icon="mdi-human-pregnant"
                type="number"
                label="No. de Gestas"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" v-if="antecedentesGinecoObstetricos.isEmbarazada">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.noPartos"
                prepend-icon="mdi-human-pregnant"
                type="text"
                label="¿Partos?"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3" v-if="antecedentesGinecoObstetricos.isEmbarazada">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.semanasGestacion"
                prepend-icon="mdi-human-pregnant"
                type="text"
                label="Semanas de Gestación"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.caracteristicasCiclo"
                type="text"
                prepend-icon="mdi-face-woman-shimmer"
                label="Características de Ciclo"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                :disabled="!datosPersonales.genero"
                inset
                v-model="antecedentesGinecoObstetricos.abortos"
                label="¿Abortos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :disabled="!datosPersonales.genero"
                v-if="antecedentesGinecoObstetricos.abortos"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.complicaciones"
                type="text"
                prepend-icon="mdi-face-woman-shimmer"
                label="Complicaciones"
                color="primary"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'AntecedentesGinecoObstetricos',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    antecedentesGinecoObstetricos() {
      return this.$store.getters['PersonalData/getAntecedentesGinecoObstetricos']
    },
    datosPersonales() {
      return this.$store.getters['PersonalData/getDatosPersonales']
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
