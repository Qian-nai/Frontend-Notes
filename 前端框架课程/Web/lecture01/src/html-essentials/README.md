# HTML精华回顾 - 20/80原则

> 掌握这 **20%** 的核心标签，应对 **80%** 的日常开发需求。

---

## 核心标签速查表

| 分类 | 标签 | 使用频率 | 掌握程度 |
|------|------|----------|----------|
| **文档结构** | `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` | ⭐⭐⭐⭐⭐ | 必须 |
| **元信息** | `<meta>`, `<title>` | ⭐⭐⭐⭐⭐ | 必须 |
| **文本** | `<h1>`-`<h6>`, `<p>`, `<a>`, `<span>`, `<strong>`, `<em>` | ⭐⭐⭐⭐⭐ | 必须 |
| **容器** | `<div>` | ⭐⭐⭐⭐⭐ | 必须 |
| **列表** | `<ul>`, `<ol>`, `<li>` | ⭐⭐⭐⭐ | 常用 |
| **媒体** | `<img>` | ⭐⭐⭐⭐ | 常用 |
| **表单** | `<form>`, `<input>`, `<label>`, `<button>`, `<select>`, `<textarea>` | ⭐⭐⭐⭐ | 常用 |
| **语义化** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` | ⭐⭐⭐ | 现代开发必备 |

---

## 六大练习概览

### 练习1：文档基础结构 ⭐⭐⭐⭐⭐
**核心知识**：`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<meta>`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
</head>
<body>
    <!-- 可见内容 -->
</body>
</html>
```

**为什么重要**：这是所有HTML页面的骨架，没有它浏览器可能以怪异模式渲染。

---

### 练习2：文本与链接 ⭐⭐⭐⭐⭐
**核心知识**：`<h1>`-`<h6>`, `<p>`, `<a>`, `<strong>`, `<em>`

```html
<h1>主标题（每个页面一个）</h1>
<h2>章节标题</h2>
<p>这是一个段落，包含<strong>重要</strong>和<em>强调</em>的文字。</p>
<a href="https://example.com" target="_blank">外部链接</a>
<a href="mailto:email@example.com">邮箱链接</a>
```

**为什么重要**：文字和链接是网页内容的绝对主力，掌握这些标签覆盖80%的内容场景。

---

### 练习3：列表 ⭐⭐⭐⭐
**核心知识**：`<ul>`, `<ol>`, `<li>`

```html
<!-- 无序列表 - 导航、功能列表 -->
<ul>
    <li>首页</li>
    <li>产品</li>
    <li>关于</li>
</ul>

<!-- 有序列表 - 步骤、排名 -->
<ol>
    <li>注册账号</li>
    <li>完善资料</li>
    <li>开始使用</li>
</ol>
```

**为什么重要**：列表是结构化数据展示的最高效方式，导航、菜单、特性说明都依赖它。

---

### 练习4：图片 ⭐⭐⭐⭐
**核心知识**：`<img>`, `<figure>`, `<figcaption>`

```html
<!-- 基础用法 -->
<img src="photo.jpg" alt="描述文字" width="400" height="300">

<!-- 带标题的图片 -->
<figure>
    <img src="chart.png" alt="数据图表">
    <figcaption>图1：2024年销售数据</figcaption>
</figure>
```

**为什么重要**：`alt`属性是SEO和无障碍访问的关键，现代网页离不开图片。

---

### 练习5：表单 ⭐⭐⭐⭐
**核心知识**：`<form>`, `<input>`, `<label>`, `<button>`, `<select>`, `<textarea>`

```html
<form action="/submit" method="post">
    <label for="email">邮箱</label>
    <input type="email" id="email" name="email" required>

    <label for="city">城市</label>
    <select id="city" name="city">
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
    </select>

    <button type="submit">提交</button>
</form>
```

**为什么重要**：表单是用户交互的核心，登录、注册、搜索、评论都依赖表单。

**input type速查**：
- `text` - 文本
- `email` - 邮箱（自动验证）
- `password` - 密码（隐藏输入）
- `tel` - 电话
- `number` - 数字
- `radio` - 单选
- `checkbox` - 多选
- `date` - 日期
- `file` - 文件

---

### 练习6：语义化标签 ⭐⭐⭐
**核心知识**：`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

```html
<header>
    <h1>网站标题</h1>
    <nav><!-- 导航 --></nav>
</header>

<main>
    <section>
        <article><!-- 独立内容 --></article>
    </section>
    <aside><!-- 侧边栏 --></aside>
</main>

<footer><!-- 页脚 --></footer>
```

**为什么重要**：SEO优化、屏幕阅读器友好、代码可读性、团队协作效率。

---

## 20%核心 vs 80%场景

```
20%核心标签                        80%应用场景
─────────────────────────────────────────────────
<!DOCTYPE>  html                  所有网页的基础
head + meta + title               SEO和页面配置
body                              内容容器
h1-h6 + p                         文章、博客、文档
a                                 导航、外链、下载
img                               商品图、头像、插图
ul/ol + li                        菜单、列表、步骤
form + input + button             登录、搜索、评论
div + span                        布局和样式容器
header/nav/main/footer            现代网页结构
```

---

## 实际项目中的使用频率

一个典型的企业官网页面：

| 标签 | 使用次数 | 占比 |
|------|----------|------|
| `div` | 20-30 | 布局容器 |
| `a` | 15-25 | 导航和链接 |
| `p` | 10-20 | 段落文本 |
| `img` | 5-15 | 图片资源 |
| `h2-h3` | 5-10 | 章节标题 |
| `ul/li` | 3-8 | 列表和菜单 |
| `span` | 5-15 | 行内样式 |
| **语义化标签** | 5-10 | 结构划分 |
| **表单相关** | 3-8 | 交互功能 |

---

## 学习建议

### 第1周：基础（练习1-3）
- 掌握文档结构
- 熟练使用文本标签和链接
- 理解列表的使用场景

### 第2周：进阶（练习4-6）
- 掌握图片标签和alt属性
- 理解表单的基本用法
- 学会使用语义化标签

### 检查清单
- [ ] 能手写出完整的HTML5文档结构
- [ ] 理解`h1`只能出现一次的原因
- [ ] 知道`alt`属性的作用
- [ ] 能创建包含各种输入类型的表单
- [ ] 能解释`section`和`div`的区别

---

## 进阶路径

掌握这20%后，可以继续学习：

1. **表格** - `<table>`, `<tr>`, `<td>`, `<th>`（数据展示）
2. **多媒体** - `<video>`, `<audio>`（富媒体）
3. **嵌入式** - `<iframe>`, `<embed>`（第三方内容）
4. **高级表单** - `<datalist>`, `<output>`, 自定义验证
5. **Web组件** - `<template>`, `<slot>`（组件化开发）

---

**记住**：不要试图记住所有标签，先掌握这20%，在实践中逐步扩展。
