import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },

  {
    path: '/project/:id',
    name: 'Project Detail',
    component: () => import('@/views/DetailFunding.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
