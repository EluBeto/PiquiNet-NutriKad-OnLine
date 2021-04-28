<template>
  <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="yellow darken-4"
              size="48"
            >
              <span class="white--text headline">
                {{
                  initials
                }}
              </span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card class="justify-center">
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="yellow darken-4"
              >
                <span class="white--text headline">
                   {{
                      initials
                    }}
                  </span>
              </v-avatar>
              <h3>{{ name }}</h3>
              <p class="caption mt-1">
                {{ email }}
              </p>
              <v-divider class="my-1"></v-divider>
              <v-btn
                depressed
                rounded
                text
                :disabled="!isActive"
              >
                Edita tus datos
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <BottonSheet></BottonSheet>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
</template>

<script>
import BottonSheet from './forms/BottomSheet'
export default {
    name: 'Avatar',
    components: {
        BottonSheet
    },
    data: () => ({}),
    computed: {
      isActive() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return false
        } else {
          const {
            isActive
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return isActive
        }
      },
      name() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return 'Completa tu info'
        } else {
          const {
            surnames,
            name
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return `${surnames} ${name}`
        }
      },
      email() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return ''
        } else {
          const {
            email
          } = JSON.parse(window.localStorage.getItem('userAuth'))
          return email
        }
      },
      initials() {
        if (window.localStorage.getItem('registeredUser') === null) {
          return 'User'
        } else {
          const {
            surnames,
            name
          } = JSON.parse(window.localStorage.getItem('registeredUser'))
          return `${name.charAt(0)}${surnames.charAt(0)}`
        }
      }
    }
}
</script>
