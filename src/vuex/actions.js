import AV from './leancloud'

export default {
    login({ commit, state }, { username, password, cb }) {
        AV.User.logIn(username, username).then(function (user) {
            commit('login', user.toJSON())
        }).catch(function (error) {
            console.log(error)
            cb()
        })
    },
}
