<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
        v-for="tip in eatingTips"
        :key="tip.id"
        :color="tip.color"
        fill-dot
        :right="tip.isRight"
    >
      <v-card elevation="1">
        <v-card-title :class="tip.classCardTitle">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            {{
              tip.icon  
            }}
          </v-icon>
          <h2 :class="tip.classH2">
            {{
                tip.title
            }}
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
                <span class="my- text-justify"
                    v-html="tip.description"
                ></span>
            </v-col>
            <v-col
              :class="tip.classCol"
              md="2"
            >
              <v-icon size="64">
                {{
                    tip.iconTwo
                }}
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
    name: 'EatingTips',
    data: () => ({
        eatingTips: []
    }),
    created() {
        this.eatingTips = [
            {
                id: 1,
                classCardTitle: 'purple lighten-2',
                color: 'purple lighten-2',
                classH2: 'display-2 white--text font-weight-medium',
                isDark: true,
                isRight: true,
                isLeft: false,
                isFilldot: true,
                icon: 'mdi-food-apple',
                isSmall: false,
                classCol: 'hidden-sm-and-down text-right',
                classIcon:'',
                iconTwo: 'mdi-account-question',
                title: '¿Ansiedad?',
                description: `
                                <ol>
                                    <li>
                                        Lávate los dientes después de comer.
                                    </li>
                                    <li>
                                        Tómate 1 vaso de agua natural.
                                    </li>
                                    <li>
                                        Aléjate de la cocina.
                                    </li>
                                    <li>
                                        Toma alguna bebida caliente, esta ayuda a disminuir los niveles de ansiedad.
                                        </br>
                                        <i><small>Ej. Té verde o Té de manzanilla o Té de menta o Café negro.</small></i> 
                                    </li>
                                    <li>
                                        Si la ansiedad continúa, cómete 2-3 cuadritos de chocolate obscuro +70 % cacao 
                                        + 10 almendras <b><u>únicamente si lo crees necesario</u></b>. 
                                    </li>
                                    <li>
                                        Analiza y busca la raíz de esta ansiedad.
                                    </li>
                                </ol>
                        `
            },
            {
                id: 2,
                classCardTitle: 'cyan lighten-1 justify-end',
                color: 'cyan lighten-1',
                classH2: 'display-2 mr-4 white--text font-weight-medium',
                isDark: true,
                isRight: false,
                isLeft: true,
                isFilldot: true,
                icon: 'mdi-food-apple',
                isSmall: true,
                classCol: 'hidden-sm-and-down',
                classIcon:'mr-4',
                iconTwo: 'mdi-account-question',
                title: '¿Hambre?',
                description: `
                            <b> No olvides tomar agua:</b> 
                            <i>la sed se confunde con hambre.</i>

                            </br>
                            Consume verduras libremente con excepción de betabel, zanahoria 
                            </br>
                            <i>(por se de indice glucemico alto, mayor cantidad de azúcar por naruraleza).</i>
                            </br>
                            </br>
                            <ul>
                                <li>
                                    <small><i>Ej. Ensalada de nopal + cebolla + jitomate. </i></small>
                                </li>
                                <li>
                                    <small><i>Ej. Pepino + jícama + toque de limón (remoja la jícama con agua potable al menos 2 horas para reducir la cantidad de almidón). </i></small>
                                </li>
                                <li>
                                    <small><i>Ej. Ensalada de espinaca + pepino + jitomate aderezada con limón.</i></small>
                                </li>
                            </ul>         
                `
            },
            {
                id: 3,
                classCardTitle: 'green lighten-2',
                color: 'green lighten-2',
                classH2: 'display-1 white--text font-weight-medium',
                isDark: true,
                isRight: true,
                isLeft: false,
                isFilldot: true,
                icon: 'mdi-food-apple',
                isSmall: false,
                classCol: 'hidden-sm-and-down text-right',
                classIcon:'',
                iconTwo: 'mdi-account-question',
                title: '¿Cómo diferenciar hambre o ansiedad? ',
                description: `
                        <ol>
                            <li>
                                <big><b>E</b></big>l 
                                <b><i>hambr física</i></b> se presenta poco a poco, es decir aumenta gradualmente, 
                                son señales de que tu cuerpo necesita energía/nutrientes en forma de alimento. 
                                </br>
                                El hambre física se siente en el estómago. Cuando hay hambre física solemos 
                                dejar de comer cuando estamos satisfechos, es decir comemos mas consientes. 
                            </li>
                            <br>
                            <li>
                                <big><b>E</b></big>l
                                <b><i>hambr emocional</i></b> o la ansiedad se presenta súbitamente, y por lo general es 
                                hacia ciertos tipos de alimentos. Se caracteriza por comer descontroladamente. 
                                </br>
                                El hambre emocional se siente en el cuello o garganta, NO en el estómago. 
                                Cuando hay hambre emocional solemos comer en exceso y sentir culpabilidad al final.
                            </li>
                        </ol>
                    `
            }
        ]
    }
}
</script>
