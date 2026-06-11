import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path : '/', alias: '/home', component : () => import('../views/Home.vue')},
        {path : '/about', name:'about',component : () => import('../views/About.vue')},
        {path : '/contact', name:'contact', component : () => import('../views/Contact.vue')},
        {path : '/autreNom', name:'autreNom', component : () => import('../components/Affichage.vue')},
        {path : '/utilisateur', name:'utilisateur', component : () => import('../views/UserData.vue')},
        {path : '/plusMoins', name:'plusMoins', component : () => import('../views/PlusMoins.vue')},
        {path : '/catcher', name:'catcher', component : () => import('../views/Catcher.vue')},
        {path : '/computed', name:'computed', component : () => import('../views/Computed.vue')},
        {path : '/dynamicForm', name:'dynamicForm', component : () => import('../views/DynamicForm.vue')},
        {path : '/watchList', name:'watchList', component : () => import('../views/WatchList.vue')},
        {path : '/componentLC', name:'componentLC', component : () => import('../views/ComponentLC.vue')},
        {path : '/propsFriends', name:'propsFirends', component : () => import('../views/PropsFriends.vue')},
        {path : '/recap', name:'recap', component : () => import('../views/Recap.vue')},
         {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                description: 'Page non trouvée'
            },
            component: () => import('../views/not-found.vue')
        },
    ],
})

export default router;