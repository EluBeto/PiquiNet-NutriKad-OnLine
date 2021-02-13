<template>
  <div>
    <Progress></Progress>
    <v-row>
      <v-col md="12" class="pb-0 mt-5">
        <SectionTitle :titleParameters="titleParameters"></SectionTitle>
        <v-divider></v-divider>
        <wizard class="mt-4"></wizard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import Wizard from '../components/forms/Wizard'
import Progress from '../components/layouts/Progress'

export default {
  name: 'Dashboard',
  components: { 
    Wizard,
    SectionTitle,
    Progress
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
          subtitle: `${this.isGender ? 'Bienvenida ' : 'Bienvenido '}al reto, "Ponte Fit y Gana Salud con Nutrikad"`
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
