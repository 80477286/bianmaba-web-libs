import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        name: '首页',
        path: '/',
        redirect: '/user/user_manager'
    }, {
        name: '用户管理',
        path: '/user/user_manager',
        component: () => import('@/views/user/UserManager.vue')
    }]
})

export default router
