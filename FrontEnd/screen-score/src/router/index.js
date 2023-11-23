import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FilmesView from '../views/FilmesView.vue'
import SeriesView from '../views/SeriesView.vue'
import LoginView from '../views/LoginView.vue'
import HomeUserView from '../views/HomeUserView.vue'
import HomeModView from '../views/HomeModView.vue'
import PerfilView from '../views/PerfilView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import FilmesUserView from '../views/FilmesUserView.vue'
import SeriesUserView from '../views/SeriesUserView.vue'
import AmigosView from '../views/AmigosView.vue'
import AlterarInfoView from '../views/AlterarInfoView.vue'
import DeletarContaView from '../views/DeletarContaView.vue'
import AddAmigoView from '../views/AddAmigoView.vue'
import SignUpView from '../views/SignUpView.vue'

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
      path: '/perfil',
      name: 'perfil',
      component: PerfilView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView
    },
    {
      path: '/filmesuser',
      name: 'filmesuser',
      component: FilmesUserView
    },
    {
      path: '/seriesuser',
      name: 'seriesuser',
      component: SeriesUserView
    },
    {
      path: '/amigos',
      name: 'amigos',
      component: AmigosView
    },
    {
      path: '/addamigo',
      name: 'addamigo',
      component: AddAmigoView
    },
    {
      path: '/alterarinfo',
      name: 'alterarinfo',
      component: AlterarInfoView
    },
    {
      path: '/deletarconta',
      name: 'deletarconta',
      component: DeletarContaView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
