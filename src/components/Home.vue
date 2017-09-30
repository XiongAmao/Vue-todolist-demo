<template>
    <transition name="homepage-fade">
        <div class="homepage">
            <div class="homepage-container">

                <div class="login-panel">
                    <transition name="login-fade" mode="out-in">
                        <component v-bind:is="loginView"></component>
                    </transition>
                </div>

                <div class="home-banner">
                    <div class="title">
                        Todo
                    </div>
                    <div class="description">你的待办事项列表</div>
                </div>

            </div>

        </div>
    </transition>
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
.homepage {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .homepage-container {
        display: flex;
        justify-content: center;
        height: 500px;
        width: 800px;
        border: 1px solid #00D4C4;
        border-radius: 4px;
        box-shadow: 0 3px 10px 3px #e3e3e3;
    }
    .home-banner {
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
.homepage-fade-enter-active,
.homepage-fade-leave-active {
    transition: opacity .3s ease;
}

.homepage-fade-enter,
.homepage-fade-leave-to {
    opacity: 0;
}
</style>
