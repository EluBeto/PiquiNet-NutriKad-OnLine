<template>
  <div>
    <Progress></Progress>
    <v-row>
      <v-col md="12" class="pb-0 mt-2">
        <SectionTitle :titleParameters="titleParameters"></SectionTitle>
        <v-divider></v-divider>
        <wizard class="mt-4"></wizard>
      </v-col>
    </v-row>
    <br> <br>
    <v-divider></v-divider>
    <br> <br>
    <v-row>
      <v-col cols="12" md="12">
        <ProgressWeight></ProgressWeight>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import Wizard from '../components/forms/Wizard'
import Progress from '../components/layouts/Progress'
import ProgressWeight from "@/components/ProgressWeight"
// import ProgressGraph from '../components/ProgressGraph'

export default {
  name: 'Dashboard',
  components: {
    Wizard,
    SectionTitle,
    Progress,
    ProgressWeight
  },
  data: () => ({
    menus: [{
      text: 'Inicio',
      disabled: true,
      href: '/dashboard'
    }]
  }),
   computed: {
      userName() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return ''
        } else {
          const {
            name
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return `! Hola ¡ ${name}`
        }
      },
      isGender() {
        if (window.localStorage.getItem('registeredUser') != null) {
          const {
            gender
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return gender
        } else {
          return null
        }
      },
      titleParameters() {
        let mssage = {
          title: this.userName,
          subtitle: `${this.isGender ? 'Bienvenida ' : 'Bienvenido '}al reto, "Ponte Fit y Gana Salud 2.0 Ayuno Intermitente"`
        }
        return mssage
      }
    },
  created() {
    this.overlay = true
    this.$store.dispatch('SetLayout', 'default-layout')
  }
}
</script>
