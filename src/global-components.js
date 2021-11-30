import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'

Vue.component(FeatherIcon.name, FeatherIcon)


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


// 3rd party
import Dialog from 'vue-dialog-loading'

//global config
Vue.use(Dialog, {
    dialogBtnColor: '#0f0',
    background:'rgba(0, 0, 0, 0.5)'
})