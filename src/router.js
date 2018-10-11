import Vue from 'vue'
import Router from 'vue-router'
import store from './store/'
import Index from './views/Index.vue'
import Dashboard from './views/dashboard.vue'
//import Login from './modules/auth/components/LoginComponent.vue'
//import Core from './modules/core/components/CoreComponent.vue'
import { mapGetters, mapState } from 'vuex'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token')
    
    if (token) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router