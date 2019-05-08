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


// 引入 系统管理
import systemControl from './components/sys/system-control'
// 系统管理下级组件
import systemAdmin from './components/sys/system-admin'
import systemPerson from './components/sys/system-person'
import systemLog from './components/sys/system-log'
import systemHelp from './components/sys/system-help'

export default {
  routes:[
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
    }
  ]
}
