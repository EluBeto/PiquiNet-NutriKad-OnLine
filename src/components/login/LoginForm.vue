<template>
  <v-form>
      <v-text-field
        id="email"
        :label="$t('login.email')"
        :name="$t('login.email')"
        prepend-icon="mdi-email"
        type="text"
        color="primary"
        required
      ></v-text-field>
      <v-text-field
        id="password"
        :label="$t('login.password')"
        :name="$t('login.password')"
        prepend-icon="mdi-lock"
        type="password"
        color="primary"
        required
      ></v-text-field>

      <div class="text-center mt-3 my-3">
        <v-btn rounded color="primary" dark>
            {{ $t('login.enter') }}
        </v-btn>
      </div>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>
