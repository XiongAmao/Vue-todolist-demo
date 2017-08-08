<template>
    <section class="task-bar">
        <!-- <button @click="saveTodo" class="save-todo">保存</button> -->
        <div class="task-bar-btns">
            <Button @click="saveTodo" icon="checkmark-circled">保存</Button>
            <Button @click="removeFinishedTodo" icon="trash-a">清理所有已完成</Button>
        </div>
        <div class="task-state-sort">
            <Select style="width:200px">
                <Option v-for="item in sortList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
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
    methods: {
        saveTodo: function () {
            this.$store.commit('saveTodoList')
        },
        removeFinishedTodo: function () {
            this.$store.commit('removeFinishedTodo')
        }
    },
    computed: {},
}
</script>

<style lang="scss" scoped>
.task-bar {
    /* todo-action-bar */
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    font-size: 16px; // span{font-size: 16px;}
}
</style>
