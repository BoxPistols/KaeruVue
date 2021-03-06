import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/computedBasic',
    name: 'computedBasic',
    component: () => import('../views/ComputedBasic.vue')
  },
  {
    path: '/hasEvent',
    name: 'hasEvent',
    component: () => import('../views/HasEvent.vue')
  },
  {
    path: '/resize',
    name: 'resize',
    component: () => import('../views/Resize.vue')
  },
  {
    path: '/SimpleTodo',
    name: 'SimpleTodo',
    component: () => import('../views/SimpleTodo.vue')
  },
  {
    path: '/BirthDay',
    name: 'BirthDay',
    component: () => import('../views/BirthDay.vue')
  },
  {
    path: '/GetSet',
    name: 'GetSet',
    component: () => import('../views/GetSet.vue')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/props-parent.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
