// Node.js + Express 服务端示例

const express = require('express');
const app = express();

// 定义API路由
app.get('/api/users', (req, res) => {
    res.json({ users: ['张三', '李四'] });
});

app.get('/', function (req, res) {
   res.send('Hello World');
})

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});

// 使用说明：
// 1. 确保已安装 Node.js
// 2. 运行 npm init -y
// 3. 运行 npm install express
// 4. 运行 node demo-10-nodejs.js
// 5. 访问 http://localhost:3000/api/users
