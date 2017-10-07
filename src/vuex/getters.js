export default {
    activeTodos: state => {
        return state.todos.filter(todo => !todo.done)
    },
    completedTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    leftTodosCount: (state, getters) => {
        return getters.activeTodos.length
    }
}