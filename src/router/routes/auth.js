export default [
  {
      path: '/auth/login',
      name: 'auth-login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        layout: 'full',
        loading: false
      },
  },
  {
      path: '/auth/register',
      name: 'auth-register',
      component: () => import('@/views/auth/Register.vue'),
      meta: {
        layout: 'full',
        loading: false,
      },
  }
]