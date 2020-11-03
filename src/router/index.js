import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// createRouter 创建路由实例
const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: "/",
            component: Home,
        },
    ],
});

// 抛出路由实例, 在 main.js 中引用
export default router;
