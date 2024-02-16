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
            {
                path:'/book-form',
                name: 'book-form',
                component: ()=>import('../components/BookForm.vue')
            },
            {
                path:'/book-list',
                name: 'book-list',
                component: ()=>import('../components/BookList.vue')
            },
        ]
    }
]

const router = new VueRouter({routes})
export default router; 
