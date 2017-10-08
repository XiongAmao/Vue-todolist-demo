import AV from './leancloud'

export default {
    todoList: [],
    todos: [],

    // edit
    editingTodo:null,


    // user 
    user: null,
    password: '',
    email: '',
    username: '',

    // view
    loginPanelView: 'Login',
    navSelector: 'all',

    // error 
    errorMsg: '',
    errorMsgState: false,
}
