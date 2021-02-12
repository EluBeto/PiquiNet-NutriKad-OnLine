<template>
  <v-container>
      <v-row>
          <v-col class="text-center">
              <SectionTitle :titleParameters="titleParameters"></SectionTitle>
          </v-col>
      </v-row>
      <div v-if="isRegistered">
        <v-row>
          <v-col class="text-center" md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
          <v-col md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
          <v-col md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
      </v-row>

      <v-row>
          <v-col class="text-center" md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
          <v-col md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
          <v-col md="4">
                <VideoCard :infoVideo="infoVideo"></VideoCard>
          </v-col>
      </v-row>
      </div>
  </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import VideoCard from '../components/VideoCard'
export default {
    name: 'Traning',
    components: {
        SectionTitle,
        VideoCard
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
          subtitle: 'Es momento de ponernos en acción'
        }
        return mssage
      },
      infoVideo() {
          let infoVideo = {
              url: 'https://youtu.be/0YRX4pEP6pY',
              title: 'Un poco de cardio',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                            ¡Recuerda lo importante es ponerte en movimiento!
`
          }
          return infoVideo
      }
    },
    created() {
      this.$store.dispatch('SetLayout', 'default-layout')
    }
}
</script>

<style>

</style>