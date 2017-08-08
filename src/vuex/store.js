import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    todoList: []
}
const mutations = {
    addTodo(state, payload) {
        state.todoList.push(payload)
    },
    removeTodo(state, payload) {
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
    }
}
const getters = {
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})
