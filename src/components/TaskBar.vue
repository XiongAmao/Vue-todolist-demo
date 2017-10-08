<template>
    <header class="task-bar">
        <div class="task-bar-wrapper">
            <div class="task-bar-btns" :class="navSelector">
                <div class="btn all" @click="selectNav('all')" :class="{ active: navSelector == 'all'}">All</div>
                <div class="btn ac" @click="selectNav('active')" :class="{ active: navSelector == 'active'}">Active</div>
                <div class="btn cp" @click="selectNav('completed')" :class="{ active: navSelector == 'completed'}">Completed</div>
            </div>
            <div class="task-state">
                {{ left }}
                <span>item left</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        selectNav: function(choice) {
            this.$store.commit('SET_TODONAV_SELECTOR', choice) 
         },
        saveTodo: function() {
            this.$store.commit('saveTodoList')
        },
        removeFinishedTodo: function() {
            this.$store.commit('removeFinishedTodo')
        }
    },
    computed: {
        navSelector: function(){
            return this.$store.state.navSelector
        },
        left: function(){
            return this.$store.getters.leftTodosCount
        }
    },
}
</script>

<style lang="scss" scoped>
.task-bar {
    border-bottom: 1px solid #d1dbe5;
    background-color: #eef1f6;
    .task-bar-wrapper {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        overflow: hidden;
        margin-bottom: -1px;
        position: relative;
        -webkit-font-smoothing: antialiased;
        margin-bottom: -1px;
        .task-bar-btns {
            .btn {
                display: inline-block;
                transition: all .3s cubic-bezier(.645, .045, .355, 1);
                border: 1px solid transparent;
                border-top: 0;
                margin-right: -1px;
                margin-left: -1px;
                padding: 0 16px;
                height: 42px;
                box-sizing: border-box;
                line-height: 42px;
                display: inline-block;
                list-style: none;
                font-size: 14px;
                color: #8391a5;
                position: relative;
                cursor: pointer;
                &.active {
                    background-color: #fff;
                    border-right-color: #d1dbe5;
                    border-left-color: #d1dbe5;
                    color: #24BABC;
                }
            }
            &.completed{
                .cp{
                    color:#E85B48;
                }
            }
        }
        .task-state {
            padding: 12px;
            color: #8391a5;
            font-weight: 700;
            span {
                font-weight: 400;
            }
        }
    }
}
</style>
