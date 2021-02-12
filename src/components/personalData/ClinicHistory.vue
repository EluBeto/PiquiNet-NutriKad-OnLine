<template>
  <v-card
        min-width="80%"
        color="#fafafa lighten-1"
        height="380px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formClinicHistory" v-model="arraySteps.arrayOfSteps[2].isValid" lazy-validation>
        <v-container>
          <h3 class="text-center my-3">Historia clínica básica</h3>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-expansion-panels class="mb-6 my-2">
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Tip’s para pesarte
                    <template v-slot:actions>
                      <v-icon color="primary">
                        mdi-alert-circle
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p style="text-align: justify;">
                      La báscula debe estar sobre piso sin pendiente. La medición se hace cuando marca más de 
                      cinco segundos el mismo peso.
  
                      Tus pies no deben de salir de la superficie de la bascula, párate derecho, sin flexionar 
                      las piernas, no te recargues en nada, voltea al frente, con tus brazos al costado, 
                      no te muevas.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="actualWeight"
                :rules="rules.weightRules"
                v-model="clinicHistoryParameters.actualWeight"
                type="text"
                prepend-icon="mdi-account"
                label="Peso actual (kg)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-expansion-panels class="mb-6 my-2">
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Tip’s para obtener tu estatura
                    <template v-slot:actions>
                      <v-icon color="primary">
                        mdi-alert-circle
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p style="text-align: justify;">
                      Colócate de espaldas a la pared con tus talones unidos, tus piernas rectas y los hombros relajados, 
                      tu mentón no debe de estar levantado. Párate derecho, alguien debe de presionar tu cabello para hacer 
                      la medición más precisa sobre la pared.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="height"
                :rules="rules.weightRules"
                v-model="clinicHistoryParameters.height"
                type="text"
                prepend-icon="mdi-ruler"
                label="Estatura (cm)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <h3 class="text-center my-3">Medidas antropométricas</h3>
          <v-divider></v-divider>
          <v-row class="my-2">
             <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="waist"
                :rules="rules.weightRules"
                v-model="clinicHistoryParameters.measurements.waist"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cintura (a la altura del ombligo)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="chest"
                :rules="rules.weightRules"
                v-model="clinicHistoryParameters.measurements.chest"
                type="text"
                prepend-icon="mdi-ruler"
                label="Pecho"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="hip"
                :rules="rules.weightRules"
                v-model="clinicHistoryParameters.measurements.hip"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cadera"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <div v-if="personalParameters.gender">
            <h3 class="text-center my-3">Un par de preguntas más</h3>
            <v-divider></v-divider>
            <v-row class="my-2">
               <v-col cols="12" sm="6" md="4">
                <v-switch
                  key="isPregnant"
                  v-model="clinicHistoryParameters.measurements.isPregnant"
                  label="¿Estás embarazada?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <v-switch
                  key="isBreastfeeding"
                  v-model="clinicHistoryParameters.measurements.isBreastfeeding"
                  label="¿Estas en periodo de lactancia materna?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-text-field
                  key="monthsPostpartum"
                  v-model="clinicHistoryParameters.measurements.monthsPostpartum"
                  type="number"
                  prepend-icon="mdi-account-child-circle"
                  label="¿Meses de Postparto?"
                  color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-form>
    </v-card>
</template>

<script>
export default {
    name: 'ClinicHistory',
    inject: ['$validator'],
    data: () => ({}),
    computed: {
        arraySteps() {
          return this.$store.getters['Steps/getSteps']
        },
        rules() {
          return this.$store.getters['Rules/getRules']
        },
        personalParameters() {
          return this.$store.getters['PersonalData/getPersonalData']
        },
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
