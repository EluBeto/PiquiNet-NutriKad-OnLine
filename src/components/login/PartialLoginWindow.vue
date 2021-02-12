<template>
    <v-row>
        <v-col cols="12" md="8">
            <v-card-text class="mt-12">
                <h1 class="text-center primary--text"
                     
                >
                    {{ $t('login.title') }}
                </h1>

                <social-media-buttons v-if="false"></social-media-buttons>
                
                <h4 class="text-center mlt-4 my-3"
                     v-if="!this.$store.state.AuthenticationProcesses.isErrorAuth"
                >
                    {{ $t('login.subtitle') }}
                </h4>
                
                <login-form></login-form>
                
                <h4 class="text-center mt-3 my-3"
                     
                >
                    {{ $t('login.forgotYourPassword') }}
                </h4>
            </v-card-text>
        </v-col>
        <v-col cols="12" md="4" class="yellow lighten-4 my-1">

            <page-logo></page-logo>
            
            <v-card-text class="primary--text mt-3">
                <h2 class="text-center mt-1"
                     
                >
                    {{ $t('login.welcome') }}
                </h2>
                <h5 class="text-center mt-1"
                     
                >
                    {{ $t('login.dontHaveAnAccount') }}
                </h5>
            </v-card-text>
            <div class="text-center">
                <button-action :step="2"></button-action>
            </div>
        </v-col>
    </v-row>
</template>

<script>
import SocialMediaButtons from '../SocialMediaButtons'
import LoginForm from '../login/LoginForm'
import ButtonAction from '../login/ButtonAction'
import PageLogo from '../PageLogo'
export default {
  name: 'PartialLoginWindow',
  components: {
    LoginForm,
    SocialMediaButtons,
    ButtonAction,
    PageLogo
  },
  data: () => ({})
}
</script>
