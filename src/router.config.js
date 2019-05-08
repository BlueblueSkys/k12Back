// import Home from './components/Home.vue'
// 引入运营中心
import operatCenter from './components/operat-center/operatCenter'

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

export default {
  routes:[
    {path:'/',redirect:'/app/event/category'},
    {path:'/operatCenter',component:operatCenter},
    {path:'/saleCenter',component:saleCenter},
    {path:'/sMarketuser',component:sMarketuser},
    {path:'/sSaleuser',component:sSaleuser},
    {path:'/orderControl',component: orderControl},
    {
      path:'/system',
      component: systemControl,
      children:[
        {path:'/system/admin',component:systemControl},
        {path:'/system/role',component:systemControl},
        {path:'/system/log',component:systemControl},
        {path:'/system/admin',component:systemControl},
      ]
    },
    // 运营中心
    {
      path:'/app',
      component: operatCenter,
      children: [
        {
          path:'/app/article',
          component:infoControl,
          children:[
            {path:'/app/article/category',component:infoControl},
            {path:'/app/article/list',component:infoControl},
          ]
        },
        {path:'/app/notice',component:operatCenter},
        {path:'/app/carousel',component:operatCenter},
        {path:'/app/video',component:operatCenter},
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
    }
  ]
}
