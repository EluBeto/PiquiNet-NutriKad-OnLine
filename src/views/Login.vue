<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <login-card></login-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginCard from '../components/login/LoginCard'
export default {
  name: 'Login',
  components: {
    LoginCard
  },
  created() {
    if (this.$nextTick) {
        if (window.localStorage.getItem('userAuth') != null) {
          window.localStorage.removeItem('userAuth')
        }
        if (window.localStorage.getItem('registeredUser') != null) {
          window.localStorage.removeItem('registeredUser')
        }
        if (window.localStorage.getItem('userInfo') != null) {
          window.localStorage.removeItem('userInfo')
        } 
    }
    this.$store.dispatch('SetLayout', 'login-layout')
  }
}
</script>
