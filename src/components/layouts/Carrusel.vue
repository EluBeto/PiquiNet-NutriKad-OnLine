<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    :show-arrows="false"
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
            src: '/img/S1.jpg',
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