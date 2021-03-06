import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: () => import( '../views/Tracker.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import( '../views/News.vue')
  },
  {
    path: '/contact-me',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
