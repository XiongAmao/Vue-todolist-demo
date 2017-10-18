<template>
    <div class="signup">
        <h1>Sign Up</h1>
        <form class="form" v-on:submit.prevent="signUp">
            <!-- <div class="form-item" :class="{ filled: emailFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-email"></use>
                </svg>
                <input id="su-email" v-model="signUpForm.email" class="item-text" type="email" autocomplete="false">
                <label for="su-email">Email</label>
            </div> -->

            <div class="form-item" :class="{ filled: usernameFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-username"></use>
                </svg>
                <input id="su-username" v-model="signUpForm.username" class="item-text" type="text" autocomplete="false">
                <label for="su-username">Username</label>
            </div>

            <div class="form-item" :class="{ filled: passwordFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-password"></use>
                </svg>
                <input id="su-password" :type="showPassword ? 'text' : 'password'" :value="signUpForm.password" v-on:input="signUpForm.password = $event.target.value" class="item-text">
                <label for="su-password">Password</label>

                <transition name="fade">
                    <div v-if="signUpForm.password" @click="toggleShowPassword" class="password-hidden-btn">
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
                <input @click="signUp" type="submit" class="submit-btn" value="Sign In">
            </div>
        </form>

        <div class="form-toggle">

            <a @click.stop.prevent="toggleView" class="">Have an Account?
                <span>Log In</span>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            signUpForm: {
                username: '',
                password: '',
                // email: '',
            },
            showPassword: false,
        }
    },
    methods: {
        toggleView: function() {
            this.$store.commit('TOGGLE_LOGIN_VIEW', 'Login')
            this.$store.commit('RESET_ERRORMESSAGE')
        },
        toggleShowPassword: function() {
            if (!this.signUpForm.password) return
            this.showPassword = !this.showPassword
        },
        signUp: function() {
            if (!this.signUpForm.username) {
                if (!this.signUpForm.password) {
                    return
                }
            }
            this.$store.dispatch('signup', this.signUpForm)
        }
    },
    computed: {
        emailFilled: function() {
            return this.signUpForm.email ? true : false
        },
        usernameFilled: function() {
            return this.signUpForm.username ? true : false
        },
        passwordFilled: function() {
            return this.signUpForm.password ? true : false
        },
        errorMsg: function() {
            return this.$store.state.errorMsg
        },
        errorMsgState: function() {
            return this.$store.state.errorMsgState
        }
    },
    watch: {
        errorMsgState: function() {
            setTimeout(function() {
                this.$store.state.errorMsgState = false
            }.bind(this), 3000)
        }
    }
}
</script>
