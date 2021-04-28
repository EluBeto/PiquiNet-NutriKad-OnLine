<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="350px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formComidasCard"
            v-model="arraySteps.arrayOfSteps[5].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">comidas</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="3" md="3">
            <v-text-field
                v-model="comidas.noComidas"
                :rules="rules.numberRules"
                type="number"
                label="Número de Comidas"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3" md="3"></v-col>
          <v-col cols="12" sm="3" md="3"></v-col>
          <v-col cols="12" sm="3" md="3"></v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.desayuno.hora"
                type="time"
                label="Hora Desayuno"
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
                label="¿Qué desayuna?"
                :rules="rules.textRules"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.comida.hora"
                type="time"
                label="Hora Comida"
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
                label="¿Qué come?"
                :rules="rules.textRules"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.cena.hora"
                type="time"
                label="Hora Cena"
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
                label="¿Qué cena?"
                :rules="rules.textRules"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.mediaManana.hora"
                type="time"
                label="Hora 1/2 Día"
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
                label="¿Qué come a media mañana?"
                :rules="rules.textRules"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.mediaTarde.hora"
                type="time"
                label="Hora 1/2 Tarde"
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
                label="¿Qué come a media tarde?"
                :rules="rules.textRules"
                required
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
                v-model="comidas.adicional.hora"
                type="time"
                label="Hora Adicional"
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
                label="¿Come algo adicional?"
                :rules="rules.textRules"
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
  name: 'Comidas',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
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
