import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PasswordForgot from '@/views/PasswordForgot.vue'
import NewAccount from '@/views/NewAccount.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/password',
      name: 'password',
      component: PasswordForgot
    },
    
    {
      path: '/newAccount',
      name: 'newAccount',
      component: NewAccount
    },

    {
      path: '/loginSucces',
      name: 'loginSucces',
      component: () => import('@/views/loginSucces.vue')
    },
  ]
})

export default router
