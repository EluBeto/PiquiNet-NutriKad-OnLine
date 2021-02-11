<template>
<v-row>
      <v-menu
        bottom
        min-width="auto"
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
              <span class="white--text headline">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card class="justify-center px-2">
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="yellow darken-4"
              >
                <span class="white--text headline">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-1"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edita tus datos
              </v-btn>
              <v-divider class="my-1"></v-divider>
              <BottonSheet></BottonSheet>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
</template>

<script>
import BottonSheet from './forms/BottomSheet'
export default {
    name: 'Avatar',
    components: {
        BottonSheet
    },
    data: () => ({
      user: {
        initials: 'ELU',
        fullName: 'Edilberto López Ubaldo',
        email: 'elubeto@gmail.com',
      },
    })
}
</script>
