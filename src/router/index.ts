import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/cvs',
    name: 'cvs',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/departments',
    name: 'departments',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/positions',
    name: 'positions',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/languages',
    name: 'languages',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/TemplateView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/TemplateView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
