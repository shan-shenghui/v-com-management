import Vue from 'vue'
import Router from 'vue-router'
import login from  '@/components/login/login.vue'

import system from '@/components/system/system.vue'
import bg from '@/components/system/bg/bg.vue'
import customer from '@/components/system/customer/customer.vue'
import company from '@/components/system/company/company.vue'
import supplier from '@/components/system/supplier/supplier.vue'
import list from '@/components/system/list/list.vue'

import base from '@/components/base/base.vue'
import sale from '@/components/sale/sale.vue'
import buy from '@/components/buy/buy.vue'
import cts from '@/components/cts/cts.vue'
import iwm from '@/components/iwm/iwm.vue'
import repository from '@/components/repository/repository.vue';

Vue.use(Router)
/*resolve 按需加载  */
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/system',
      name: 'system',
      component: system,
      children: [
        {
          path: 'bg',
          name: 'bg',
          component: bg
        },
        {
          path: 'company',
          name: 'company',
          component: company
        },
        {
          path: 'customer',
          name: 'customer',
          component: customer
        },
        {
          path: 'supplier',
          name: 'supplier',
          component: supplier
        },
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: 'prcode',
          name: 'prcode',
          component: list
        },
        {
          path: 'customerUserManage',
          name: 'customerUserManage',
          component: list
        },
        {
          path: 'exexporten',
          name: 'exexporten',
          component: list
        }]
    },
    {
      path: '/base',
      name: 'base',
      component: base
    },
    {
      path: '/sale',
      name: 'sale',
      component: sale
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/cts',
      name: 'cts',
      component: cts
    },
    {
      path: '/iwm',
      name: 'iwm',
      component: iwm
    },
    {
      path: '/repository',
      name: 'repository',
      component: repository
    },
    {
      path: '/news',
      name: 'news',
      component: resolve => require(['@/components/repository/repository.vue'], resolve),
    }
  ]
});

export default router;
