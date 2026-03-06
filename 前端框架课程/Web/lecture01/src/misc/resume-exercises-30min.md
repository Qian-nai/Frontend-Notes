# 简历制作渐进式练习（30分钟）

基于李明简历内容设计的HTML/CSS实战练习，采用循序渐进的方式，从语义化结构到完整样式。

---

## 练习设计理念

### 第一性原理

1. **结构先于样式**：先掌握正确的HTML语义化结构，再添加CSS美化
2. **渐进增强**：从基础到复杂，每步都有可见成果
3. **实用导向**：所有练习基于真实简历内容，完成后可直接使用

### 练习结构

| 步骤 | 主题 | 时长 | 核心技能 |
|------|------|------|----------|
| 练习1 | HTML语义化结构 | 10分钟 | HTML5标签、语义化 |
| 练习2 | 基础CSS样式 | 10分钟 | 选择器、盒模型、文字样式 |
| 练习3 | 模块样式与响应式 | 10分钟 | Flexbox、响应式、动画 |

---

## 练习1：HTML语义化结构（10分钟）

### 目标
将无语义化的`div`标签重写为正确的HTML5语义化标签。

### 核心知识点
- `header` - 页面或区块的头部
- `main` - 页面主要内容区（每个页面只能有一个）
- `section` - 主题性内容区块
- `article` - 独立的、完整的内容块
- `nav` - 导航链接区域
- `time` - 时间/日期标记
- `h1-h3` - 标题层级（每个页面应只有一个h1）

### 任务清单

**任务1：重构头部**
```html
<!-- 原代码 -->
<div>李明</div>
<div>前端开发工程师</div>
<div>
    <span>138-1234-5678</span>
    <span>liming@example.com</span>
</div>

<!-- 目标结构 -->
<header>
    <h1>李明</h1>
    <p>前端开发工程师</p>
    <nav>
        <a href="tel:13812345678">📱 138-1234-5678</a>
        <a href="mailto:liming@example.com">✉️ liming@example.com</a>
    </nav>
</header>
```

**任务2：使用main包裹内容**
```html
<main>
    <!-- 所有section放在这里 -->
</main>
```

**任务3：使用section划分模块**
```html
<section>
    <h2>个人简介</h2>
    <p>...</p>
</section>

<section>
    <h2>教育背景</h2>
    <!-- article用于独立的教育经历 -->
    <article>
        <h3>某某科技大学...</h3>
        <time>2019.09 - 2023.06</time>
        <ul>
            <li>GPA: 3.6/4.0</li>
        </ul>
    </article>
</section>
```

### 检查清单
- [ ] 页面只有一个`h1`
- [ ] 使用了`header`包裹头部
- [ ] 使用了`main`包裹主要内容
- [ ] 使用了`section`划分各模块
- [ ] 使用了`article`包裹独立项目
- [ ] 使用了`nav`包裹联系方式
- [ ] 使用了`time`标记时间
- [ ] 使用了`ul/ol/li`展示列表
- [ ] 链接使用了正确的协议（tel:, mailto:, https://）

---

## 练习2：基础CSS样式（10分钟）

### 目标
在语义化HTML基础上添加基础CSS美化。

### 核心知识点
- 通配符选择器 `*`
- 元素选择器、类选择器、后代选择器
- CSS盒模型：content + padding + border + margin
- 文字样式：font-family, font-size, color, line-height
- 背景样式：background-color, linear-gradient
- 链接伪类：`:hover`
- 居中技巧：max-width + margin: 0 auto

### 任务清单

**任务1：重置默认样式**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  /* 盒模型设置 */
}
```

**任务2：设置body基础样式**
```css
body {
    font-family: 'Microsoft YaHei', sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
}
```

**任务3：设置简历容器**
```css
.resume-container {
    max-width: 800px;
    margin: 0 auto;  /* 水平居中 */
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

**任务4：设置头部样式**
```css
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    text-align: center;
}
```

**任务5：设置标题样式**
```css
h1 {
    font-size: 32px;
    margin-bottom: 8px;
}

h2 {
    font-size: 22px;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-bottom: 15px;
}
```

**任务6：设置链接悬停效果**
```css
header a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

header a:hover {
    opacity: 0.8;
    text-decoration: underline;
}
```

**任务7：设置section样式**
```css
section {
    padding: 30px;
    border-bottom: 1px solid #eee;
}

section:last-child {
    border-bottom: none;
}
```

### 预期效果
- 紫色渐变头部背景
- 白色内容区，有阴影效果
- 标题有底部边框装饰
- 链接有悬停效果
- 整体居中，最大宽度800px

---

## 练习3：模块样式与响应式（10分钟）

### 目标
完善各模块样式，添加Flexbox布局和响应式支持。

### 核心知识点
- Flexbox布局：display: flex, justify-content, align-items, gap
- 圆形头像：border-radius: 50%
- 过渡动画：transition
- 响应式设计：@media查询
- 打印样式：@media print

### 任务清单

**任务1：头部Flexbox布局**
```css
header {
    display: flex;
    align-items: center;
    gap: 30px;
    /* 移除text-align: center，改为左对齐 */
}
```

**任务2：添加头像样式**
```css
.avatar-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 50%;  /* 圆形 */
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    flex-shrink: 0;  /* 防止压缩 */
}
```

**任务3：联系方式Flexbox布局**
```css
.contact {
    display: flex;
    flex-wrap: wrap;  /* 允许换行 */
    gap: 12px 20px;   /* 行列间距 */
}
```

**任务4：左边框装饰标题**
```css
section h2 {
    border-left: 4px solid #667eea;  /* 左边框 */
    padding-left: 15px;
    /* 移除之前的border-bottom */
}
```

**任务5：添加悬停动画**
```css
article {
    transition: transform 0.3s ease, background 0.3s ease;
    padding: 15px;
    border-radius: 6px;
}

article:hover {
    background: #f8f9fa;
    transform: translateX(5px);  /* 向右移动5px */
}
```

**任务6：响应式断点**
```css
/* 手机端 */
@media screen and (max-width: 767px) {
    header {
        flex-direction: column;  /* 垂直排列 */
        text-align: center;
    }

    .contact {
        justify-content: center;
    }

    h1 {
        font-size: 24px;  /* 缩小标题 */
    }
}
```

**任务7：打印样式优化（选做）**
```css
@media print {
    body {
        background: white;
    }

    .resume-container {
        box-shadow: none;
    }

    /* 显示链接URL */
    .contact a::after {
        content: " (" attr(href) ")";
        font-size: 12px;
    }
}
```

### 预期效果
- 头部左侧圆形头像，右侧信息
- 联系方式横向排列，自动换行
- Section标题左侧有紫色边框
- 项目卡片悬停时有移动效果
- 手机端自动变为垂直居中布局

---

## 练习文件说明

| 文件 | 说明 |
|------|------|
| `exercise-resume-step1.html` | 练习1：HTML语义化（需完成） |
| `answer-resume-step1.html` | 练习1答案 |
| `exercise-resume-step2.html` | 练习2：基础CSS（需完成） |
| `answer-resume-step2.html` | 练习2答案 |
| `exercise-resume-step3.html` | 练习3：响应式（需完成） |
| `answer-resume-step3.html` | 练习3答案 |

---

## 进阶挑战

完成三个基础练习后，可以尝试以下拓展：

1. **技能进度条**：使用`div`嵌套实现技能熟练度进度条
2. **时间线布局**：为教育背景添加垂直时间线
3. **主题切换**：使用CSS变量实现深色/浅色主题切换
4. **打印按钮**：添加"打印简历"按钮，调用`window.print()`

---

## 常见问题

**Q1: 为什么要使用语义化标签？**
> 语义化标签有助于：SEO优化、屏幕阅读器访问、代码可读性、团队协作。

**Q2: box-sizing: border-box 的作用？**
> 使元素的padding和border不增加总宽度，简化布局计算。

**Q3: 如何选择断点？**
> 常用断点：768px（平板/手机分界）、1024px（平板/桌面分界）。

**Q4: Flexbox和Grid如何选择？**
> 一维布局（横向或纵向）用Flexbox，二维布局（同时行列）用Grid。

---

## 参考资源

- [MDN HTML元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
- [MDN CSS参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Flexbox学习游戏
- [Can I use](https://caniuse.com/) - 浏览器兼容性查询
