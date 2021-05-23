<template>
  <v-container>
      <v-row>
        <v-col md="12" class="pb-0 mt-5">
            <SectionTitle :titleParameters="titleParameters"></SectionTitle>
        </v-col>
      </v-row>
      <v-divider class="mt-6"></v-divider>
      <v-row class="mt-6">
        <v-col cols="12"
            sm="6"
            lg="4">
            <v-card
                class="mx-auto"
                color="lime lighten-3"
                dark
                max-width="400"
            >

                <v-card-text class="text-center display-1 black--text font-weight-bold">
                Nutri Pacientes
                </v-card-text>

                <v-card-actions>
                <v-list-item class="grow text-center">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        alt=""
                        :src="showImage(false)"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        alt=""
                        :src="showImage(true)"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-row
                    align="center"
                    justify="end"
                    >
                    <span class="subheading mr-2 display-4 black--text">{{ totalR }}</span>
                    </v-row>
                </v-list-item>
                </v-card-actions>
            </v-card>
          </v-col>
        <v-col cols="12"
               sm="6"
               lg="4">
          <v-card
              class="mx-auto"
              color="pink lighten-4"
              dark
              max-width="400"
          >

            <v-card-text class="text-center display-1 black--text font-weight-bold">
              Mujeres
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow text-center">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                      class="elevation-6"
                      alt=""
                      :src="showImage(true)"
                  ></v-img>
                </v-list-item-avatar>

                <v-row
                    align="center"
                    justify="end"
                >
                  <span class="subheading mr-2 display-4 black--text">{{ totalM }}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12"
            sm="6"
            lg="4">
            <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                max-width="400"
            >

                <v-card-text class="text-center display-1 black--text font-weight-bold">
                Hombres
                </v-card-text>

                <v-card-actions>
                <v-list-item class="grow text-center">
                    <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        alt=""
                        :src="showImage(false)"
                    ></v-img>
                    </v-list-item-avatar>

                    <v-row
                    align="center"
                    justify="end"
                    >
                    <span class="subheading mr-2 display-4 black--text">{{ totalH }}</span>
                    </v-row>
                </v-list-item>
                </v-card-actions>
            </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
              <PatientsRegisterTable :patientsRegister="patientsRegister"></PatientsRegisterTable>
          </v-col>
      </v-row>
    <v-dialog
        v-model="dialog"
        width="500"
        scrollable
    >
      <v-card>
        <v-card-title class="headline lighten-2" style="background: #80CBC4">
          TOP DE LOS MÁS APLICADOS
        </v-card-title>

        <v-card-text>

          <v-card
              max-width="450"
              class="mx-auto"
              elevation="0"
          >
            <v-list three-line>
              <v-subheader class="headline lighten-2">Semanas Uno, Dos y Tres</v-subheader>
              <template v-for="item in arrayTop">
                <v-divider
                    :key="item.UUID"
                    :inset="item.inset"
                ></v-divider>

                <v-list-item
                    :key="item.UUID"
                >
                  <v-list-item-avatar>
                    <v-avatar
                        color="yellow darken-4"
                    >
                      <span class="white--text headline">
                       {{ item.name.substring(0, 1) }}
                      </span>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.name" style="font-size: large"></v-list-item-title>
                    <v-list-item-subtitle v-html="`Menos: ${item.peso} Kg.`" style="color: #00C853; font-size: x-large"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>


        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Salir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import PatientsRegisterTable from '../components/admin/PatientsRegisterTable'
export default {
  name: 'DashboardAdmin',
  components: {
      SectionTitle,
      PatientsRegisterTable
  },
  data: () => ({
    menus: [{
      text: 'Panel de Administración',
      disabled: true,
      href: '/dashboardAdmin'
    }],
    patientsRegister: [],
    totalR: 0,
    totalH: 0,
    totalM: 0,
    arrayTop: [],
    arrayUsers: [],
    dialog: false
  }),
   computed: {
      userName() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return ''
        } else {
          const {
            name
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return `! Hola ¡ ${name}`
        }
      },
      isGender() {
        if (window.localStorage.getItem('registeredUser') != null) {
          const {
            gender
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return gender
        } else {
          return null
        }
      },
      titleParameters() {
        let mssage = {
          title: this.userName,
          subtitle: `${this.isGender ? 'Bienvenida ' : 'Bienvenido '}a tu panel de administración.`
        }
        return mssage
      }
    },
    methods: {
        showImage(gender) {
        return gender ? 'https://avataaars.io/' : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
      },
      GetTopProgressWeith() {
          this.$store.dispatch('PersonalData/getProgressWeithAll').then(responseWeith => {
            for (let i = 0; i < responseWeith.length -1; i ++) {
              if (responseWeith[i].UUID === this.arrayUsers[i].UUID) {
                if (responseWeith[i].thirdWeight !== 0) {
                  let peso = responseWeith[i].fourthWeight !== 0 ? responseWeith[i].fourthWeight : responseWeith[i].thirdWeight
                  this.arrayTop.push({
                    name: this.arrayUsers[i].name,
                    peso: parseFloat(responseWeith[i].firstWeight - peso).toFixed(2)
                  })
                }
              }
            }
            this.arrayTop.sort(function (a, b){
              return b.peso - a.peso;
            })
            this.dialog = true
          })
      }
    },
  created() {
    this.overlay = true
    this.$store.dispatch('PersonalData/getRegisters').then(response => {
      let conteoM = 0
      let conteoH = 0
      let filterRegister = []
      let namesUsers = ''
      filterRegister = response.filter(user => user.dataIdentificationCard.name != 'Edilberto')
      filterRegister = filterRegister.filter(user => user.dataIdentificationCard.name != 'Karina')
      for (let i = 0; i < filterRegister.length; i++) {
        if (filterRegister[i].dataIdentificationCard.gender) {
          conteoM ++
        } else {
          conteoH ++
        }
        namesUsers = `${filterRegister[i].dataIdentificationCard.name} ${filterRegister[i].dataIdentificationCard.lastName} ${filterRegister[i].dataIdentificationCard.motherLastName}`
        this.arrayUsers.push({name: namesUsers, UUID: filterRegister[i].dataIdentificationCard.UUID})
      }
      this.totalM = conteoM
      this.totalH = conteoH
      this.totalR = filterRegister.length
      this.patientsRegister = filterRegister
      this.GetTopProgressWeith()
    })
    this.$store.dispatch('SetLayout', 'default-layout')
  }
}
</script>
