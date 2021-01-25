<template>
  <v-img
    src="@/assets/img/logo-nutrikad.png"
    :style="`width: 8rem; background-color: ${background}`"
    class="ma-auto my-1"
  ></v-img>
</template>

<script>
export default {
  name: 'PageLogo',
  props: ['background']
}
</script>
