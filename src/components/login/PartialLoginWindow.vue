<template>
    <v-row>
        <v-col cols="12" md="8">
            <v-card-text class="mt-12">
                <h1 class="text-center display-2 primary--text">
                    {{ $t('login.welcome') }}
                </h1>
                <social-media-buttons></social-media-buttons>
                <h4 class="text-center mlt-4">
                    {{ $t('login.subtitle') }}
                </h4>
                <login-form></login-form>
                <h4 class="text-center mt-3">{{ $t('login.forgotYourPassword') }}</h4>
            </v-card-text>
        </v-col>
        <v-col cols="12" md="4" class="yellow lighten-4">
            <page-logo :background="`#FFF9C4`"></page-logo>
            <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">

                </h1>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<script>
import SocialMediaButtons from '../SocialMediaButtons'
import LoginForm from '../login/LoginForm'
import PageLogo from '../PageLogo'
export default {
  name: 'PartialLoginWindow',
  components: {
    LoginForm,
    SocialMediaButtons,
    PageLogo
  },
  props: {
    source: String
  }
}
</script>
