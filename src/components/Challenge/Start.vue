<template>
  <v-card
    elevation="4"
    height="250px"
    class="scroll pa-5"
    style="background-color: #f5f5f5;"
  >
    <div class="my-5 text-justify">
      <span v-html="message"></span>
    </div>
  </v-card>
</template>

<script>
export default {
    name: 'Start',
    components: {},
    data: () => ({
        message: `
        <h3>Información importante</h3>
        <br>
        Este reto se creó con el fin de poder ayudar a un mayor número de personas con un cambio de hábitos que sea benéfico para la salud. 
        Una buena alimentación ayuda a la prevención de enfermedades crónicas, como también beneficia a una óptima función del cuerpo. 
        
        Está científicamente comprobado que una alimentación a base de alimentos enteros, es decir, que no pasan por un proceso de refinación o simplemente procesados, 
        son benéficos para la salud en general. 
        </br>
        </hr>
        </br>
        Una alimentación limpia o entera, te ayudará a cumplir con las necesidades diarias que necesita el organismo para funcionar de una manera óptima, 
        como también a la desintoxicación natural de este mismo.
        </br>
        Es importante que sepas que el cuerpo es una máquina perfecta el cual está diseñado para la desintoxicación natural de este mismo a través de nuestra piel, hígado, riñón, 
        sistema linfático, y sistema digestivo.
        La alimentación sin duda es un factor esencial para que el cuerpo pueda realizar sus tareas, entre ellas la desintoxicación natural.
        </br>
        </br>
        
        <h4>¿Qué es una alimentación limpia? </h4>
        Una alimentación a base de alimentos enteros, reales, no procesados o industrializados. Esta alimentación evita en su mayoría alimentos que han sido altamente manipulados por el hombre, con el fin de darle al cuerpo una alimentación consciente y así poder nutrir el cuerpo a nivel celular. 
        `
    })
}
</script>

