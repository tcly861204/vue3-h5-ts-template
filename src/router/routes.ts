import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/pages/home/index.vue'
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'root',
    component: Layout,
    children: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/tools',
            name: 'tools',
            component: () => import('@/pages/tools/index.vue'),
            meta: {
                title: '工具'
            }
        },
        {
            path: '/my',
            name: 'tools',
            component: () => import('@/pages/my/index.vue'),
            meta: {
                title: '我的'
            }
        }
    ]
}]
export default routes