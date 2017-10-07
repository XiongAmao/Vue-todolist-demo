import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import AV from './leancloud'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
