<template>
    <div class="login-container">
        <el-card class="login-box" shadow="always">
            <div class="title">明德书院后台管理</div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入账号 (随便填)" prefix-icon="User" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password" placeholder="请输入密码 (随便填)" prefix-icon="Lock"
                        show-password @keyup.enter="handleLogin" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn" @click="handleLogin">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loginFormRef = ref(null)

const loginForm = ref({
    username: 'admin',
    password: '123'
})

// 简单校验规则
const rules = {
    username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
}

const handleLogin = async () => {
    if (!loginFormRef.value) return
    await loginFormRef.value.validate((valid) => {
        if (valid) {
            // 1. 模拟登录成功，发个假的 Token 存到浏览器本地
            localStorage.setItem('token', 'fake-jwt-token-123456')
            localStorage.setItem('username', loginForm.value.username)

            ElMessage.success('登录成功！')

            // 2. 跳转到后台看板
            router.push('/dashboard')
        }
    })
}
</script>

<style scoped>
.login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b3b4e;
    /* 经典深色背景 */
}

.login-box {
    width: 400px;
    padding: 20px;
    border-radius: 8px;
}

.title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #333;
}

.login-btn {
    width: 100%;
    font-size: 16px;
}
</style>