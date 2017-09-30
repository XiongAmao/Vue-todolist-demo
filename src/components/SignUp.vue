<template>
    <div class="signup">
        <h1>Sign Up</h1>
        <form class="form">
            <div class="form-item" :class="{ filled: emailFilled }">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-email"></use>
                </svg>
                <input id="su-email" v-model="signUpForm.email" class="item-text" type="email" autocomplete="false">
                <label for="su-email">Email</label>
            </div>

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
                <div v-if="errorMsg" class="form-error">
                    <span>{{ errorMsg }}</span>
                </div>
            </transition>

            <input type="submit" class="form-submit" value="Sign In">
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
                email: '',
            },
            showPassword: false,
            errorMsg:'xxx'
        }
    },
    methods: {
        handleSubmit: function(name) {
            var self = this

        },
        toggleView: function() {
            this.$store.commit('TOGGLE_LOGIN_VIEW', 'Login')
        },
        toggleShowPassword: function() {
            if (!this.signUpForm.password) return
            this.showPassword = !this.showPassword
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
        }
    }
}
</script>
