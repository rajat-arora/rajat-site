import Vue from 'vue'
import Router from 'vue-router'
import Default from './views/Default.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Default
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

// {
//   path: '/by/:author',
//   name: 'author',
//   props: true,
//   component: Blog
// }, {
//   path: '/read/:post',
//   name: 'post',
//   props: true,
//   component: Blog
// },