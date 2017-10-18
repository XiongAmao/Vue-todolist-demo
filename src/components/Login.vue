<template>
    <div class="login">
        <h1>Log In</h1>
        <form class="form" v-on:submit.prevent="login">
            <!-- Username item -->
            <div class="form-item" :class="{ filled: usernameFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-username"></use>
                </svg>
                <input id="lg-username" v-model="loginForm.username" class="item-text" type="text" autocomplete="false">
                <label for="lg-username">Username</label>
            </div>

            <!-- password item -->
            <div class="form-item" :class="{ filled: passwordFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-password"></use>
                </svg>

                <input id="lg-password" :type="showPassword ? 'text' : 'password'" :value="loginForm.password" v-on:input="loginForm.password = $event.target.value" class="item-text">
                <label for="lg-password">Password</label>

                <transition name="fade">
                    <div v-if="loginForm.password" @click="toggleShowPassword" class="password-hidden-btn">

                        <svg v-show="!showPassword" class="icon" aria-hidden="true">
                            <use xlink:href="#icon-eye"></use>
                        </svg>

                        <svg v-show="showPassword" class="icon" aria-hidden="true">
                            <use xlink:href="#icon-eyeHide"></use>
                        </svg>
                    </div>
                </transition>

            </div>

            <transition name="error-fade">
                <div v-show="errorMsg" class="form-error" :class="{ active:errorMsgState }">
                    <div class="error-text">{{ errorMsg }}</div>
                </div>
            </transition>

            <div class="form-submit">
                <input @click="login" type="submit" class="submit-btn" value="Log In">
            </div>

        </form>

        <div class="form-toggle">
            <p>or</p>
            <a @click.stop.prevent="toggleView" class="">Create a New Account !</a>
        </div>

    </div>
</template>
<script>
import _throttle from 'lodash/throttle'

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            showPassword: false,
        }
    },
    methods: {
        toggleView: function() {
            this.$store.commit('TOGGLE_LOGIN_VIEW', 'SignUp')
            this.$store.commit('RESET_ERRORMESSAGE')
        },
        toggleShowPassword: function() {
            if (!this.loginForm.password) return
            this.showPassword = !this.showPassword
        },
        login: _throttle(function() {
            if (!this.loginForm.username) {
                if (!this.loginForm.password) {
                    return
                }
            }
            this.$store.dispatch('login', this.loginForm)
        }, 300)
    },
    computed: {
        usernameFilled: function() {
            return this.loginForm.username ? true : false
        },
        passwordFilled: function() {
            return this.loginForm.password ? true : false
        },
        errorMsg: function() {
            return this.$store.state.errorMsg
        },
        errorMsgState: function(){
            return this.$store.state.errorMsgState
        }
    },
    watch:{
        errorMsgState:function(){
            setTimeout(function(){
                this.$store.state.errorMsgState = false
            }.bind(this),3000)
        }
    }
}
</script>

<style lang="scss">
/* include SignUp.vue */
.login-panel {
    background: #ffffff;
    padding: 10px 40px;
    @media screen and (max-width: 768px) {
        padding:20px;
    }
    h1 {
        text-align: center;
        margin-bottom: 40px;
        font-family: 'Orbitron', sans-serif
    }
    .form {
        margin-top: 12px;
        .form-item {
            position: relative;
            border-bottom: #bdbdbd 1px solid;
            margin-bottom: 32px;
            &.filled {
                label {
                    font-size: 12px;
                    transform: translate3d(0, -70%, 0);
                    left: 0;
                    color: #00BDC4;
                }
            }
            .icon {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 20px;
                fill: #bdbdbd;
                transition: .3s;
            }
            .item-text {
                padding: 12px 12px 12px 32px;
                width: 100%;
                border: none;
                outline: none;
            }
            .item-text:focus+label {
                font-size: 12px;
                transform: translate3d(0, -70%, 0);
                left: 0;
                color: #00BDC4;
            }
            label {
                position: absolute;
                height: 42px;
                line-height: 42px;
                top: 0;
                left: 32px;
                text-align: center;
                color: #aaa;
                transition: .3s ease-out;
                user-select: none;
            }
            .password-hidden-btn {
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 20px;
                cursor: pointer;
                svg {
                    transition: .3s;
                }
                &:hover {
                    svg {
                        fill: #7d8699;
                    }
                }
            }
            .fade-enter-active,
            .fade-leave-active {
                transition: all .3s ease;
            }
            .fade-enter,
            .fade-leave-to {
                opacity: 0;
            }
        }

        .form-error {
            position: relative;
            // text-align: center;
            margin-left: 4px;
            color: #ff0072;
            .error-text {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(-130%);
                width:100%;
                font-size: 12px;
            }
            &.error-fade-enter-active,
            &.error-fade-leave-active {
                transition: all 1s cubic-bezier(.62,1.53,.45,-0.68);
            }
            &.error-fade-enter,
            &.error-fade-leave-to {
                opacity: 0;
            }
            &.active{
                animation: shine linear 1.5s infinite alternate;
                @keyframes shine {
                    0% {
                        opacity: 1;
                    }
                    50%{
                        opacity: .3;
                    }
                    100%{
                        opacity: 1;
                    }
                }
            }
        }

    }

    .form-submit {
        overflow: hidden;
        .submit-btn {
            display: block;
            text-align: center;
            width: 100%;
            padding: 12px;
            margin: 12px 0;
            background: #00D4C4;
            color: #fff;
            outline: none;
            text-decoration: none;
            box-shadow: none;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            transition: .3s ease-in-out;
            box-shadow: 0 2px 10px 2px #e3e3e3;
            &:hover {
                background: #00BDC4;
            }
        }
    }
    .form-toggle {
        color: #7d8699;
        text-align: center;
        cursor: pointer;
        p {
            padding: 0 0 12px;
        }
        a {
            color: #00bdbd;
            &::visited {
                color: inherit;
            }
            span {
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
}
</style>
