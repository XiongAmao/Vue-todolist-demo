import AV from './leancloud'

export default {
    todoList: [],
    todos: [],
    subscription: null,
    unbind:null,
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
