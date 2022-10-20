import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import SignInView from '../views/SignInView'
import SignUpView from '../views/SignUpView'
import MarketplaceView from '../views/MarketplaceView'
import PreferenceView from '../views/PreferenceView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: SignInView
  },
  {
    path: '/register',
    name: 'register',
    component: SignUpView
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: MarketplaceView
  },
  {
    path: '/preference',
    name: 'preference',
    component: PreferenceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
