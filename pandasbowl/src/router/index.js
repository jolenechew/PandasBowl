import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import SignInView from '../views/SignInView'
import SignUpView from '../views/SignUpView'
import MarketplaceView from '../views/MarketplaceView'
import PreferenceView from '../views/PreferenceView'
import PaymentView from '../views/PaymentView'
import SuccessView from '../views/SuccessView'
import FailureView from '../views/FailureView'
import ProfileView from '../views/ProfileView'
import MyListingView from '../views/MyListingView'
import MyOrderView from '../views/MyOrderView'
import RecipeView from '../views/RecipeView'
import FoodCardView from '../views/FoodCardView'

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
  },
  {
    path:'/payment',
    name:'payment',
    component:PaymentView
  },
  {
    path:'/success',
    name:'success',
    component:SuccessView
  },
  {
    path:'/failure',
    name:'failure',
    component:FailureView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/myListings',
    name: 'myListings',
    component: MyListingView
  },
  {
    path: '/myOrders',
    name: 'myOrders',
    component: MyOrderView
  },
  {
    path: '/recipe',
    name: 'recipe',
    component: RecipeView
  },
  {
    path: '/foodCardView/:id',
    name: 'foodCardView',
    component: FoodCardView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
