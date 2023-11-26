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
import AddReviewView from '../views/AddReviewView.vue'
import ReviewView from '../views/ReviewView.vue'
import AlterarInfoModView from '../views/AlterarInfoModView.vue'
import DeletarContaModView from '../views/DeletarContaModView.vue'
import PerfilModView from '../views/PerfilModView.vue'
import FilmesModView from '../views/FilmesModView.vue'
import SeriesModView from '../views/SeriesModView.vue'
import FilmeView from '../views/FilmeView.vue'
import FilmeUserView from '../views/FilmeUserView.vue'
import FilmeModView from '../views/FilmeModView.vue'
import SerieView from '../views/SerieView.vue'
import SerieUserView from '../views/SerieUserView.vue'
import SerieModView from '../views/SerieModView.vue'

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
      path: '/addreview',
      name: 'addreview',
      component: AddReviewView
    },
    {
      path: '/review',
      name: '/review',
      component: ReviewView
    },
    {
      path: '/alterarinfomod',
      name: 'alterarinfomod',
      component: AlterarInfoModView
    },
    {
      path: '/deletarcontamod',
      name: 'deletarcontamod',
      component: DeletarContaModView
    },
    {
      path: '/perfilmod',
      name: 'perfilmod',
      component: PerfilModView
    },
    {
      path: '/filmesmod',
      name: 'filmesmod',
      component: FilmesModView
    },
    {
      path: '/seriesmod',
      name: 'seriesmod',
      component: SeriesModView
    },
    {
      path: '/serie',
      name: 'serie',
      component: SerieView
    },
    {
      path: '/serieuser',
      name: 'serieuser',
      component: SerieUserView
    },
    {
      path: '/seriemod',
      name: 'seriemod',
      component: SerieModView
    },
    {
      path: '/filmemod',
      name: 'filmemod',
      component: FilmeModView
    },
    {
      path: '/filmeuser',
      name: 'filmeuser',
      component: FilmeUserView
    },
    {
      path: '/filme',
      name: 'filme',
      component: FilmeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
