<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <SectionTitle :titleParameters="titleParameters"></SectionTitle>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row v-if="!loading && this.$store.getters['isShowPlan']">
      <v-col class="text-center mt-5" v-if="isRegistered">
        <keep-alive>
          <TabsItems></TabsItems>
        </keep-alive>
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
import SectionTitle from '../components/forms/SectionTitle'
import TabsItems from '../components/forms/TabsItems'
export default {
    name: 'EatingPlan',
    components: {
      SectionTitle,
      TabsItems
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
      titleParameters() {
        let mssage = {
          title: `${this.isGender ? '¡ Bienvenida ! ' : '¡ Bienvenido ! '}`,
          subtitle: ''
        }
        return mssage
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
