import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Axios from 'axios'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
//import 'material-design-icons-iconfont/dist/material-design-icons.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import Vuetify from 'vuetify'
 
Vue.use(Vuetify)





require('./config')
require('./components')

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')



if (token) {

  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer '+token
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')
