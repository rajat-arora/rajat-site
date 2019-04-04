import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueAnalytics from 'vue-analytics'

library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-101834406-2',
  router,
  autoTracking: {
    pageviewOnLoad: false
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
