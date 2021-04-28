<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="280px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formDiabeticoCard"
            v-model="arraySteps.arrayOfSteps[8].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">Control Dietético</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-select
                :rules="rules.campoObligatorio"
                v-model="diabetico.apegoPlan"
                :items="escala"
                type="text"
                prepend-icon="mdi-food-croissant"
                label="Apego al Pan"
                color="primary"
                required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-select
                :rules="rules.campoObligatorio"
                v-model="diabetico.escalaSueno"
                :items="escala"
                type="text"
                prepend-icon="mdi-sleep"
                label="Escala de Sueño"
                color="primary"
                required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.campoObligatorio"
                v-model="diabetico.horaDespertar"
                type="time"
                prepend-icon="mdi-weather-partly-cloudy"
                label="Hora al Despertar"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.campoObligatorio"
                v-model="diabetico.horaDormir"
                type="time"
                prepend-icon="mdi-weather-night-partly-cloudy"
                label="Hora al Dormir"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="diabetico.emociones"
                type="text"
                prepend-icon="mdi-emoticon-outline"
                label="Emociones"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="diabetico.conductasAlimentarias"
                type="text"
                prepend-icon="mdi-food"
                label="Conductas Alimentarias"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="diabetico.logros"
                type="text"
                prepend-icon="mdi-account-star"
                label="Logros"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="diabetico.areasOportuidad"
                type="text"
                prepend-icon="mdi-account-convert-outline"
                label="Áreas de Oportunidad"
                color="primary"
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
  name: 'Dietetico',
  inject: ['$validator'],
  data: () => ({
    escala: ['Bueno', 'Malo', 'Regular']
  }),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    diabetico() {
      return this.$store.getters['PersonalData/getDietetico']
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
