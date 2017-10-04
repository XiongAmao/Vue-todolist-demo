import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODOS,
    SET_USER,
    LOGIN,
    LOGOUT,
    TOGGLE_LOGIN_VIEW,
    SET_ERRORMESSAGE,
    RESET_ERRORMESSAGE,
    SET_TODONAV_SELECTOR,
} from './mutation-types.js'

export default {
    [ADD_TODO](state, payload) {
        state.todoList.push(payload)
    },
    [REMOVE_TODO](state, payload) {
        let index = state.todoList.indexOf(payload)
        state.todoList.splice(index, 1)
    },
    saveTodoList(state) {
        let dataString = JSON.stringify(state.todoList)
        window.localStorage.setItem('myTodos', dataString)
    },
    getLocalTodoList(state) {
        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        state.todoList = oldData || []
    },
    removeFinishedTodo(state) {
        state.todoList = state.todoList.filter(function (elem) {
            return !elem.done
        })
    },
    [SET_USER](state, user) {
        state.user = user
    },
    [LOGIN](state, user) {
        state.user = user
    },
    [LOGOUT](state) {
        state.user = null
    },
    [TOGGLE_LOGIN_VIEW](state, choice) {
        state.loginPanelView = choice ? choice : 'Login'
    },
    [SET_ERRORMESSAGE](state, msg) {
        console.log('mutate set error msg')
        state.errorMsg = msg
        state.errorMsgState = true
    },
    [RESET_ERRORMESSAGE](state) { 
        state.errorMsg = ''
        state.errorMsgState = false
    },
    [SET_TODONAV_SELECTOR](state, payload) {
        state.navSelector = payload
    }
}
