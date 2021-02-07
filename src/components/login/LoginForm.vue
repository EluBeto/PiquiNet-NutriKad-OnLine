<template>
  <v-form ref="loginForm" v-model="valid" lazy-validation>
      <v-alert v-if="isErrorLogin"
        icon="mdi-account-question"
        border="bottom"
        color="pink darken-1"
        dark
      >
        {{ error }}
      </v-alert>
      <v-text-field
        key="user-name"
        v-model.trim="email"
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
        v-model.trim="password"
        :rules="rules.passwordRules"
        :label="$t('login.password')"
        :name="$t('login.password')"
        prepend-icon="mdi-lock"
        :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        color="primary"
        required
        @keydown.enter="login"
      ></v-text-field>

      <div class="text-center mt-3 my-5">
        <v-btn rounded 
               color="primary"
               :disabled="!valid"
               :loading="loading"
               @click="login"
        >
            {{ $t('login.enter') }}
        </v-btn>
      </div>
  </v-form>
</template>

<script>
import ServicesResponseHandling from '@/services/serviceResponseHandling'
export default {
  name: 'LoginForm',
  data: () => ({
    valid: false,
    error: null,
    email: '',
    password: '',
    showPass: false,
    loading: false,
    isErrorLogin: false
  }),
  computed: {
    rules() {
      return this.$store.getters['getLoginRules']
    }
  },
  methods: {
    async login() {
      this.loading = true
      if (this.$refs.loginForm.validate()) {
        this.error = null
        this.loading = true
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.error) {
            this.isErrorLogin = true
            this.error = ServicesResponseHandling.messageLoginResponse(response.error)
          } else {
            this.isErrorLogin = false
            this.$router.push('dashboard')
          }
        })
      }
      this.loading = false
    },
    resetForm() {
      this.$refs.loginForm.reset()
    }
  }
}
</script>
