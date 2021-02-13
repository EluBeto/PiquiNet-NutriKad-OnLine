<template>
    <v-app>
      <v-main :style="`${SwitchColor}`">
        <AppBar></AppBar>
        <NavBar></NavBar>
          <v-container>
              <router-view :key="$router.fullPath"></router-view>
          </v-container>
        <Footer class="my-4"></Footer>
      </v-main>
    </v-app>
</template>

<script>
import NavBar from '../NavBar'
import Footer from '../Footer'
import AppBar from '../AppBar'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    AppBar
  },
  computed: {
    GetAppVersion() {
      return this.$store.state.version
    },
    SwitchColor() {
      return !this.$vuetify.theme.dark ? 'background-color:#F5F5F5' : ''
    }
  }
}
</script>

<style>
.scroll {
  overflow-y: scroll !important
}
.v-data-table td {
  font-size: 0.75rem !important;
  height: 35px;
}

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
  font-family: 'Roboto' !important;
}

h1 {
  font-size: 1.8em;
}
.subtitle {
  font-size: 0.9em;
}

.cardTitle {
  font-size: 0.8em;
}
</style>
