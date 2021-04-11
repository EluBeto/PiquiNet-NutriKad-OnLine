import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
    name: 'Historia Clínica',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/eatingPlan',
    name: 'Plan de Alimentación',
    component: () => import('../views/EatingPlan.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/traning',
    name: 'Ponte en forma',
    component: () => import('../views/Traning.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/shoppingList', //shoppingList
    name: 'Lista de compras',
    component: () => import('../views/ShoppingList.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/dashboardAdmin',
    name: 'Panel de Administración',
    component: () => import('../views/DashboardAdmin.vue'),
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/interactiveCalendar',
    name: 'Calendario Interactivo',
    component: () => import('../views/InteractiveCalendar.vue'),
    meta: {
      requiredAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const sessionUser = JSON.parse(localStorage.getItem('userAuth'))
  if (to.meta.requiredAuth && sessionUser) {
    if (sessionUser) {
      store.commit('SET_USER_AUTH', sessionUser)
      next()
    } else {
      store.commit('SET_USER_AUTH', null)
      next('/')
    }
  } else {
    next()
  }
})

export default router
