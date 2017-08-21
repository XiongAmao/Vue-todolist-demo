<template>
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
    
                <button class="task-remove-btn" v-show="todo.done" @click="removeSingleTodo(todo)">删除
                    <svg class="icon icon-input">
                        <use xlink:href="#icon-input"></use>
                    </svg>
                </button>
    
            </li>
        </ol>
    </section>
</template>

<script>
export default {
    data() {
        return {
            sortList: [{
                value: 'createdTime',
                label: '创建时间'
            }],
            sortSelector: "",
        }
    },
    created: function () { },
    methods: {
        removeSingleTodo: function (todo) {
            this.$store.commit('removeTodo', todo)
            // delete "1" element from index to end 
        },
        saveTodo: function () {
            this.$store.commit('saveTodoList')
        }
    },
    computed: {
        todoList() {
            return this.$store.state.todoList
        }
    },
    filters: {
        formateDate: function (value) {
            let date = new Date((value || ""))
            let month = date.getMonth() + 1,
                day = date.getDate(),
                year = date.getFullYear()
            return `${year}年${month}月${day}日`
        }
    }
}
</script>

<style lang="scss" scoped>
.task-list {
    /* todo-list */
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
