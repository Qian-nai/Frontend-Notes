# 个人简历项目专项练习

本练习集针对"个人简历页面"大作业设计，分模块考察HTML5语义化和CSS布局技能。

---

## 练习4：简历头部区域（15分钟）

**目标**：实现包含头像、姓名、职位和联系方式的响应式头部

**要求**：
1. 使用语义化标签（`header`、`h1`、`nav`等）
2. 头像使用圆形裁剪，尺寸120px×120px
3. 桌面端：头像左浮动，信息右侧排列
4. 移动端（<768px）：头像居中，信息居中对齐
5. 联系方式使用图标+文字形式（可用emoji或字体图标代替）

**初始代码**：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>简历头部练习</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* 在此添加你的CSS代码 */

    </style>
</head>
<body>
    <!-- 在此添加你的HTML结构 -->

    <div class="photo">头像占位</div>
    <div class="name">张三</div>
    <div class="title">前端开发工程师</div>
    <div class="contact">
        <span>电话：138-0000-0000</span>
        <span>邮箱：zhangsan@example.com</span>
        <span>GitHub：github.com/zhangsan</span>
    </div>
</body>
</html>
```

**参考答案**：

```html
<header class="resume-header">
    <div class="container">
        <img src="avatar.jpg" alt="个人头像" class="avatar">
        <div class="info">
            <h1 class="name">张三</h1>
            <p class="title">前端开发工程师</p>
            <nav class="contact">
                <a href="tel:13800000000">
                    <span class="icon">📱</span> 138-0000-0000
                </a>
                <a href="mailto:zhangsan@example.com">
                    <span class="icon">✉️</span> zhangsan@example.com
                </a>
                <a href="https://github.com/zhangsan" target="_blank">
                    <span class="icon">🐙</span> github.com/zhangsan
                </a>
            </nav>
        </div>
    </div>
</header>
```

```css
.resume-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px 20px;
    color: white;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 30px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;  /* 圆形裁剪 */
    object-fit: cover;
    border: 4px solid rgba(255,255,255,0.3);
    flex-shrink: 0;  /* 防止头像被压缩 */
}

.name {
    font-size: 32px;
    margin-bottom: 8px;
}

.title {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 15px;
}

.contact {
    display: flex;
    flex-wrap: wrap;
    gap: 15px 25px;
}

.contact a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: opacity 0.3s;
}

.contact a:hover {
    opacity: 0.8;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        text-align: center;
    }

    .contact {
        justify-content: center;
    }

    .name {
        font-size: 24px;
    }
}
```

**知识点**：
- `border-radius: 50%` 实现圆形图片
- Flexbox布局与`flex-shrink`防止压缩
- 响应式断点`@media`的基本用法
- 渐变背景`linear-gradient`

---

## 练习5：技能列表与进度条（15分钟）

**目标**：使用进度条或标签形式展示技能掌握程度

**要求**：
1. 使用语义化的`section`和`ul/li`结构
2. 实现两种展示形式：
   - 进度条形式：显示百分比，带有动画填充效果
   - 标签云形式：不同熟练度使用不同颜色/大小
3. 进度条使用`div`嵌套实现，外层背景色，内层填充色
4. 标签形式使用`display: inline-block`或Flexbox换行

**初始代码**：

```html
<section class="skills">
    <h2>技能特长</h2>

    <!-- 进度条形式 -->
    <div class="skill-bar">
        <span class="skill-name">HTML/CSS</span>
        <div class="progress">
            <div class="progress-fill" style="width: 90%;"></div>
        </div>
        <span class="skill-level">90%</span>
    </div>

    <!-- 标签形式 -->
    <div class="skill-tags">
        <span class="tag expert">Vue.js</span>
        <span class="tag intermediate">React</span>
        <span class="tag beginner">TypeScript</span>
    </div>
</section>
```

```css
.skills {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

.skills h2 {
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-bottom: 20px;
    color: #333;
}

/* 进度条形式样式 */
.skill-bar {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 15px;
}

.skill-name {
    width: 100px;
    font-weight: bold;
    color: #555;
}

.progress {
    flex: 1;
    height: 12px;
    background: #e0e0e0;
    border-radius: 6px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 6px;
    transition: width 1s ease-out;
}

.skill-level {
    width: 45px;
    text-align: right;
    color: #667eea;
    font-weight: bold;
}

/* 标签形式样式 */
.skill-tags {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.tag {
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
}

.tag.expert {
    background: #4CAF50;
    color: white;
    font-size: 16px;
}

.tag.intermediate {
    background: #2196F3;
    color: white;
}

.tag.beginner {
    background: #FFC107;
    color: #333;
    font-size: 13px;
}
```

**拓展挑战**：
1. 使用CSS动画让进度条在页面加载时从0%增长到目标值
2. 添加鼠标悬停效果（tooltip显示详细描述）

---

## 练习6：时间线布局（教育/项目经历）（20分钟）

**目标**：使用CSS实现垂直时间线布局

**要求**：
1. 左侧有一条垂直的时间线（使用`border-left`或伪元素`::before`）
2. 每个经历项包含：时间、标题、描述
3. 时间点使用圆点标记
4. 桌面端：时间线在左侧，内容在右侧
5. 实现悬停效果：高亮当前经历项

**初始代码**：

```html
<section class="timeline-section">
    <h2>教育背景</h2>
    <div class="timeline">
        <div class="timeline-item">
            <div class="time">2021.09 - 2025.06</div>
            <div class="content">
                <h3>某某大学</h3>
                <p class="major">计算机科学与技术 本科</p>
                <p class="desc">主修课程：数据结构、算法设计、Web前端开发...</p>
            </div>
        </div>
        <div class="timeline-item">
            <div class="time">2018.09 - 2021.06</div>
            <div class="content">
                <h3>某某高中</h3>
                <p class="desc">理科实验班，获得省级数学竞赛二等奖</p>
            </div>
        </div>
    </div>
</section>
```

**参考答案**：

```css
.timeline-section {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

.timeline-section h2 {
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-bottom: 30px;
    color: #333;
}

.timeline {
    position: relative;
    padding-left: 30px;
}

/* 时间线竖线 */
.timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #667eea, #764ba2);
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    transition: all 0.3s ease;
}

/* 时间点圆点 */
.timeline-item::before {
    content: '';
    position: absolute;
    left: -28px;
    top: 24px;
    width: 12px;
    height: 12px;
    background: #667eea;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 0 3px #667eea;
}

.timeline-item:hover {
    background: #e3f2fd;
    transform: translateX(5px);
}

.timeline-item:hover::before {
    background: #764ba2;
    box-shadow: 0 0 0 3px #764ba2;
}

.time {
    font-size: 14px;
    color: #667eea;
    font-weight: bold;
    margin-bottom: 8px;
}

.timeline-item h3 {
    color: #333;
    margin-bottom: 5px;
}

.major {
    color: #666;
    font-size: 15px;
    margin-bottom: 10px;
}

.desc {
    color: #888;
    line-height: 1.6;
}
```

**知识点**：
- 伪元素`::before`创建装饰性元素
- CSS定位（`position: relative/absolute`）
- 过渡动画`transition`
- 阴影和边框的组合使用

---

## 练习7：响应式断点实战（10分钟）

**目标**：实现简历页面的三端适配

**场景**：简历页面在以下设备下的显示要求：

| 设备 | 宽度 | 布局要求 |
|------|------|----------|
| 手机 | < 768px | 单列，文字居中，头像在顶部 |
| 平板 | 768px - 1024px | 双列，左侧固定宽侧边栏，右侧内容 |
| 桌面 | > 1024px | 双列，侧边栏25%，内容75%，最大宽度限制 |

**初始代码**：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>响应式简历布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Microsoft YaHei', sans-serif;
            line-height: 1.6;
        }

        .resume {
            /* 在此添加容器样式 */
        }

        .sidebar {
            background: #2c3e50;
            color: white;
            padding: 30px;
        }

        .main-content {
            padding: 30px;
            background: #f5f5f5;
        }

        /* 手机端样式（默认） */

        /* 平板端样式（768px - 1024px） */

        /* 桌面端样式（> 1024px） */

    </style>
</head>
<body>
    <div class="resume">
        <aside class="sidebar">
            <h2>侧边栏</h2>
            <p>个人信息、联系方式、技能</p>
        </aside>
        <main class="main-content">
            <h2>主要内容</h2>
            <p>教育背景、项目经历、自我评价</p>
        </main>
    </div>
</body>
</html>
```

**参考答案**：

```css
.resume {
    min-height: 100vh;
}

/* ========== 手机端样式（默认，< 768px）========== */
.sidebar {
    text-align: center;
}

.sidebar h2 {
    margin-bottom: 15px;
}

.main-content h2 {
    color: #333;
    margin-bottom: 15px;
}

/* ========== 平板端样式（768px - 1024px）========== */
@media screen and (min-width: 768px) {
    .resume {
        display: flex;
    }

    .sidebar {
        width: 280px;  /* 固定宽度 */
        flex-shrink: 0;
        min-height: 100vh;
    }

    .main-content {
        flex: 1;
    }
}

/* ========== 桌面端样式（> 1024px）========== */
@media screen and (min-width: 1024px) {
    .resume {
        max-width: 1200px;
        margin: 0 auto;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }

    .sidebar {
        width: 25%;  /* 百分比宽度 */
    }

    .main-content {
        width: 75%;
    }
}
```

**测试方法**：
1. 在浏览器中打开页面
2. 按F12打开开发者工具
3. 点击设备切换按钮（或按Ctrl+Shift+M）
4. 选择不同设备测试：iPhone SE（手机）、iPad（平板）、Desktop（桌面）

---

## 练习8：CSS变量与主题切换（选做，15分钟）

**目标**：使用CSS自定义属性（变量）实现简历主题色切换

**要求**：
1. 定义CSS变量存储主题色（主色、副色、背景色、文字色）
2. 创建两个主题：默认蓝色主题、暗色主题
3. 使用`:root`和`[data-theme]`选择器切换
4. 所有颜色值使用`var()`函数引用变量

**参考答案**：

```css
/* ===== 主题变量定义 ===== */

/* 默认蓝色主题 */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --bg-color: #ffffff;
    --surface-color: #f8f9fa;
    --text-primary: #333333;
    --text-secondary: #666666;
    --border-color: #e0e0e0;
}

/* 暗色主题 */
[data-theme="dark"] {
    --primary-color: #82b1ff;
    --secondary-color: #b39ddb;
    --bg-color: #1a1a2e;
    --surface-color: #16213e;
    --text-primary: #eaeaea;
    --text-secondary: #a0a0a0;
    --border-color: #0f3460;
}

/* ===== 使用变量的样式 ===== */
body {
    background: var(--bg-color);
    color: var(--text-primary);
    transition: background 0.3s, color 0.3s;
}

.resume-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.section-card {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

h2 {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
}

/* 切换按钮样式 */
.theme-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
```

```javascript
// 切换主题函数
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? '' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 页面加载时恢复主题
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}
```

---

## 综合练习评分标准

| 评分项 | 分值 | 具体要求 |
|--------|------|----------|
| HTML语义化 | 20分 | 正确使用header、main、section、article、nav等标签 |
| 布局实现 | 30分 | Flexbox/Grid使用正确，布局符合要求，无错位 |
| 响应式设计 | 25分 | 三端适配良好，断点设置合理，过渡平滑 |
| 视觉效果 | 15分 | 颜色搭配协调，间距合理，有适当的视觉层次 |
| 代码规范 | 10分 | 命名规范，有注释，格式整齐，无冗余代码 |

---

## 提交检查清单

提交前请确认：

- [ ] 所有图片都有`alt`属性
- [ ] 所有链接都可以点击（使用正确的`href`）
- [ ] 页面在Chrome/Firefox/Safari中显示正常
- [ ] 在开发者工具中测试了三种屏幕尺寸
- [ ] 代码通过了W3C HTML验证器（https://validator.w3.org/）
- [ ] CSS没有使用`!important`（除非必要）
- [ ] 颜色对比度满足可读性要求
