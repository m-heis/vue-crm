import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase/app";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main-layout', auth: true},
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
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/Categories.vue')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/History.vue')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/Planning.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/Record.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {layout: 'main-layout', auth: true},
      component: () => import('./views/Detail-record.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if(requireAuth && !currentUser){
    next('/login?message=login')
  }else {
    next()
  }
});

export default router
