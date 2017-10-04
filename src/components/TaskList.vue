<template>
    <section class="task-list">
        <ol>
            <li class="task-item" :class="{ finished: todo.done, editing: todo == editedTodo }" v-for="( todo, index ) in todoList" :key="index">
                
                <div class="checkbox" @click="todoDone(todo)">
                    <input class="checkbox-input" type="checkbox" v-model="todo.done">
                    <svg v-show="!todo.done" class="icon icon-no-selected">
                        <use xlink:href="#icon-rect"></use>
                    </svg>
                    <svg v-show="todo.done" class="icon icon-selected">
                        <use xlink:href="#icon-rect-selected"></use>
                    </svg>
                </div> 
                
                <label class="content" @dblclick="editTodo(todo)">
                    <span>{{todo.todoContent}}</span>
                </label>

                <div class="task-editor">
                    <input type="text"
                    v-model="editingTodo"
                    v-todo-focus="todo == editedTodo"
                    @blur="doneEdit(todo)"
                    @keyup.enter="doneEdit(todo)"
                    @keyup.esc="cancelEdit(todo)">
                </div>

                <button class="task-remove-btn" @click="removeSingleTodo(todo)">
                    <svg class="icon icon-input">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </button>

            </li>
        </ol>
        <ol>

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
            editedTodo: null,
            beforeEditCache: '',
            editingTodo:''
        }
    },
    created: function() { },
    methods: {
        removeSingleTodo: function(todo) {
            this.$store.commit('REMOVE_TODO', todo)
            // delete "1" element from index to end 
        },
        saveTodo: function() {
            this.$store.commit('saveTodoList')
        },
        editTodo: function(todo) {
            console.log(1)
            this.beforeEditCache = this.editingTodo = todo.todoContent
            this.editedTodo = todo
            
        },
        doneEdit: function(todo) {
            console.log('done')
            this.editedTodo = null
        },
        cancelEdit: function(todo) {
            console.log('cancel')
            this.editedTodo = nul
        },
        todoDone: function(todo) {
            todo.done = !todo.done
        }
    },
    computed: {
        todoList() {
            return this.$store.state.todoList
        }
    },
    filters: {
        formateDate: function(value) {
            let date = new Date((value || ""))
            let month = date.getMonth() + 1,
                day = date.getDate(),
                year = date.getFullYear()
            return `${year}年${month}月${day}日`
        }
    },
    directives: {
        'todo-focus': function(el, value) {
            if (value) {
                el.focus()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.task-list {
    /* todo-list */
    padding: 20px;

    .task-item {
        height: 48px;
        line-height: 48px;
        padding: 0 20px 0 10px;
        position: relative;
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: 0.3s;
        overflow: hidden;
        margin-bottom: 12px;
        // background: #ececec;
        
        .checkbox {
            position: absolute;
            top: 0;
            height: 100%;
            width: 20px;
            padding-top: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            .checkbox-input{
                opacity: 0;
                position: absolute;
                top:0;
                outline: none;
            }
            .icon{
                cursor: pointer;
                width:20px;
                height:20px;
                
            }
            
        }
        .content {
            display: block;
            width: 100%;
            padding: 0 0 0 24px;
            margin-left: 4px;
        }

        .task-info {
            transition: .3s ease;

            span {
                font-size: 12px;
                color: #999;
            }
        }

        .task-editor {
            position: absolute;
            top: 0;
            right: 0;
            width: calc(100% - 34px);
            display: none;
            transition: 0.3s ;
            
            input {
                transition: 0.3s ;
                width: 100%;
                border: none;
                outline: none;
                text-decoration: underline;
                margin-left: 4px;
            }
        }

        .task-remove-btn {
            position: absolute;
            top: 50%;
            right: 1em;
            transform: translateY(-50%);
            display: block;
            padding: 0;
            height: 30px;
            border: none;
            background: none;
            opacity: 0;
            outline: none;
            transition: .3s ease;
            cursor: pointer;
        }

        &:hover {
            // background: #ececec;
            // background: #fff;
            .task-editor {
                input {
                    // background: #ececec;
                }
            }
            .task-remove-btn {
                opacity: 1;
            }
        }

        &.editing {
            .task-editor {
                display: block;
                input{
                    color:#aaa;
                }
            }
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

            .content {
                text-decoration: line-through;
                color: #aaa;
            }

            &::after {
                background: #E85B48;
            }
        }
    }
}
</style>
