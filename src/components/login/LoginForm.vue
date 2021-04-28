<template>
  <v-form ref="loginForm" v-model="loginParameters.validForm" lazy-validation>
      <MessageAlerts class="mt-3"
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
      <div class="text-center mt-3 my-3">
        <v-checkbox
          v-model="loginParameters.login.rememberCredentials"
          label="Recordar credenciales"
        ></v-checkbox>
      </div>
      <div class="text-center mt-3 my-5">
        <v-btn rounded
               color="primary"
               :disabled="!loginParameters.validForm"
               :loading="loginParameters.loading"
               @click.prevent="login"

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
  data: () => ({}),
  computed: {
    loginParameters() {
      return this.$store.getters['AuthenticationProcesses/getloginParameters']
    },
    rules() {
      return this.$store.getters['Rules/getRules']
    },
    alertParameters() {
      return this.$store.getters['MessageAlerts/getAlerts']
    }
  },
  methods: {
    async login() {
      this.$store.state.AuthenticationProcesses.loading = true
      let credentials ={
        rememberCredentials: this.loginParameters.login.rememberCredentials,
        email: this.loginParameters.login.email,
        password: this.loginParameters.login.password
      }
      this.setRememberParameters(credentials)
      this.cleanAlert()

      if (this.$refs.loginForm.validate()) {
        this.loginParameters.errorMessage = null

        this.$store.dispatch('AuthenticationProcesses/login', {
          email: this.loginParameters.login.email,
          password: this.loginParameters.login.password
        })
        .then(response => {

          if (response.error) {

            this.showMessage(response.error)

          } else {

            this.$store.state.AuthenticationProcesses.isErrorAuth = false
            window.localStorage.setItem('userAuth', JSON.stringify(response))
            this.getUserInfo(response)
          }
        })
      }
      this.$store.state.AuthenticationProcesses.loading = false
    },
    getUserInfo(response) {
      this.$store.dispatch('AuthenticationProcesses/getUserInformation', {
        email: response.email,
        localId: response.localId,
        idToken: response.idToken
      }).then(userResponse => {
        if (userResponse.error) {
          this.showMessage(userResponse.error)
          this.$router.push('/')
        } else {
          this.resetForm()
          if (userResponse.response === 'sin registro') {
            this.$router.push('dashboard')
          } else {
            window.localStorage.setItem('registeredUser', JSON.stringify(userResponse))
            if (userResponse.typeUser === 'Admin') {
              this.$router.push('dashboardAdmin')
            } else {
              this.$router.push('dashboard')
            }
          }
        }
      })
    },
    setRememberParameters: function(credentials) {
      if (credentials.rememberCredentials) {
        window.localStorage.setItem('rememberCredentials', JSON.stringify(credentials))
      } else {
        window.localStorage.removeItem('rememberCredentials')
      }
    },
    showMessage(message) {
      this.$store.state.AuthenticationProcesses.isErrorAuth = true
      this.loginParameters.errorMessage = ServicesResponseHandling.messageLoginResponse(message)

      this.$store.state.MessageAlerts = {
        type: 'alert',
        alert: {
          isShow: this.$store.state.AuthenticationProcesses.isErrorAuth,
          message: this.loginParameters.errorMessage
        }
      }
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
      if (localStorage.getItem('rememberCredentials') != null) {
          const {
            rememberCredentials,
            email,
            password
          } = JSON.parse(localStorage.getItem('rememberCredentials'))
          this.loginParameters.login.rememberCredentials = rememberCredentials
          this.loginParameters.login.email = email
          this.loginParameters.login.password = password
      }
    }
    this.$store.dispatch('SetLayout', 'login-layout')
  }
}
</script>
