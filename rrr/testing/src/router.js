import { createRouter, createWebHashHistory } from "vue-router";


export default createRouter({
    history: createWebHashHistory(),
    routes: [
       
        { path: '/one', component: () => import('../src/components/СomponetsForPages/Search.vue') },
        { path: '/Quetion', component: () => import('../src/components/MainComponents/QuetionComp.vue') },
        { path: '/Main', component: () => import('./components/MainComponents/MainComp.vue') },

    ]

})