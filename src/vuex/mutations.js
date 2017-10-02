import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODOS,
    LOGIN,
    LOGOUT,
    TOGGLE_LOGIN_VIEW,
    SET_LOGIN_ERRORMESSAGE,
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
    [LOGIN](state, payload) {
        let { user } = payload
        state.user = user
    },
    [LOGOUT](state, payload) {
        state.user = null
    },
    [TOGGLE_LOGIN_VIEW](state, choice) {
        state.loginPanelView = choice ? choice : 'Login'
    },
    [SET_LOGIN_ERRORMESSAGE](state, payload) {
        
    }
}
