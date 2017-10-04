<template>
    <div class="todo">
        <div class="todo-wrapper" style="padding: 20px;">
            <header>
                <h1>Todo</h1>
                <div class="login-info">
                    {{ loggedUser }}
                </div>
            </header>

            <NewTasks></NewTasks>

        </div>
        <div class="todo-wrapper">
            <TaskBar></TaskBar>
            <TaskList></TaskList>
        </div>
    </div>
</template>

<script>
import NewTasks from "./NewTasks"
import TaskList from "./TaskList"
import TaskBar from "./TaskBar"
export default {
    components: {
        NewTasks,
        TaskList,
        TaskBar
    },
    data() {
        return {}
    },
    computed: {
        loggedUser: function() {

            return this.$store.state.user
        }
    },
    created: function() {
        window.onbeforeunload = () => {
            this.$store.commit('saveTodoList')
        }
        this.$store.commit('getLocalTodoList')
    },
    beforeRouteEnter(to, from, next) {
        console.log('beaforeRouteEnter ,in Todo List node')
        next()
    },

}
</script>

<style lang="scss" >
.todo {
    padding: 40px; 
    overflow: hidden;
    .todo-wrapper {
        overflow: hidden;
        margin: 0 auto;
        max-width: 660px; 
        background: #fff;
        // border: 1px solid #ccc;
        border-radius: 6px;
        box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.3);
        color: #2A363B;
        margin-top:20px;
        header {
            h1 {
                font-size: 32px;
                padding: 16px 0;
                color: #999;
            }
        }
        
    }
}
</style>
