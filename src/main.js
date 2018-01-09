// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VeeValidate from 'vee-validate'
import SectionScroll from './plugins/section-scroll'
import i18n from './localization/i18n'

Vue.use(VeeValidate, { inject: false })
Vue.use(SectionScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
