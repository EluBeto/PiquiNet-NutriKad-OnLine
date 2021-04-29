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
                Total de Nutri-Pacientes
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
                    <v-icon class="mr-1 black--text">
                        mdi-heart
                    </v-icon>
                    <span class="subheading mr-2 display-3 black--text"> {{ totalR }}</span>
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
                  <v-icon class="mr-1 black--text">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2 display-3 black--text"> {{ totalM }}</span>
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
                    <v-icon class="mr-1 black--text">
                        mdi-heart
                    </v-icon>
                    <span class="subheading mr-2 display-3 black--text">{{ totalH }}</span>
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
    <MessageAlerts class="mt-3"
                   v-if="alerts.snackbar.modelMessage"
    ></MessageAlerts>
  </v-container>
</template>

<script>
import SectionTitle from '../components/forms/SectionTitle'
import PatientsRegisterTable from '../components/admin/PatientsRegisterTable'
import MessageAlerts from '@/components/forms/MessageAlerts'
export default {
  name: 'DashboardAdmin',
  components: {
      SectionTitle,
      PatientsRegisterTable,
      MessageAlerts
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
    totalM: 0
  }),
   computed: {
     alerts() {
       return this.$store.getters['MessageAlerts/getAlerts']
     },
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
            genero
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return genero
        } else {
          return null
        }
      },
      titleParameters() {
        let mssage = {
          title: this.userName,
          subtitle: `${this.isGender === 'M' ? 'Bienvenida ' : 'Bienvenido '}a tu panel de administración.`
        }
        return mssage
      }
    },
    methods: {
        showImage(gender) {
        return gender ? 'https://avataaars.io/' : 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light'
      }
    },
  created() {
    this.overlay = true
    this.$store.dispatch('PersonalData/getRegisters').then(response => {
        this.patientsRegister = response
      this.totalR = response.length
      let conteoM = 0
      let conteoH = 0
      for (let i = 0; i < response.length; i++) {
        if (response[i].datosPersonales.genero) {
          conteoM ++
        } else {
          conteoH ++
        }
      }
      this.totalM = conteoM
      this.totalH = conteoH
    })
    this.$store.dispatch('SetLayout', 'default-layout')
  }
}
</script>
