import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../views/login.vue";
// import home from "../components/home.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/home.vue'),
    children:[
      {
        path:'/myhome',
        name:'myhome',
        component:()=>import('../components/myhome.vue')
      },
      {
        path:'/shuju',
        name:'shuju',
        component:()=>import('../components/shuju.vue')
      },
      {
        path:'/juese',
        name:'juese',
        component:()=>import('../components/juese.vue')
      },
      {
        path:'/quanxian',
        name:'quanxian',
        component:()=>import('../components/quanxian.vue')
      },
      {
        path:'/text',
        name:'text',
        component:()=>import('../components/text.vue')
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
