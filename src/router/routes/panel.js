export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/panel/Dashboard'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/containers',
        name: 'containers',
        component: () => import('@/views/panel/Containers'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/trucks',
        name: 'trucks',
        component: () => import('@/views/panel/Trucks'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/containers/details',
        name: 'containersDetails',
        component: () => import('@/views/panel/details/Container'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/containers/reports',
        name: 'containersReports',
        component: () => import('@/views/panel/reports/Containers'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/containers/daily-reports',
        name: 'containersDailyReports',
        component: () => import('@/views/panel/reports/ContainersDailyReports'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/containers/management',
        name: 'containersManagement',
        component: () => import('@/views/panel/ContainersManagement'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/trucks/management',
        name: 'trucksManagement',
        component: () => import('@/views/panel/TrucksManagement'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/users/list',
        name: 'usersList',
        component: () => import('@/views/panel/users/List'),
        meta: {
            layout: 'default'
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/panel/Settings'),
        meta: {
            layout: 'default'
        }
    }
]