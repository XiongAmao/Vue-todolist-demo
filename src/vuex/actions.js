import AV from './leancloud'
import getErrorMessage from './getErrorMessage'

export default {
    login({ dispatch, commit, state }, { username, password, cb }) {
        AV.User.logIn(username, username).then(function (user) {
            commit('LOGIN', user.toJSON())
            dispatch('checkUser')
        }).catch((error) => {
            let msg = getErrorMessage(error.code)
            commit('SET_ERRORMESSAGE', msg)
        })
    },
    signup({ dispatch, commit, state }, { email, username, password }) {
        var user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.setEmail(email);
        user.signUp().then(function (user) {
            commit('SET_USER', user.toJSON())
            dispatch('checkUser')
        }).catch((error) => {
            commit('SET_ERRORMESSAGE', msg)
        })
    },
    logout({ commit, state }){
        AV.User.logOut()
        commit('LOGOUT')
    },
    checkUser({ commit, state }){
        var user = AV.User.current()
        if(user){
            commit('SET_USER', user.toJSON()) 
        } 
    }

}
