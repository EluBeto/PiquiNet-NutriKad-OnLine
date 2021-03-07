<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="250px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formAntecedentesHeredofamiliaresCard"
            v-model="arraySteps.arrayOfSteps[5].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">antecedentes personales no patológicos</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesNoPatologicos.tabaquismo"
                label="¿Tabaquismo?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesNoPatologicos.alcoholismo"
                label="¿Alcoholismo?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.alergias"
                type="text"
                prepend-icon="mdi-account"
                label="Alergias"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.intolerancias"
                type="text"
                prepend-icon="mdi-account"
                label="Intolerancias"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.averacionesAlimentarias"
                type="text"
                prepend-icon="mdi-account"
                label="Aversiones Alimentarias"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.cambiosIngesta"
                type="text"
                prepend-icon="mdi-account"
                label="Cambios en la Ingesta"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.causas"
                type="text"
                prepend-icon="mdi-account"
                label="Causas"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.tratamientoDieteticoPrevio"
                type="text"
                prepend-icon="mdi-account"
                label="Tratamientos Dietéticos Previos"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.tiempo"
                type="text"
                prepend-icon="mdi-account"
                label="Tiempo"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.resultado"
                type="text"
                prepend-icon="mdi-account"
                label="Resultados"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.tratamientoFarma"
                type="text"
                prepend-icon="mdi-account"
                label="Tratamiento Farmacológico"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                inset
                v-model="antecedentesPersonalesNoPatologicos.actividadFicica"
                label="¿Actividad Física?"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                v-if="antecedentesPersonalesNoPatologicos.actividadFicica"
                inset
                v-model="antecedentesPersonalesNoPatologicos.moderado"
                label="Moderado"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
                v-if="antecedentesPersonalesNoPatologicos.actividadFicica"
                inset
                v-model="antecedentesPersonalesNoPatologicos.activo"
                label="Activo"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-if="antecedentesPersonalesNoPatologicos.actividadFicica"
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.ejercicio"
                type="text"
                prepend-icon="mdi-account"
                label="Tipo de Ejercicio"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-if="antecedentesPersonalesNoPatologicos.actividadFicica"
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.frecuencia"
                type="text"
                prepend-icon="mdi-account"
                label="Frecuencia"
                color="primary"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
                v-if="antecedentesPersonalesNoPatologicos.actividadFicica"
                :rules="rules.textRules"
                v-model="antecedentesPersonalesNoPatologicos.duracion"
                type="text"
                prepend-icon="mdi-account"
                label="Duración"
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
  name: 'AntecedentesPersonalesNoPatologicos',
  inject: ['$validator'],
  data: () => ({}),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    antecedentesPersonalesNoPatologicos() {
      return this.$store.getters['PersonalData/getAntecedentesPersonalesNoPatologicos']
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
