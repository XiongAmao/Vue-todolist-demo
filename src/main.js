import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
// import Vuex & Vue-router

import 'normalize.css'
import './assets/reset.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
