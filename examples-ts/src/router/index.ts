import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        name: '首页',
        path: '/',
        component: () => import('@/views/Home.vue')
    }, {
        name: '用户管理',
        path: '/user/user_manager',
        component: () => import('@/views/user/UserManager.vue')
    }, {
        name: 'NPMN设计',
        path: '/npmn/designer',
        component: () => import('@/views/npmn/Designer.vue')
    }]
})

export default router
