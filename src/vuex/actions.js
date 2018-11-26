import AV from './leancloud'
import getErrorMessage from './getErrorMessage'

let Todo = AV.Object.extend('Todo')

// leancloud liveQuery
const errorAlert = error => {
    console.log(error)
    alert('网络错误，请刷新')
}

export default {
    // user control
    login({ dispatch, commit, state }, { username, password, cb }) {
        AV.User.logIn(username, password).then((user) => {
            commit('LOGIN', user.toJSON())
        }).catch((error) => {
            let msg = getErrorMessage(error.code)
            commit('SET_ERRORMESSAGE', msg)
        })
    },
    signup({ dispatch, commit }, { email, username, password }) {
        var user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        // user.setEmail(email);
        user.signUp().then(function (user) {
            commit('LOGIN', user.toJSON())
        }).catch((error) => {
            let msg = getErrorMessage(error.code)
            commit('SET_ERRORMESSAGE', msg)
        })
    },
    logout({ commit }) {
        AV.User.logOut()
        commit('LOGOUT')
    },
    checkUser({ commit }) {
        var user = AV.User.current()
        if (user) {
            commit('SET_USER', user.toJSON())
        }
    },
    // todo control
    addTodo({ commit, dispatch }, content) {
        var acl = new AV.ACL()
        acl.setPublicReadAccess(false)
        acl.setPublicWriteAccess(false)
        acl.setReadAccess(AV.User.current(), true)
        acl.setWriteAccess(AV.User.current(), true)
        new Todo({
            content: content,
            done: false,
            user: AV.User.current()
        }).setACL(acl).save().then((todo) => {
            commit('ADD_TODO', todo.toJSON())
        }).catch(errorAlert)
    },
    removeTodo({ commit, state }, todo) {
        AV.Object.createWithoutData('Todo', todo.objectId)
            .destroy()
            .then(() => {
                commit('REMOVE_TODO', todo)
            }).catch(errorAlert)
    },
    fetchTodos({ commit, state }) {
        if (!state.user.objectId) return
        let queryUser = AV.Object.createWithoutData('User', state.user.objectId)
        const query = new AV.Query(Todo)
            .equalTo('user', queryUser)
            .descending('createdAt')
            .find()
            .then((todos) => {
                commit('UPDATE_TODOS', todos)
            }).catch(errorAlert)
    },
    removeCompleted({ commit, getters }) {
        AV.Object.destroyAll(getters.completedTodos.map(function (todo) {
            return AV.Object.createWithoutData('Todo', todo.objectId)
        })).then(function () {
            commit('REMOVE_COMPLETED_TODOS')
        }).catch(errorAlert)
    },
    doneEdit({ commit, dispatch, state }, { todo, content }) {
        if (!content) {
            dispatch('removeTodo', todo)
        } else {
            AV.Object.createWithoutData('Todo', todo.objectId).save({
                content: content,
            }).then(() => {
                commit('EDIT_TODO', { todo, content })
            }).catch(errorAlert)
        }
    },
    finishTodo({ commit }, todo) {
        AV.Object.createWithoutData('Todo', todo.objectId).save({
            done: !todo.done
        }).then(() => {
            commit('FINISH_TODO', todo)
        }).catch(errorAlert)
    }

}
