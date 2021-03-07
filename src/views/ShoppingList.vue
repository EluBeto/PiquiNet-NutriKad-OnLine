<template>
    <v-container>
        <v-row class="mt-0" v-if="!loading && !!isRegistered">
            <v-col sm="12">
                <v-card>
                  <pdf src="/planes/Equivalentes.pdf"></pdf>
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
    </v-container>
</template>

<script>
import pdf from 'vue-pdf'
  export default {
    name: 'ShoppingList',
    components: {
        pdf
    },
    data () {
      return {
        dialog: false,
        boilerplate: false,
        tile: false,
        type: 'table',
        selection: 1,
        loading: true,
        showInformation: true
      }
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
      }
    },
    created() {
        this.$store.dispatch('ShoppingList/getShoppingList').then(response => {
          this.shoppingList = response
         })
        setTimeout(() => {
          this.loading = false
        }, 1500)
      this.$store.dispatch('SetLayout', 'default-layout')
    }
}
</script>

<style>

</style>
