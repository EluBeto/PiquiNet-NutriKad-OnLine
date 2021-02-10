<template>
  <v-form ref="loginForm" v-model="loginParameters.validForm" lazy-validation>
      <MessageAlerts 
        v-if="this.$store.state.MessageAlerts.alert.isShow"
      ></MessageAlerts>
      <v-text-field
        key="user-name"
        v-model.trim="loginParameters.login.email"
        :rules="rules.emailRules"
        :label="$t('login.email')"
        :name="$t('login.email')"
        prepend-icon="mdi-email"
        type="text"
        color="primary"
        required
      ></v-text-field>
      <v-text-field
        key="password"
        v-model.trim="loginParameters.login.password"
        :rules="rules.passwordRules"
        :label="$t('login.password')"
        :name="$t('login.password')"
        prepend-icon="mdi-lock"
        :type="loginParameters.login.showPassword ? 'text' : 'password'"
              :append-icon="loginParameters.login.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="loginParameters.login.showPassword = !loginParameters.login.showPassword"
        color="primary"
        required
        @keydown.enter="login"
         
      ></v-text-field>

      <div class="text-center mt-3 my-5">
        <v-btn rounded 
               color="primary"
               :disabled="!loginParameters.validForm"
               :loading="loginParameters.loading"
               @click="login"
                
        >
            {{ $t('login.enter') }}
        </v-btn>
      </div>
  </v-form>
</template>

<script>
import ServicesResponseHandling from '@/services/serviceResponseHandling'
import MessageAlerts from '../forms/MessageAlerts'
export default {
  name: 'LoginForm',
  components: {
    MessageAlerts
  },
  data: () => ({
    loginParameters: {},
    rules: {},
    alertParameters: {}
  }),
  computed: {},
  methods: {
    async login() {
      this.$store.state.AuthenticationProcesses.loading = true
      this.cleanAlert
      
      if (this.$refs.loginForm.validate()) {
        this.loginParameters.errorMessage = null

        this.$store.dispatch('AuthenticationProcesses/login', {
          email: this.loginParameters.login.email,
          password: this.loginParameters.login.password
        })
        .then(response => {
          if (response.error) {

            this.$store.state.AuthenticationProcesses.isErrorAuth = true
            this.loginParameters.errorMessage = ServicesResponseHandling.messageLoginResponse(response.error)

            this.$store.state.MessageAlerts = {
              type: 'alert',
              alert: {
                isShow: this.$store.state.AuthenticationProcesses.isErrorAuth,
                message: this.loginParameters.errorMessage
              }
            }
          } else {
            this.resetForm
            window.localStorage.setItem('user', JSON.stringify(response))
            this.$store.state.AuthenticationProcesses.isErrorAuth = false
            this.$router.push('dashboard')
          }
        })
      }
      this.$store.state.AuthenticationProcesses.loading = false
    },
    resetForm() {
      this.$refs.loginForm.reset()
      this.$store.dispatch('MessageAlerts/clearAlert', false)
      this.$store.dispatch('AuthenticationProcesses/clearAuthenticationProcesses', false)
    },
    cleanAlert() {
      this.$store.state.AuthenticationProcesses.isErrorAuth = false
      this.loginParameters.errorMessage = ''
      this.$store.dispatch('MessageAlerts/clearAlert', false)
    }
  },
  created() {
    if (this.$nextTick) {
      this.loginParameters = this.$store.state.AuthenticationProcesses
      this.rules = this.$store.state.Rules
      this.alertParameters = this.$store.state.MessageAlerts
    }
  }
}
</script>
