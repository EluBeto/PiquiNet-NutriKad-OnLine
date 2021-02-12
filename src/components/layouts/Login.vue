<template>
  <v-app>
    <v-main>
      <router-view :key="$router.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {}
  },
  computed: {
    GetAppVersion() {
      return this.$store.state.version
    }
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p,
div,
table,
.v-application {
  font-family: 'Calibri' !important;
}

h1 {
  font-size: 2.1 !important;
}

.subtitle {
  font-size: 0.9em;
}

.transparente {
  background-color: transparent !important;
}
</style>
