<template>
  <div>
    <v-breadcrumbs :items="menus" class="pb-0 pl-0 pt-7"></v-breadcrumbs>
    <v-row>
      <v-col md="8" class="pb-0">
        <h1 class="font-weight-regular pt-sm-6 pt-xs-4">
          Hola!!!
        </h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    menus: [{
      text: 'Dashboard',
      disabled: true,
      href: '/dashboard'
    }]
  }),
  computed: {
    name () {
      return this.$store.state.userAuth.nombre
    }
  },
  methods: {},
  created() {
    this.$store.dispatch('SetLayout', 'default-layout')
  }
}
</script>

<style>

</style>
