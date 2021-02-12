import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Inicio',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/eatingPlan',
    name: 'Plan de Alimentación',
    component: () => import('../views/EatingPlan.vue')
  },
  {
    path: '/traning',
    name: 'Ponte en forma',
    component: () => import('../views/Traning.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
