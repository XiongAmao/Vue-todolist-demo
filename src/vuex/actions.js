import AV from './leancloud'

export default {
    login({ commit, state }, { loginForm }) {
        commit('login',loginForm)
    }
}
