<template>
    <div id="app">
        <v-app>
            <NavBar></NavBar>
            <v-main :style="`${SwitchColor}`">
                <v-container class="pt-0 ml-lg-16 pr-lg-10">
                    <router-view :key="$router.fullPath"></router-view>
                </v-container>
            </v-main>
            <Footer class="my-4"></Footer>
        </v-app>
    </div>
</template>

<script>
import NavBar from '../NavBar'
import Footer from '../Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
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
  font-family: 'Calibri' !important;
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
