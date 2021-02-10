<template>
  <v-row class="fill-height">
    <v-col cols="12" md="4" class="yellow lighten-4 my-1">

      <page-logo></page-logo>

      <v-card-text class="primary--text mt-3">
        <h2 class="text-center display-0"
           
        >
          {{ $t('log.welcome') }}
        </h2>
        <h5 class="text-center"
           
        >
          {{ $t('log.subtitle') }}
        </h5>
      </v-card-text>
      <div class="text-center">
          <button-action :step="1"></button-action>
      </div>
    </v-col>
    <v-col cols="12" md="8">
      <v-card-text class="mt-12">
        <h1 class="text-center display-5 teal--text primary--text"
           
        >
          {{ $t('log.title') }}
        </h1>
        <div class="text-center mt-4">
          <social-media-buttons></social-media-buttons>
        </div>
        <h4 v-if="!this.$store.state.AuthenticationProcesses.isErrorAuth" class="text-center mt-4"
           
        >
          Ingrese su correo para registrarse
        </h4>

        <log-form></log-form>
      
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script>
import SocialMediaButtons from '../SocialMediaButtons'
import ButtonAction from '../login/ButtonAction'
import PageLogo from '../PageLogo'
import LogForm from '../login/LogForm'
export default {
  name: 'PartialLogWindow',
  components: {
    ButtonAction,
    SocialMediaButtons,
    PageLogo,
    LogForm
  }
}
</script>
