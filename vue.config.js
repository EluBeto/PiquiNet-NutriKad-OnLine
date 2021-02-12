const defaultSettings = require('./src/settings.js')
const pageTitle = defaultSettings.title
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    name: pageTitle
  }
}