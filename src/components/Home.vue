<template>
    <!-- <transition name="homepage-fade"> -->
        <div class="homepage">
            <vue-particles  class="particles" color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"></vue-particles>
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
    <!-- </transition> -->
</template>

<script>
import Login from './Login'
import SignUp from './SignUp'
// import d

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
    },
    mounted: function() {
    }

}
</script>

<style lang="scss" >
.homepage {
    // overflow: hidden;
    height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .homepage-container {
        overflow: hidden;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        height: 500px;
        width: 800px;
        border-radius: 8px;
        box-shadow: 0 7px 20px 0px rgba(0, 0, 0, 0.3);
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

.particles {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    canvas{
        display: block;
    }
}
</style>
