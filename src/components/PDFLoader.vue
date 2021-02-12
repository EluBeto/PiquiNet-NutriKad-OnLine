<template>
  <v-card elevation="7">
      <pdf :src="pathPDF"></pdf>
  </v-card>
</template>

<script>
// planes/semana1/plan-semana-1-h.pdf
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  computed: {
    pathPDF() {
      if (window.localStorage.getItem('registeredUser') === null) {
        return ''
      } else {
        const {
          gender
        } = JSON.parse(window.localStorage.getItem('registeredUser'))
        return gender ? '/planes/semana1/plan-semana-1-m.pdf' : '/planes/semana1/plan-semana-1-h.pdf'
      }
    }
  }
}
</script>
