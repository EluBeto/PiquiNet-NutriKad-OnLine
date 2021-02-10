<template>
  <div>
    <v-stepper
     v-model="numberOfSteps"
     vertical
     v-if="!isRegisteredUser"
    >
 
     <v-stepper-step
      :complete="numberOfSteps > 1"
      step="1"
      class="display-5"
    >
      ¿Estas lista(o)?
      <small  >Comencemos..</small>
     </v-stepper-step>
 
     <v-stepper-content step="1">
      <div class="my-3 text-center">
        <v-card
          min-width="100%"
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
      <v-btn
        color="primary"
        @click="numberOfSteps = 2"
         
      >
        Siguiente
      </v-btn>
     </v-stepper-content>
 
     <v-stepper-step
      :complete="numberOfSteps > 2"
      step="2"
    >
      Ficha de identificación:
      <small  >Todos los campos son obligatorios</small>
     </v-stepper-step>
 
     <v-stepper-content step="2">
      <v-card
        min-width="100%"
        color="#fafafa lighten-1"
        height="250px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formIdentificationCard" v-model="validCard_2" lazy-validation>
        <v-container>
          <h3 class="text-center my-3">Ficha de identificación</h3>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="name"
                :rules="this.$store.state.rules.textRules"
                v-model="dataIdentificationCard.name"
                type="text"
                prepend-icon="mdi-account"
                label="Nombre"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="lastName"
                :rules="this.$store.state.rules.textRules"
                v-model="dataIdentificationCard.lastName"
                type="text"
                prepend-icon="mdi-account"
                label="Apellido Paterno"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="motherLastName"
                :rules="this.$store.state.rules.textRules"
                v-model="dataIdentificationCard.motherLastName"
                type="text"
                prepend-icon="mdi-account"
                label="Apellido Materno"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="dateOfBirth"
                :rules="this.$store.state.rules.dateRules"
                v-model="dataIdentificationCard.dateOfBirth"
                prepend-icon="mdi-calendar"
                type="date"
                label="Fecha de nacimiento"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="age"
                :rules="this.$store.state.rules.numberRules"
                v-model="dataIdentificationCard.age"
                prepend-icon="mdi-account"
                type="number"
                label="Edad"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="phoneNumber"
                :rules="this.$store.state.rules.phoneRules"
                v-model="dataIdentificationCard.phoneNumber"
                prepend-icon="mdi-phone"
                type="number"
                label="Número de celular"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-switch
                key="gender"
                v-model="dataIdentificationCard.gender"
                label="¿Eres mujer?"
              ></v-switch>
            </v-col>
          </v-row>
        </v-container>
        </v-form>
      </v-card>
      <v-btn
        color="primary"
        @click="validateIdentificationCard"
        :disabled="!validCard_2"
      >
        Siguiente
      </v-btn>
      <v-btn text
        @click="numberOfSteps = 1"
      >
        Regresar
      </v-btn>
     </v-stepper-content>
 
     <v-stepper-step
      :complete="numberOfSteps > 3"
      step="3"
    >
      Historia clínica básica:
      <small  >Todos los campos son obligatorios</small>
     </v-stepper-step>
 
     <v-stepper-content step="3">
      <v-card
        min-width="100%"
        color="#fafafa lighten-1"
        height="380px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formClinicHistory" v-model="validCard_3" lazy-validation>
        <v-container>
          <h3 class="text-center my-3">Historia clínica básica</h3>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-expansion-panels class="mb-6 my-2">
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Tip’s para pesarte
                    <template v-slot:actions>
                      <v-icon color="primary">
                        mdi-alert-circle
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p style="text-align: justify;">
                      La báscula debe estar sobre piso sin pendiente. La medición se hace cuando marca más de 
                      cinco segundos el mismo peso.
  
                      Tus pies no deben de salir de la superficie de la bascula, párate derecho, sin flexionar 
                      las piernas, no te recargues en nada, voltea al frente, con tus brazos al costado, 
                      no te muevas.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="actualWeight"
                :rules="this.$store.state.rules.weightRules"
                v-model="clinicHistory.actualWeight"
                type="text"
                prepend-icon="mdi-account"
                label="Peso actual (kg)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-expansion-panels class="mb-6 my-2">
                <v-expansion-panel>
                  <v-expansion-panel-header disable-icon-rotate>
                    Tip’s para obtener tu estatura
                    <template v-slot:actions>
                      <v-icon color="primary">
                        mdi-alert-circle
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p style="text-align: justify;">
                      Colócate de espaldas a la pared con tus talones unidos, tus piernas rectas y los hombros relajados, 
                      tu mentón no debe de estar levantado. Párate derecho, alguien debe de presionar tu cabello para hacer 
                      la medición más precisa sobre la pared.
                    </p>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                key="height"
                :rules="this.$store.state.rules.weightRules"
                v-model="clinicHistory.height"
                type="text"
                prepend-icon="mdi-ruler"
                label="Estatura (cm)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <h3 class="text-center my-3">Medidas antropométricas</h3>
          <v-divider></v-divider>
          <v-row class="my-2">
             <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="waist"
                :rules="this.$store.state.rules.weightRules"
                v-model="clinicHistory.measurements.waist"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cintura (a la altura del ombligo)"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="chest"
                :rules="this.$store.state.rules.weightRules"
                v-model="clinicHistory.measurements.chest"
                type="text"
                prepend-icon="mdi-ruler"
                label="Pecho"
                color="primary"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                key="hip"
                :rules="this.$store.state.rules.weightRules"
                v-model="clinicHistory.measurements.hip"
                type="text"
                prepend-icon="mdi-ruler"
                label="Cadera"
                color="primary"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <div v-if="dataIdentificationCard.gender">
            <h3 class="text-center my-3">Un par de preguntas más</h3>
            <v-divider></v-divider>
            <v-row class="my-2">
               <v-col cols="12" sm="6" md="4">
                <v-switch
                  key="isPregnant"
                  v-model="clinicHistory.measurements.isPregnant"
                  label="¿Estás embarazada?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-switch
                  key="isBreastfeeding"
                  v-model="clinicHistory.measurements.isBreastfeeding"
                  label="¿Estas en periodo de lactancia materna?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  key="monthsPostpartum"
                  v-model="clinicHistory.measurements.monthsPostpartum"
                  type="number"
                  prepend-icon="mdi-account-child-circle"
                  label="¿Cuántos meses postparto tienes?"
                  color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-form>
      </v-card>
      <v-btn
        color="primary"
        @click="validateClinicHistory"
      >
        Siguiente
      </v-btn>
      <v-btn text
        @click="numberOfSteps = 2"
      >
        Regresar
      </v-btn>
     </v-stepper-content>
 
     <v-stepper-step
      :complete="numberOfSteps > 4"
      step="4"
    >
      Alergias o Intolerancias:
     </v-stepper-step>
 
     <v-stepper-content step="4">
      <v-card
        min-width="100%"
        color="#fafafa lighten-1"
        height="380px"
        class="scroll section section_dark ma-3 pa-3"
        elevation="4"
      >
        <v-form ref="formAllergiesIntolerances" v-model="validCard_4" lazy-validation>
        <v-container>
          <h3 class="text-center my-3">Alergias o Intolerancias</h3>
          <v-divider></v-divider>
          <v-row class="my-2">
               <v-col cols="12" sm="6" md="6">
                <v-switch
                  key="isHeadach"
                  v-model="clinicHistory.allergiesIntolerance.isHeadach"
                  label="¿Sufres dolores de cabeza o mareos durante el día?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-switch
                  key="isBadDigestion"
                  v-model="clinicHistory.allergiesIntolerance.isBadDigestion"
                  label="¿Sufres de estreñimiento o mala digestión?"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row class="my-2">
              <v-col cols="12" sm="6" md="6">
                <v-switch
                  key="isReflux"
                  v-model="clinicHistory.allergiesIntolerance.isReflux"
                  label="¿Presentas episodios de reflujo gastroesofagico al dormir o al despertar?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-switch
                  key="isBeMedical"
                  v-model="clinicHistory.allergiesIntolerance.isBeMedical"
                  label="¿Tomas algún medicamento, el cuál te implique llevar una alimentación especifica?"
                ></v-switch>
              </v-col>
            </v-row>
            <v-row class="my-2">
              <v-col cols="12" sm="6" md="4">
                <v-switch
                  key="isActivePerson"
                  v-model="clinicHistory.allergiesIntolerance.isActivePerson"
                  label="¿Realizas algún tipo de actividad física?"
                ></v-switch>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                v-if="clinicHistory.allergiesIntolerance.isActivePerson"
              >
                <v-text-field
                  key="responseActivePersonTime"
                  v-model="clinicHistory.allergiesIntolerance.responseActivePersonTime"
                  type="time"
                  prepend-icon="mdi-arm-flex-outline"
                  label="Tiempo"
                  color="primary"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"
                v-if="clinicHistory.allergiesIntolerance.isActivePerson"
              >
                <v-text-field
                  key="responseActivePersonTypeExercise"
                  v-model="clinicHistory.allergiesIntolerance.responseActivePersonTypeExercise"
                  type="text"
                  prepend-icon="mdi-arm-flex-outline"
                  label="Ejercicio"
                  color="primary"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <p style="text-align: center;">
                    <b>*Este Plan Nutricional está diseñado para personas sanas*</b>
                  </p>
                  <p style="text-align: justify;">
                    (si estas diagnosticado con diabetes mellitus tipo II, Hipertensión, Insuficiencia renal, cáncer, bulimia, 
                    anorexia, enfermedades del corazón, enfermedades del higado por favor especificalo ya que lo sugerido será 
                    que acudas a consulta personalizada en caso de presentar alguna enfermedad diagnosticada medicamente)
                  </p>
              </v-col>
            </v-row>
        </v-container>
      </v-form>
      </v-card>
      <v-btn
        color="primary"
        @click="vaidateAllergiesIntolerances"
      >
        Siguiente
      </v-btn>
      <v-btn text>
        Cancelar
      </v-btn>
     </v-stepper-content>
 
     <v-stepper-step step="5">
      Importante:
     </v-stepper-step>
     <v-stepper-content step="5">
      <v-card
        min-width="100%"
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
        <v-form v-model="validCard_5" lazy-validation>
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
      <v-btn
          color="primary"
          @click="aceptConditions"
          :disabled="loading"
          :loading="loading"
      >
            Enviar Registro
          </v-btn>
      <v-btn text
        @click="cancelRegistration"
      >
        Cancelar
      </v-btn>
     </v-stepper-content>
 
     <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >

        <v-card>
          <v-card-title class="headline grey lighten-2">
            {{ !isCancel ? 'Consentimiento' : 'Cancelar Registro' }}
          </v-card-title>

          <v-card-text>
            {{
              !isCancel ? 
              `Por este acto se permite informar que el/la persona hace constar en este documento que la información 
            proporcionada por la Nutrióloga tratante, le es suficiente para tomar su decisión sobre el consentimiento solicitado y 
            la vez manifiesta libremente al acceder y aceptar este reto; mismo que es totalmente responsable al decidir continuar este plan nutricional, como también lo es de su salud.`
            :
            `¿Estas segu@ de que quieres cancera tu registro?, perderás todo lo que ingresaste en todas las secciones.`
            }}
            
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="finishRegistration"
            >
              {{ !isCancel ? 'Acepto' : 'Salir' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
     </div>
  </v-stepper>
  <v-row>
    <v-col cols="12" sm="12" md="12">
      <v-divider></v-divider>
      <h1 class="text-center">
        {{
          fullName
        }}
      </h1>
      <template v-if="isRegisteredUser" class="text-center">
        <v-img
          :aspect-ratio="16/9"
          width="auto"
          :src="showImage"
        ></v-img>
      </template>
    </v-col>
  </v-row>

  <v-snackbar
      v-model="errorRegister"
      :multi-line="multiLine"
    >
      Ups! Algo salio mal, intenta nuevamente.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrrar
        </v-btn>
      </template>
  </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'Wizard',
  data () {
    return {
      isRegisteredUser: false,
      validCard_2: false,
      validCard_3: false,
      validCard_4: false,
      validCard_5: false,
      numberOfSteps: 1,
      welcomeMessage: `
        <h2 class="my-3"> ¡Muchísimas felicidades!</h2>
            <h3 class="my-3">
              <strong> Ya eres parte del Reto Ponte Fit y Gana Salud con NutriKad </strong>
            </h3>
            <p style="text-align: justify;">
              El propósito de este reto es adoptar hábitos alimenticios saludables, llevar una buena alimentación para así poder nutrir el cuerpo a nivel celular y 
              que el cuerpo pueda realizar sus tareas de manera óptima, una desintoxicación natural, como también pérdida de grasa corporal.
            </p>
            <h3 align="left">
              <strong>Procedimiento:</strong>
            </h3>
            <p style="text-align: justify;">
              Será necesario contestar la siguiente información a más tardar el día 10 de febrero, y que semanalmente te midas (cintura, pecho, y cadera), 
              cómo también será necesario que cuentes con una báscula, para poder pesarte 1 vez por semana; 
              esto con el propósito de que al final el reto puedas compartir tus avances con los demás participantes, y veas tus avances gradualmente. 
            </p>
            <ul>
              <li style="text-align: left;"> Puedes medirte con un metro o cinta metrica. Cuando estés haciendo la medición cerciórate que esté doblada y que este tensa sin estar apretando mucho el área a medir.</li>
              <li style="text-align: left;"> El área a medir siempre debe estar expuesta, debes estar de pie y derecho. No debes usar zapatos ni ropa pesada. (entre menos ropa mejor).</li>
              <li style="text-align: left;"> Cuando te midas trata que alguien te ayude a medirte, eso generará más precisión a la hora de la medición.</li>
            </ul>`,
      dataIdentificationCard: {
        name: '',
        lastName: '',
        motherLastName: '',
        dateOfBirth: '',
        age: '',
        gender: false,
        phoneNumber: ''
      },
      clinicHistory: {
        actualWeight: '',
        height: null,
        measurements: {
          waist: null,
          chest: null,
          hip: null
        },
        isPregnant: '',
        isBreastfeeding: '',
        monthsPostpartum: 0,
        allergiesIntolerance: {
          isHeadach: false,
          isBadDigestion: false,
          isReflux: false,
          isActivePerson: false,
          responseActivePersonTime: '',
          responseActivePersonTypeExercise: '',
          isBeMedical: false
        }
      },
      dialog: false,
      isCancel: false,
      loading: false,
      errorRegister: false,
      multiLine: true,
      fullName: ''
    }
  },
  computed: {
    showImage() {
      if (this.dataIdentificationCard.gender) {
        return '/img/registro.jpg'
      } else {
        return '/img/registro-h.jpg'
      }
    }
  },
  methods: {
    validateIdentificationCard() {
      if (this.$refs.formIdentificationCard.validate()) {
        this.numberOfSteps = 3
        this.validCard_2 = false
      } else {
        this.validCard_2 = true
      }
    },
    validateClinicHistory() {
      if (this.$refs.formClinicHistory.validate()) {
        this.numberOfSteps = 4
        this.validCard_2 = false
      } else {
        this.validCard_2 = true
      }
    },
    vaidateAllergiesIntolerances() {
      this.numberOfSteps = 5
      this.validCard_4 = false
    },
    async finishRegistration() {
      if (!this.isCancel) {
        this.dialog = false
        this.loading = true
        this.$store.dispatch('register', {
          dataIdentificationCard: this.dataIdentificationCard,
          clinicHistory: this.clinicHistory,
          isRegisteredUser: true
        })
        .then(response => {
          if (response.error) {
            this.errorRegister = true
            this.isRegisteredUser = false
          } else {
            window.localStorage.setItem('isRegister', true)
            this.isRegisteredUser = true
          }
          this.loading = false
        })
      } else {
        this.dialog = false
        this.resetRegistration()
      }
    },
    aceptConditions() {
      this.dialog = true
      this.isCancel = false
    },
    cancelRegistration() {
      this.dialog = true
      this.isCancel = true
    },
    resetRegistration() {
      this.numberOfSteps = 1
      this.isCancel = false
      this.dialog = false
      this.$refs.formClinicHistory.reset()
      this.$refs.formIdentificationCard.reset()
      this.$refs.formAllergiesIntolerances.reset()
      this.validCard_2 = false
      this.validCard_3 = false
      this.validCard_4 = false
      this.validCard_5 = false
    },
    async getDataUser(dataLocalStg) {
      this.$store.dispatch('getDataUser', {
         localId: dataLocalStg.localId,
         idToken: dataLocalStg.idToken,
         id: dataLocalStg.id
      })
      .then(response => {
        if (!response.error) {
          this.dataIdentificationCard.gender = response.dataIdentificationCard.gender
          this.isRegisteredUser = response.isRegisteredUser
          this.fullName = `${response.dataIdentificationCard.name} 
                          ${response.dataIdentificationCard.lastName} 
                          ${response.dataIdentificationCard.motherLastName}`
        }
      })
    }
  },
  created(){
    if (window.localStorage.getItem("isRegister") != null) {
      let register = JSON.parse(localStorage.getItem('isRegister'))
      this.isRegisteredUser = register
    }

    if (window.localStorage.getItem("user") != null) {
      const user = JSON.parse(window.localStorage.getItem("user"))
      this.$store.dispatch('getRegister', {
         localId: user.localId,
         idToken: user.idToken
      })
      .then(response => {
        if (!response.error) {
          if (response.isRegisteredUser) {
            this.dataIdentificationCard.gender = response.dataIdentificationCard.gender
            this.isRegisteredUser = response.isRegisteredUser
            this.fullName = `${response.dataIdentificationCard.name} 
                          ${response.dataIdentificationCard.lastName} 
                          ${response.dataIdentificationCard.motherLastName}`
          } else {
            for(let id in response) {
              if (id != null) {
                this.getDataUser({
                  localId: user.localId,
                  idToken: user.idToken,
                  id: id
                })
              }
            }
          }
        } else {
          this.$router.push('/')
        }
      })
    } else {
      this.$router.push('/')
    }
  }
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
