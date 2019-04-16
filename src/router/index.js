import Vue from 'vue'
import Router from 'vue-router'

import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import Index from '@/page/index'
import ChangeCity from '@/page/changeCity'
// 产品列表
import GoodsList from '@/page/goodsList'
// 产品详情
import ProductDeatil from '@/page/productDeatil'
// 登录
import Login from '@/page/login'
// 注册
import Register from '@/page/register'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
      // 重定向
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/changecity',
        name: 'changecity',
        component: ChangeCity
      },
      {
        path: '/s/:name',
        name: 'goodsList',
        component: GoodsList
      },
      {
        path: '/meishi/',
        name: 'productDeatil',
        component: ProductDeatil
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: BlankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }]
    }
  ]
// eslint-disable-next-line eol-last
})