<template>
  <div>
     <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
      :expand-on-hover="expandOnHover"
      :src="barImage"
      mobile-breakpoint="960"
      app
      width="260"
      v-bind="$attrs"
    >
      <template v-slot:img="props">
        <v-img
          :gradient="`to bottom, ${barColor}`"
          v-bind="props"
        />
      </template>

      <v-divider class="mb-1" />

      <v-list
        dense
        nav
      >
        <v-list-item>
          <v-list-item-avatar
            class="align-self-center"
            color="white"
            contain
          >
            <page-logo></page-logo>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              class="display-1"
              v-text="profile.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mb-2" />

      <v-list>
        <v-list-item
          v-for="(item, i) in isUserAdmin.filter(m => m.visible === true)"
          :key="i"
          :to="item.to"
          :active-class="`lime lighten-3 ${!isDark ? 'black' : 'white'}--text`"
        >
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="display-1">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-navigation-drawer>
  </div>
</template>

<script>
  // Utilities
  import { mapState } from 'vuex'
  import PageLogo from './PageLogo'
  import Themeable from 'vuetify/lib/mixins/themeable'
  export default {
    name: 'NavBar',
    components: {
      PageLogo
    },
    mixins: [Themeable],
    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      }
    },

    data: () => ({
      user: '',
      items: [
        {
          icon: 'mdi-cards-heart',
          title: 'Historial Clínico',
          to: 'dashboard',
          visible: true
        },
        {
          icon: 'mdi-clipboard-outline',
          title: 'Plan de Alimentación',
          to: 'eatingPlan',
          visible: true
        },
        {
          icon: 'mdi-format-line-weight',
          title: 'Equivalentes',
          to: 'shoppingList',
          visible: true
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Ponte en forma',
          to: 'traning',
          visible: true
        }
      ],
      itemsAdmin: [
        {
          icon: 'mdi-solar-panel',
          title: 'Nutri Panel',
          to: 'dashboardAdmin',
          visible: true
        },
        {
          icon: 'mdi-cards-heart',
          title: 'Historia Clínica',
          to: 'dashboard',
          visible: true
        },
        {
          icon: 'mdi-clipboard-outline',
          title: 'Plan de Alimentación',
          to: 'eatingPlan', //eatingPlan
          visible: true
        },
        {
          icon: 'mdi-format-line-weight',
          title: 'Equivalentes',
          to: 'shoppingList',
          visible: true
        },
        {
          icon: 'mdi-human-handsup',
          title: 'Ponte en forma',
          to: 'traning',
          visible: true
        }
      ]
    }),
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
      },
      isUserAdmin() {
        if (window.localStorage.getItem('userAuth') === null) {
          return []
        } else {
          const {
            email
          } = JSON.parse(window.localStorage.getItem('userAuth'))
          if (email === 'elubeto@gmail.com' || email === 'b.karina.delart.mcs@outlook.es') {
            return this.itemsAdmin
          } else {
            return this.items
          }
        }
      },
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        }
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      }
    },
    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title)
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
