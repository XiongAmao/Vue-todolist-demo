<template>
    <div class="login">
        <h1>Log In</h1>
        <form>
            <div class="form-item">
                <input id="lg-username" class="item-text" type="text">
                <label for="lg-username">Username</label>
            </div>

            <div class="form-item">
                <input id="lg-password" class="item-text" type="password">
                <label for="lg-password">Password</label>
            </div>

            <input type="submit" class="form-submit" value="Log In">
        </form>
        <div class="form-toggle">
            <p ref="xxx">or</p>
            <a @click.stop.prevent="toggleView" class="">Create a New Account !</a>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
        }
    },
    methods: {
        handleSubmit: function(name) {
            var self = this
        },
        toggleView: function() {

            this.$store.commit('TOGGLE_LOGIN_VIEW', 'SignUp')

        }
    }
}
</script>

<style lang="scss">
.login-panel {
    h1 {
        text-align: center;
        margin-bottom:40px;
    }
    form {
        margin-top: 12px;
        .form-item {
            position: relative;
            border-bottom: #bdbdbd 1px solid;
            margin-bottom: 40px;
            .item-text {
                padding: 12px 12px 12px 3em;
                width: 100%;
                border: none;
            }
            .item-text:focus+label {
                font-size:12px;
                transform: translate3d(0, -90%, 0);
                left:0;
                color:#00BDC4;
            }

            label {
                position: absolute;
                height: 42px;
                line-height: 42px;
                top: 0;
                left: 48px;
                text-align: center;
                color: #aaa;
                transition: .3s ease-out;
            }
        }
    }


    .form-submit {
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
    .form-toggle {
        color: #7d8699;
        text-align: center;
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
