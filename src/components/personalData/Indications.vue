<template>
    <v-card
        min-width="80%"
        color="#fafafa lighten-1"
        height="380px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
    >
        <v-progress-linear
            color="lime"
            indeterminate
            reverse
        ></v-progress-linear>
            <v-form lazy-validation>
                <v-container>
                  <h3 class="text-center my-3">Importante</h3>
                  <v-divider></v-divider>
                  <v-row class="my-2">
                       <v-col cols="12" sm="12" md="12">
                        <ul>
                          <li style="text-align: left;">
                            Recibirás el Plan Nutricional a más tardar el día 12 de febrero, siempre y cuando hayas 
                            contestado esta información en la fecha que se indica.
                          </li>
                          <li style="text-align: left;">
                            Es necesario agregarme a Facebook “Nutriologa Karina Arteaga” para poder agregarte al grupo de apoyo a más tardar el 
                            día 12 de febrero.
                          </li>
                          <li style="text-align: left;">
                            Cada semana todos los participantes podrán compartir sus avances (de manera opcional), ya sean físicos, mentales, o emocionales.
                          </li>
                        </ul>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <h3 class="text-center my-3">Concurso</h3>
                    <v-divider></v-divider>
                    <v-row class="my-2">
                         <v-col cols="12" sm="12" md="12">
                          <ul>
                            <li style="text-align: left;">
                              Participa para ganarte 1 consulta personalizada posterior al reto (valor de 800 pesos, incluye bioimpedancia con equipo de 
                              grado médico, plan de alimentación y 1 recetario sorpresa)
                              <ul>
                                <li>
                                  Paso 1: Es necesario que envíes una foto de frente y de perfil antes del 12 de febrero. Deberas enviarlas por whatsApp de forma personal.
                                </li>
                                <li>
                                  Paso 2: Es necesario que envíes una foto de frente y de perfil a más tardar el día 5 de marzo. Deberas enviarlas por whatsApp de forma personal.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <h3 class="text-center my-3">Sugerencias Consurso</h3>
                    <v-divider></v-divider>
                    <v-row class="my-2">
                         <v-col cols="12" sm="12" md="12">
                          <ul>
                            <li style="text-align: left;">
                              Tomar la foto con la misma ropa, misma cámara, y mismo ángulo.
                            </li>
                            <li style="text-align: left;">
                              Tomar la foto a la misma hora del día y con la misma luz.
                            </li>
                            <li style="text-align: left;">
                              Se recomienda tomar la foto en traje de baño, ropa para hacer ejercicio ya sea top o camiseta pegada (no color negro).
                            </li>
                            <li style="text-align: left;">
                              Puedes omitir o cortar tu cara.
                              <ul>
                                <li>
                                  Estas fotos serán utilizadas como testimonio para los siguientes retos.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
      </v-card>
</template>

<script>
export default {
    name: 'Indications'
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
