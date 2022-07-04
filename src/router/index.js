import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('@/views/home/Home')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
