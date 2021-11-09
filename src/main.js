import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import router from './router'
import store from './store'
import App from './App.vue'

// Global Components
import './global-components'
import moment from 'moment';
moment.locale('tr');
Vue.prototype.$moment = moment;

import "../node_modules/@aws-amplify/ui-components";
import Amplify from "aws-amplify";
import awsconfig from "@/aws";

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

// Run bootstrap script
import '@/bootstrap';
import { ConsoleLogger } from '@aws-amplify/core'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
