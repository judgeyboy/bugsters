import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'
import contactModule from './modules/contact'
import orderModule from './modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule,
    contactModule,
    orderModule
  }
})

export default store
