<template>
    <div class="login-page">
        <div class="login-page-container">
            <div class="login-banner">
                <div class="title">
                    To-do
                </div>
                <div class="description">你的待办事项列表</div>
            </div>
            <div class="login-panel">
                <Login></Login>
            </div>
        </div>
    </div>
</template>

<script>
import Login from './Login'
export default {
    components: {
        Login
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" >
.login-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    .login-page-container {
        display: flex;
        justify-content: center;
        height: 400px;
        border: 1px solid #00bdbd;
        border-radius: 4px;
        box-shadow: 0 3px 10px 3px #e3e3e3;
    }
    .login-banner {
        padding: 10px;
        padding-top: 15%;
        width: 300px;
        .title {
            font-size: 48px;
            margin-bottom: 20px;
        }

        .description {
            font-size: 24px;
        }
    }

    .login-panel {
        border: 1px solid;
        width: 400px;
        padding: 10px 20px;
    }
}
</style>
