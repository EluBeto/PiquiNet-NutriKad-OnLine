import Vue from 'vue'
import VueI18n from 'vue-i18n'
const es = require('@/config/es-MX.json')
const en = require('@/config/en-US')

Vue.use(VueI18n)
var messages = {}
messages.es = es
messages.en = en

const i18n = new VueI18n({
  messages,
  locale: 'es'
})

export default i18n