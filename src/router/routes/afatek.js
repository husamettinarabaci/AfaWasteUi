import auth from '@/middlewares/auth.middleware';

const routes = [
    {
        path: '/customers',
        name: 'afatek-customers',
        component: () => import('@/views/afatek/customers/List')
    },
    {
        path: '/customers/new',
        name: 'afatek-customers-new',
        component: () => import('@/views/afatek/customers/Create')
    },
    {
        path: '/devices/rfid',
        name: 'afatek-devices-rfid',
        component: () => import('@/views/afatek/devices/Rfid')
    },
    {
        path: '/devices/ult',
        name: 'afatek-devices-ult',
        component: () => import('@/views/afatek/devices/Ult')
    },
    {
        path: '/devices/recy',
        name: 'afatek-devices-recy',
        component: () => import('@/views/afatek/devices/Recy')
    },
]

routes.forEach(route => {
    route.path = '/afatek' + route.path
    route.meta = {
        layout: 'default',
        middleware: [auth]
    }
})

export default routes;