<template>
  <v-row justify="space-around">
      <v-progress-linear
        color="lime"
        indeterminate
        reverse
      ></v-progress-linear>
    <v-col cols="auto">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        scrollable
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple lighten-2"
            text
            v-bind="attrs"
            v-on="on"
          >Ver receta</v-btn>
        </template>

        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
              class="text-center"
            >
            {{ food.title }}
            </v-toolbar>
            <v-card-text>
                <div class="my-2 text-justify">
                   <span v-html="food.ingredients"></span>
                </div>
            <v-divider></v-divider>
                <div class="my-2 text-justify">
                   <span v-html="food.instructions"></span>
                </div>
                <br>
            <v-divider></v-divider>
                <br>
            <h5 class="my-2 text-justify">
              Nota: las colaciones y las entradas serán las mismas para lo que dure el reto,
              lo único que cambiará cada semana será desayunos o cenas y comidas.
            </h5>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'ModalRecipe',
    props: { food: {} }
}
</script>
