<template>
  <v-card
        min-width="80%"
        color="#fafafa lighten-1"
        height="250px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formIdentificationCard"
                v-model="arraySteps.arrayOfSteps[1].isValid"
                lazy-validation>
            <v-container>
              <h3 class="text-center my-3">Ficha de identificación</h3>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="name"
                    :rules="rules.textRules"
                    v-model="personalParameters.name"
                    type="text"
                    prepend-icon="mdi-account"
                    label="Nombre"
                    color="primary"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="lastName"
                    :rules="rules.textRules"
                    v-model="personalParameters.lastName"
                    type="text"
                    prepend-icon="mdi-account"
                    label="Apellido Paterno"
                    color="primary"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="motherLastName"
                    :rules="rules.textRules"
                    v-model="personalParameters.motherLastName"
                    type="text"
                    prepend-icon="mdi-account"
                    label="Apellido Materno"
                    color="primary"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="dateOfBirth"
                    :rules="rules.dateRules"
                    v-model="personalParameters.dateOfBirth"
                    prepend-icon="mdi-calendar"
                    type="date"
                    label="Fecha de nacimiento"
                    color="primary"
                    required
                    @focusout="edad"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="age"
                    :rules="rules.numberRules"
                    v-model="personalParameters.age"
                    prepend-icon="mdi-account"
                    type="number"
                    label="Edad"
                    color="primary"
                    required
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-text-field
                    key="phoneNumber"
                    :rules="rules.phoneRules"
                    v-model="personalParameters.phoneNumber"
                    prepend-icon="mdi-phone"
                    type="number"
                    label="Número de celular"
                    color="primary"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="3">
                  <v-switch
                    key="gender"
                    v-model="personalParameters.gender"
                    label="¿Eres mujer?"
                  ></v-switch>
                </v-col>
              </v-row>
            </v-container>
        </v-form>
      </v-card>
</template>

<script>
export default {
    name: 'IdentificationFile',
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
        calculaEdad() {
          let hoy = new Date();
          let cumpleanos = new Date(this.personalParameters.dateOfBirth);
          let edad = hoy.getFullYear() - cumpleanos.getFullYear();
          let m = hoy.getMonth() - cumpleanos.getMonth();
          if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--
          }
          return edad
        }
      },
      methods: {
        edad() {
          this.personalParameters.age = this.calculaEdad
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
