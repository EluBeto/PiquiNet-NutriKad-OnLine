<template>
  <Steps  v-if="isActive"></Steps>
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
  }
}
</script>
