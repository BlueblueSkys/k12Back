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
// 引入统计分析
import statistics from './components/sale-center/statistics'

import sIncome from './components/sale-center/s_statistics/s-income'
import sRegister from './components/sale-center/s_statistics/s-register'



// 引入 系统管理
import systemControl from './components/sys/system-control'
// 系统管理下级组件
import systemAdmin from './components/sys/system-admin'
import systemPerson from './components/sys/system-person'
import systemLog from './components/sys/system-log'
import systemHelp from './components/sys/system-help'


// 引入运维中心
import saveCenter from './components/save-center/save_center'

// 运维中心下组件
import leaveBag from './components/save-center/leave-bag'
import versionsControl from './components/save-center/versions-control'


export default {
  routes:[
    {path:'/',redirect:'/operatCenter'},
    {path:'/operatCenter',component:operatCenter},

    {path:'/saleCenter',component:saleCenter,children:[
        {path:'/saleCenter/sMarketuser',component:sMarketuser},
        {path:'/saleCenter/sSaleuser',component:sSaleuser},
        {path:'/saleCenter/orderControl',component: orderControl},
        {path:'/saleCenter/statistics',
          component: statistics,
          children:[
            {path:'/saleCenter/statistics/sIncome',component:sIncome},
            {path:'/saleCenter/statistics/sRegister',component:sRegister}
          ],
        },

      ]},


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


    {path:'/saveCenter',
      component:saveCenter,
      children:[
        {path:'/saveCenter/leaveBag',component:leaveBag},
        {path:'/saveCenter/versionsControl',component:versionsControl}
      ]
    }


  ]
}
