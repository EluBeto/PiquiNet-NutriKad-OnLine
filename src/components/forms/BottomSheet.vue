<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="sheet"
      persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-location-exit</v-icon>
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="exit"
        >
          Si, pero regreso pronto
        </v-btn>
        <v-btn
          class="mt-6"
          text
          color="primary"
          @click="sheet = false"
        >
          Continuar
        </v-btn>
        <div class="py-3">
          ¿Te vas tan rápido?
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
  export default {
    name: 'BottonSheet',
    data: () => ({
      sheet: false,
    }),
    methods: {
      exit() {
        this.sheet = true
        this.$router.push('/')
      }
    }
  }
</script>