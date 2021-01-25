import { title } from './src/settings.js'
const pageTitle = title 
export default {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    name: pageTitle
  }
}