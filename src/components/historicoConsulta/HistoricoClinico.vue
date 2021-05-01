<template>
  <v-card-text>
    <v-row>
      <v-col cols="12" sm="12" md="12">
        <h4> Nombre: {{ $store.state.PersonalData.nobreCompleto }} </h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card>
          <v-card-subtitle style="background: #F9FBE7;" class="text-center">Clínico ultima consulta</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <h4>Ultima Visita: {{ $store.state.PersonalData.medidasHistorico.fecha.toLocaleDateString() }}</h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Glucosa: {{ $store.state.PersonalData.clinicoHistorico.glucosa }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> TA: {{ $store.state.PersonalData.clinicoHistorico.ta }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Hidratación: {{ $store.state.PersonalData.clinicoHistorico.hidratacion }} </h4>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card>
          <v-card-subtitle style="background: #FFECB3" class="text-center">Evaluacion en consulta</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <h4>Fecha: {{ $store.state.PersonalData.createDate.toLocaleDateString() }}</h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Glucosa: {{ $store.state.PersonalData.clinico.glucosa }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> TA: {{ $store.state.PersonalData.clinico.ta }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Hidratación: {{ $store.state.PersonalData.clinico.hidratacion }} </h4>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: "HistoricoClinico",
  computed: {
    clinicoHistorico() {
      return this.$store.getters['PersonalData/getHistoricoClinico']
    }
  }
}
</script>

<style scoped>

</style>
