<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <SectionTitle :titleParameters="titleParameters"></SectionTitle>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" v-if="isRegistered">
        <PDFLoader></PDFLoader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import PDFLoader from '../components/PDFLoader'
export default {
    name: 'EatingPlan',
    components: {
      PDFLoader,
      SectionTitle
    },
    computed: {
      isRegistered() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return false
        } else {
          const {
            isRegistered
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return isRegistered
        }
      },
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
          subtitle: `${this.isGender ? 'Bienvenida ' : 'Bienvenido '}a tu plan de alimentación`
        }
        return mssage
      }
    },
    created() {
      this.$store.dispatch('SetLayout', 'default-layout')
    }
}
</script>
