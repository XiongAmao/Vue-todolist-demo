<template>
    <div class="todo">
        <div class="todo-wrapper" style="padding: 20px;">
            <header class="todo-header">
                <h1 class="todo-title">Todo</h1>
                <div class="login-info">
                    <div class="info-user">
                        Logged in as
                        <span>{{ loggedUser }}</span>
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
            <footer>
                <div class="todo-clear">
                    <transition name="fade">
                        <div class="clear-btn" v-if="completedTodosLength > 0" @click="removeCompleted">Clear completed</div>
                    </transition>

                </div>
                <div class="todo-intro">Double-click to edit a todo</div>
            </footer>

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
    methods: {
        logout: function() {
            this.$store.dispatch('logout')
            this.$router.push('/login')
        },
        removeCompleted: function() {
            this.$store.dispatch('removeCompleted')
        }
    },
    computed: {
        loggedUser: function() {
            return this.$store.state.user.username
        },
        completedTodosLength: function() {
            return this.$store.getters.completedTodos.length
        }
    },
    created: function() {
        this.$store.dispatch('fetchTodos')
    },

}
</script>

<style lang="scss" >
.todo {
    padding: 40px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        padding:0;
    }
    .todo-wrapper {
        overflow: hidden;
        position: relative;
        margin: 0 auto;
        max-width: 660px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.3);
        color: #2A363B;
        margin-top: 20px;
        padding-bottom: 20px;
        @media screen and (max-width: 768px) {
            border-radius: 0;
            padding:0;
            &:first-child {
                margin-top: 0;
            }
        }
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
                color: #999;
                span {
                    color: #24BABC;
                    font-size: 20px;
                }
                .logout-btn {
                    cursor: pointer;
                    transition: .3s;
                    text-decoration: underline;
                    color: #ff0072;
                    user-select: none;
                    &:hover {
                        color: #CE005C;
                    }
                }
            }
        }
        footer {
            display: flex;
            justify-content: space-between;
            padding: 0 22px;
            color: #999;
            @media screen and (max-width: 768px){
                font-size: 14px;
                padding-bottom: 20px;
            }
            .todo-clear {
                .clear-btn {
                    cursor: pointer; // font-family: 'Orbitron', sans-serif;
                    &:hover {
                        text-decoration: underline;
                    }
                    @media screen and (max-width: 768px){
                        // border: 1px solid #999;
                        // padding:4px;
                        // border-radius: 6px;
                        text-decoration: underline;
                    }
                }
            }
            .todo-intro{
                @media screen and (max-width: 768px){
                    display: none;
                }
            }
            
        }
    }
}
</style>
