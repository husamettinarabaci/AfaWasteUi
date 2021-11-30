import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import router from './router'
import store from './store'
import './filters'
import App from './App.vue'

// Global Components
import './global-components'
import moment from 'moment';
moment.locale('tr');
Vue.prototype.$moment = moment;

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

window.vm = vm;