<template>
  <v-container fluid>
    <v-data-iterator
      :items="shoppingList"
      item-key="name"
      :items-per-page="4"
      hide-default-footer
    >
      <template v-slot:default="{ items, isExpanded, expand }">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
                <v-progress-linear
                     :color="showColor(item.name)"
                     height="10"
                     indeterminate
                   ></v-progress-linear>
              <v-card-title>
                <h4>{{ item.name }}</h4>
              </v-card-title>
              <v-switch
                :input-value="isExpanded(item)"
                :label="isExpanded(item) ? 'Ocultar' : 'Ver'"
                class="pl-4 mt-0"
                @change="(v) => expand(item, v)"
              ></v-switch>
              <v-divider></v-divider>
              <v-list
                v-if="isExpanded(item)"
                dense
              >
                <v-list-item
                 v-for="categoria in item.categorias"
                    :key="categoria.id"
                >
                  <v-list-item-content class="align-end">
                    {{ categoria.name }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    name: 'ShoppingTable',
    data: () => ({
      shoppingList: []
    }),
    methods: {
        showColor(categori) {
            switch (categori) {
                case 'Verduras':
                    return 'lime lighten-3'
                case 'Frutas':
                    return 'cyan lighten-4'
                case 'Cereales':
                    return 'orange lighten-4'
                case 'Alimentos de origen animal':
                    return 'red lighten-2'
                default:
                    return ''
            }
        }
    },
    created() {
        this.$store.dispatch('ShoppingList/getShoppingList').then(response => {
            this.shoppingList = response
        })
        setTimeout(() => {
          this.loading = false
        }, 1500)
    }
  }
</script>
