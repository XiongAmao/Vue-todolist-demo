<template>
    <div class="task-list">
        <!-- <ol class="todo">
            <li>01123</li>
            <li>02123</li>
            <li>03123</li>
            <li>04123</li>
            <li>05123</li>
            <li>06123</li>
        </ol> -->
    </div>
</template>

<script>
export default {
    props: {},
    data() {
        return { b: 1 }
    }
}
</script>

<style lang="scss">
.task-list {
    ol.todo {
        li {
            // height: 26px;
            // border: 1px solid #999;
        }
    }
}
</style>
