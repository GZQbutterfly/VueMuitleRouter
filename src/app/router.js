import VueRouter from 'vue-router';

import {HomePage} from './home/home';

const routes = [{
        path: '/',
        redirect: {
            name: 'home'
        }
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        component: (resolve) => resolve(HomePage)
    }
];


// 创建路由实例
const router = new VueRouter({
    mode: 'history', //去掉#号
    routes
});

export default router;
