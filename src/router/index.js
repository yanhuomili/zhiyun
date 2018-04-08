import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import LayoutLogisticsTrace from '../views/layout/LayoutLogisticsTrace'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    role: ['admin','editor']     will control the page role (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/register', component: _import('register/index'), hidden: true },
  { path: '/findBackPW', component: _import('findBackPW/index'), hidden: true },
  { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/quotation',
    meta: { title: '报价单' },
    component: _import('quotation/index'),
    name: 'quotation'
  },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    meta: { title: '首页' },
    children: [{
      path: 'home',
      component: _import('home/index'),
      name: 'home',
      meta: { title: '首页' }
    }]
  }
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   redirect: '/documentation/index',
  //   children: [{
  //     path: 'index',
  //     component: _import('documentation/index'),
  //     name: 'documentation',
  //     meta: { title: 'documentation', icon: 'documentation', noCache: true }
  //   }]
  // }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const headerLogisticsTraceMap = [{
  path: '/logisticsTrace',
  component: LayoutLogisticsTrace,
  meta: { title: '订单追踪' },
  children: [{
    path: 'seaTrace',
    component: _import('logisticsTrace/sea/index'),
    name: 'seaTrace',
    meta: { title: '海运订单' }
  }, {
    path: 'trailerTrace',
    component: _import('logisticsTrace/trailer/index'),
    name: 'trailerTrace',
    meta: { title: '拖车订单' }
  }, {
    path: 'customerTrace',
    component: _import('logisticsTrace/customer/index'),
    name: 'customerTrace',
    meta: { title: '报关订单' }
  }, {
    path: 'storageTrace',
    component: _import('logisticsTrace/storage/index'),
    name: 'storageTrace',
    meta: { title: '仓储订单' }
  }, {
    path: 'certificateTrace',
    component: _import('logisticsTrace/certificate/index'),
    name: 'certificateTrace',
    meta: { title: '证书订单' }
  }, {
    path: 'insuranceTrace',
    component: _import('logisticsTrace/insurance/index'),
    name: 'insuranceTrace',
    meta: { title: '保险订单' }
  }]
}]

export const asyncRouterMap = [
  {
    path: '/priceCenter',
    component: Layout,
    redirect: '/priceCenter/checkFreightRate',
    meta: { title: '价格中心' },
    children: [{
      path: 'checkFreightRate',
      component: _import('priceCenter/checkFreightRate/index'),
      name: 'checkFreightRate',
      meta: { title: '查运价' }
    }, {
      path: 'myQuotation',
      component: _import('priceCenter/myQuotation/index'),
      name: 'myQuotation',
      meta: { title: '我的报价单' }
    }]
  },
  {
    path: '/priceDetail',
    component: Layout,
    meta: { title: '价格详情' },
    children: [{
      path: '',
      component: _import('priceDetail/index'),
      name: 'priceDetail',
      meta: { title: '价格详情' }
    }]
  },
  {
    path: '/importBooking',
    component: Layout,
    meta: { title: '导入委托单' },
    children: [{
      path: '',
      component: _import('importBooking/index'),
      name: 'importBooking',
      meta: { title: '导入委托单' }
    }]
  },
  {
    path: '/supplementData',
    component: Layout,
    meta: { title: '补充资料' },
    children: [{
      path: '',
      component: _import('supplementData/index'),
      name: 'supplementData',
      meta: { title: '补充资料' }
    }]
  },
  {
    path: '/priceEdit',
    component: Layout,
    meta: { title: '价格编辑' },
    children: [{
      path: '',
      component: _import('priceEdit/index'),
      name: 'priceEdit',
      meta: { title: '价格编辑' }
    }]
  },
  {
    path: '/orderDetailFillin',
    component: Layout,
    meta: { title: '订单准备详情编辑' },
    children: [{
      path: '',
      component: _import('orderDetailFillin/index'),
      name: 'orderDetailFillin',
      meta: { title: '订单准备详情编辑' }
    }]
  },
  {
    path: '/orderPrepareDetailFillin',
    component: Layout,
    meta: { title: '订单详情编辑' },
    children: [{
      path: '',
      component: _import('orderPrepareDetailFillin/index'),
      name: 'orderPrepareDetailFillin',
      meta: { title: '订单详情编辑' }
    }]
  },
  {
    path: '/bankStatement',
    component: Layout,
    meta: { title: '对账单' },
    children: [{
      path: '',
      component: _import('bankStatement/index'),
      name: 'bankStatement',
      meta: { title: '对账单' }
    }, {
      path: 'detail',
      component: _import('bankStatement/detail/index'),
      name: 'bankStatementDetail',
      meta: { title: '对账单详情' }
    }]
  },
  {
    path: '/orderCreate',
    component: Layout,
    meta: { title: '订单生成' },
    children: [{
      path: '',
      component: _import('orderCreate/index'),
      name: 'orderCreate',
      meta: { title: '订单生成' }
    }]
  },
  {
    path: '/booking',
    component: Layout,
    meta: { title: '托运单' },
    children: [
      {
        path: '',
        component: _import('booking/index'),
        name: 'booking',
        meta: { title: '托运单' }
      }]
  },
  // {
  //   path: '/order',
  //   component: Layout,
  //   meta: { title: '订单' },
  //   children: [
  //     {
  //       path: 'trailer',
  //       component: _import('order/trailer/index'),
  //       name: 'orderTrailer',
  //       meta: { title: '拖车订单' }
  //     },
  //     {
  //       path: 'customsDeclaration',
  //       component: _import('order/customsDeclaration/index'),
  //       name: 'orderCustomsDeclaration',
  //       meta: { title: '报关订单' }
  //     }]
  // },
  {
    path: '/personalCenter',
    component: Layout,
    meta: { title: '个人中心' },
    children: [{
      path: 'baseInfo',
      component: _import('personalCenter/baseInfo/index'),
      name: 'baseInfo',
      meta: { title: '个人资料' }
    }, {
      path: 'message',
      component: _import('personalCenter/message/index'),
      name: 'message',
      meta: { title: '消息' }
    }]
  },
  {
    path: '/orderCenter',
    component: Layout,
    children: [{
      path: '',
      component: _import('orderCenter/index'),
      name: 'orderCenter',
      meta: { title: '订单中心' },
      redirect: '/orderCenter/orderAll',
      children: [{
        path: 'orderAll',
        component: _import('orderCenter/orderAll/index'),
        name: 'orderAll',
        meta: { title: '所有订单' }
      },
      {
        path: 'orderUnfinished',
        component: _import('orderCenter/orderUnfinished/index'),
        name: 'orderUnfinished',
        meta: { title: '未完成' }
      }, {
        path: 'orderFinish',
        component: _import('orderCenter/orderFinish/index'),
        name: 'orderFinish',
        meta: { title: '已完成' }
      }]
    }]
  },
  { path: '/personalCenter/modifyPW', component: _import('personalCenter/modifyPW/index'), hidden: true },
  { path: '/personalCenter/modifyEmail', component: _import('personalCenter/modifyEmail/index'), hidden: true },
  { path: '/personalCenter/modifyPhone', component: _import('personalCenter/modifyPhone/index'), hidden: true },
  ...headerLogisticsTraceMap
]
