<template>
  <div>
    <div v-if="alertParameters.type === 'snackbar'">
      <v-snackbar
          :multi-line="alertParameters.multiLine"
        >
          {{
            alertParameters.snackbar.message
          }}
          <template v-slot:action="{ attrs }">
            <v-btn
              :color="alertParameters.color"
              text
              v-bind="attrs"
              @click="alertParameters.snackbar"
            >
              {{
                alertParameters.btnTitle
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
    alertParameters: {}
  }),
  created() {
    if (this.$nextTick) {
      this.alertParameters = this.$store.state.MessageAlerts
    }
  }
}
</script>
