import Vue from 'vue'
import Vuex from 'vuex'
import accountModule from './modules/account'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accountModule
  }
})

export default store
