# 第1讲 课堂练习

## 练习1：HTML语义化标签应用（10分钟）

**题目：** 将以下非语义化代码改写为使用HTML5语义化标签的版本。

```html
<!-- 原始代码 -->
<div class="header">
    <div class="nav">
        <div class="logo">我的网站</div>
        <div class="menu">
            <span>首页</span>
            <span>产品</span>
            <span>关于</span>
        </div>
    </div>
</div>
<div class="content">
    <div class="article">
        <div class="title">文章标题</div>
        <div class="text">文章内容...</div>
    </div>
</div>
<div class="footer">
    <div class="copyright">版权所有</div>
</div>
```

**参考答案：**

```html
<header>
    <nav>
        <div class="logo">我的网站</div>
        <ul class="menu">
            <li><a href="#">首页</a></li>
            <li><a href="#">产品</a></li>
            <li><a href="#">关于</a></li>
        </ul>
    </nav>
</header>
<main>
    <article>
        <h1>文章标题</h1>
        <p>文章内容...</p>
    </article>
</main>
<footer>
    <p>&copy; 版权所有</p>
</footer>
```

---

## 练习2：Flexbox布局实现（15分钟）

**题目：** 使用Flexbox实现一个卡片列表布局，要求：
1. 卡片水平排列，间距20px
2. 卡片高度一致，内容自适应
3. 当屏幕宽度不足时自动换行
4. 每个卡片最小宽度250px

**初始代码：**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* 在此添加你的CSS代码 */

    </style>
</head>
<body>
    <div class="card-list">
        <div class="card">
            <h3>卡片 1</h3>
            <p>这是第一张卡片的内容描述。</p>
        </div>
        <div class="card">
            <h3>卡片 2</h3>
            <p>这是第二张卡片的内容描述，内容稍微长一些，用于测试高度对齐效果。</p>
        </div>
        <div class="card">
            <h3>卡片 3</h3>
            <p>这是第三张卡片。</p>
        </div>
        <div class="card">
            <h3>卡片 4</h3>
            <p>这是第四张卡片的内容。</p>
        </div>
    </div>
</body>
</html>
```

**参考答案：**

```css
.card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.card {
    flex: 1 1 250px;
    min-width: 250px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h3 {
    margin-top: 0;
    color: #333;
}

.card p {
    color: #666;
    line-height: 1.6;
}
```

---

## 练习3：CSS选择器优先级（5分钟）

**题目：** 分析以下代码，预测文字的最终颜色，并说明原因。

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #text { color: red; }
        .content .highlight { color: blue; }
        div p { color: green; }
        p { color: orange !important; }
    </style>
</head>
<body>
    <div class="content">
        <p id="text" class="highlight" style="color: purple;">
            这段文字是什么颜色？
        </p>
    </div>
</body>
</html>
```

**答案：** 橙色（orange）

**原因分析：**

CSS选择器优先级从高到低：

| 优先级 | 选择器类型 | 示例 |
|--------|-----------|------|
| 1 | `!important` | `p { color: orange !important; }` |
| 2 | 内联样式 | `style="color: purple;"` |
| 3 | ID选择器 | `#text` |
| 4 | 类/属性/伪类选择器 | `.content .highlight` |
| 5 | 元素/伪元素选择器 | `div p` |

虽然内联样式的优先级很高，但`!important`会覆盖所有其他声明，因此最终颜色为橙色。

---

## 课后作业

### 作业题目：个人简历页面

**要求：**
1. 使用HTML5语义化标签构建页面结构
2. 使用CSS Flexbox或Grid实现响应式布局
3. 包含以下模块：
   - 头部：姓名、照片、联系方式
   - 个人简介：一段自我介绍
   - 教育背景：学校、专业、时间
   - 技能列表：使用进度条或标签展示
   - 项目经历：至少两个项目
4. 页面需适配移动端（<768px）、平板（768-1024px）和桌面（>1024px）

**提交要求：**
- 提交HTML和CSS文件（可包含在一个HTML文件中）
- 代码需有适当注释
- 附上页面在不同设备下的截图或说明

**评分标准：**

| 评分项 | 分值 | 说明 |
|-------|------|------|
| 语义化标签使用 | 20分 | 正确使用header、main、section等标签 |
| 布局实现 | 30分 | 正确使用Flexbox/Grid，布局合理 |
| 响应式设计 | 25分 | 三端适配良好，无样式错乱 |
| 内容完整性 | 15分 | 包含所有要求的模块 |
| 代码规范 | 10分 | 命名规范，有注释，格式整齐 |
