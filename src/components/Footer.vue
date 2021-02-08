<template>
  <v-footer
    id="dashboard-footer"
  >
    <v-container>
      <v-row
        align="center"
      >

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          cols="12"
          md="12"
        >
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            &copy; 2021,
            <v-icon size="18">
              NutriKad Online
            </v-icon>
            by <a href="https://nutri-dental.com/nutrikad/">Nutrikad</a> Nutrición - Estilo de vida - Salud.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'DashboardFooter',

    data: () => ({
      links: [
        {
          href: '#',
          text: 'Creative Tim',
        },
        {
          href: '#',
          text: 'About Us',
        },
        {
          href: '#',
          text: 'Blog',
        },
        {
          href: '#',
          text: 'Licenses',
        },
      ],
    }),
  }
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
