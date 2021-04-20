<template>
  <v-row class="text-center; ma-5">
    <v-col cols="12" sm="4" md="4"></v-col>
    <v-col cols="12" sm="4" md="4">
      <v-card>
        <v-carousel
            cycle
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
            :show-arrows="false"
            style="max-width: 100%;"
        >
          <v-carousel-item
              v-for="(item,i) in itemsImgs"
              :key="i"
              :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <br>
        <p class="subtitle-3 text-center">
          Registrate y aparta tu lugar.
        </p>
        <v-card-text>
          <validation-observer
              ref="observer"
              v-slot="{ invalid }"
          >
            <form @submit.prevent="submit">
              <validation-provider
                  v-slot="{ errors }"
                  name="Nombre"
                  rules="required|max:10"
              >
                <v-text-field
                    v-model="name"
                    :counter="10"
                    :error-messages="errors"
                    label="Nombre"
                    required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="Telefono"
                  :rules="{
                    required: true,
                    digits: 10,
                    regex: '^[0-9]{10}$'
                  }"
              >
                <v-text-field
                    v-model="phoneNumber"
                    :counter="10"
                    :error-messages="errors"
                    label="Teléfono de contacto"
                    maxlength="10"
                    required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
              >
                <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Correo electronico"
                    required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="reto"
                  rules="required"
              >
                <v-select
                    v-model="select"
                    :items="items"
                    :error-messages="errors"
                    label="Tipo de Reto"
                    data-vv-name="select"
                    required
                ></v-select>
              </validation-provider>

              <v-btn
                  block
                  class="primary"
                  type="submit"
                  :disabled="invalid"
              >
                Enviar
              </v-btn>
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" md="4"></v-col>
    <v-dialog
        v-model="dialog"
        persistent
        width="300"
    >
      <v-card
          color="primary"
          dark
      >
        <v-card-text>
          Estamos procesando tu solicitud.
          <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: 'El {_field_} debe tener {length} dígitos. ({_value_})',
})

extend('required', {
  ...required,
  message: 'El {_field_} no puede estar vacío',
})

extend('max', {
  ...max,
  message: 'El {_field_} no puede tener más de {length} caracteres',
})

extend('regex', {
  ...regex,
  message: 'El {_field_} {_value_} no coincide {regex}',
})

extend('email', {
  ...email,
  message: 'El email debe ser válido',
})

export default {
  name: "Register",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    dialog: false,
    snackbar: false,
    text: 'Tu registro fue enviado de manera exitosa.',
    timeout: 4000,
    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    items: [
      '15 Días',
      '21 Días'
    ],
    itemsImgs: [
      {
        src: '/img/reto2.0-1.jpeg',
      },
      {
        src: '/img/reto2.0-2.jpeg',
      },
      {
        src: '/img/reto2.0-3.jpeg',
      },
      {
        src: '/img/reto2.0-4.jpeg',
      },
      {
        src: '/img/reto2.0-5.jpeg',
      },
      {
        src: '/img/reto2.0-6.jpeg',
      }
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.observer.validate()) {
        this.dialog = true
        this.$store.dispatch('PersonalData/sendRegisterInformation', {
          name: this.name,
          phoneNumber: this.phoneNumber,
          email: this.email,
          select: this.select
        }).then(resp => {
          if (resp.name.length >= 1) {
            setTimeout(() => {
              this.clear()
              this.dialog = false
              this.snackbar = true
            }, 3000)
          }
        })
      }
    },
    clear () {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.select = null
      this.$refs.observer.reset()
    }
  },
  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    }
  }
}
</script>

<style scoped>
html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
</style>
