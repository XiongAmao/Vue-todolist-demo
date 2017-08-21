import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoList from '@/components/TodoList'

Vue.use(Router)
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Home,
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
    routes,
    // mode:'history'
    // 如果需要开启HTML5 history模式需要后端支持，当匹配不到资源时返回index.html
})

router.beforeEach((to, from, next) => {
    next()
    if (!to.name) next('Login')
    // if router-name err , go to login
})

export default router 