<template>
    <div class="login-page">
        <div class="login-page-container">

            <div class="login-panel">
                <transition name="login-fade" mode="out-in">
                    <component v-bind:is="loginView"></component>
                </transition>
            </div>

            <div class="login-banner">
                <div class="title">
                    Todo
                </div>
                <div class="description">你的待办事项列表</div>
            </div>

        </div>

    </div>
</template>

<script>
import Login from './Login'
import SignUp from './SignUp'

export default {
    components: {
        Login,
        SignUp
    },
    data() {
        return {
        }
    },
    methods: {
        
    },
    computed: {
        loginView: function() {
            return this.$store.state.loginPanelView
        }
    }

}
</script>

<style lang="scss" >
.login-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-page-container {
        display: flex;
        justify-content: center;
        height: 500px;
        width: 800px;
        border: 1px solid #00D4C4;
        border-radius: 4px;
        box-shadow: 0 3px 10px 3px #e3e3e3;
    }
    .login-banner {
        padding: 10px;
        padding-top: 5%;
        width: 50%;
        text-align: center;
        background: #00D4C4;
        .title {
            font-size: 80px;
            margin-bottom: 20px;
            color: #444;
        }

        .description {
            font-size: 24px;
        }
    }

    .login-panel {
        width: 50%;
        padding: 10px 20px;
    }
}


.login-fade-enter-active,
.login-fade-leave-active {
    transition: opacity .3s ease;
}

.login-fade-enter,
.login-fade-leave-to {
    opacity: 0;
}
</style>
