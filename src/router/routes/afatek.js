import auth from '@/middlewares/auth.middleware';

const routes = [
    {
        path: '/customers',
        name: 'afatek-customers',
        component: () => import('@/views/afatek/Customers'),
        meta: {
            layout: 'default'
        }
    }
]

routes.forEach(route => {
    route.path = '/afatek' + route.path
    route.meta.middleware = [auth];
})

export default routes;