import Vue from 'vue'
import Router from 'vue-router'
import Default from './views/Default.vue'
import Posts from './views/Posts.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Posts
    },
    {
      path: '/',
      name: 'home',
      component: Default
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