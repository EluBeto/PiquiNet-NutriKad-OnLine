<template>
  <div>
    <div v-if="alertParameters.type === 'snackbar'">
      <v-snackbar
          v-model="alertParameters.snackbar.modelMessage"
          :multi-line="multiLine"
          :color="alertParameters.snackbar.color"
          class="font-weight-medium"
        >
          {{
            alertParameters.snackbar.message
          }}
          <template v-slot:action="{ attrs }">
            <v-btn
              :color="alertParameters.snackbar.btnColor"
              v-bind="attrs"
              text
              @click="alertParameters.snackbar = false"
            >
              {{
                alertParameters.snackbar.btnTitle
              }}
            </v-btn>
          </template>
      </v-snackbar>
    </div>
    <div v-if="alertParameters.type === 'alert'">
      <v-alert
        icon="mdi-account-question"
        border="bottom"
        color="pink darken-1"
        dark
        class="text-center"
      >
        {{ alertParameters.alert.message }}
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageAlerts',
  data: () => ({
      multiLine: true,
      snackbar: false
  }),
  computed: {
    alertParameters() {
      return this.$store.getters['MessageAlerts/getAlerts']
    }
  },
  methods: {
    closeSnack() {
      this.snackbar = false
      this.alertParameters.snackbar = false
    }
  }
}
</script>
