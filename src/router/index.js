import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Favourites from '../views/Favourites'
import ProductDetails from '../components/Products/ProductDetails'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites

  },
  {
    path: '/products/:id',
    name: 'Product Details',
    component: ProductDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
