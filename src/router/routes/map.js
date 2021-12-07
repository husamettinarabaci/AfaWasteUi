export default [
    {
        path: '/',
        name: 'map',
        component: () => import('@/views/Map.vue'),
        meta: {
          layout: 'full',
          loading: true,
          //pageTitle: 'Homeqq',
          //breadcrumb: [
          //  {
          //    text: 'Home',
          //    active: true,
          //  },
          //],
        },
    }
]