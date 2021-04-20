<template>
  <v-container>
      <v-row>
          <v-col class="text-center">
              <SectionTitle :titleParameters="titleParameters"></SectionTitle>
          </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="mt-5">
        <v-row>
          <v-col md="4"
            v-for="video in infoVideo"
            :key="video.id"
          >
                <VideoCard :video="video"></VideoCard>
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
    data: () => ({
      infoVideo: [
            {
              id: 1,
              url: 'https://www.youtube-nocookie.com/embed/543fbgQkRTo',
              title: 'Rutina Hit de 30 min.',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            },
            {
              id: 2,
              url: 'https://www.youtube-nocookie.com/embed/Mfw3rchYkiM',
              title: 'TOTAL BODY',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            },
            {
              id: 3,
              url: 'https://www.youtube-nocookie.com/embed/WWh-xze2EEI',
              title: 'FULL BODY CARDIO',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            },
            {
              id: 4,
              url: 'https://www.youtube-nocookie.com/embed/sd4cF1Teoig',
              title: 'HIT INTENSO',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            },
            {
              id: 5,
              url: 'https://www.youtube-nocookie.com/embed/WfJvaiBhL0Q',
              title: 'CARDIO HIT "TORMENTA DE SUDOR"',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            },
            {
              id: 6,
              url: 'https://www.youtube-nocookie.com/embed/TraTomglbdI',
              title: 'RUTINA INTENSA PARA ABDOMEN',
              subtitle: '',
              moreInfo: 'Importante',
              description: `Este video solo es una sugerencia para que te actives, pero si tienes ya una rutina o alguna otra actividad que te guste continúa haciendo.
                              ¡Recuerda lo importante es ponerte en movimiento!`
            }
          ]
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
          title: this.userName,
          subtitle: 'No busques tiempo para hacer ejercicio, Encuentralo'
        }
        return mssage
      }
    },
    created() {
      this.$store.dispatch('SetLayout', 'default-layout')
    }
}
</script>

<style>

</style>
