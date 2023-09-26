import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Demo from '../views/Demo.vue'
import Dashboard from '../views/Demototal.vue'
import Screen from '../views/Screen.vue'
import product from '../views/Screen1.vue'
import page1 from '../views/page1.vue'
import Setting from '../views/Screen2.vue'
import page2 from '../views/page2.vue'
import PendingApplication from '../views/Screen3.vue'
import page3 from '../views/page3.vue'
import page4 from '../views/page4.vue'
import page5 from '../views/page5.vue'
import Screen4 from '../views/Screen4.vue'
import page6 from '../views/page6.vue'
import ApproveAppli from '../views/Screen5.vue'
import page7 from '../views/page7.vue'
import RejectedApplication from '../views/Screen6.vue'
import page8 from '../views/page8.vue'
import Productline from '../views/Productline.vue'
import page10 from '../views/page10.vue'
import page11 from '../views/page11.vue'
import page12 from '../views/page12.vue'
import prodgroup from '../views/prodgroup.vue'
import Productgroup from '../views/Productgroup.vue'
import Productfeature from '../views/Productfeature.vue'
import Productfe from '../views/Productfe.vue'
import graph from '../views/graph.vue'
import graphtotal from '../views/graphtotal.vue'
import Maap from '../views/Maap.vue'
import Maptotal from '../views/Maptotal.vue'
import profile from '../views/profile.vue'
import Totaldetails from '../views/Totaldetails.vue'








Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/sidebar',
    name: 'sidebar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sidebar.vue')
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: Demo
  },
    {
    path: '/profile',
    name: 'profile',
    component: profile
  },
    {
    path: '/Totaldetails',
    name: 'Totaldetails',
    component: Totaldetails
  },
   {
    path: '/graph',
    name: 'graph',
    component: graph
  },
   {
    path: '/Maap',
    name: 'Maap',
    component: Maap
  },
    {
    path: '/Maptotal',
    name: 'Maptotal',
    component: Maptotal
  },
  
   {
    path: '/graphtotal',
    name: 'graphtotal',
    component: graphtotal
  },
  {
    path: '/Productline',
    name: 'Productline',
    component: Productline
  },
  {
    path: '/Productgroup',
    name: 'Productgroup',
    component: Productgroup
  },
  {
    path: '/Productfe',
    name: 'Productfe',
    component: Productfe
  },
  {
    path: '/Productfeature',
    name: 'Productfeature',
    component: Productfeature 
  },
  {
    path: '/prodgroup',
    name: 'prodgroup',
    component: prodgroup
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Screen',
    name: 'Screen',
    component: Screen
  },
    {
    path: '/product',
    name: 'product',
    component: product
  },
    {
    path: '/Setting',
    name: 'Setting',
    component: Setting
  },
      {
    path: '/page1',
    name: 'page1',
    component: page1
  },
       {
    path: '/page2',
    name: 'page2',
    component: page2
  },
        {
    path: '/PendingApplication',
    name: 'PendingApplication',
    component: PendingApplication
  },
            {
    path: '/page3',
    name: 'page3',
    component: page3
  },
                     {
    path: '/page4',
    name: 'page4',
    component: page4
  },
                                         {
    path: '/page5',
    name: 'page5',
    component: page5
  },
                                         {
    path: '/page6',
    name: 'page6',
    component: page6
  },
                                        {
    path: '/page7',
    name: 'page7',
    component: page7
  },
                                       {
    path: '/page8',
    name: 'page8',
    component: page8
  },
                                   {
    path: '/page10',
    name: 'page10',
    component: page10
  },
                                    {
    path: '/page11',
    name: 'page11',
    component: page11
  },
                                   {
    path: '/page12',
    name: 'page12',
    component: page12
  },
                                              {
    path: '/Screen4',
    name: 'Screen4',
    component: Screen4
  },
                                                                                            {
    path: '/ApproveAppli',
    name: 'ApproveAppli',
    component:ApproveAppli
  },
                                                                                                                                                                                    {
    path: '/RejectedApplication',
    name: 'RejectedApplication',
    component: RejectedApplication  
  },
                                         

]

const router = new VueRouter({
  routes
})

export default router
