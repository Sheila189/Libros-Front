import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path:'*',
        component: ()=>import('../views/ErrorPages/Error404.vue')
    },
    {
        path: '/',
        component: () => import('../components/PantallaInicio.vue'),
        children: [
            {
                path:'/inicio',
                name: 'inicio',
                component: ()=>import('../components/Inicio.vue')
            },
        ]
    }
]

const router = new VueRouter({routes})
export default router; 
