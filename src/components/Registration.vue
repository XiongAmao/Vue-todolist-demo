<template>
    <Form ref="registrationForm" :model="registrationForm" :rules="ruleLogin">
        <Form-item prop="username">
            <Input type="text" v-model="registrationForm.username" placeholder="请输入账号或邮箱">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="registrationForm.password" placeholder="请输入密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('registrationForm')">注册</Button>
        </Form-item>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            registrationForm: {
                username: '',
                password: '',
                email: ''
            },
            ruleLogin: {
                username: [
                    { required: true, message: '请填写用户名或邮箱', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit: function (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');

                    this.$store.dispatch('register', {
                        registrationForm: this.registrationForm
                    })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    }
}
</script>
