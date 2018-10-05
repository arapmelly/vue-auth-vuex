import Vue from 'vue'
import Router from 'vue-router'
import store from './modules/auth/store.js'
import Index from './views/Index.vue'
import About from './views/About.vue'
import Login from './modules/auth/components/LoginComponent.vue'
import Core from './modules/core/components/CoreComponent.vue'


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
      path: '/secure',
      name: 'secure',
      component: Core,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router