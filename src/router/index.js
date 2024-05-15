import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'amazon',
    component: () => import('../views/TitleBar.vue'),
    children:[{
      path: 'card',
      name: 'meme',
      component: () => import('../views/CardSleeve.vue')
    },
    {
      path: 'product',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: 'me',
      name: 'me',
      component: () => import('../views/Me.vue')
    },
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: 'score',
      name: 'score',
      component: () => import('../views/scoreView.vue')
    },
    {
      path: 'parent',
      name: 'parent',
      component: () => import('../views/ParentChild.vue')
    },
    {
      path: 'connecting',
      name: 'connecting',
      component: () => import('../views/connector.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import('../views/registerView.vue')
    },


  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
