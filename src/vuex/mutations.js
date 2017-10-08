import {
    // TODOS
    // FECTH_TODOS,
    UPDATE_TODOS,
    REMOVE_COMPLETED_TODOS,

    // TODO
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    // user  
    LOGIN,
    LOGOUT,
    SET_USER,
    SET_ERRORMESSAGE,
    RESET_ERRORMESSAGE,

    // view 
    TOGGLE_LOGIN_VIEW,
    SET_TODONAV_SELECTOR,
} from './mutation-types.js'

export default {
    // TODOS
    [REMOVE_COMPLETED_TODOS](state) {
        state.todos = state.todos.filter(function (todo) {
            return !todo.done
        })
    },
    [UPDATE_TODOS](state, todos) {
        state.todos = todos.map(function (todo) {
            return todo.toJSON()
        })
    },

    // TODO
    [ADD_TODO](state, todo) {
        state.todos.push(todo)
    },
    [REMOVE_TODO](state, todo) {
        let index = state.todos.indexOf(todo)
        state.todos.splice(index, 1)
    },
    [EDIT_TODO](state, todo){
         
    },

    // Home component
    [SET_USER](state, user) {
        state.user = user
    },
    [LOGIN](state, user) {
        state.user = user
    },
    [LOGOUT](state) {
        state.user = null
    },
    // error msg
    [SET_ERRORMESSAGE](state, msg) {
        console.log('mutate set error msg')
        state.errorMsg = msg
        state.errorMsgState = true
    },
    [RESET_ERRORMESSAGE](state) {
        state.errorMsg = ''
        state.errorMsgState = false
    },
    // view controlor
    [SET_TODONAV_SELECTOR](state, payload) {
        state.navSelector = payload
    },
    [TOGGLE_LOGIN_VIEW](state, choice) {
        state.loginPanelView = choice ? choice : 'Login'
    },
}
