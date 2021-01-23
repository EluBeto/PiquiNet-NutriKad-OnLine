<template>
  <v-card class="elevation-12">
    <v-window v-model="step">
      <v-window-item :value="1">
        <login-window></login-window>
      </v-window-item>
      <v-window-item :value="2">
        <log-window></log-window>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import LoginWindow from './LoginWindow'
import LogWindow from './LogWindow'
export default {
name: 'LoginCard',
  components: {
    LoginWindow,
    LogWindow
  },
  data: () => ({
    step: 1
  })
}
</script>
