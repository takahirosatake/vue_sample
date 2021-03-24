import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail.vue'
import NotFound from '@/components/NotFound.vue'
import Item from '../views/Item.vue'
import User from '@/views/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPost from '@/components/UserPost.vue'
import HomeSub from '@/components/HomeSub.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      sub: HomeSub
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/book',
    name:'BookList',
    component: BookList
  },
  {
    path:'/item/:id',
    name:'Item',
    component: Item
  },
  {
    path:'/item/:id',
    name:'Item',
    component: Item
  },
  {
    path:'/user',
    component: User,
    children:[
      {
        path :'profile',
        component :UserProfile,
      },
      {
        path :'Post',
        component :UserPost,
      },
    ]
  },
  {
    path:'/book/:id',
    component: BookDetail,
    props: route => ({
      id: Number(route.params.id),
      title:route.params.title,
      content:route.params.content,
    }) 
  },
  {
    path:'*',
    // redirect: '/'
    name: 'NotFound',
    component:NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) =>{
//     console.log(to)
//     console.log(from)
//     next()
// })

export default router
