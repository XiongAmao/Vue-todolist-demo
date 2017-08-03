import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count:1
}
const mutations = { 
    increment(state,payload){
        state.count += payload.number
    }
}

export default new Vuex.Store({
    state,
    mutations
})
