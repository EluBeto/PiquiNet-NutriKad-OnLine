<template>
  <v-card elevation="7">
    <v-divider></v-divider>
    <v-row>
      <v-col
          class="ma-2"
          cols="11"
          sm="6"
      >
        <v-select
            :items="sugerencias"
            item-text="name"
            item-value="url"
            label="Recomendaciones"
            outlined
            @change="setImg"
        ></v-select>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-expansion-panels
        v-model="panel"
        multiple
    >
      <v-expansion-panel
        v-for="plan in planesAlimentacion"
        :key="plan.id"
      >
        <v-expansion-panel-header>Plan No. {{ plan.id }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <pdf :src="`${plan.url}${localID}/${plan.id}.pdf`"></pdf>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
      <v-card
          elevation="0"
          height="550px"
          class="scroll pa-5"
          style="background-color: #f5f5f5;"
      >
        <v-card-text>
          <div class="my-5 text-justify">
            <v-img :src="imgUrl"></v-img>
            <v-img v-if="!!urlVS" :src="urlVS"></v-img>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  data: () => ({
    dialog: false,
    planesAlimentacion: [
      {
        id: 1,
        url: '/planes/'
      }
    ],
    sugerencias: [
      {
        id: 1,
        name: 'Indicaciones generales',
        url: '/planes/AlimentosSugeridos/ING.jpeg'
      },
      {
        id: 2,
        name: 'Recomendaciones para cocinar',
        url: '/planes/AlimentosSugeridos/RPC.jpeg'
      },
      {
        id: 3,
        name: 'Cereales sugeridos',
        url: '/planes/AlimentosSugeridos/CS.jpeg'
      },
      {
        id: 4,
        name: 'Alimentos de origen animal',
        url: '/planes/AlimentosSugeridos/AOAS.jpeg'
      },
      {
        id: 5,
        name: 'Aceites sugeridos',
        url: '/planes/AlimentosSugeridos/AS.jpeg'
      },
      {
        id: 6,
        name: 'Varios (Sugeridos)',
        url: '/planes/AlimentosSugeridos/VS.jpeg',
      },
      {
        id: 7,
        name: 'Yoghurt',
        url: '/planes/AlimentosSugeridos/YG.jpeg'
      }
    ],
    urlVS: '',
    isVS: false,
    panel: [0],
    userID: '',
    imgUrl: ''
  }),
  computed: {
    localID() {
      if (window.localStorage.getItem('userAuth') === null) {
        return ''
      } else {
        const {
          localId,
        } = JSON.parse(window.localStorage.getItem('userAuth'))
        return localId
      }
    }
  },
  methods: {
    setImg(url) {
      this.urlVS = url === '/planes/AlimentosSugeridos/VS.jpeg' ? '/planes/AlimentosSugeridos/VS2.jpeg' : ''
      this.imgUrl = url
      this.dialog=true
    }
  }
}
</script>
