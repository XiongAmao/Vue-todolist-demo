import AV from './leancloud'
import getErrorMessage from './getErrorMessage'

export default {
    login({ commit, state }, { username, password, cb }) {
        console.log(username, password)
        AV.User.logIn(username, username).then(function (user) {
            commit('LOGIN', user.toJSON())
        }).catch((error) => {
            let msg = getErrorMessage(error.code)
            commit('SET_ERRORMESSAGE', msg)
        })
    },
    signup({ commit, state }, { email, username, password }) {
        var user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.signUp().then(function (user) {
            console.log(user)
            commit('SET_USER', user.toJSON())
        }).catch((error) => {
            console.log(error)
            commit('SET_ERRORMESSAGE', msg)
        })
    }

}
