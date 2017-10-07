import {
    // todos
    FECTH_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODOS,
    REMOVE_COMPLETED_TODOS,

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
    [ADD_TODO](state, payload) {
        state.todos.push(payload)
    },
    [REMOVE_TODO](state, payload) {
        let index = state.todoList.indexOf(payload)
        state.todoList.splice(index, 1)
    },
    [UPDATE_TODOS](state, todos) {
        state.todos = todos.map(function (todo) {
            return todo.toJSON()
        })
    },
    [REMOVE_COMPLETED_TODOS](state){
        state.todos = state.todos.filter(function(todo){
            return !todo.done
        })
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
