<template>
    <v-dialog
      v-model="dialogs.isShowDialog"
      :width="dialogs.width"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
            {{ dialogs.card.title }}
        </v-card-title>
        <v-card-text>
            <p class="my-3" style="text-align: justify;">
                {{ dialogs.card.text }}
            </p>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="dialogs.card.cardActions.btnColor"
            text
            @click="sendActions(dialogs.card.cardActions.btnAction)"
          >
            {{
                dialogs.card.cardActions.btnTitle
            }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'Dialogs',
  props: {},
  data: () => ({}),
  computed: {
    dialogs() {
      return this.$store.getters['Dialogs/getDialog']
    }
  },
  methods: {
    sendActions(pathAction) {
        this.$store.state.Dialogs.isShowDialog = false
        this.$store.dispatch(pathAction)
    }
  }
}
</script>
