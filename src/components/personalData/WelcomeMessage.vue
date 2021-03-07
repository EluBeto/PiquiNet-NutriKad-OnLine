<template>
  <div class="my-3 text-center">
    <v-card
      min-width="80%"
      color="#fafafa lighten-1"
      height="320px"
      class="scroll section section_dark ma-3 pa-3"
      elevation="4"
    >
    <v-progress-linear
        color="lime"
        indeterminate
        reverse
      ></v-progress-linear>
      <span v-html="this.welcomeMessage"></span>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'WelcomeMessage',
  data: () => ({
    welcomeMessage: `
        <h2 class="my-3"> ¡Gracias por tu confianza!</h2>
            <h3 class="my-3">
              <strong> Ya eres parte de NutriKad Online</strong>
            </h3>
            <p style="text-align: justify;">
              El propósito de tu consulta online es que logres adoptar hábitos alimenticios saludables, llevar una buena alimentación para así poder nutrir el cuerpo a nivel celular y
              que el cuerpo pueda realizar sus tareas de manera óptima, una desintoxicación natural, como también pérdida de grasa corporal.
            </p>
            <h3 align="left">
              <strong>Procedimiento:</strong>
            </h3>
            <p style="text-align: justify;">
              Será necesario contestar la siguiente información, te midas (cintura, pecho, y cadera),
              cómo también será necesario que cuentes con una báscula, para poder pesarte previo a tus consultas;
              esto con el propósito de contar con tu registro y poder evaluar tus avances gradualmente.
            </p>
            <ul>
              <li style="text-align: left;"> Puedes medirte con un metro o cinta metrica. Cuando estés haciendo la medición cerciórate que esté doblada y que este tensa sin estar apretando mucho el área a medir.</li>
              <li style="text-align: left;"> El área a medir siempre debe estar expuesta, debes estar de pie y derecho. No debes usar zapatos ni ropa pesada. (entre menos ropa mejor).</li>
              <li style="text-align: left;"> Cuando te midas trata que alguien te ayude a medirte, eso generará más precisión a la hora de la medición.</li>
            </ul>`
  })
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
.scroll {
   overflow-y: scroll
}
</style>
