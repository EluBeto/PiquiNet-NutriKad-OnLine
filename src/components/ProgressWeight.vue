<template>
  <v-card
      class="mt-4 mx-auto"
      max-width="400"
  >
    <v-sheet
        class="v-sheet--offset mx-auto"
        color="light-green darken-1"
        elevation="12"
        max-width="calc(100% - 32px)"
    >
      <v-sparkline
          :labels="labels"
          :value="value"
          color="white"
          line-width="2"
          padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">
        {{ textShow }}
      </div>
      <div v-if="enableWeightEntry()">
        <div class="subheading font-weight-light grey--text">
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                  ref="peso"
                  v-model="weigth"
                  solo
                  label="Peso"
                  clearable
                  :disabled="!cargaPeso"
                  :rules="rules.weightRules"
                  required
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-divider class="my-2"></v-divider>
        <v-row>
          <v-col cols="12" md="9">
            <v-icon
                class="mr-2"
                small
            >
              mdi-clock
            </v-icon>
            <span class="caption grey--text font-weight-light">Solo podras cargar tu peso durante la consulta.</span>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
                small
                color="success"
                :disabled="!cargaPeso"
                :loading="loading"
                @click="sendWeigth()"
            >Enviar</v-btn>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ProgressWeight',
  data: () => ({
    firstWeight: 0,
    secondWeight: 0,
    cargaPeso: false,
    weigth: null,
    dialog: false,
    labels: [],
    value: [],
    loading: false
  }),
  computed: {
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    textShow() {
      const date = new Date()
      let dateNow = date.getDate()
      return dateNow <= 21 ? 'El proximo 29 de marzo podrás ingresar tu nuevo peso.' : 'El proximo 29 de marzo podrás ingresar tus nuevas medidas.'
    }
  },
  methods: {
    sendWeigth() {
      if (this.weigth !== null && !isNaN(this.weigth)) {
        this.loading = true
        this.$store.dispatch('PersonalData/sendProgressWeigth', {
          firstWeight: this.firstWeight,
          secondWeight: this.enableWeightEntry() ? this.weigth : this.secondWeight,
          isShow: false
        }).then(response => {
          if (!response.error) {
            this.labels = []
            this.value = []
            this.getWeigth()
          }
          this.loading = false
        })
      } else {
        this.weigth = null
      }
    },
    getWeigth() {
      this.$store.dispatch('PersonalData/getProgressWeith').then(response => {
        this.firstWeight = response.firstWeight
        this.secondWeight = response.secondWeight
        this.cargaPeso = response.isShow
        this.labels.push(response.firstWeight + ' KG')
        this.labels.push(response.secondWeight + ' KG')
        this.value.push(parseInt(response.firstWeight))
        this.value.push(parseInt(response.secondWeight))
      })
    },
    enableWeightEntry() {
      const date = new Date()
      let dateNow = date.getDate()
      return dateNow === 29
    }
  },
  mounted() {
    this.getWeigth()
  }
}
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
