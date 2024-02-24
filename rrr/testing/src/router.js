import { createRouter, createWebHashHistory } from "vue-router";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/one', component: () => import('../src/components/СomponetsForPages/Search.vue')},
    ]
})