<template>
    <div>
        <v-card
          class="mx-auto"
          max-width="300px"
          elevation="4"
          v-if="!loading && this.$store.getters['isShowPlan']"
        >
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item my-1 px-0"
                  width="auto"
                  height="auto"
                  :src="video.url"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
          >
          </iframe>
        </div>
          <v-card-title class="text-center display-1 black--text font-weight-medium">
            {{
                video.title
            }}
          </v-card-title>

          <v-card-subtitle>
            {{
                video.subtitle
            }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              {{
                  video.moreInfo
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
                    video.description
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
        video: {}
    },
    data: () => ({
      boilerplate: false,
      tile: false,
      type: 'card',
      loading: true,
      selection: 1,
      show: false
    }),
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  }
</script>
