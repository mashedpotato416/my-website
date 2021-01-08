import Vue from 'vue'
import App from './App.vue'
// bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faPhoneSquare, faEnvelope, faHandsHelping, faUserGraduate, faPeopleArrows, faPeopleCarry, faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// fontawesome
library.add(faBars, faGithub, faLinkedin, faPhoneSquare, faEnvelope, faHandsHelping, faUserGraduate, faPeopleArrows, faPeopleCarry, faCertificate, faGraduationCap)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
