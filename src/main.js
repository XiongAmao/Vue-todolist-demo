import Vue from 'vue'
import router from './router'
import App from './App'

import iView from 'iview'
import '../my-iview-theme/index.less'

import store from './store/store'

import 'normalize.css'
import './assets/reset.css'
import './assets/icon-font/iconfont'

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
