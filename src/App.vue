<template>
  <component :is="layout"></component>
</template>

<script>
import { mapState } from 'vuex'
import LoginLayout from './components/layouts/Login'
import DefaultLayout from './components/layouts/Default'
export default {
  components: { LoginLayout, DefaultLayout },
  computed: mapState(['layout']),
  data: () => ({
    //
  })
}
</script>
