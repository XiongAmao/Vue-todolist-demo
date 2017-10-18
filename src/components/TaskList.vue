<template>
    <section class="task-list">
        <ol>
            <li class="task-item" 
            :class="{ finished: todo.done, editing: todo == editedTodo }" 
            v-for="todo in todos" :key="todo.objectId">
                
                <div class="checkbox">
                    <input class="checkbox-input" type="checkbox" v-model="todo.done">

                    <svg class="icon icon-no-selected" 
                    v-show="!todo.done" 
                    @click="todoDone(todo)">
                        <use xlink:href="#icon-rect"></use>
                    </svg>

                    <svg class="icon icon-selected" 
                    v-show="todo.done" 
                    @click="todoDone(todo)">
                        <use xlink:href="#icon-rect-selected"></use>
                    </svg>
                </div> 
                
                <label class="content" @dblclick="editTodo(todo)">
                    <span>{{todo.content}}</span>
                </label>

                <div class="task-editor">
                    <input type="text"
                    v-model="editingTodo"
                    v-todo-focus="todo == editedTodo"
                    @blur="doneEdit(todo)"
                    @keyup.enter="doneEdit(todo)"
                    @keyup.esc="cancelEdit(todo)">
                </div>

                <button class="task-remove-btn" @click="removeTodo(todo)">
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
import _throttle from 'lodash/throttle'

var todosSeletor = function(selector, ctx) {
    console.log(selector)
    if(selector === 'all'){
        return ctx.$store.state.todos
    }else if(selector === 'active'){
        return ctx.$store.getters.activeTodos
    }else if(selector === 'completed'){
        return ctx.$store.getters.completedTodos
    }
}
export default {
    data() {
        return {
            editedTodo: null,
            editingTodo:''
        }
    },
    methods: {
        removeTodo: _throttle(function(todo) {
            this.$store.dispatch('removeTodo', todo)
        }, 300),
        editTodo: function(todo) {
            this.editingTodo = todo.content
            this.editedTodo = todo
        },
        doneEdit: function(todo) {
            let content = this.editingTodo
            this.$store.dispatch('doneEdit', {todo , content })
            this.editedTodo = null // 解除focus
        },
        cancelEdit: function(todo) {
            console.log('cancel')
            this.editedTodo = null
        },
        todoDone: _throttle(function(todo) {
            this.$store.dispatch('finishTodo', todo) 
        }, 300)
    },
    computed: {
        todos() {
            return todosSeletor(this.navSelector, this)
        },
        navSelector(){
            return this.$store.state.navSelector
        }
    },
    watch:{
        
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
            @media screen and (max-width: 768px){
                opacity: 1;
            }
        }

        &:hover {
            .task-editor {
                input {
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
