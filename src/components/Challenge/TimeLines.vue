<template>
  <v-card
    elevation="0"
    height="400px"
    class="scroll pa-0"
    >
    <v-timeline
      :reverse="reverse"
      dense
    >
      <v-timeline-item
        v-for="question in questions"
        :key="question.id"
      >
        <v-card class="elevation-1">
          <v-card-title class="headline">
            {{
                question.title
            }}
          </v-card-title>
          <v-card-text class="my-9 text-justify">
              <span v-html="question.description"></span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
  export default {
    name: 'TimesLines',
    data: () => ({
      reverse: false,
        questions: [
          {
            id: 2,
            title: 'Al despertar toma 1-2 vasos de agua natural',
            description: `
            
            `
          },
          {
            id: 3,
            title: 'Acompaña tus mañanas de 1 taza de agua tibia + 1⁄2 limón ',
            description: `
                <ol>
                    <li>
                        Alcaliniza tu cuerpo, y refuerza tu sistema inmunológico
                    </li>
                    <li>
                        Si tienes tiempo agrega 1 jugo verde 20 min. antes de tu desayuno 
                    </li>
                </ol>
                </br>
                (ver recetario de jugos) 
            `
          },
          {
            id: 4,
            title: 'Actividad física si buscas perder peso y grasa: ',
            description: `
                <ul>
                    <li>
                        Ejercicio cardiovascular 40 min. 5X semana.
                    </li>
                    <li>
                        Ejercicio de resistencia 30 min. 3X semana.
                    </li>
                </ul>
            `
          },
          {
            id: 5,
            title: 'Actividad física si buscas mantenerte: ',
            description: `
                <ul>
                    <li>
                        Ejercicio cardiovascular 30 min. 3X semana 
                    </li>
                    <li>
                        Ejercicio de resistencia 30 min. 3X semana
                    </li>
                </ul>
                </br>
                    <b>Cardiovascular</b>: caminar, spinning, correr, trotar, elíptica, caminar, bailar, box, etc…
                </br>
                    <b>Resistencia</b>: pesas, peso muerto, máquinas, pilates, planchas, yoga, etc ...
            `
          },
          {
            id: 6,
            title: 'Tomar de 2-3 L de agua al día ',
            description: `
                <ul>
                    <li>
                        2 L durante el día + 1 L de agua por hora de actividad física 
                    </li>
                </ul>
            `
          },
          {
            id: 7,
            title: 'Alimentos que se deben evitar durante el Reto Ponte Fit y gana Salud con Nutrikad ',
            description: `
                <ul>
                    <li>
                        <b>NO</b> café con azúcar (únicamente café negro + con toque leche de almendras o coco 
                    </li>
                    <li>
                        <b>NO</b> alcohol 
                    </li>
                    <li>
                        <b>NO</b> tabaco 
                    </li>
                    <li>
                        <b>NO</b> alimentos procesados, industrializados, o altamente contaminados.
                    </li>
                </ul>
            `
          }
        ]
    }),
  }
</script>
