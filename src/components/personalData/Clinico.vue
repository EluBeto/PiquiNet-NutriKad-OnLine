<template>
  <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="320px"
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
          <v-col cols="12" sm="6" md="4">
            <v-switch
                v-model="clinico.isPerfilB"
                @change="showPerfilBioquimico"
                inset
                label="Perfil Bioquímico"
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-dialog
        v-model="isPerfilBioquimico"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-toolbar
            class="font-weight-thin"
            style="font-size: 1.2em;"
            color="#26A69A"
            dark
        >
          <strong>
            PERFIL BIOQUÍMICO
          </strong>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4" sm="4" md="12">
                <v-text-field
                    :rules="rules.dateRules"
                    v-model="clinico.perfilBioquimico.fecha"
                    prepend-icon="mdi-calendar"
                    type="date"
                    label="Fecha de estudio"
                    color="primary"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.hemoglobina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Hemoglobina"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.glucosa"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Glucosa"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.colesterol"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Colesterol"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.hdl"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="HDL"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.ldl"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="LDL"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.trigliceridos"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Triglicéridos"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.acidoUrico"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Ácido Úrico"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.creatinina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Creatinina"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.fosforo"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Fósforo"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.calcio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Calcio"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.magnesio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Magnesio"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.sodio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Sodio"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.potasio"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Potasio"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.cloro"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Cloro"
                    color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                    v-model="clinico.perfilBioquimico.albumina"
                    type="text"
                    prepend-icon="mdi-flask-outline"
                    label="Albumina"
                    color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="closePerfilBioquimico(true)"
          >
            Salir
          </v-btn>
          <v-btn
              color="primary"
              outlined
              @click="closePerfilBioquimico(false)"
          >
            Continuar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: 'Clinico',
  inject: ['$validator'],
  data: () => ({
    hidratacion: ['Buena', 'Mala', 'Regular'],
    isPerfilBioquimico: false
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
  },
  methods: {
    showPerfilBioquimico() {
      this.isPerfilBioquimico = this.clinico.isPerfilB
    },
    closePerfilBioquimico(isCancel) {
      this.isPerfilBioquimico = false
      if (isCancel) {
        this.$store.state.PersonalData.clinico.perfilBioquimico.fecha = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.hemoglobina = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.glucosa = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.colesterol = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.hdl = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.ldl = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.trigliceridos = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.acidoUrico = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.creatinina = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.fosforo = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.calcio = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.magnesio = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.sodio = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.potasio = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.cloro = ''
        this.$store.state.PersonalData.clinico.perfilBioquimico.albumina = ''
        this.$store.state.PersonalData.clinico.isPerfilB = false
      }
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
