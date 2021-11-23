import Vue from 'vue'
import VueRouter from 'vue-router'

import map from './routes/map';
import auth from './routes/auth';
import panel from './routes/panel';
import errors from './routes/errors';

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    ...map,
    ...auth,
    ...panel,
    ...errors
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})


export default router
