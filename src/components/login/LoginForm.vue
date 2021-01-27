<template>
  <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        key="user-name"
        v-model="username"
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
        v-model="password"
        :rules="rules.passwordRules"
        :label="$t('login.password')"
        :name="$t('login.password')"
        prepend-icon="mdi-lock"
        :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        color="primary"
        required
      ></v-text-field>

      <div class="text-center mt-3 my-5">
        <v-btn rounded 
               color="primary" 
               dark
               :disabled="!valid"
               :loading="loading"
               @click="validate"
        >
            {{ $t('login.enter') }}
        </v-btn>
      </div>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    valid: false,
    error: null,
    username: '',
    password: '',
    showPass: false,
    loading: false
  }),
  computed: {
    rules() {
      return this.$store.getters['getLoginRules']
    }
  },
  methods: {
    async validate() {
      console.log('Entro a validar')
      if (this.$refs.form.validate()) {
        this.error = null
        this.loading = true
      }
    }
  }
}
</script>
