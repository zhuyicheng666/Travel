import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import City from '../components/city/City'
import Detail from '../components/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPositon) {
    return { x: 0, y: 0 }
  }
})

export default router
