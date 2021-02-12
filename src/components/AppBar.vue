<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="lime lighten-4"
    height="80"
  >
    <v-btn
      class="mr-5"
      elevation="10"
      fab
      small
      @click="setDrawer(!drawer)"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>

    <v-toolbar-title
      class="hidden-sm-and-down font-weight-light"
      v-text="$route.name"
    />

    <v-spacer />

    <div class="mx-10" />

    <v-menu
      bottom
      left
      offset-y
      origin="top right"
      transition="scale-transition"
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="ml-2"
          min-width="0"
          text
          v-bind="attrs"
          v-on="on"
        >
          <v-badge
            color="green"
            overlap
            bordered
          >
            <template v-slot:badge>
              <span>0</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list
        :tile="false"
        nav
      >
        <div>
          <app-bar-item
            v-for="(n, i) in notifications"
            :key="`item-${i}`"
          >
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>
    
    <Avatar class="px-5"></Avatar>
  </v-app-bar>
</template>

<script>
  import { VHover, VListItem } from 'vuetify/lib'
  import { mapState, mapMutations } from 'vuex'
  import Avatar from './Avatar'

  export default {
    name: 'AppBar',

    components: {
      AppBarItem: {
        render (h) {
          return h(VHover, {
            scopedSlots: {
              default: ({ hover }) => {
                return h(VListItem, {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs
                  }
                }, this.$slots.default)
              }
            }
          })
        }
      },
      Avatar
    },

    props: {
      value: {
        type: Boolean,
        default: false,
      }
    },

    data: () => ({
      notifications: []
    }),

    computed: {
      ...mapState(['drawer'])
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER'
      }),
      exit() {
        this.showAlert = true
      }
    }
  }
</script>
