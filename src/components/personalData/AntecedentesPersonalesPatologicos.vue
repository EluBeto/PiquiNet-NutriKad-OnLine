<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="250px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesHeredofamiliaresCard"
            v-model="arraySteps.arrayOfSteps[3].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes personales patológicos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.quirurgicos"
                label="¿Quirúrgicos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.obesidad"
                label="¿Obesidad?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.estrenimiento"
                label="¿Estreñimiento?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.dislipidemias"
                label="¿Dislipidemias?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.anemia"
                label="¿Anemia?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.hemorroides"
                label="¿Hemorroides?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.cancer"
                label="¿Cancer?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.gastritis"
                label="¿Gastritis?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.diverticulos"
                label="¿Divertículos?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.hipertencionArtereal"
                label="¿Hipertensión arterial?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesPatologicos.colitis"
                label="¿Colitis?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.otros"
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
  name: 'AntecedentesPersonalesPatologicos',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    antecedentesPersonalesPatologicos() {
      return this.$store.getters['PersonalData/getAntecedentesPersonalesPatologicos']
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
