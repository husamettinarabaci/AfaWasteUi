import auth from '@/middlewares/auth.middleware';

const routes = [
    {
        path: '/users',
        name: 'admin-users',
        component: () => import('@/views/admin/users/List')
    },
    {
        path: '/devices/tags',
        name: 'admin-devices-tags',
        component: () => import('@/views/admin/devices/Tags')
    },
    {
        path: '/devices/rfid',
        name: 'admin-devices-rfid',
        component: () => import('@/views/admin/devices/Rfid')
    },
    {
        path: '/devices/ult',
        name: 'admin-devices-ult',
        component: () => import('@/views/admin/devices/Ult')
    },
    {
        path: '/devices/recy',
        name: 'admin-devices-recy',
        component: () => import('@/views/admin/devices/Recy')
    },
    {
        path: '/settings/admin',
        name: 'admin-settings-admin',
        component: () => import('@/views/admin/settings/Admin')
    },
    {
        path: '/settings/local',
        name: 'admin-settings-local',
        component: () => import('@/views/admin/settings/Local')
    },




    {
        path: '/rfid/reports/dashboard',
        name: 'rfidReportsDashboard',
        component: () => import('@/views/panel/rfid/Dashboard'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/containers',
        name: 'containers',
        component: () => import('@/views/panel/rfid/Containers'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/trucks',
        name: 'trucks',
        component: () => import('@/views/panel/rfid/Trucks'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/containers/details',
        name: 'containersDetails',
        component: () => import('@/views/panel/rfid/details/Container'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/trucks/details',
        name: 'trucksDetails',
        component: () => import('@/views/panel/rfid/details/Truck'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/containers/reports',
        name: 'containersReports',
        component: () => import('@/views/panel/rfid/reports/Containers'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/containers/daily-reports',
        name: 'containersDailyReports',
        component: () => import('@/views/panel/rfid/reports/ContainersDailyReports'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/containers/management',
        name: 'containersManagement',
        component: () => import('@/views/panel/rfid/ContainersManagement'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/trucks/management',
        name: 'trucksManagement',
        component: () => import('@/views/panel/rfid/TrucksManagement'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/users/list',
        name: 'usersList',
        component: () => import('@/views/panel/rfid/users/List'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/rfid/settings',
        name: 'settings',
        component: () => import('@/views/panel/rfid/Settings'),
        meta: {
            layout: 'default'
        }
    }
]

routes.forEach(route => {
    route.path = '/admin' + route.path
    route.meta = {
        layout: 'default',
        middleware: [auth]
    }
})

export default routes;