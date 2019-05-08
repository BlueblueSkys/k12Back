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

export default {
  routes:[
    {path:'/',redirect:'/operatCenter'},
    {path:'/operatCenter',component:operatCenter},

    {path:'/saleCenter',component:saleCenter,children:[
        {path:'/saleCenter/sMarketuser',component:sMarketuser},
        {path:'/saleCenter/sSaleuser',component:sSaleuser},
        {path:'/saleCenter/orderControl',component: orderControl},
        {path:'/saleCenter/statistics',component: statistics}
      ]},

  ]
}
