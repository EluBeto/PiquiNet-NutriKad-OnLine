<template>
   <v-card
    elevation="1"
   >
        <v-card-title class="text-center justify-center py-5">
            <h3 class="font-weight-bold display-1 mt-0 my-0">
                Ponte Fit y Gana Salud 2.0 Ayuno Intermitente
            </h3>
        </v-card-title>
    <v-tabs
      v-model="tab"
      fixed-tabs
      background-color="lime lighten-3"
      slider-color="yellow darken-3"
      color="orange darken-4"
      black
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
        :hidden="!item.isAllowed"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text v-if="item.content === 1">
              <Start></Start>
              <br>
              <v-divider></v-divider>
              <br>
              <SectionTitle :titleParameters="titleParameters"></SectionTitle>
              <v-divider class="mt-7"></v-divider>
              <TimesLines class="mt-7"></TimesLines>
          </v-card-text>
          <v-card-text v-if="item.content === 2">
              <EatingChallenge></EatingChallenge>
          </v-card-text>
          <v-card-text v-if="item.content === 3">
            <div v-if="isShowPlanOneWeek">
              <keep-alive>
                <OneWeek></OneWeek>
              </keep-alive>
            </div>
            <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mt-5 mx-auto"
                v-else
            ></v-skeleton-loader>
          </v-card-text>
          <v-card-text v-if="item.content === 4">
            <div v-if="isShowPlanSecondWeek">
              <keep-alive>
                <SecondWeek></SecondWeek>
              </keep-alive>
            </div>
            <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mt-5 mx-auto"
                v-else
            ></v-skeleton-loader>
          </v-card-text>
          <v-card-text v-if="item.content === 5">
            <div v-if="isShowPlanThirdWeek">
              <keep-alive>
                <ThirdWeek></ThirdWeek>
              </keep-alive>
            </div>
            <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mt-5 mx-auto"
                v-else
            ></v-skeleton-loader>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Start from '../Challenge/Start'
import TimesLines from '../Challenge/TimeLines'
import SectionTitle from '../forms/SectionTitle'
import EatingChallenge from '../Challenge/EatingChallenge'
import OneWeek from '../Challenge/weeks/OneWeek'
import SecondWeek from '../Challenge/weeks/SecondWeek'
import ThirdWeek from "@/components/Challenge/weeks/ThirdWeek"
export default {
    name: 'TabsItems',
    components: {
      Start,
      TimesLines,
      SectionTitle,
      EatingChallenge,
      OneWeek,
      SecondWeek,
      ThirdWeek
    },
    data () {
      return {
        tab: null,
        items: [
            { tab: 'Importante', content: 1, isAllowed: true },
            { tab: 'Tips para cocinar', content: 2, isAllowed: true },
            { tab: 'Primera Semana', content: 3, isAllowed: true },
            { tab: 'Segunda Semana', content: 4, isAllowed: false },
            { tab: 'Tercera Semana', content: 5, isAllowed: false }
        ],
        boilerplate: false,
        tile: false,
        type: 'table',
        loading: true
      }
    },
    computed: {
        titleParameters() {
        let mssage = {
          title: '¡Empecemos!',
          subtitle: 'Hábitos por la mañana (de preferencia todos los días) ... '
        }
        return mssage
      },
      isShowPlanOneWeek() {
        const date = new Date()
        let dateNow = date.getDate()
        let monthNow = date.toDateString()
        let fechaOK = dateNow >= 1 && monthNow.includes('May')
        return fechaOK
      },
      isShowPlanSecondWeek() {
        const date = new Date()
        let dateNow = date.getDate()
        let monthNow = date.toDateString()
        return dateNow >= 8 && monthNow.includes('May')
      },
      isShowPlanThirdWeek() {
        const date = new Date()
        const id = JSON.parse(window.localStorage.getItem('userAuth'))
        let dateNow = date.getDate()
        let monthNow = date.toDateString()
        if (id.localId === '6vyLo8wGhNeRlsqnU9x1LSfEz3j1'
            || id.localId === 'fY4jFG29h6eLh1gYp1VKiCl4l8j2'
            || id.localId === 'nIUlH2n0hPeuMmTljNkoZqm3JA62'
            || id.localId === '8dSo7ly4bUMEOSLRMMvGIssII9s1'
            || id.localId === 'phutcwaSKlOhVDGJGOxdEB4tpWa2') {
          return false
        }
        return dateNow >= 16 && monthNow.includes('May')
      }

    },
  created() {
    this.loading = false
  }
}
</script>

<style>

</style>
