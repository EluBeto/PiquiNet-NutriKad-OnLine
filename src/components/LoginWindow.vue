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
            <v-img
                src="@/assets/img/logo-nutrikad.png"
                style="width: 4rem; background-color: #FFF9C4"
                class="ma-auto my-2"
            ></v-img>
            <v-card-text class="white--text mt-12">
                <h1 class="text-center display-1">

                </h1>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<script>
import SocialMediaButtons from './SocialMediaButtons'
import LoginForm from './LoginForm'
export default {
  name: 'LoginWindow',
  components: {
    LoginForm,
    SocialMediaButtons
  },
  props: {
    source: String
  }
}
</script>
