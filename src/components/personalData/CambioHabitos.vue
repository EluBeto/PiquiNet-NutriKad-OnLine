<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="330px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntropometriaCard"
            v-model="arraySteps.arrayOfSteps[9].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">Cambio de Hábitos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="habitos.pasosDiarios"
                type="number"
                prepend-icon="mdi-walk"
                label="Pasos Diarios"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="habitos.ejercicio"
                type="text"
                prepend-icon="mdi-human-handsup"
                label="Ejercicio"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="habitos.controlHambreSaciedad"
                type="text"
                prepend-icon="mdi-head-alert-outline"
                label="Control de Hambre y Saciedad"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="habitos.porciones"
                type="text"
                prepend-icon="mdi-head-alert-outline"
                label="Porciones"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="habitos.organizacion"
                type="text"
                prepend-icon="mdi-head-alert-outline"
                label="Organización"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.numberRules"
                v-model="habitos.calificacion"
                type="number"
                prepend-icon="mdi-hand-okay"
                label="Calificación"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-textarea
                :rules="rules.textRules"
                v-model="habitos.objetivos"
                type="text"
                class="mx-2"
                rows="1"
                prepend-icon="mdi-message-alert-outline"
                label="Objetivos"
                color="primary"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-textarea
                :rules="rules.textRules"
                v-model="habitos.observaciones"
                type="text"
                class="mx-2"
                rows="1"
                prepend-icon="mdi-message-alert-outline"
                label="Observaciónes"
                color="primary"
                required
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'CambioHabitos',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    habitos() {
      return this.$store.getters['PersonalData/getHabitos']
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
