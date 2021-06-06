import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/Contato.vue'
    )
  },
  {
    path: '/cursos',
    name: 'Cursos',
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/Cursos.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
