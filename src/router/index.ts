import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Felling from '../views/Felling.vue'
import Share from '../views/Share.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import LearnNote from '../views/LearnNote.vue'
import Editor from '@/views/Editor.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
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
    path: '/felling',
    name: 'Felling',
    component: Felling
  },
  {
    path: '/share',
    name: 'Share',
    component: Share
  },
  {
    path: '/ArticleDetail',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/LearnNote',
    name: 'LearnNote',
    component: LearnNote
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: Editor
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
