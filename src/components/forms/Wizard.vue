<template>
  <div>
    <Steps  v-if="!isRegistered && !getIsRegisteredUser"></Steps>

    <template v-if="isRegistered" class="text-center">
        <v-img
          :aspect-ratio="16/9"
          width="auto"
          :src="showImage"
        ></v-img>
      </template>
  </div>
</template>
<script>
import Steps from './Steps'
export default {
  name: 'Wizard',
  components: {
    Steps
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
