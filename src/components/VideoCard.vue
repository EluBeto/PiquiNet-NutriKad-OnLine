<template>
    <div>
        <v-card
          class="mx-auto"
          max-width="344"
          elevation="4"
          v-if="loading"
        >
          <v-img
            :src="infoVideo.url"
            height="200px"
          ></v-img>

          <v-card-title>
            {{
                infoVideo.title
            }}
          </v-card-title>

          <v-card-subtitle>
            {{
                infoVideo.subtitle
            }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              {{
                  infoVideo.moreInfo
              }}
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{
                    infoVideo.description
                }}
              </v-card-text>
            </div>
          </v-expand-transition>
      </v-card>
    <v-skeleton-loader
               ref="skeleton"
               :boilerplate="boilerplate"
               :type="type"
               :tile="tile"
               class="mt-7 mx-auto"
               v-else
    ></v-skeleton-loader>  
  </div>
</template>

<script>
  export default {
    name: 'VideoCard',
    props: {
        infoVideo: {}
    },
    data: () => ({
      boilerplate: false,
      tile: false,
      type: 'card',
      loading: true,
      selection: 1,
      show: false,
    }),
    created() {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  }
</script>
