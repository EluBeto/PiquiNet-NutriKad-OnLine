<template>
  <v-card class="elevation-12">
    <v-window v-model="getStep">
      <v-window-item :value="1">
        <partial-login-window></partial-login-window>
      </v-window-item>
      <v-window-item :value="2">
        <partial-log-window></partial-log-window>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import PartialLoginWindow from '../login/PartialLoginWindow'
import PartialLogWindow from '../login/PartialLogWindow'
export default {
name: 'LoginCard',
  components: {
    PartialLoginWindow,
    PartialLogWindow
  },
  data: () => ({}),
  computed: {
    getStep() {
      return this.$store.getters['getStep']
    }
  }
}
</script>
