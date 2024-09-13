import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Mcdoview from '@/views/mcdoView.vue'
import KfcView from '@/views/kfcView.vue'
import BurgerkingView from '@/views/burgerkingView.vue'
import MenuView from '@/views/menuView.vue'
import IngredientVue from '@/views/ingredientVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/menu-mc-burger',
    name: 'mcdo',
    component: Mcdoview
  },

  {
    path: '/menu-kfc-burger',
    name: 'kfc',
    component: KfcView
  },

  {
    path: '/menu-bk-burger',
    name: 'burger',
    component: BurgerkingView
  },
  {
    path: '/menu/:id/:slug',
    name: 'menu.show',
    component: MenuView,
    props: (route) => ({ id: parseInt(route.params.id) })
  },
  {
    path: '/ingredient/:id/:slug',
    name: 'ingredient.show',
    component: IngredientVue,
    props: (route) => ({ id: parseInt(route.params.id), slug: route.params.slug })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'lien-actif'
})

export default router
