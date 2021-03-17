<template>
  <div>
    <v-card
      class="mx-auto text-center"
      color="yellow darken-1"
      dark
      max-width="600"
    >
      <v-card-text>
        <div style="color: black;" class="display-1">
          MI PROGRESO
        </div>
        <br>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :labels="labels"
            :value="value"
            color="grey darken-4"
            height="100"
            padding="24"
            smooth
          >
          </v-sparkline>
        </v-sheet>
      </v-card-text>
      <MessageAlerts></MessageAlerts>
      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn
          block
          @click="dialog = true"
        >
          Ingresa tu nuevo peso
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
        >
          <v-card>
            <v-card-title class="headline">
              Ingresa tu nuevo peso
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col md="12">
                        <v-text-field
                          v-model.number="weigth"
                          :rules="rules.weightRules"
                          type="text"
                          prepend-icon="mdi-account"
                          label="Peso actual (kg)"
                          color="primary"
                          required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="green darken-1"
                text
                @click="sendWeigth"
              >
                Enviar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-row>
  </div>
</template>

<script>
import MessageAlerts from '../components/forms/MessageAlerts'
  export default {
    name: 'ProgressGraph',
    components: {
      MessageAlerts
    },
    data: () => ({
      firstWeight: null,
      secondWeight: null,
      thirdWeight: null,
      weigth: null,
      dialog: false,
      labels: [],
      value: []
    }),
    computed: {
        rules() {
          return this.$store.getters['Rules/getRules']
        }
    },
    methods: {
        sendWeigth() {
            this.dialog = false
            if (this.weigth <= 0) {
                this.weigth = null
                this.$store.state.MessageAlerts = {
                  type: 'snackbar',
                  snackbar: {
                      isShow: true,
                      modelMessage: true,
                      multiLine: true,
                      message: 'Es necesario ingresar su peso',
                      snackbar: false,
                      btnTitle: 'Cerrar',
                      btnColor: 'white',
                      color: 'orange lighten-1'
                  }
                }
            } else {
              this.$store.dispatch('PersonalData/sendProgressWeigth', {
                firstWeight: this.firstWeight,
                secondWeight: this.secondWeight,
                thirdWeight: this.weigth
              }).then(response => {
                this.firstWeight = null
                if (!response.error) {
                  this.labels = []
                  this.value = []

                  this.getWeigth()
                }
              })
            }
        },
      getWeigth() {
        this.$store.dispatch('PersonalData/getProgressWeith').then(response => {
          this.firstWeight = response.firstWeight
          this.secondWeight = response.secondWeight
          this.thirdWeight = response.thirdWeight

          this.labels.push(response.firstWeight + ' KG')
          this.labels.push(response.secondWeight + ' KG')
          this.labels.push(response.thirdWeight + ' KG')

          this.value.push(parseInt(response.firstWeight))
          this.value.push(parseInt(response.secondWeight))
          this.value.push(parseInt(response.thirdWeight))
        })
      }
    },
    created() {
        if (this.$nextTick) {
            this.getWeigth()
        }
    }
  }
</script>
