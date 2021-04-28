<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="350px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesPersonalesPatologicosCard"
            v-model="arraySteps.arrayOfSteps[3].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes personales patológicos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.quirurgicos"
                type="text"
                label="¿Quirúrgicos?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.obesidad"
                type="text"
                label="¿Obesidad?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.estrenimiento"
                type="text"
                label="¿Estreñimiento?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.dislipidemias"
                type="text"
                label="¿Dislipidemias?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.anemia"
                type="text"
                label="¿Anemia?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.hemorroides"
                type="text"
                label="¿Hemorroides?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.cancer"
                type="text"
                label="¿Cancer?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.gastritis"
                type="text"
                label="¿Gastritis?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.diverticulos"
                type="text"
                label="¿Divertículos?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.hipertencionArtereal"
                type="text"
                label="¿Hipertensión arterial?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.colitis"
                type="text"
                label="¿Colitis?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-model="antecedentesPersonalesPatologicos.otros"
                type="text"
                label="¿Otros?"
                color="primary"
                prepend-icon="mdi-account-heart"
                required
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
