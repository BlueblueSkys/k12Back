// import Home from './components/Home.vue'
// 引入运营中心
import operatCenter from './components/operat-center/operatCenter'

import defaults from './components/operat-center/webInfo-control/info-control/infoClassifyControl'


// 引入销售中心
import saleCenter from './components/sale-center/sale_center'
// 引入 销售跟进用户
import sMarketuser from './components/sale-center/s-marketuser'
// 引入消费用户
import sSaleuser from './components/sale-center/s-saleuser'
// 引入订单管理
import orderControl from './components/sale-center/order-control'
// 资讯管理
import infoControl from './components/operat-center/webInfo-control/info-control/infoControl'
// 活动管理
import activeControl from './components/operat-center/appInfo-control/active-control/activeControl'
// 问答管理
import answerControl from  './components/operat-center/appInfo-control/answerControl/answerControl'
// 用户反馈
import opinionControl from './components/operat-center/appInfo-control/opinionControl/opinionControl'


// 引入 系统管理
import systemControl from './components/sys/system-control'
// 系统管理下级组件
import systemAdmin from './components/sys/system-admin'
import systemPerson from './components/sys/system-person'
import systemLog from './components/sys/system-log'
import systemHelp from './components/sys/system-help'


//  引入 运维中心
import saveCenter from './components/save-center/save_center'

// 运维中心 下组件

import leaveBag from './components/save-center/leave-bag'
import versionsControl from './components/save-center/versions-control'

// 引入 统计分析

import statistics from "./components/sale-center/statistics"

// 引入 收入分析 注册分析

import sIncome from './components/sale-center/s_statistics/s-income'
import sRegister from './components/sale-center/s_statistics/s-register'

export default {
  routes:[
    {path:'/',redirect:'/app/article/category',component:operatCenter},

    {path:'/operatCenter',component:operatCenter},

    // 销售中心
    {
      path:'/saleCenter',
      component:saleCenter,
      children:[
        {path:'/saleCenter/sMarketuser',component:sMarketuser},
        {path:'/saleCenter/sSaleuser',component:sSaleuser},
        {path:'/saleCenter/orderControl',component: orderControl},
        {path:'/saleCenter/statistics',
          component:statistics,
          children:[
            {path:'/saleCenter/statistics/sIncome',component:sIncome},
            {path:'/saleCenter/statistics/sRegister',component:sRegister},
          ]},
      ]},

    // 系统管理
    {
      path:'/system',
      component: systemControl,
      children:[
        {path:'/system/admin',component:systemAdmin},
        {path:'/system/role',component:systemPerson},
        {path:'/system/log',component:systemLog},
        {path:'/system/help',component:systemHelp},
      ]
    },
    // 运营中心
    {
      path:'/app',
      component: operatCenter,
      children: [
        {
          path:'/app/article',
          redirect:'/app/article/category',
          component:defaults,
          children:[
            {path:'/app/article/category',component:defaults},
            {path:'/app/article/list',component:defaults},
          ]
        },
        {path:'/app/notice',component:infoControl},
        {path:'/app/carousel',component:infoControl},
        {path:'/app/video',component:infoControl},
        {
          path:'/app/event',
          component:activeControl,
          children:[
            {path:'/app/event/category',component:activeControl},
            {path:'/app/event/list',component:activeControl},
          ]
        },
        {
          path:'/app/qa',
          component:answerControl,
          children:[
            {path:'/app/qa/category',component:answerControl},
            {path:'/app/qa/list',component:answerControl},
          ]
        },
        {
          path:'/app/feedback',
          component:opinionControl,
          children:[
            {path:'/app/feedback/category',component:opinionControl},
            {path:'/app/feedback/list',component:opinionControl},
          ]
        },
        {path:'/app/course/category',component:operatCenter},
        {path:'/app/course/type',component:operatCenter},
        {path:'/app/course/list',component:operatCenter},
        {path:'/app/user/list',component:operatCenter},
        {path:'/app/supporter',component:operatCenter},
        {path:'/app/coupon',component:operatCenter},
      ]
    },

    // 运维中心
    {path:'/saveCenter',
      component:saveCenter,
      children:[
        // 离线包管理  版本管理
        {path:'/saveCenter/leaveBag',component:defaults},
        {path:'/saveCenter/versionsControl',component:versionsControl},

      ]
    }

  ]
}
