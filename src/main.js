import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import Axios from 'axios'


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
