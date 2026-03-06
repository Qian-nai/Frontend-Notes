# CSS精华回顾 - 20/80原则

> 掌握这 **20%** 的核心CSS知识，应对 **80%** 的日常开发需求。

---

## 核心知识速查表

| 分类 | 属性/概念 | 使用频率 | 掌握程度 |
|------|-----------|----------|----------|
| **选择器** | 元素、类、ID、后代、伪类 | ⭐⭐⭐⭐⭐ | 必须 |
| **盒模型** | content、padding、border、margin、box-sizing | ⭐⭐⭐⭐⭐ | 必须 |
| **文字样式** | font、color、line-height、text-align | ⭐⭐⭐⭐⭐ | 必须 |
| **Flexbox** | display:flex、justify-content、align-items | ⭐⭐⭐⭐⭐ | 必须 |
| **定位** | relative、absolute、fixed | ⭐⭐⭐⭐ | 常用 |
| **响应式** | @media、viewport、百分比 | ⭐⭐⭐⭐ | 常用 |
| **背景** | background-color、background-image | ⭐⭐⭐ | 常用 |
| **过渡** | transition | ⭐⭐⭐ | 常用 |

---

## 六大练习概览

### 练习1：选择器 ⭐⭐⭐⭐⭐
**核心知识**：元素选择器、类选择器、ID选择器、后代选择器、伪类

```css
/* 元素选择器 */
p { color: #333; }

/* 类选择器 */
.highlight { background: yellow; }

/* ID选择器 */
#header { height: 60px; }

/* 后代选择器 */
.nav a { color: blue; }

/* 伪类 */
a:hover { text-decoration: underline; }
```

**为什么重要**：选择器是CSS的基础，80%的样式规则使用这些基础选择器。

---

### 练习2：盒模型 ⭐⭐⭐⭐⭐
**核心知识**：content、padding、border、margin、box-sizing

```css
* {
    box-sizing: border-box;  /* 推荐全局设置 */
}

.box {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    margin: 20px auto;  /* 水平居中 */
}
```

**为什么重要**：80%的布局问题源于对盒模型的误解。border-box让尺寸计算更直观。

**必记公式**：
- content-box（默认）：实际宽度 = width + padding×2 + border×2
- border-box：实际宽度 = width（包含padding和border）

---

### 练习3：文字样式 ⭐⭐⭐⭐⭐
**核心知识**：font-family、font-size、color、line-height、text-align

```css
body {
    font-family: 'Microsoft YaHei', sans-serif;
    font-size: 16px;
    line-height: 1.6;  /* 推荐无单位数值 */
    color: #333;
}

h1 {
    font-size: 2rem;
    text-align: center;
}
```

**为什么重要**：文字是网页的主要内容载体，这四个属性覆盖了80%的文字样式需求。

---

### 练习4：Flexbox布局 ⭐⭐⭐⭐⭐
**核心知识**：display:flex、justify-content、align-items、gap、flex

```css
.container {
    display: flex;
    justify-content: space-between;  /* 主轴对齐 */
    align-items: center;              /* 交叉轴对齐 */
    gap: 20px;                        /* 项目间距 */
}

.item {
    flex: 1;  /* 等分空间 */
}
```

**为什么重要**：Flexbox解决了80%的一维布局问题（行或列），是现代CSS的基石。

**必记属性**：
- `justify-content`: flex-start | center | space-between | space-around
- `align-items`: stretch | flex-start | center | flex-end
- `flex: 1` - 等分剩余空间

---

### 练习5：定位 ⭐⭐⭐⭐
**核心知识**：relative、absolute、fixed、z-index

```css
/* 相对定位：相对于原位置偏移 */
.relative { position: relative; top: 10px; left: 20px; }

/* 绝对定位：相对于最近的定位祖先 */
.absolute { position: absolute; right: 0; top: 0; }

/* 固定定位：相对于视口 */
.fixed { position: fixed; bottom: 20px; right: 20px; }
```

**为什么重要**：处理悬浮元素、弹窗、固定导航等特殊布局需求。

**使用建议**：
- 优先用Flexbox/Grid，少用定位
- absolute需要配合relative使用（创建定位上下文）

---

### 练习6：响应式设计 ⭐⭐⭐⭐
**核心知识**：@media、viewport、百分比宽度、移动优先

```css
/* 视口设置（HTML中） */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* 移动优先：先写移动端样式 */
.card {
    flex: 1 1 100%;  /* 移动端单列 */
}

/* 平板端（≥576px） */
@media (min-width: 576px) {
    .card { flex: 1 1 50%; }  /* 两列 */
}

/* 桌面端（≥768px） */
@media (min-width: 768px) {
    .card { flex: 1 1 33.333%; }  /* 三列 */
}
```

**为什么重要**：现代网页必须适配各种设备，响应式设计是必备技能。

---

## 20%核心 vs 80%场景

```
20%核心知识                          80%应用场景
────────────────────────────────────────────────────────
选择器（元素/类/ID/后代）             所有样式规则的基础
盒模型 + box-sizing                   所有元素的尺寸控制
font + color + line-height           文章、博客、内容页
Flexbox                               导航、卡片列表、居中布局
position: relative/absolute/fixed     弹窗、悬浮按钮、固定头部
@media + viewport                    手机、平板、桌面适配
```

---

## 实际项目中的使用频率

一个典型的企业官网页面：

| 技术 | 使用次数 | 用途 |
|------|----------|------|
| Flexbox | 10-20次 | 布局容器、导航、卡片列表 |
| 盒模型属性 | 30-50次 | padding/margin控制间距 |
| 文字样式 | 20-30次 | 标题、段落、链接 |
| 选择器 | 50-100次 | 选中目标元素 |
| 媒体查询 | 3-5组 | 响应式断点 |
| 定位 | 2-5次 | 特殊悬浮元素 |

---

## 学习路径

### 第1周：基础（练习1-3）
- 掌握基础选择器
- 理解盒模型和border-box
- 熟练设置文字样式

### 第2周：布局（练习4-5）
- 掌握Flexbox核心属性
- 理解relative/absolute/fixed的区别
- 能够创建常见布局

### 第3周：响应式（练习6）
- 理解viewport的作用
- 掌握@media语法
- 应用移动优先策略

---

## 检查清单

- [ ] 能解释box-sizing: border-box的作用
- [ ] 能写出常见的Flexbox布局（居中、两端对齐）
- [ ] 能解释relative和absolute的区别
- [ ] 能写出媒体查询的基本语法
- [ ] 能解释为什么需要viewport meta标签
- [ ] 能计算盒模型的实际占用空间

---

## 进阶路径

掌握这20%后，可以继续学习：

1. **CSS Grid** - 二维布局系统
2. **CSS变量** - 自定义属性（--var）
3. **动画** - @keyframes、animation
4. **变换** - transform（旋转、缩放、位移）
5. **预处理器** - Sass/Less（变量、嵌套、混合）

---

## 最佳实践

```css
/* 1. 全局重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. 基础文字样式 */
body {
    font-family: 'Microsoft YaHei', sans-serif;
    line-height: 1.6;
    color: #333;
}

/* 3. 图片自适应 */
img {
    max-width: 100%;
    height: auto;
}

/* 4. 容器限制 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 5. Flexbox居中 */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 6. 移动端隐藏滚动条 */
@media (max-width: 768px) {
    ::-webkit-scrollbar {
        display: none;
    }
}
```

---

**记住**：CSS的学习是渐进式的。先掌握这20%核心，在实践中逐步扩展，不要被繁多的属性吓到。
