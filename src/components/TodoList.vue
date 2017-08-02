<template>
    <div class="todo-list">
        <section class="newtask">
            <input class="newtask-input" v-model="newTodo" type="text" @keypress.enter="addTodo" placeholder="输入待办事项，按回车键添加">
            <div @click="addTodo" class="newtask-enter-btn">
                <svg class="icon icon-input">
                    <use xlink:href="#icon-input"></use>
                </svg>
            </div>
    
        </section>
        <section class="task-bar">
            <!-- <button @click="saveTodo" class="save-todo">保存</button> -->
            <div class="task-bar-btns">
                <Button @click="saveTodo"  icon="checkmark-circled" >保存</Button>
                <Button @click="removeFinishedTodo" icon="trash-a" >清理所有已完成</Button>
            </div>
            <div class="task-state-sort">
                <Select v-model="sortSelector" style="width:200px">
                    <Option v-for="item in sortList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div>
        </section>
        <section class="task-list">
            <ol>
                <li class="task-item" :class="{finished:todo.done}" v-for="(todo,index) in todoList" :key="index">
                    <div class="task-content">
                        <input type="checkbox" v-model="todo.done">
                        <label>
                            {{todo.todoContent}}
                        </label>
                    </div>
                    <div class="task-info">
                        <span class="created-time">
                            创建时间：{{todo.createdAt | formateDate}}
                        </span>
    
                    </div>
                    <button class="task-remove-btn" v-show="todo.done" @click="removeTodo(todo)">删除
                        <svg class="icon icon-input">
                            <use xlink:href="#icon-input"></use>
                        </svg>
                    </button>
                </li>
            </ol>
        </section>
    
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
            }],
            sortList: [{
                value: 'createdTime',
                label: '创建时间'
            }],
            sortSelector:""
        }
    },
    created: function () {
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos', dataString)
        }
        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
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
                this.saveTodo()
            }
            
        },
        removeTodo: function (todo) {
            let index = this.todoList.indexOf(todo)
            this.todoList.splice(index, 1)
            // delete "1" element from index to end 
        },
        saveTodo: function () {
            let self = this
            let dataString = JSON.stringify(self.todoList)
            window.localStorage.setItem('myTodos', dataString)
        },
        removeFinishedTodo:function(){
            this.todoList = this.todoList.filter(function(elem){
                return !elem.done 
            })
        }
    },
    computed: {
    },
    filters: {
        formateDate: function (value) {
            let date = new Date((value || ""))
            let month = date.getMonth(),
                day = date.getDay(),
                year = date.getFullYear()
            return `${year}年${month}月${day}日`

        }
    }

}
</script>

<style lang="scss">
.todo-list {
    color: #2A363B;
}




/* new-todo input */

.newtask {
    width: 100%;
    position: relative;
    border-radius: 6px;
    >input {
        width: 100%;
        height: 40px;
        font-size: 16px;
        padding: 0 10px 0 46px;
        margin-right: 10px;
        border: 2px solid #6BC5D2;
        outline: none;
        transition: .6s;
        border-radius: 6px;
        &:focus {
            transition: .6s;
            border: #00AAA0 2px solid;
        }
        &:focus+.newtask-enter-btn {
            border-color: #00AAA0;
            svg {
                fill: #00AAA0
            }
        }
    }
    .newtask-enter-btn {
        position: absolute;
        height: 100%;
        order: 1;
        width: 40px;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
        border-right: 2px solid #6BC5D2;
        cursor: pointer;
        &:hover {
            svg {
                fill: #00AAA0;
            }
        }
        svg {
            display: block;
            fill: #6BC5D2;
            margin-bottom: 2px;
            margin-left: 4px;
            width: 24px;
            height: 24px;
            transition: .3s;
        }
    }
}




/* todo-action-bar */

.task-bar {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    // span{font-size: 16px;}
    // button {
    //     padding: 8px 8px;
    //     text-decoration: none;
    //     outline: none;
    //     cursor: pointer;
    // }
}




/* todo-list */

.task-list {
    padding: 20px 0;
    .task-item {
        height: 48px;
        line-height: 48px;
        padding: 0 20px 0 10px;
        position: relative;
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: 0.3s linear;
        overflow: hidden;
        margin-bottom: 10px;
        &:hover {
            background: rgba(0, 0, 0, .03);
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 4px;
            background: #24BABC;
        }
        &.urgent {
            &::after {
                background: #EF9037;
            }
        }
        &.finished {
            .task-info {
                transform: translateX(-4em);
            }
            .task-content {
                label {
                    text-decoration: line-through;
                    color: #aaa;
                }
            }
            &::after {
                background: #E85B48;
            }
        }
        .task-info {
            transition: .3s ease;
            span {
                font-size: 12px;
                color: #999;
            }
        }
        .task-remove-btn {
            position: absolute;
            top: 50%;
            right: 1em;
            transform: translateY(-50%);
            padding: 0;
            display: block;
            outline: none;
            height: 30px;
            border: none;
            background: #E85B48;
            border: 1px solid #E85B48;
            color: #fff;
            border-radius: 4px;
            padding: 0 8px;
            box-shadow: none;
            transition: .3s ease;
            font-size: 12px;
            cursor: pointer;
            &:hover {
                border-color: #E85B48;
                color: #E85B48;
                background: #fff;
            }
            &:active {}
        }
    }
}
</style>
