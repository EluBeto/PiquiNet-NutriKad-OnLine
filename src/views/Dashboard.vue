<template>
  <div>
    <!-- <v-breadcrumbs :items="menus" class="pb-0 pl-0 pt-7"></v-breadcrumbs> -->
    <v-row>
      <v-col md="11" class="pb-0">
        <h1 class="text-center font-weight-regular pt-sm-6 pt-xs-4"
          :style="this.$store.state.font"
        >
          ¡Aquí inicia el cambio que tanto has buscado!
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="11" class="pb-0">
        <wizard></wizard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Wizard from '../components/forms/Wizard'

export default {
  components: { Wizard },
  name: 'Dashboard',
  data: () => ({
    menus: [{
      text: 'Dashboard',
      disabled: true,
      href: '/dashboard'
    }],
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ]
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
