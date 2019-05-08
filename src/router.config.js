// import Home from './components/Home.vue'
// 引入运营中心
import operatCenter from './components/operat-center/operatCenter'
// 引用资讯分类管理
import infoClassifyControl from './components/operat-center/webInfo-control/info-control/infoClassifyControl'
// 引入销售中心
import saleCenter from './components/sale-center/sale_center'
// 引入 销售跟进用户
import sMarketuser from './components/sale-center/s-marketuser'
// 引入消费用户
import sSaleuser from './components/sale-center/s-saleuser'
// 引入订单管理
import orderControl from './components/sale-center/order-control'

export default {
  routes:[
    {path:'/operatCenter',component:operatCenter},
    {path:'/infoClassifyControl',component:infoClassifyControl},
    {path:'/saleCenter',component:saleCenter},
    {path:'/sMarketuser',component:sMarketuser},
    {path:'/sSaleuser',component:sSaleuser},
    {path:'/orderControl',component: orderControl}

  ]
}
