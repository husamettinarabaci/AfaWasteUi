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

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faUserSecret,
  faInfoCircle,
  faRoad,
  faChartPie,
  faTachometerAlt,
  faClock,
  faMapMarkedAlt,
  faChartLine,
  faExclamationTriangle,
  faTruck,
  faDumpsterFire,
  faDumpster,
  faTrashRestore,
  faCalendarCheck,
  faWineBottle,
  faTree

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUserSecret, 
  faInfoCircle,
  faRoad,
  faChartPie,
  faTachometerAlt,
  faClock,
  faMapMarkedAlt,
  faChartLine,
  faExclamationTriangle,
  faTruck,
  faDumpsterFire,
  faDumpster,
  faTrashRestore,
  faCalendarCheck,
  faWineBottle,
  faTree
)

Vue.component('font-awesome-icon', FontAwesomeIcon)


// Composition API
Vue.use(VueCompositionAPI)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// Run bootstrap script
import '@/bootstrap';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
