<template>
  <div>
     <v-navigation-drawer
      id="navigation-drawer"
      v-model="drawer"
      :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
      :expand-on-hover="expandOnHover"
      :right="$vuetify.rtl"
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
          v-for="(item, i) in items.filter(m => m.visible === true)"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action style="margin-right: 0px; height: 20px;">
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
    <app-bar></app-bar>
  </div>
</template>

<script>
  // Utilities
  import { mapState } from 'vuex'
  import PageLogo from './PageLogo'
  import AppBar from './AppBar'
  export default {
    name: 'NavBar',
    components: {
      PageLogo,
      AppBar
    },
    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      }
    },

    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Registro',
          to: 'dashboard',
          visible: true
        }
      ]
    }),
    computed: {
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
