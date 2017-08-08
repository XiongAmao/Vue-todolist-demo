import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
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
  ],
  beforeEnter: (to, from, next) => {
    // ...
  }
})
