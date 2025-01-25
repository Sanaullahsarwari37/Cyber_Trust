import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Master.vue'
import About from '@/views/pages/About.vue'
import Services from '@/views/pages/Services.vue'
import Blog from '@/views/pages/Blog.vue'
import Careers from '@/views/pages/Careers.vue'
import Contact from '@/views/pages/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
