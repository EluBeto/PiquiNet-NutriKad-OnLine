<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="250px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesHeredofamiliaresCard"
            v-model="arraySteps.arrayOfSteps[4].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes gineco-obstetricos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesGinecoObstetricos.menarca"
                label="¿Menarca?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesGinecoObstetricos.fum"
                label="¿Fum?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesGinecoObstetricos.climaterio"
                label="¿Climaterio?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesGinecoObstetricos.anticonceptivos"
                label="¿Anticonceptivos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="antecedentesGinecoObstetricos.noGestas"
                prepend-icon="mdi-account"
                type="number"
                label="No. de Gestas"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="antecedentesGinecoObstetricos.noPartos"
                prepend-icon="mdi-account"
                type="number"
                label="No. de Partos"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="antecedentesGinecoObstetricos.semanasGestacion"
                prepend-icon="mdi-account"
                type="number"
                label="Semanas de Gestación"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.caracteristicasCiclo"
                type="text"
                prepend-icon="mdi-account"
                label="Características de Ciclo"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesGinecoObstetricos.abortos"
                label="¿Abortos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-if="antecedentesGinecoObstetricos.abortos"
                :rules="rules.textRules"
                v-model="antecedentesGinecoObstetricos.complicaciones"
                type="text"
                prepend-icon="mdi-account"
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
