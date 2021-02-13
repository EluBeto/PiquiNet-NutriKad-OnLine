<template>
    <v-row>
      <v-col
        cols="12"
        md="4"
        v-for="food in breakfastDiner"
        :key="food.id"
      >
          <v-hover
            v-slot="{ hover }"
            open-delay="200"
          >
              <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
                 v-if="!loadingCard"
                 :loading="loading"
                 class="mx-auto my-12"
                 max-width="374"
               >
                 <template slot="progress">
                   <v-progress-linear
                     color="deep-purple"
                     height="10"
                     indeterminate
                   ></v-progress-linear>
                 </template>
                 <v-img
                   height="250"
                   :src="food.image"
                 ></v-img>
                 <v-card-title class="text-center display-1 black--text font-weight-medium">
                   {{food.title}}
                 </v-card-title>
                     <v-card-text>
                       <v-row
                         align="center"
                         class="mx-0"
                       >
                       </v-row>
       
                       <div class="my-4">
                         
                       </div>
                        <div class="mt-2 my-2 text-justify">
                          <span v-html="food.smallDescription"></span>
                       </div>
                     </v-card-text>
                 <v-divider class="mx-4"></v-divider>
                 <v-card-actions>
                   <ModalRecipe :food="food"></ModalRecipe>
                 </v-card-actions>
               </v-card>
       
               <v-skeleton-loader
               ref="skeleton"
               :boilerplate="boilerplate"
               :type="type"
               :tile="tile"
               class="mt-7 mx-auto"
               v-else
               ></v-skeleton-loader>   
          </v-hover>
      </v-col>
    </v-row>
</template>

<script>
import ModalRecipe from '../ModalRecipe'
export default {
    name: 'MealPlans',
    props: { breakfastDiner: {} },
    components: {
      ModalRecipe
    },
    data: () => ({
      boilerplate: false,
      tile: false,
      type: 'card',
      loadingCard: true,
      selection: 1,
      loading: false
    }),
    computed: {},
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 5000)
      }
    },
    filters: {
      // food.ingredients | truncate(30, '...')
      truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        }
    },
    mounted() {
    setTimeout(() => {
      this.loadingCard = false
    }, 1500)
  }
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
