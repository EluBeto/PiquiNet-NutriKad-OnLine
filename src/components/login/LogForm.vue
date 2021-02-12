<template>
  <v-form ref="logForm" v-model="logParameters.validForm" lazy-validation>
      <MessageAlerts class="mt-3"
        v-if="this.$store.state.MessageAlerts.alert.isShow"
      ></MessageAlerts>
    <v-text-field
        key="email"
        v-model.trim="logParameters.log.email"
        :rules="rules.emailRules"
        :label="$t('log.email')"
        :name="$t('log.email')"
        prepend-icon="mdi-email"
        type="text"
        color="primary"
        required
    >
    </v-text-field>
    <v-text-field
        prepend-icon="mdi-lock"
        key="password"
        v-model.trim="logParameters.log.password"
        :rules="rules.passwordRules"
        :label="$t('log.password')"
        :name="$t('log.password')"
        :type="logParameters.log.showPassword ? 'text' : 'password'"
              :append-icon="logParameters.log.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="logParameters.log.showPassword = !logParameters.log.showPassword"
        color="primary"
        required
    >
    </v-text-field>
    <v-text-field
      prepend-icon="mdi-lock"
      key="confirmPassword"
      v-model.trim="logParameters.log.confirmPassword"
      :rules="rules.passwordRules"
      :label="$t('log.confirmPassword')"
      :name="$t('log.confirmPassword')"
      :type="logParameters.log.showConfirmPassword ? 'text' : 'password'"
              :append-icon="logParameters.log.showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="logParameters.log.showConfirmPassword = !logParameters.log.showConfirmPassword"
      color="primary"
      required
    >
    </v-text-field>
    <div class="text-center mt-3">
        <v-btn rounded
          color="primary" 
          :disabled="!logParameters.validForm"
          :loading="logParameters.loading"
          @click="sendRegistration"
        >
            {{ $t('log.enter') }}
        </v-btn>
    </div>
  </v-form>
</template>

<script>
import ServicesResponseHandling from '@/services/serviceResponseHandling'
import MessageAlerts from '../forms/MessageAlerts'
export default {
  name: 'LogForm',
  components: {
    MessageAlerts
  },
  data: () => ({
    logParameters: {},
    rules: {}
  }),
  computed: {},
  methods: {
    async sendRegistration() {
      this.$store.state.AuthenticationProcesses.loading = true
      this.resetForm

      if (this.$refs.logForm.validate() && this.validatePassword()) {
        this.$store.dispatch('AuthenticationProcesses/userRegistration', {
          email: this.logParameters.log.email,
          password: this.logParameters.log.confirmPassword
        })
        .then(response => {
          if (response.error) {
            this.logParameters.validForm = true
            this.$store.state.AuthenticationProcesses.isErrorAuth = true
            this.logParameters.errorMessage = ServicesResponseHandling.
                                    messageLogResponse(response.error)
            this.showMessage(this.logParameters.errorMessage,
            this.$store.state.AuthenticationProcesses.isErrorAuth)
          } else {
            this.logParameters.validForm = false
            this.$store.dispatch('setStep', 1)
            this.resetForm
          }
        })
      } 
      this.$store.state.AuthenticationProcesses.loading = false
    },
    validatePassword: function() {
      if (this.logParameters.log.password !== this.logParameters.log.confirmPassword) {
        this.logParameters.validForm = true
        this.$store.state.AuthenticationProcesses.isErrorAuth = true
        let messageError = "Ups!!! las contraseñas no coinciden."
        this.logParameters.errorMessage = ServicesResponseHandling.
                                    messageLogResponse(messageError)
        this.showMessage(messageError,
        this.$store.state.AuthenticationProcesses.isErrorAuth)
        return false
      } else {
        this.logParameters.validForm = false
        this.$store.state.AuthenticationProcesses.isErrorAuth = false
        this.$store.dispatch('MessageAlerts/clearAlert', false)
        return true
      }
    },
    resetForm() {
      this.$refs.logForm.reset()
      this.logParameters.validForm = false
      this.$store.state.AuthenticationProcesses.isErrorAuth = false
      this.logParameters.errorMessage = ''
      this.$store.dispatch('MessageAlerts/clearAlert', false)
    },
    showMessage(message, isShow) {
      this.$store.state.MessageAlerts = {
        type: 'alert',
        alert: {
          isShow: isShow,
          message: message
        }
      }
    }
  },
  created() {
    if (this.$nextTick) {
      this.logParameters = this.$store.state.AuthenticationProcesses
      this.rules = this.$store.state.Rules
    }
  }
}
</script>
