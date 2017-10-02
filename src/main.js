import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
// import Vuex & Vue-router

import iView from 'iview'
import '../my-iview-theme/index.less'

import 'normalize.css'
import './assets/reset.css'
// import './assets/icon-font/iconfont'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)


Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
