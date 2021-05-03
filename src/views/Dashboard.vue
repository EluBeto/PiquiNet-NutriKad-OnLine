<template>
  <v-container>
    <v-row>
      <v-col md="12" class="pb-0 mt-2">
        <SectionTitle :titleParameters="titleParameters"></SectionTitle>
        <v-divider></v-divider>
        <br>
        <v-row>
          <v-col class="text-lg-end" cols="12" sm="12" md="12">
            <v-btn color="warning" @click="$store.dispatch('PersonalData/cancelRegister')">
              Limpiar Historia Clinica
              <v-icon right>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <Steps  v-if="isActive"></Steps>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import Steps from '../components/forms/Steps'

export default {
  name: 'Dashboard',
  components: {
    SectionTitle,
    Steps
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
      titleParameters() {
        let mssage = {
          title: this.userName,
          subtitle: 'Bienvenida a tu consultorio Online'
        }
        return mssage
      },
      isActive() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return false
        } else {
          const {
            isActive
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return isActive
        }
      }
    },
  created() {
    this.overlay = true
    this.$store.dispatch('SetLayout', 'default-layout')
  }
}
</script>
