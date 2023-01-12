import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.config.productionTip = false
// eslint-disable-next-line vue/multi-word-component-names

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
