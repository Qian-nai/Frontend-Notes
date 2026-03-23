<template>
    <el-container class="layout-container">
        <!-- 左侧侧边栏 -->
        <el-aside width="200px" class="aside">
            <div class="logo">明德书院后台</div>
            <el-menu default-active="/dashboard" class="el-menu-vertical" background-color="#304156"
                text-color="#bfcbd9" active-text-color="#409EFF" router>
                <el-menu-item index="/dashboard">
                    <el-icon>
                        <DataBoard />
                    </el-icon>
                    <span>数据看板</span>
                </el-menu-item>
                <el-menu-item index="/registrations">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>报名管理</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <!-- 右侧内容区 -->
        <el-container>
            <!-- 顶部导航 -->
            <el-header class="header">
                <div class="header-left">
                    <el-icon>
                        <Fold />
                    </el-icon>
                    <span style="margin-left: 15px;">首页 / 数据看板</span>
                </div>
                <div class="header-right">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            管理员 Admin <el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>

            <!-- 主体视图区 (页面内容会在这里切换) -->
            <el-main class="main">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

// 退出登录逻辑
const handleLogout = () => {
    // 1. 清除本地存的假 Token
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    ElMessage.success('已安全退出')
    // 2. 跳转回登录页
    router.push('/login')
}
</script>
<style scoped>
.layout-container {
    height: 100vh;
}

.aside {
    background-color: #304156;
}

.logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    background-color: #2b3649;
}

.el-menu-vertical {
    border-right: none;
}

.header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}

.header-left {
    display: flex;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
}

.el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.main {
    background-color: #f0f2f5;
    padding: 20px;
}
</style>