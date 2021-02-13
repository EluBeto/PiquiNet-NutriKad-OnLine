export default {
    namespaced: true,
    state: {
        shoppingList: [
            {
              verduras: 'Espinacas',
              frutas: 'Manzana',
              cereales: 'Tortilla de maíz',
              alimentos: 'Pollo' ,
              grasas: 'Almendras',
              otros: 'Gelatina light'   
            },
            {
                verduras: 'Cebolla',
                frutas: 'Naranja',
                cereales: 'Avena en hojuelas',
                alimentos: 'Huevo' ,
                grasas: 'Nueces',
                otros: 'Polvo para hornear'   
              },
              {
                verduras: 'Chile serrano',
                frutas: 'Mandarinas',
                cereales: 'Espagueti',
                alimentos: 'Carne molida de res' ,
                grasas: 'Cacahuates',
                otros: 'Canela en polvo'   
              },
              {
                verduras: 'Apio',
                frutas: 'Piña',
                cereales: 'Pan bimbo cero cero',
                alimentos: 'Queso Oaxaca bajo en grasa' ,
                grasas: 'Aguacate',
                otros: 'Cúrcuma'   
              },
              {
                verduras: 'Nopal',
                frutas: 'Fresas',
                cereales: '',
                alimentos: 'Filete de pescado' ,
                grasas: 'Chocolate turín sin azúcar',
                otros: 'Jengibre'   
              },
              {
                verduras: 'Perejil',
                frutas: 'Guayabas',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: 'Esencia de vainilla'   
              },
              {
                verduras: 'Pepino',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: 'Sal '   
              },
              {
                verduras: 'Jitomate',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: 'Pimienta'   
              },
              {
                verduras: 'Ajo',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Zanahoria',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Limón',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Betabel',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Lechuga',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Brócoli',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Coliflor',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Chicharos',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Pimientos',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Calabaza',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Champiñones ',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Ejotes',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
              },
              {
                verduras: 'Nopales',
                frutas: '',
                cereales: '',
                alimentos: '' ,
                grasas: '',
                otros: ''   
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