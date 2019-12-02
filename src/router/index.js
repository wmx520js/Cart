import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[{
      path:'/shouy',
      component:() => import(/* webpackChunkName: "about" */ '../views/Home/ShouY.vue'),
      children:[{
        path:'/shouy/gunz',
        component:() => import(/* webpackChunkName: "about" */ '../views/Home/ShouY/GuanZ.vue'),
      },{
        path:'/shouy/tuij',
        component:() => import(/* webpackChunkName: "about" */ '../views/Home/ShouY/TuiJ.vue'),
      },{
        path:'/shouy/reb',
        component:() => import(/* webpackChunkName: "about" */ '../views/Home/ShouY/ReB.vue'),
      }]
    },{
      path:'/xiangf',
      component:() => import(/* webpackChunkName: "about" */ '../views/Home/XiangF.vue')
    },{
      path:'/dax',
      component:() => import(/* webpackChunkName: "about" */ '../views/Home/DaX.vue')
    },{
      path:'/xiaox',
      component:() => import(/* webpackChunkName: "about" */ '../views/Home/XiaoX.vue')
    },{
      path:'/my',
      component:() => import(/* webpackChunkName: "about" */ '../views/Home/My.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
