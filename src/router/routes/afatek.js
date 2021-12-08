import auth from '@/middlewares/auth.middleware';

const routes = [
    {
        path: '/customers',
        name: 'afatek-customers',
        component: () => import('@/views/afatek/customers/List'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/customers/new',
        name: 'afatek-customers-new',
        component: () => import('@/views/afatek/customers/Create'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/customers/edit',
        name: 'afatek-customers-edit',
        component: () => import('@/views/afatek/customers/Edit'),
        meta: {
            layout: 'default'
        }
    },
]

routes.forEach(route => {
    route.path = '/afatek' + route.path
    route.meta.middleware = [auth];
})

export default routes;