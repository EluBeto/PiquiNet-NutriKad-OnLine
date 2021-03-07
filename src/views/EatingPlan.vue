<template>
  <v-container>
    <v-row v-if="!loading && !!isRegistered && isShowPlan">
      <v-col class="text-center mt-5" v-if="!!isRegistered">
        <PDFLoader></PDFLoader>
      </v-col>
    </v-row>
    <v-skeleton-loader
          ref="skeleton"
          :boilerplate="boilerplate"
          :type="type"
          :tile="tile"
          class="mt-5 mx-auto"
          v-else
    ></v-skeleton-loader>
  </v-container>
</template>

<script>
import PDFLoader from "@/components/PDFLoader"
export default {
    name: 'EatingPlan',
    components: {
      PDFLoader
    },
    data:() => ({
      boilerplate: false,
      tile: false,
      type: 'table',
      loading: true
    }),
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
      isShowPlan() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return false
        } else {
          const {
            isShowPlan
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return isShowPlan
        }
      }
    },
    created() {
      this.$store.dispatch('SetLayout', 'default-layout')
    },
    mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>
