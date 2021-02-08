<template>
  <v-btn rounded 
         outlined=""
         dark
         color="black"
         class="my-2"
         @click="setStep"
         :style="this.$store.state.font"
  >
    {{ 
      step === 2 ? $t('login.requestAccount')
                 : $t('log.enterPartial')
    }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonAction',
  props: {
    step: {}
  },
  data: () => ({}),
  methods: {
    setStep() {
      this.$store.dispatch('setStep', this.step)
    }
  },
  computed: {}
}
</script>
