import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main-layout'},
      component: () => import('./views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty-layout'},
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty-layout'},
      component: () => import('./views/Register.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main-layout'},
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main-layout'},
      component: () => import('./views/History.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main-layout'},
      component: () => import('./views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main-layout'},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main-layout'},
      component: () => import('./views/Record.vue')
    }
  ]
})
