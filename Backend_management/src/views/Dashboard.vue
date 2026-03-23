<template>
    <div class="dashboard-container">
        <!-- 1. 顶部四个数据卡片 -->
        <el-row :gutter="20" class="data-cards">
            <el-col :span="6" v-for="item in cardData" :key="item.title">
                <el-card shadow="hover" class="card-item">
                    <div class="card-icon" :style="{ backgroundColor: item.color }">
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                    </div>
                    <div class="card-info">
                        <div class="card-title">{{ item.title }}</div>
                        <div class="card-value">
                            {{ item.value }} <span class="card-unit">{{ item.unit }}</span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <!-- 2. 中间的两个图表 -->
        <el-row :gutter="20" class="chart-section">
            <!-- 左侧：折线图（报名趋势） -->
            <el-col :span="14">
                <el-card shadow="never">
                    <template #header>
                        <div class="card-header">
                            <span>近 7 天报名趋势</span>
                        </div>
                    </template>
                    <!-- 这里是 ECharts 画图的“画布”，必须指定高度 -->
                    <div ref="lineChartRef" style="width: 100%; height: 350px;"></div>
                </el-card>
            </el-col>

            <!-- 右侧：饼图（年龄分布） -->
            <el-col :span="10">
                <el-card shadow="never">
                    <template #header>
                        <div class="card-header">
                            <span>学员年龄段分布</span>
                        </div>
                    </template>
                    <!-- 这里是 ECharts 画饼图的“画布” -->
                    <div ref="pieChartRef" style="width: 100%; height: 350px;"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

// --- 卡片假数据 ---
const cardData = ref([
    { title: '总报名人数', value: 128, unit: '人', icon: 'User', color: '#409EFF' },
    { title: '今日新增', value: 12, unit: '人', icon: 'DataLine', color: '#67C23A' },
    { title: '公益课占比', value: 85, unit: '%', icon: 'Star', color: '#E6A23C' },
    { title: '转化率', value: 32.5, unit: '%', icon: 'TrendCharts', color: '#F56C6C' }
])

// --- ECharts 核心逻辑 ---
// 1. 获取 DOM 元素的引用（相当于 document.getElementById）
const lineChartRef = ref(null)
const pieChartRef = ref(null)

// 2. 保存图表实例，方便后续销毁或重绘
let lineChart = null
let pieChart = null

// 3. 画折线图的方法
const initLineChart = () => {
    lineChart = echarts.init(lineChartRef.value)

    // ECharts 的灵魂：Option 配置对象
    const option = {
        tooltip: { trigger: 'axis' }, // 鼠标放上去的提示框
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [15, 23, 18, 35, 22, 45, 30],
                type: 'line',
                smooth: true, // 让线条变平滑
                areaStyle: { // 区域填充渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(64,158,255, 0.5)' },
                        { offset: 1, color: 'rgba(64,158,255, 0)' }
                    ])
                },
                itemStyle: { color: '#409EFF' }
            }
        ]
    }
    lineChart.setOption(option)
}

// 4. 画饼图的方法
const initPieChart = () => {
    pieChart = echarts.init(pieChartRef.value)

    const option = {
        tooltip: { trigger: 'item', formatter: '{b}: {c}人 ({d}%)' },
        legend: { bottom: '0', left: 'center' }, // 底部图例
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '70%'], // 环形图（内圈40%，外圈70%）
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: { show: false }, // 默认不显示文字
                data: [
                    { value: 45, name: '3-6岁 (启蒙班)' },
                    { value: 60, name: '7-12岁 (少儿班)' },
                    { value: 23, name: '13-18岁 (青少班)' }
                ]
            }
        ]
    }
    pieChart.setOption(option)
}

// 5. 监听窗口大小变化，让图表自适应缩放（企业级细节）
const handleResize = () => {
    if (lineChart) lineChart.resize()
    if (pieChart) pieChart.resize()
}

// 6. 页面挂载完成（DOM 出现后）才能画图
onMounted(() => {
    // 给浏览器 50 毫秒的时间去计算宽度
    setTimeout(() => {
        initLineChart()
        initPieChart()
        window.addEventListener('resize', handleResize)
    }, 50)
})

// 7. 页面销毁前，移除监听，防止内存泄漏（企业级细节）
onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (lineChart) lineChart.dispose()
    if (pieChart) pieChart.dispose()
})
</script>

<style scoped>
.dashboard-container {
    padding: 10px;
}

.data-cards {
    margin-bottom: 20px;
}

.card-item {
    display: flex;
    align-items: center;
}

/* 修复深度选择器导致的布局问题 */
/* :deep(.el-card__body) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
} */
/* 只让顶部数据卡片使用 flex 布局对齐 */
.data-cards :deep(.el-card__body) {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
}

.card-icon {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #fff;
    margin-right: 20px;
}

.card-info {
    display: flex;
    flex-direction: column;
}

.card-title {
    font-size: 14px;
    color: #909399;
    margin-bottom: 8px;
}

.card-value {
    font-size: 28px;
    font-weight: bold;
    color: #303133;
}

.card-unit {
    font-size: 14px;
    font-weight: normal;
    color: #909399;
}

.card-header {
    font-weight: bold;
}
</style>