export default {
    namespaced: true,
    state: {
        shoppingList: [
            {
              name: 'Verduras',
              categorias: [
                {
                  id: 1,
                  name: 'Espinaca'
                },
                {
                  id: 2,
                  name: 'Cebolla'
                },
                {
                  id: 3,
                  name: 'Chile serrano'
                },
                {
                  id: 4,
                  name: 'Apio'
                },
                {
                  id: 5,
                  name: 'Nopal'
                },
                {
                  id: 6,
                  name: 'Perejil'
                },
                {
                  id: 7,
                  name: 'Pepino'
                },
                {
                  id: 8,
                  name: 'Jitomate'
                },
                {
                  id: 9,
                  name: 'Zanahoria'
                },
                {
                  id: 10,
                  name: 'Limón'
                },
                {
                  id: 11,
                  name: 'Betabel'
                },
                {
                  id: 12,
                  name: 'Lechuga'
                },
                {
                  id: 13,
                  name: 'Brócoli'
                },
                {
                  id: 14,
                  name: 'Coliflor'
                },
                {
                  id: 15,
                  name: 'Chicharos'
                },
                {
                  id: 16,
                  name: 'Pimientos'
                },
                {
                  id: 17,
                  name: 'Ajo'
                },
                {
                  id: 18,
                  name: 'Calabaza'
                },
                {
                  id: 19,
                  name: 'Champiñones'
                },
                {
                  id: 20,
                  name: 'Pimienta'
                },
                {
                  id: 21,
                  name: 'Ejotes'
                },
                {
                  id: 22,
                  name: 'Nopales'
                }
              ] 
            },
            {
              name: 'Frutas',
              categorias: [
                {
                  id: 1,
                  name: 'Naranja'
                },
                {
                  id: 2,
                  name: 'Mandarinas'
                },
                {
                  id: 3,
                  name: 'Piña'
                },
                {
                  id: 4,
                  name: 'Fresas'
                },
                {
                  id: 5,
                  name: 'Guayabas'
                }
              ]
            },
            {
              name: 'Cereales',
              categorias: [
                {
                  id: 1,
                  name: 'Avena en hojuelas'
                },
                {
                  id: 2,
                  name: 'Espagueti'
                },
                {
                  id: 3,
                  name: 'Pan bimbo cero cero'
                }
              ]
            },
            {
              name: 'Alimentos de origen animal',
              categorias: [
                {
                  id: 1,
                  name: 'Huevo'
                },
                {
                  id: 2,
                  name: 'Carne molida de res'
                },
                {
                  id: 3,
                  name: 'Queso Oaxaca bajo en grasa'
                },
                {
                  id: 4,
                  name: 'Filete de pescado'
                }
              ]
            },
            {
              name: 'Grasas buenas',
              categorias: [
                {
                  id: 1,
                  name: 'Nueces'
                },
                {
                  id: 2,
                  name: 'Cacahuates'
                },
                {
                  id: 3,
                  name: 'Aguacate'
                },
                {
                  id: 4,
                  name: 'Chocolate turín sin azúcar'
                }
              ]
            }
            ,
            {
              name: 'Otros',
              categorias: [
                {
                  id: 1,
                  name: 'Polvo para hornear'
                },
                {
                  id: 2,
                  name: 'Canela en polvo'
                },
                {
                  id: 3,
                  name: 'Cúrcuma'
                },
                {
                  id: 4,
                  name: 'Jengibre'
                },
                {
                  id: 5,
                  name: 'Esencia de vainilla'
                },
                {
                  id: 6,
                  name: 'Sal'
                }
              ]
            }     
          ]
    },
    actions: {
        async getShoppingList({ state }) {
            const response = state.shoppingList
            return response
        }
    }
}