<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="280px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
  >
    <v-form ref="formClinicoCard"
            v-model="arraySteps.arrayOfSteps[7].isValid"
            lazy-validation>
      <v-container>
        <h3 class="text-center my-3 text-uppercase">Control Clínico</h3>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
                :rules="rules.weightRules"
                v-model="clinico.glucosa"
                type="text"
                prepend-icon="mdi-diabetes"
                label="Glucosa"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
                :rules="rules.campoObligatorio"
                v-model="clinico.ta"
                type="text"
                prepend-icon="mdi-blood-bag"
                label="Tensión Arterial"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-select
                :rules="rules.campoObligatorio"
                v-model="clinico.hidratacion"
                :items="hidratacion"
                type="text"
                prepend-icon="mdi-zodiac-aquarius"
                label="Hidratación"
                color="primary"
                required
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
                :rules="rules.numberRules"
                v-model="clinico.noEvacuaciones"
                type="number"
                prepend-icon="mdi-paper-roll-outline"
                label="Número de Evacuaciones"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
                :rules="rules.textRules"
                v-model="clinico.evacuaciones"
                type="text"
                prepend-icon="mdi-paper-roll-outline"
                label="Tipo de Evacuaciones"
                color="primary"
                required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
                :rules="rules.textRules"
                v-model="clinico.malestaresGeneral"
                type="text"
                prepend-icon="mdi-account-cancel-outline"
                label="Malestares Generales"
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
  name: 'Clinico',
  inject: ['$validator'],
  data: () => ({
    hidratacion: ['Buena', 'Mala', 'Regular']
  }),
  computed: {
    arraySteps() {
      return this.$store.getters['Steps/getSteps']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    clinico() {
      return this.$store.getters['PersonalData/getClinico']
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
