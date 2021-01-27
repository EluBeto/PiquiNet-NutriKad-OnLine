<template>
  <v-form>
    <v-text-field
        id="mail"
        :label="$t('log.email')"
        :name="$t('log.email')"
        prepend-icon="mdi-email"
        type="text"
        color="primary"
        required
    >
    </v-text-field>
    <v-text-field
        id="password"
        :label="$t('log.password')"
        :name="$t('log.password')"
        prepend-icon="mdi-lock"
        type="password"
        color="primary"
        required
    >
    </v-text-field>
    <v-text-field
        id="confirmPassword"
        :label="$t('log.confirmPassword')"
        :name="$t('log.confirmPassword')"
        prepend-icon="mdi-lock"
        type="password"
        color="primary"
        required
    >
    </v-text-field>
    <div class="text-center mt-3">
        <v-btn rounded color="primary" dark>
            Enviar
        </v-btn>
      </div>
  </v-form>
</template>

<script>
export default {
  name: 'LogForm'
}
</script>
