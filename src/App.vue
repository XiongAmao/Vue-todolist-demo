<template>
  <div id="app">
    <todo-list></todo-list>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components:{
    "todo-list":TodoList
  },data(){
    return{
      a:1
    }
  }
}
</script>

<style>
body{
  padding:10px;
  background: #f0efe9;
}
#app {
  margin:0 auto;
  max-width: 960px;
  min-height:90vh;
  background: #fff;
  border:1px solid #ccc;
  border-radius: 4px;
  padding:20px;
  box-shadow: 0 5px 15px 2px #ccc;
}
</style>
