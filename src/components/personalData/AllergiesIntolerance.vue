<template>
  <v-card
        min-width="80%"
        color="#fafafa lighten-1"
        height="380px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formAllergiesIntolerances" lazy-validation>
            <v-container>
              <h3 class="text-center my-3">Alergias o Intolerancias</h3>
              <v-divider></v-divider>
              <v-row class="my-2">
                   <v-col cols="12" sm="6" md="6">
                    <v-switch
                      key="isHeadach"
                      v-model="clinicHistoryParameters.allergiesIntolerance.isHeadach"
                      label="¿Sufres dolores de cabeza o mareos durante el día?"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-switch
                      key="isBadDigestion"
                      v-model="clinicHistoryParameters.allergiesIntolerance.isBadDigestion"
                      label="¿Sufres de estreñimiento o mala digestión?"
                    ></v-switch>
                  </v-col>
                </v-row>
                <v-row class="my-2">
                  <v-col cols="12" sm="6" md="6">
                    <v-switch
                      key="isReflux"
                      v-model="clinicHistoryParameters.allergiesIntolerance.isReflux"
                      label="¿Presentas episodios de reflujo gastroesofagico al dormir o al despertar?"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-switch
                      key="isBeMedical"
                      v-model="clinicHistoryParameters.allergiesIntolerance.isBeMedical"
                      label="¿Tomas algún medicamento, el cuál te implique llevar una alimentación especifica?"
                    ></v-switch>
                  </v-col>
                </v-row>
                <v-row class="my-2">
                  <v-col cols="12" sm="6" md="4">
                    <v-switch
                      key="isActivePerson"
                      v-model="clinicHistoryParameters.allergiesIntolerance.isActivePerson"
                      label="¿Realizas algún tipo de actividad física?"
                    ></v-switch>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"
                    v-if="clinicHistoryParameters.allergiesIntolerance.isActivePerson"
                  >
                    <v-text-field
                      key="responseActivePersonTime"
                      v-model="clinicHistoryParameters.allergiesIntolerance.responseActivePersonTime"
                      type="time"
                      prepend-icon="mdi-arm-flex-outline"
                      label="Tiempo"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4"
                    v-if="clinicHistoryParameters.allergiesIntolerance.isActivePerson"
                  >
                    <v-text-field
                      key="responseActivePersonTypeExercise"
                      v-model="clinicHistoryParameters.allergiesIntolerance.responseActivePersonTypeExercise"
                      type="text"
                      prepend-icon="mdi-arm-flex-outline"
                      label="Ejercicio"
                      color="primary"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <p style="text-align: center;">
                        <b>*Este Plan Nutricional está diseñado para personas sanas*</b>
                      </p>
                      <p style="text-align: justify;">
                        (si estas diagnosticado con diabetes mellitus tipo II, Hipertensión, Insuficiencia renal, cáncer, bulimia, 
                        anorexia, enfermedades del corazón, enfermedades del higado por favor especificalo ya que lo sugerido será 
                        que acudas a consulta personalizada en caso de presentar alguna enfermedad diagnosticada medicamente)
                      </p>
                  </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'AllergiesIntolerance',
    inject: ['$validator'],
    data: () => ({}),
    computed: {
        clinicHistoryParameters() {
          return this.$store.getters['PersonalData/getClinicHistoryData']
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