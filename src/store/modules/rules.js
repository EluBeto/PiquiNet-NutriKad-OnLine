export default {
    namespaced: true,
    state: {
        emailRules: [
          v => !!v || 'E-mail es obligarorio',
          v => /.+@.+\...+/.test(v) || 'E-mail no es válido'
        ],
        passwordRules: [
          v =>
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20}$/.test(v) ||
            'Introduce al menos 8 caracteres, 1 Mayúscula, 1 Minúscula y 1 Número'
        ],
        textRules: [
          v => !!v || 'Campo obligarorio',
          v =>
            /^(?=.*[a-zA-Z]).{3,100}$/.test(v) ||
            'Al parecer tienes un nombre muy corto'
        ],
        dateRules: [
          v => !!v || 'Campo obligarorio'
        ],
        numberRules: [
          v => !!v || 'Campo obligarorio',
          v =>
            /^(?=.*[0-9]).{1,2}$/.test(v) ||
            'Tu edad es incorrecta'
        ],
        phoneRules: [
          v => !!v || 'Campo obligarorio',
          v =>
            /^(?=.*[0-9]).{10,10}$/.test(v) ||
            'Tu número celular es incorrecto'
        ],
        weightRules: [
          v => !!v || 'Campo obligarorio',
          v =>
            /^(0|[1-9]\d*)(.\d+)?$/.test(v) ||
            "El valor que ingresaste es incorrecto, solo se permiten números"
        ]
    },
    getters: {
      getRules(state) {
        return state
      }
    }
}