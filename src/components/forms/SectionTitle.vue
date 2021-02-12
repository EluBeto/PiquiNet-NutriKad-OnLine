<template>
    <section class="mb-1 text-center mt-3">
    <h1
      class="mb-1 headline"
      v-text="`${titleParameters.title}`"
    />

    <span
      class="font-weight-light subtitle-1"
    >
      {{ titleParameters.subtitle }}
    </span>
  </section>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        titleParameters: {}
    }
}
</script>

<style scoped>
  .v-application .headline {
    font-size: 2.0625rem !important;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
  }
</style>
