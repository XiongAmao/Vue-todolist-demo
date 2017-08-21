export default {
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
    },
    login(state, payload) {
        let { email, username, password } = payload
        console.log(email, username, password)
        AV.User.logIn(username, password).then(function (loginedUser) {

        }, function (error) {
        });
    }
}
