import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      welcome: 'We are Bugsters!'
    }
  },

  de: {
    message: {
      welcome: 'Wir sind Bugsters!'
    }
  }
}

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages
})

export default i18n
