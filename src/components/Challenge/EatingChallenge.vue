<template>
    <div>
        <v-row>
            <v-col md="12">
                <v-card
                    elevation="4"
                    height="150px"
                    class="scroll pa-5"
                    style="background-color: #f5f5f5;"
                >
                    <div class="my-5 text-justify">
                      <span v-html="message"></span>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card
                    elevation="4"
                    height="600"
                    class="scroll pa-5"
                    style="background-color: #f5f5f5;"
                >
                    <EatingTips></EatingTips>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import EatingTips from '../Challenge/EatingTips'
export default {
    name: 'EatingChallenge',
    components: {
        EatingTips
    },
    data: () => ({
        message: `
                <ul>
                    <li>
                        Trata de cocinar en un sartén anti-adherente la mayoría de las veces, y de esta manera <b>no necesitarás aceite para cocinar</b>.
                    </li>
                    <li>
                        Si crees necesitar un poco de aceite utiliza cantidades pequeñas de aceite de oliva o de aguacate.
                    </li>
                    <li>
                        Preferentemente de oliva para aderezar y de aguacate para cocinar.
                    </li>
                </ul>
                `
    })
}
</script>
