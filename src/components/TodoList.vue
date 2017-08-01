<template>
    <div class="todo-list">
        <div class="newtask">
            <input v-model="newTodo" type="text" @keypress.enter="addTodo" placeholder="输入待办事项，按回车键添加">
            <div @click="addTodo" class="newtask-enter">
                <svg class="icon icon-input">
                    <use xlink:href="#icon-input"></use>
                </svg>
            </div>
    
        </div>
    
        <div class="task-list">
            <ol>
                <li class="task-item" v-for="(todo,key,index) in todoList" :key="key">
                    <div class="task-content">
                        <input type="checkbox" v-model="todo.done">
                        <label>
                            {{todo.todoContent}}
                        </label>
                    </div>
                    <div class="task-info">
                        <span class="created-time">
                            {{todo.createdAt}}
                        </span>
                        <button class="task-remove-btn" v-show="todo.done" @click="removeTodo(index)">删除</button>
                    </div>
                </li>
            </ol>
        </div>
    
        <!-- <new-tasks></new-tasks> -->
        <!-- <task-list></task-list> -->
    </div>
</template>

<script>
import NewTasks from "./NewTasks"
import TasksList from "./TaskList"
export default {
    components: {
        'new-tasks': NewTasks,
        'task-list': TasksList
    },
    data() {
        return {
            newTodo: '',
            todoList: [{
                todoContent: "今天吃鸡",
                createdAt: "123",
                done: true,
                todoType: "eme"
            }]
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo) {
                this.todoList.push({
                    todoContent: this.newTodo,
                    createdAt: new Date(),
                    done: false
                })
                this.newTodo = ""
            }
        },
        removeTodo: function (todo) {
            let index = this.todoList.indexOf(todo)
            this.todoList.splice(index, 1)
            // delete "1" element from index to end 
        }
    }
}
</script>

<style lang="scss">
.todo-list {
    color: #2A363B;
}

.newtask {
    width: 100%;
    position: relative;
    input {
        width: 100%;
        height: 40px;
        font-size: 16px;
        padding: 0 10px;
        border: 1px solid #9FEED1;
        border-radius: 4px;
        outline: none;
        transition: .6s;
        &:focus {
            border-color: #11CBD7;
            transition: .6s;
        }
    }
    .newtask-enter {
        position: absolute;
        height: 100%;
        width: 40px; // line-height: 40px;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
        cursor: pointer;
        &:hover {
            svg {
                fill: #00AAA0;
            }
        }
        svg {
            display: block;
            fill: #2A363B;
            margin-bottom: 2px;
            width: 24px;
            height: 24px;
            transition: .3s;
        }
    }
}

.task-list {
    padding: 20px 0;
}

.task-item {
    border-bottom: 1px solid #ccc;
    height: 48px;
    line-height: 48px;
    transition: 0.3s linear;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    &:hover {
        background: rgba(0, 0, 0, .03);
    }
    .task-remove-btn {
        padding: 0;
        display: inline-block;
        border: 1px solid red;
    }
}

.td-content {}
</style>
