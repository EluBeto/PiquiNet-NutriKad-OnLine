<template>
  <v-card
      class="mt-4 mx-auto"
      max-width="400"
      v-if="isDate >= 7"
  >
    <v-sheet
        class="v-sheet--offset mx-auto"
        color="#263238"
        elevation="12"
        max-width="calc(100% - 42px)"
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
      <div class="text-h6">
        {{ textShow }}
      </div>
      <div v-if="enableWeightEntry()">
        <div class="subheading font-weight-light grey--text">
          <v-text-field
              ref="peso"
              v-model="weigth"
              solo
              label="Ingresa tu peso actual"
              clearable
              :disabled="!enableWeightEntry()"
              :rules="rules.weightRules"
              required
          ></v-text-field>
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
            <span class="text-h6">Solo tienes 24 horas para ingresar tu nuevo peso.</span>
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
                small
                color="success"
                :disabled="!enableWeightEntry()"
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
    thirdWeight: 0,
    weigth: null,
    dialog: false,
    labels: [],
    value: [],
    loading: false,
    isValid: false
  }),
  computed: {
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    textShow() {
      let text = ''
      if (this.isDate === 14 || this.isDate === 21 || this.isDate === 28) {
       text = '¡Es hoy! ingresa tu nuevo peso.'
      }
      if (this.isDate >= 15 && this.isDate <= 20) {
        text = 'El próximo 21 de junio podrás ingresar tu nuevo peso.'
      }
      if (this.isDate >= 21 && this.isDate <= 28) {
        text = 'El próximo 28 de junio podrás ingresar tu nuevo peso.'
      }
      return text
    },
    isDate() {
      const date = new Date()
      return date.getDate()
    }
  },
  methods: {
    sendWeigth() {
      if (this.weigth !== null && !isNaN(this.weigth)) {
        this.loading = true
        this.$store.state.processingRequest = true
        this.$store.dispatch('PersonalData/sendProgressWeigth', {
          firstWeight: this.isDate === 7 ? this.weigth : this.firstWeight,
          secondWeight: this.isDate === 14 ? this.weigth : this.secondWeight,
          thirdWeight: this.isDate === 21 ? this.weigth : this.thirdWeight,
          fourthWeight: this.isDate === 28 ? this.weigth : this.fourthWeight
        }).then(response => {
          if (!response.error) {
            this.labels = []
            this.value = []
            this.getWeigth()
            this.$store.state.processingRequest = false
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
        this.thirdWeight = response.thirdWeight
        this.fourthWeight = response.fourthWeight

        this.labels.push(response.firstWeight + ' KG')
        this.labels.push(response.secondWeight + ' KG')
        this.labels.push(response.thirdWeight + ' KG')
        this.labels.push(response.fourthWeight + ' KG')

        this.value.push(parseInt(response.firstWeight))
        this.value.push(parseInt(response.secondWeight))
        this.value.push(parseInt(response.thirdWeight))
        this.value.push(parseInt(response.fourthWeight))
      })
    },
    enableWeightEntry() {
      let isShow = false
      if (this.isDate === 14) {
        isShow = true
      }
      if (this.isDate === 21) {
        isShow = true
      }
      if (this.isDate === 28) {
        isShow = true
      }
      return isShow
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
