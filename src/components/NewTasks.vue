<template>
    <section class="newtask">
        <input class="newtask-input" v-model="newTodo" type="text" @keypress.enter="addTodo" placeholder="输入待办事项，按回车键添加">
        <div @click="addTodo" class="newtask-enter-btn">
            <svg class="icon icon-input">
                <use xlink:href="#icon-input"></use>
            </svg>
        </div>
    
    </section>
</template>

<script>
export default {
    data() {
        return {
            newTodo: '',
        }
    },
    methods: {
        addTodo: function () {
            var content = this.newTodo && this.newTodo.trim()
            if(content){
                this.$store.dispatch('addTodo', content)
                this.newTodo = ''
            }
        },
    },
    created: function () { },
    computed: {},
    filters: {}
}
</script>

<style lang="scss" scoped>
.newtask {
    /* new-todo input */
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
</style>
