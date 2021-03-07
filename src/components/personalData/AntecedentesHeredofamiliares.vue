<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="250px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesHeredofamiliaresCard"
            v-model="arraySteps.arrayOfSteps[2].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes heredofamiliares</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.diabetes"
                label="¿Diabetes?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.cancer"
                label="¿Cancer?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.obesidad"
                label="¿Obesidad?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.cardiopatias"
                label="¿Cardiopatías?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.hepaticos"
                label="¿Hepáticos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesHeredofamiliares.dislipidemias"
                label="¿Dislipidemias?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesHeredofamiliares.otros"
                type="text"
                prepend-icon="mdi-account"
                label="Otros"
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
  name: 'AntecedentesHeredofamiliares',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    antecedentesHeredofamiliares() {
      return this.$store.getters['PersonalData/getAntecedentesHeredofamiliares']
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
