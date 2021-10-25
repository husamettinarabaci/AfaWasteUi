export default [
    {
        path: '/',
        name: 'map',
        component: () => import('@/views/Map.vue'),
        meta: {
          layout: 'full',
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