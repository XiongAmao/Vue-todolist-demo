<template>
    <div class="signup">
        <h1>Sign Up</h1>
        <form>
            <div class="form-item">
                <input id="su-email" class="item-text" type="email">
                <label for="su-email">Email</label>
            </div>
            <div class="form-item">
                <input id="su-username" class="item-text" type="text">
                <label for="su-username">Username</label>
            </div>
            <div class="form-item">
                <input id="su-password" class="item-text" type="password">
                <label for="su-password">Password</label>
            </div>
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
            }
        }
    },
    methods: {
        handleSubmit: function(name) {
            var self = this

        },
        toggleView: function() {
            this.$store.commit('TOGGLE_LOGIN_VIEW', 'Login')
        }
    }
}
</script>
