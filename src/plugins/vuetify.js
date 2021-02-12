import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.json'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.green.darken1,
            google: colors.red.darken1,
            facebook: colors.blue.darken3
          },
          dark: {
            primary: '#e60000'
          }
        }
      },
      lang: {
        locales: { es },
        current: 'es'
    },
    icons: {
        iconfont: 'md' || 'fa'
    }
});
