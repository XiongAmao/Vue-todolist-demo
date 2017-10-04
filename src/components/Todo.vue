<template>
    <div class="todo">
        <div class="todo-wrapper" style="padding: 20px;">
            <header class="todo-header">
                <h1 class="todo-title">Todo</h1>
                <div class="login-info">
                    <div class="info-user">
                        Logged in as <span>{{ loggedUser }}</span>
                    </div>
                    <div @click="logout" class="logout-btn">
                        Logout
                    </div>
                    
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
    methods:{
        logout: function(){

        }
    },
    computed: {
        loggedUser: function() {
            // return this.$store.state.user
            return 'Kuma'
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
        border-radius: 6px;
        box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.3);
        color: #2A363B;
        margin-top: 20px;

        .todo-header {
            font-family: 'Orbitron', sans-serif;
            margin-bottom: 20px;
            .todo-title {
                font-size: 64px;
                margin: 8px 0;
                color: #000;
            }
            .login-info {
                display: flex;
                justify-content: space-between;
                color:#999;
                span{
                   color:#24BABC; 
                   font-size:20px;
                }
                .logout-btn{
                    cursor: pointer;
                    transition: .3s;
                    text-decoration: underline;
                    color:#ff0072;
                    user-select: none;
                    &:hover{
                        color:#CE005C;
                    }
                }
            }
        }
    }
}
</style>
