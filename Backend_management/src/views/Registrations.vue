<template>
    <div class="registrations-container">
        <el-card shadow="never">
            <!-- 顶部操作区 -->
            <el-form :inline="true" :model="searchForm" class="search-form">
                <el-form-item label="学生姓名">
                    <el-input v-model="searchForm.name" placeholder="请输入姓名" clearable />
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="searchForm.phone" placeholder="请输入手机号" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">查询</el-button>
                    <el-button @click="resetSearch">重置</el-button>
                </el-form-item>
                <!-- 下面是操作按钮区，靠右 -->
                <el-form-item style="float: right;">
                    <el-button type="primary" icon="Plus" @click="openAddDialog">新增报名</el-button>
                    <el-button type="success" icon="Download" plain @click="exportExcel">导出 Excel</el-button>
                </el-form-item>
            </el-form>

            <!-- 数据表格区 -->
            <el-table :data="tableData" border stripe style="width: 100%; margin-top: 10px;" v-loading="loading">
                <el-table-column type="index" label="序号" width="60" align="center" />
                <el-table-column prop="name" label="姓名" width="100" align="center" />
                <el-table-column prop="age" label="年龄" width="80" align="center" />
                <el-table-column prop="phone" label="联系电话" width="150" align="center" />
                <el-table-column prop="school" label="就读学校" align="center" />
                <el-table-column label="参加公益课" width="120" align="center">
                    <template #default="scope">
                        <el-tag :type="scope.row.joinPublicClass ? 'success' : 'info'">
                            {{ scope.row.joinPublicClass ? '是' : '否' }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="createdAt" label="报名时间" width="180" align="center" />
                <!-- 操作列 -->
                <el-table-column label="操作" width="150" align="center" fixed="right">
                    <template #default="scope">
                        <el-button size="small" type="danger" link @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!-- 👇 这是新加的新增报名弹窗 -->
        <el-dialog v-model="dialogVisible" title="新增报名记录" width="500px">
            <!-- 表单加上了 ref 和 rules 用于校验 -->
            <el-form ref="formRef" :model="addForm" :rules="rules" label-width="100px">
                <el-form-item label="学生姓名" prop="name">
                    <el-input v-model="addForm.name" placeholder="请输入学生姓名" />
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input-number v-model="addForm.age" :min="3" :max="18" placeholder="请输入年龄" />
                </el-form-item>
                <el-form-item label="联系电话" prop="phone">
                    <el-input v-model="addForm.phone" placeholder="请输入家长手机号" maxlength="11" />
                </el-form-item>
                <el-form-item label="就读学校" prop="school">
                    <el-input v-model="addForm.school" placeholder="请输入所在学校" />
                </el-form-item>
                <el-form-item label="公益课" prop="joinPublicClass">
                    <el-switch v-model="addForm.joinPublicClass" active-text="参加" inactive-text="不参加" />
                </el-form-item>
            </el-form>
            <!-- 弹窗底部的按钮 -->
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="submitAdd" :loading="submitLoading">确认保存</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'
import * as XLSX from 'xlsx'

// 1. 基础配置
const api = axios.create({ baseURL: 'http://localhost:3000' })
const loading = ref(false)
const tableData = ref([])

// 获取列表数据
const fetchList = async () => {
    loading.value = true
    try {
        const res = await api.get('/registrations')
        tableData.value = res.data
    } catch (error) {
        // 👇 【核心精髓】：如果线上环境连不上你电脑本地的 json-server，就自动用这套假数据兜底！
        console.warn('进入线上演示模式：使用静态模拟数据')
        tableData.value = [
            { id: 1, name: '张小明(线上演示)', age: 8, phone: '13800138001', school: '第一实验小学', joinPublicClass: true, createdAt: '2026-03-15 10:00:00' },
            { id: 2, name: '李华(线上演示)', age: 10, phone: '13900139002', school: '阳光中学', joinPublicClass: false, createdAt: '2026-03-15 11:30:00' },
            { id: 3, name: '王诗语(线上演示)', age: 6, phone: '13700137003', school: '春蕾幼儿园', joinPublicClass: true, createdAt: '2026-03-16 09:15:00' }
        ]
    } finally {
        loading.value = false
    }
}

onMounted(() => fetchList())

// --- 搜索与删除逻辑 ---
const searchForm = ref({ name: '', phone: '' })
const handleSearch = async () => {
    loading.value = true
    try {
        const res = await api.get('/registrations', {
            params: { name_like: searchForm.value.name, phone_like: searchForm.value.phone }
        })
        tableData.value = res.data
    } finally {
        loading.value = false
    }
}

const resetSearch = () => {
    searchForm.value = { name: '', phone: '' }
    fetchList()
}

const handleDelete = (row) => {
    ElMessageBox.confirm(`确定要删除 ${row.name} 吗？`, '警告', { type: 'warning' })
        .then(async () => {
            await api.delete(`/registrations/${row.id}`)
            ElMessage.success('删除成功')
            fetchList()
        }).catch(() => { })
}

// --- 👇 新增逻辑 ---
const dialogVisible = ref(false)
const submitLoading = ref(false)
const formRef = ref(null)

// 表单数据初始状态
const addForm = ref({
    name: '',
    age: 6,
    phone: '',
    school: '',
    joinPublicClass: true
})

// 表单必填校验规则
const rules = {
    name: [{ required: true, message: '请输入学生姓名', trigger: 'blur' }],
    phone: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' } // 正则校验手机号
    ]
}

// 打开弹窗并清空之前的填写记录
const openAddDialog = () => {
    dialogVisible.value = true
    if (formRef.value) {
        formRef.value.resetFields()
    }
    // 恢复默认值
    addForm.value = { name: '', age: 6, phone: '', school: '', joinPublicClass: true }
}

// 提交表单保存到数据库
const submitAdd = async () => {
    // 1. 先进行表单格式校验
    if (!formRef.value) return
    await formRef.value.validate(async (valid) => {
        if (valid) {
            // 2. 校验通过，开始提交
            submitLoading.value = true
            try {
                const newData = {
                    ...addForm.value,
                    // 自动生成当前时间作为报名时间
                    createdAt: new Date().toLocaleString('zh-CN', { hour12: false })
                }
                // POST 请求，把数据塞给 json-server
                await api.post('/registrations', newData)

                ElMessage.success('新增报名成功！')
                dialogVisible.value = false // 关掉弹窗
                fetchList() // 刷新表格！
            } catch (error) {
                ElMessage.error('保存失败')
            } finally {
                submitLoading.value = false
            }
        }
    })
}

// --- 👇 导出 Excel 逻辑 ---
const exportExcel = () => {
    // 1. 如果表格里没数据，直接提示并打断
    if (tableData.value.length === 0) {
        ElMessage.warning('当前没有数据可以导出！')
        return
    }

    // 2. 把我们表格里的数据，转换成 Excel 认识的格式（顺便把英文属性名换成中文表头）
    const excelData = tableData.value.map((item, index) => {
        return {
            '序号': index + 1,
            '学生姓名': item.name,
            '年龄': item.age,
            '联系电话': item.phone,
            '就读学校': item.school,
            '是否参加公益课': item.joinPublicClass ? '是' : '否', // 把 true/false 换成好看的文字
            '报名时间': item.createdAt
        }
    })

    // 3. 核心导出三步曲
    // 生成工作表
    const worksheet = XLSX.utils.json_to_sheet(excelData)
    // 生成工作簿
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, '报名数据')
    // 下载文件（文件名带上当前日期）
    XLSX.writeFile(workbook, `明德书院报名名单_${new Date().toLocaleDateString()}.xlsx`)

    ElMessage.success('导出成功！')
}
</script>

<style scoped>
.search-form {
    background-color: #f8f8f8;
    padding: 18px 18px 0 18px;
    border-radius: 4px;
    margin-bottom: 20px;
}
</style>