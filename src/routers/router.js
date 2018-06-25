/**
 * Created by feng on 2018/6/19.
 */

import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Home from '../components/home';
import Record from '../components/home/record';
import Order from '../components/home/my-form';
import Account from '../components/home/account';

Vue.use(Router);

export default new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/',
          redirect:'/record'
        },
        {
          path:'/record',
          component:Record
        },
        {
          path:'/order',
          component:Order
        },
        {
          path:'/account',
          component:Account
        }
      ]
    }
  ]
})


















