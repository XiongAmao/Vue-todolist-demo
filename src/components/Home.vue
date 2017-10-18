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
                    <!-- TODO: 3Dhover  -->
                </div>

            </div>
            
        </div>
    <!-- </transition> -->
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
    computed: {
        loginView: function() {
            return this.$store.state.loginPanelView
        },
        user: function() {
            return this.$store.state.user
        },
    },
    watch: {
        // 监听用户是否登录
        'user':{
            handler:function(user){
                if(this.$store.state.user){
                    this.$router.push('/todo')
                    this.$store.dispatch('fetchTodos')
                }
            }
        }
    }
}
</script>

<style lang="scss" >
.homepage {
    // overflow: hidden;
    height: 100vh;
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
        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            height:100vh;
            border-radius: 0;
        }
    }
    .home-banner {
        padding: 10px;
        padding-top: 5%;
        width: 50%;
        text-align: center;
        background: #00D4C4;
        @media screen and ( max-width: 768px) {
            width:100%;
            height:20vh;
        }
        .title {
            font-family: 'Orbitron', sans-serif;
            font-size: 80px;
            margin-bottom: 20px;
            color: #444;
            @media screen and ( max-width: 768px) {
                margin-bottom: 0;
                font-size: 64px;
            }
            @media screen and ( max-width: 375px) {
                margin-bottom: 0;
                font-size: 48px;
            }
        }

        .description {
            font-size: 24px;
            @media screen and ( max-width: 768px) {
                font-size: 20px;
            }
            @media screen and ( max-width: 375px) {
                font-size: 18px;
            }
        }
    }

    .login-panel {
        width: 50%;
        @media screen and (max-width: 768px) {
            width:100%;
            height: 80vh;
        }
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
    @media screen and (max-width: 768px) {
        display:none;
    }
}
</style>
