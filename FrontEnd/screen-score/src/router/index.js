import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmesView from '../views/FilmesView.vue'
import SeriesView from '../views/SeriesView.vue'
import LoginView from '../views/LoginView.vue'
import HomeUserView from '../views/HomeUserView.vue'
import HomeModView from '../views/HomeModView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/filmes',
      name: 'filmes',
      component: FilmesView
    },
    {
      path: '/series',
      name: 'series',
      component: SeriesView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/homeuser',
      name: 'homeuser',
      component: HomeUserView
    },
    {
      path: '/homemod',
      name: 'homemod',
      component: HomeModView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
