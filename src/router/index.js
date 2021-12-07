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

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
   const subsequentMiddleware = middleware[index];
   // If no subsequent Middleware exists,
   // the default `next()` callback is returned.
   if (!subsequentMiddleware) return context.next;
 
   return (...parameters) => {
     // Run the default Vue Router `next()` callback first.
     context.next(...parameters);
     // Then run the subsequent Middleware with a new
     // `nextMiddleware()` callback.
     const nextMiddleware = nextFactory(context, middleware, index + 1);
     subsequentMiddleware({ ...context, next: nextMiddleware });
   };
}
 
router.beforeEach((to, from, next) => {
   if (to.meta.middleware) {
     const middleware = Array.isArray(to.meta.middleware)
       ? to.meta.middleware
       : [to.meta.middleware];
 
     const context = {
       from,
       next,
       router,
       to,
     };
     const nextMiddleware = nextFactory(context, middleware, 1);
 
     return middleware[0]({ ...context, next: nextMiddleware });
   }
 
   return next();
});
   

export default router
