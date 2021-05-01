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
          <v-card-subtitle style="background: #F9FBE7;" class="text-center">Medidas de ultima consulta</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <h4>Ultima Visita: {{ $store.state.PersonalData.medidasHistorico.fecha.toLocaleDateString() }}</h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Peso: {{ infoPeso }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Cintura: {{ infoCintura }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Cadera: {{ infoCadera }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Edad Met: {{ $store.state.PersonalData.medidasHistorico.edadMetabolica }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> Grasa Vic: {{ $store.state.PersonalData.medidasHistorico.grasaBiceral }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> IMC: {{ infoImc }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> % Grasa: {{ $store.state.PersonalData.medidasHistorico.porcentajeGrasa }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <h4> % Musculo: {{ $store.state.PersonalData.medidasHistorico.porcentajeMusculo }} </h4>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card>
          <v-card-subtitle :style="`background: ${colorCabecera};`" class="text-center">Evaluacion en consulta</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <h4>Fecha: {{ $store.state.PersonalData.createDate.toLocaleDateString() }}</h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.peso !== ''">
                <h4  :style="`color: ${colorCalculoPeso}`">
                  {{ textCalculoPeso }} {{ calculaPerdidaPeso }} Kg.
                  <v-icon :color="colorCalculoPeso">
                    {{ indicadorCalculoPeso }}
                  </v-icon>
                </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.cintura !== ''">
                <h4 :style="`color: ${colorCalculoCintura}`">
                  Cinura: {{ calculaCintura }} cm.
                  <v-icon :color="colorCalculoCintura">
                    {{ indicadorCalculoCintura }}
                  </v-icon>
                </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.cadera !== ''">
                <h4 :style="`color: ${colorCalculoCadera}`">
                  Cadera: {{ calculaCadera }} cm.
                  <v-icon :color="colorCalculoCadera">
                    {{ indicadorCalculoCadera }}
                  </v-icon>
                </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.edadMetabolica !== ''">
                <h4>
                  Edad Met: {{ $store.state.PersonalData.antropometria.edadMetabolica }}
                </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.grasaBiceral !== ''">
                <h4>
                  Grasa Vic: {{ $store.state.PersonalData.antropometria.grasaBiceral }}
                </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.imc !== ''">
                <h4> IMC: {{ this.$store.state.PersonalData.antropometria.imc }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.porcentajeGrasa !== ''">
                <h4> % Grasa: {{ this.$store.state.PersonalData.antropometria.porcentajeGrasa }} </h4>
              </v-col>
              <v-col cols="12" sm="4" md="4" v-if="this.$store.state.PersonalData.antropometria.porcentajeMusculo !== ''">
                <h4> % Musculo: {{ this.$store.state.PersonalData.antropometria.porcentajeMusculo }} </h4>
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
  name: "HistoricoAntropometrico",
  computed: {
    ultimasMedidas() {
      return this.$store.getters['PersonalData/getHistoricoConsulta']
    },
    calculaPerdidaPeso() {
      let calculoPeso = 0
      let pesoAnterior = parseFloat(this.ultimasMedidas.peso)
      let pesoActual = parseFloat(this.$store.state.PersonalData.antropometria.peso)

      if(!isNaN(pesoActual)) {
        if(pesoActual > pesoAnterior ) {
          calculoPeso = pesoActual - pesoAnterior
        } else {
          calculoPeso = pesoAnterior - pesoActual
        }
      }
      return calculoPeso.toFixed(2)
    },
    textCalculoPeso() {
      let texto = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if(!isNaN(pesoActual)) {
        texto = pesoActual < pesoAnterior ? 'Bajo: ' : 'Subio: '
      } else {
        texto = 'El paciente morira: '
      }
      return texto
    },
    indicadorCalculoPeso() {
      let icon = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if (!isNaN(pesoActual)) {
        if (pesoActual < pesoAnterior) {
          icon = 'mdi-emoticon-cool-outline'
        } else {
          if (pesoActual > pesoAnterior) {
            icon = 'mdi-emoticon-cry-outline'
          } else {
            icon = 'mdi-emoticon-confused-outline'
          }
        }
      } else {
        icon = 'mdi-skull'
      }

      return icon
    },
    colorCalculoPeso() {
      let color = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if (!isNaN(pesoActual)) {
        if (pesoActual < pesoAnterior) {
          color = '#33691E'
        } else {
          if (pesoActual > pesoAnterior) {
            color = '#B71C1C'
          } else {
            color = '#FF9100'
          }
        }
      } else {
        color = '#FF9100'
      }

      return color
    },
    calculaCintura() {
      let calculoCintura = 0
      let cinturaAnterior = parseInt(this.ultimasMedidas.cintura)
      let cinturaActual = parseInt(this.$store.state.PersonalData.antropometria.cintura)

      if(!isNaN(cinturaActual)) {
        if(cinturaActual > cinturaAnterior ) {
          calculoCintura = cinturaActual - cinturaAnterior
        } else {
          calculoCintura = cinturaAnterior - cinturaActual
        }
      }
      return calculoCintura
    },
    indicadorCalculoCintura() {
      let icon = ''
      let cinturaAnterior = parseInt(this.ultimasMedidas.cintura)
      let cinturaActual = parseInt(this.$store.state.PersonalData.antropometria.cintura)

      if (!isNaN(cinturaActual)) {
        if (cinturaActual < cinturaAnterior) {
          icon = 'mdi-emoticon-cool-outline'
        } else {
          if (cinturaActual > cinturaAnterior) {
            icon = 'mdi-emoticon-cry-outline'
          } else {
            icon = 'mdi-emoticon-confused-outline'
          }
        }
      } else {
        icon = 'mdi-skull'
      }

      return icon
    },
    colorCalculoCintura() {
      let color = ''
      let cinturaAnterior = parseInt(this.ultimasMedidas.cintura)
      let cinturaActual = parseInt(this.$store.state.PersonalData.antropometria.cintura)

      if (!isNaN(cinturaActual)) {
        if (cinturaActual < cinturaAnterior) {
          color = '#33691E'
        } else {
          if (cinturaActual > cinturaAnterior) {
            color = '#B71C1C'
          } else {
            color = '#FF9100'
          }
        }
      } else {
        color = '#FF9100'
      }

      return color
    },
    calculaCadera() {
      let calculoCadera = 0
      let caderaAnterior = parseInt(this.ultimasMedidas.cadera)
      let caderaActual = parseInt(this.$store.state.PersonalData.antropometria.cadera)

      if(!isNaN(caderaActual)) {
        if(caderaActual > caderaAnterior ) {
          calculoCadera = caderaActual - caderaAnterior
        } else {
          calculoCadera = caderaAnterior - caderaActual
        }
      }
      return calculoCadera
    },
    indicadorCalculoCadera() {
      let icon = ''
      let caderaAnterior = parseInt(this.ultimasMedidas.cadera)
      let caderaActual = parseInt(this.$store.state.PersonalData.antropometria.cadera)

      if (!isNaN(caderaActual)) {
        if (caderaActual < caderaAnterior) {
          icon = 'mdi-emoticon-cool-outline'
        } else {
          if (caderaActual > caderaAnterior) {
            icon = 'mdi-emoticon-cry-outline'
          } else {
            icon = 'mdi-emoticon-confused-outline'
          }
        }
      } else {
        icon = 'mdi-skull'
      }
      return icon
    },
    colorCalculoCadera() {
      let color = ''
      let caderaAnterior = parseInt(this.ultimasMedidas.cadera)
      let caderaActual = parseInt(this.$store.state.PersonalData.antropometria.cadera)

      if (!isNaN(caderaActual)) {
        if (caderaActual < caderaAnterior) {
          color = '#33691E'
        } else {
          if (caderaActual > caderaAnterior) {
            color = '#B71C1C'
          } else {
            color = '#FF9100'
          }
        }
      } else {
        color = '#FF9100'
      }

      return color
    },
    colorCabecera() {
      let color = ''
      let pesoAnterior = parseInt(this.ultimasMedidas.peso)
      let pesoActual = parseInt(this.$store.state.PersonalData.antropometria.peso)

      if (!isNaN(pesoActual)) {
        if (pesoActual < pesoAnterior) {
          color = '#C8E6C9'
        } else {
          if (pesoActual > pesoAnterior) {
            color = '#EF9A9A'
          } else {
            color = '#FFCC80'
          }
        }
      } else {
        color = '#FFECB3'
      }

      return color
    },
    infoPeso() {
      return this.ultimasMedidas.peso === ''
          ? 'Sin datos'
          : this.ultimasMedidas.peso + ' Kg.'
    },
    infoCintura() {
      return this.ultimasMedidas.cintura === ''
          ? 'Sin datos'
          : this.ultimasMedidas.cintura + ' cm.'
    },
    infoCadera() {
      return this.ultimasMedidas.cadera === ''
          ? 'Sin datos'
          : this.ultimasMedidas.cadera + ' cm.'
    },
    infoImc() {
      return this.ultimasMedidas.imc === ''
          ? 'Sin datos'
          : this.ultimasMedidas.imc
    }
  }
}
</script>

<style scoped>

</style>
