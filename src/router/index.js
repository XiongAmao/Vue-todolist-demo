import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'

Vue.use(Router)
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        alias: '/'
    }, {
        path: '/todo',
        name: 'TodoList',
        component: TodoList
    }
]
const beforeEach = function(to,from,next){
    next()
    if (!to.name) next('Login')
}
const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    next()
    if (!to.name) next('Login')
    // if router-name err , go to login
})

export default router 