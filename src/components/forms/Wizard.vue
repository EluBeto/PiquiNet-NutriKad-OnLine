<template>
  <div>
    <Steps  v-if="!isRegistered && !getIsRegisteredUser"></Steps>

    <template v-if="isRegistered" class="text-center">
        <Carrusel></Carrusel>
      </template>
  </div>
</template>
<script>
import Steps from './Steps'
import Carrusel from '../layouts/Carrusel'
export default {
  name: 'Wizard',
  components: {
    Steps,
    Carrusel
  },
  data: () => ({}),
  computed: {
    getIsRegisteredUser() {
      return this.$store.getters['PersonalData/getIsRegisteredUser']
    },
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
    gender() {
      if (window.localStorage.getItem('registeredUser') === null) {
        return false
      } else {
          const {
            gender
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return gender
      }
    },
    showImage() {
      if (this.gender) {
        return '/img/registro.jpg'
      } else {
        return '/img/registro-h.jpg'
      }
    }
  }
}
</script>
