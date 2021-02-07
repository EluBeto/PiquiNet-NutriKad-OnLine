<template>
  <v-form ref="logForm" v-model="valid" lazy-validation>
    <v-alert v-if="this.$store.state.isFormErrors"
      icon="mdi-account-question"
      border="bottom"
      color="pink darken-1"
      dark
    >
      {{ error }}
    </v-alert>
    <v-text-field
        key="email"
        v-model.trim="email"
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
        v-model.trim="password"
        :rules="rules.passwordRules"
        :label="$t('log.password')"
        :name="$t('log.password')"
        :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        color="primary"
        required
    >
    </v-text-field>
    <v-text-field
      prepend-icon="mdi-lock"
      key="confirmPassword"
      v-model.trim="confirmPassword"
      :rules="rules.passwordRules"
      :label="$t('log.confirmPassword')"
      :name="$t('log.confirmPassword')"
      :type="showConfirmPass ? 'text' : 'password'"
              :append-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showConfirmPass = !showConfirmPass"
      color="primary"
      required
      @keydown.enter="sendRegistration"
    >
    </v-text-field>
    <div class="text-center mt-3">
        <v-btn rounded
          color="primary" 
          :disabled="!valid"
          :loading="loading"
          @click="sendRegistration"
        >
            {{ $t('log.enter') }}
        </v-btn>
      </div>
  </v-form>
</template>

<script>
import ServicesResponseHandling from '@/services/serviceResponseHandling'
export default {
  name: 'LogForm',
  data: () => ({
    valid: false,
    error: null,
    email: '',
    password: '',
    confirmPassword: '',
    showPass: false,
    showConfirmPass: false,
    loading: false
  }),
  computed: {
    rules() {
      return this.$store.getters['getLoginRules']
    }
  },
  methods: {
    async sendRegistration() {
      this.$store.dispatch('setFormHasAnError', false)
      this.loading = true
      if (this.validatePassword()) {
        if (this.$refs.logForm.validate()) {
          this.$store.dispatch('registerUser', {
            email: this.email,
            password: this.confirmPassword
          })
          .then(response => {
            if (response.error) {
              this.$store.dispatch('setFormHasAnError', true)
              this.error = ServicesResponseHandling.messageLogResponse(response.error)
            } else {
              const estructLocalstorage = {
                action: 'setItem',
                name: 'user',
                localStorageObject: response
              }
              this.$store.dispatch('setLoacalStorage', estructLocalstorage)
              this.$store.dispatch('setStep', 1)
              this.resetForm()
            }
          })
        } 
      }
      this.loading = false
    },
    validatePassword: function() {
      if (this.password !== this.confirmPassword) {
        this.error = "Ups!!! las contraseñas no coinciden."
        this.$store.dispatch('setFormHasAnError', true)
        this.showPass = true
        this.showConfirmPass = true
        this.valid = true
        return false
      } else {
        this.valid = true
        this.$store.dispatch('setFormHasAnError', false)
        return true
      }
    },
    resetForm() {
      this.$refs.logForm.reset()
      this.showPass = false
      this.showConfirmPass = false
      this.valid = false
      this.error = null
      this.loading = false
      this.$store.dispatch('setFormHasAnError', false)
    }
  }
}
</script>
