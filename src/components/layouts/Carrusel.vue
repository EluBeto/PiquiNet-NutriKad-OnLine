<template>
  <v-carousel
    cycle
    height="350"
    hide-delimiter-background
    show-arrows-on-hover
    :show-arrows="false"
    style="max-width: 100%;"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Carrusel',
    data () {
      return {
        items: [
          {
            src: '/img/Reto4.0.jpeg',
          },
          {
            src: '/img/S2.jpg',
          },
          {
            src: '/img/S4.jpg',
          },
          {
            src: '/img/S5.jpg',
          },
          {
            src: '/img/S3.jpg',
          }
        ]
      }
    }
  }
</script>
