<template>
  <div class="text-center my-2" mt-4>
    <v-btn v-for="button in socialMediaButtons" 
          :key="button.name"
          class="mx-1" fab 
          :color="button.color" 
          outlined small>
        <v-icon>{{ button.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaButtons',
  data: () => ({
    socialMediaButtons: [
      {
        name: 'Facebook',
        icon: 'fab fa-facebook-f',
        color: 'facebook'
      },
      {
        name: 'Google',
        icon: 'fab fa-google-plus-g',
        color: 'google'
      }
    ]
  })
}
</script>
