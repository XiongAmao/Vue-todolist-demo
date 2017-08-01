<template>
  <div id="app">
    <header>
      To-do 记录待办
    </header>
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

<style lang="scss">
body{
  padding:10px;
  background: #f0efe9;
  @media (max-width:750px){
    padding: 0;
  }
}
#app {
  margin:0 auto;
  max-width: 660px;
  min-height:90vh;
  background: #fff;
  border:1px solid #ccc;
  border-radius: 4px;
  padding:20px;
  box-shadow: 0 5px 15px 2px #ccc;
  @media (max-width:750px){
    padding: 30px;
  }
  header {
    font-size:32px;
    padding:16px 0;
    color:#999;
  }
}
</style>
