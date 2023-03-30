import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Defines the pages being used
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/test-icen',
      name: 'test-icen',
      component: () => import('../views/testViews/TestViewIcen.vue')
    },
    {
      path: '/test-kie',
      name: 'test-kie',
      component: () => import('../views/testViews/TestViewKie.vue')
    },
    {
      path: '/test-nehan',
      name: 'test-nehan',
      component: () => import('../views/testViews/TestViewNehan.vue')
    },
    {
      path: '/events/booking',
      name: 'events-booking',
      component: () => import('../views/Events/BookingView.vue')
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('../views/TemplatesView.vue')
    },
    {
      path: '/shop/catalogue',
      name: 'shop-catalogue',
      component: () => import('../views/Shop/CatalogueView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      component: () => import('../views/DonateView.vue')
    }
  ]
})

export default router