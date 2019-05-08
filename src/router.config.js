// import Home from './components/Home.vue'
// 引入统计分析
import statistics from './components/sale-center/statistics'
// 引入 销售跟进用户
import sMarketuser from './components/sale-center/s-marketuser'
// 引入消费用户
import sSaleuser from './components/sale-center/s-saleuser'
// 引入订单管理
import orderControl from './components/sale-center/order-control'
// 引入收入统计
import sIncome from './components/sale-center/s_statistics/s-income'
// 引入注册统计
import sRegister from './components/sale-center/s_statistics/s-register'
export default {
  routes:[
    {
      path:'/statistics',
      component:statistics,
      children:[
        {path:'/sIncome',component:sIncome},
        {path:'/sRegister',component:sRegister}
      ]
    },
    {path:'/sMarketuser',component:sMarketuser},
    {path:'/sSaleuser',component:sSaleuser},
    {path:'/orderControl',component: orderControl}

  ]
}
