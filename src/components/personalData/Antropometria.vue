<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="250px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesHeredofamiliaresCard"
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
                prepend-icon="mdi-account"
                label="Peso Actual (Kg)"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.estatura"
                type="text"
                prepend-icon="mdi-account"
                label="Estatura (cm)"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.cintura"
                type="text"
                prepend-icon="mdi-account"
                label="Cintura"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.weightRules"
                v-model="antropometria.cadera"
                type="text"
                prepend-icon="mdi-account"
                label="Cadera"
                color="primary"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <h3 class="text-center my-3 text-uppercase">comidas</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.desayuno.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.desayuno.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Qué desayunas?"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.comida.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.comida.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Qué comes?"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.cena.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.cena.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Qué cenas?"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.mediaManana.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.mediaManana.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Qué comes a media mañana?"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.mediaTarde.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.mediaTarde.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Qué comes a media tarde?"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.adicional.hora"
                type="time"
                label="Hora"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-textarea
                v-model="comidas.adicional.descripcion"
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                rows="1"
                label="¿Comes algo adicional?"
            ></v-textarea>
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
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    antropometria() {
      return this.$store.getters['PersonalData/getAntropometria']
    },
    comidas() {
      return this.$store.getters['PersonalData/getComidas']
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
