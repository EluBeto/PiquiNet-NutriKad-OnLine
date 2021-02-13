<template>
    <v-container>
        <v-row>
            <v-col md="12" class="text-center">
                <SectionTitle :titleParameters="titleParameters"></SectionTitle>
            </v-col>
        </v-row>
        <v-divider class="mt-3"></v-divider>
        <v-row class="text-center">
            <v-col sm="12" class="text-right mt-2">
                <v-tooltip
                    left
                    v-model="showInformation"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      large
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click.prevent="dialog = true"
                    >
                      mdi-information
                    </v-icon>
                  </template>
                  <span>Información</span>
                </v-tooltip>
            </v-col>
        </v-row>
        <v-row class="mt-0" v-if="!loading">
            <v-col sm="12">
                <v-card>
                    <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar"
                        single-line
                        hide-details
                    ></v-text-field>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="shoppingList"
                    :search="search"
                    >
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
            <v-skeleton-loader
               ref="skeleton"
               :boilerplate="boilerplate"
               :type="type"
               :tile="tile"
               class="mt-7 mx-auto"
               v-else
            ></v-skeleton-loader>  
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <v-card
            elevation="0"
            height="350px"
            class="scroll pa-5"
            style="background-color: #f5f5f5;"
          >
            <v-card-text>
              <div class="my-5 text-justify">
                <span v-html="importantInformation"></span>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="dialog = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
  export default {
    name: 'ShoppingList',
    components: {
        SectionTitle
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Verduras',
            align: 'start',
            sortable: false,
            value: 'verduras',
          },
          { text: 'Furtas', value: 'frutas' },
          { text: 'Cereales', value: 'cereales' },
          { text: 'Alimentos de origen animal', value: 'alimentos' },
          { text: 'Grasas buenas', value: 'grasas' },
          { text: 'Otros', value: 'otros' },
        ],
        shoppingList: [],
        dialog: false,
        importantInformation: ` <big><b>Sugerencias</b></big>
            </br></br>
            <ul>
                <li>
                    Elige los platillos de manera meticulosa para que puedas optimizar tus compras y solo compres lo que necesitas.
                </li>
                <li>
                    La fruta y la verdura es necesario que se compre semanal, para que no se eche a perder. 
                </li>
                <li>
                    Se recomienda comprar gran cantidad de verdura, ya que al ser la mayoría considerada libre, se podrá agregar en varios platillos.
                </li>
                <li>
                    Los invito a que dupliquen las cantidades, y contagien a sus familiares con este movimiento de salud. 
                </li>
            </ul>
        `,
        boilerplate: false,
        tile: false,
        type: 'table',
        selection: 1,
        loading: true,
        showInformation: true
      }
    },
    computed: {
        titleParameters() {
            return {
                title: 'Lista de compras sugerida',
                subtitle: `"Cuida tu cuerpo ya que es el único lugar que tienes para vivir"
                        Siempre recuerda qué: "El Reto Es Contigo Mismo".
                `
            }
        }
    },
    created() {
        setTimeout(() => {
          this.$store.dispatch('ShoppingList/getShoppingList').then(response => {
              this.shoppingList = response
          })
          this.loading = false
        }, 1500)
      this.$store.dispatch('SetLayout', 'default-layout')
    }
}
</script>

<style>

</style>