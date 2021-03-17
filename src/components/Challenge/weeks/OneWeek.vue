<template>
  <v-card
    elevation="0"
  >
    <v-tabs
      fixed-tabs
      color="lime darken-4"
      left
    >
      <v-tab v-for="food in typesOfFood"
            :key="food.id"
            @click="getFoods(food)"
      >
        {{ food.title }}
      </v-tab>

      <v-tab-item
        v-for="food in typesOfFood"
        :key="food.id"
      >
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <SectionTitle
                  :titleParameters="titleParameters(food.id)"
              ></SectionTitle>
                <MealPlans
                  :breakfastDiner="breakfastDiner"
                ></MealPlans>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import SectionTitle from '../../forms/SectionTitle'
import MealPlans from '../weeks/Foods/MealPlans'

export default {
    name: 'OneWeek',
    components: {
        MealPlans,
        SectionTitle
    },
    data: () => ({
        typesOfFood: [
            {
                id: 1,
                title: 'Desayuno o Cena',
                value: 'breakfastOrDinner'
            },
            {
                id: 2,
                title: 'Jugos détox',
                value: 'detoxJuice'
            },
            {
                id: 3,
                title: 'Colaciones',
                value: 'snacks'
            },
            {
                id: 4,
                title: 'Entradas',
                value: 'foodTickets'
            },
            {
                id: 5,
                title: 'Comidas',
                value: 'foods'
            }
        ],
        breakfastDiner: []
    }),
    computed: {
      isGender() {
        if (window.localStorage.getItem('registeredUser') != null) {
          const {
            gender
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return gender
        } else {
          return null
        }
      }
    },
    methods: {
      titleParameters(foodId) {
        switch (foodId) {
          case 1:
            return {
              title: '',
              subtitle: 'Elige una opción que puedes preparar en el desayuno o cena'
            }
          case 2:
            return {
              title: '',
              subtitle: 'Eilge un jugo para acompañar tu desayuno y cena'
            }
          case 3:
            return {
              title: '',
              subtitle: `Te sugiero que hagas entre 1 y 2 colaciones al día, solo si realmente tienes hambre.
                        Estás pueden ser entre la comida y la cena.`
            }
          case 4:
            return {
              title: '',
              subtitle: 'Elege siempre una entrada como complemento a tu comida'
            }
          case 5:
            return {
              title: '',
              subtitle: 'Elige una opcíon de comida, puedes comer el mismo platino hasta 2 días.'
            }
            default:
              return {}
        }
      },
      getFoods(typeFood) {
        if (this.$nextTick) {
          const payload = {
            gender: this.isGender,
            food: typeFood.value
          }
            this.$store.dispatch('Foods/getFoods', payload).then(response => {
              this.breakfastDiner = response
            })

        }
      }
    },
    created() {
     if (this.$nextTick) {
          const payload = {
            gender: this.isGender,
            food: 'breakfastOrDinner'
          }
            this.$store.dispatch('Foods/getFoods', payload).then(response => {
              this.breakfastDiner = response
            })

        }
    }
  }
</script>
