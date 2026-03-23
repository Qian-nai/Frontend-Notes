<template>
  <router-view></router-view>
</template>

<style>
/* 重置基础样式，让后台撑满全屏 */
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #f3f4f6;
}
</style>
/*npx json-server --watch db.json --port 3000 jsonserver*/