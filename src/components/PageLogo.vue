<template>
  <v-img
    src="@/assets/img/logo-nutrikad.png"
    :style="`width: 4rem; background-color: ${background}`"
    class="ma-auto my-2"
  ></v-img>
</template>

<script>
export default {
  name: 'PageLogo',
  props: ['background']
}
</script>
