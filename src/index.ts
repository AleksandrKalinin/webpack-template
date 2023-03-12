import { createApp } from 'vue'
import VueApollo from 'vue-apollo'
import 'vuetify/styles' // eslint-disable-line
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi' // eslint-disable-line
import * as components from 'vuetify/components' // eslint-disable-line
import * as directives from 'vuetify/directives' // eslint-disable-line
import { createI18n } from 'vue-i18n'
import router from './router'
import App from './App.vue'
import { apolloClient } from './apollo'

const i18n = createI18n({
  // something vue-i18n options here ...
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const VueApp = createApp(App)

VueApp.use(apolloProvider)
  .use(vuetify)
  .use(i18n)
  .use(router)
  .mount('#root')
