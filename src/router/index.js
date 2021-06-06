import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aula from '../views/Aula.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/Contato.vue'
    )
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/Cursos.vue'
    )
  },
  {
    path: '/cursos/:curso',
    name: 'curso',
    props: true,
    component: () => import(
      /* webpackChunkName: "about" */ 
      '../views/Curso.vue'
    ),
    children: [
      {
        path: ":aula",
        name: "aula",
        props: true,
        component: Aula,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
