<template>
  <div id="app">
   
    <!-- <todo-list></todo-list> -->
    <router-view></router-view>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    "todo-list": TodoList
  }, data() {
    return {
      a: 1
    }
  }
}
</script>

<style lang="scss">
body {
  
}


</style>
