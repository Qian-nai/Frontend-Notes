import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      component: () => import('../layout/Index.vue'),
      redirect: '/dashboard', 
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue')
        },
        {
          path: 'registrations',
          name: 'Registrations',
          component: () => import('../views/Registrations.vue')
        }
      ]
    }
  ]
})

// 👇 这就是面试官最爱问的“全局前置路由守卫”
router.beforeEach((to, from, next) => {
  // 获取本地存储的 Token
  const token = localStorage.getItem('token')

  // 如果你要去的地方不是登录页，而且你还没有 Token
  if (to.path !== '/login' && !token) {
    // 强制踢回登录页
    next('/login')
  } else {
    // 放行
    next()
  }
})

export default router