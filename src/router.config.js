// import Home from './components/Home.vue'

// 新增组件
import addvue from './components/add/Ademo'
import Slider from './components/add/s-Slider'
import Sclassify from './components/add/Sclassify'
// 新增课程列表
import addclasslist from './components/add/DXclasslist'
// 引入运营中心
import operatCenter from './components/operat-center/operatCenter'
// 测试组件
import infoClassifyControl from './components/operat-center/webInfo-control/info-control/infoClassifyControl'

// 运营中心/ 网站内容管理 / 公告管理
import infoList from './components/operat-center/webInfo-control/info-control/infoList'
import noticeControl from './components/operat-center/webInfo-control/noticeControl'
import slideshowControl from './components/operat-center/webInfo-control/slideshowControl'
import videoControl from './components/operat-center/webInfo-control/videoControl'
import registerUserControl from './components/operat-center/registerUser-control/registerUserControl'
import activeList from './components/operat-center/appInfo-control/active-control/activeList'
import activeClassifyControl from './components/operat-center/appInfo-control/active-control/activeClassifyControl'
import answerList from './components/operat-center/appInfo-control/answerControl/answerList'
import typeControl from './components/operat-center/appInfo-control/answerControl/typeControl'
import opinionList from './components/operat-center/appInfo-control/opinionControl/opinionList'
import opinionTypeControl from './components/operat-center/appInfo-control/opinionControl/opinionTypeControl'
import courseTypeControl from './components/operat-center/recordCourse-control/courseTypeControl/courseTypeControl'
import courseList from './components/operat-center/recordCourse-control/courseList/courseList'
import classifyControl from './components/operat-center/recordCourse-control/classifyControl/classifyControl'
import addCourseControl from './components/add/addCourseControl'
import addInfoList from './components/add/addInfoList'
import addNoticeControl from './components/add/addNoticeControl'
import serviceStaffControl from './components/operat-center/serviceStaff-control/serviceStaffControl'
import coinControl from './components/operat-center/coin-control/coinControl'

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
import answerControl from './components/operat-center/appInfo-control/answerControl/answerControl'
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
  routes: [
    {path: '/', redirect: '/app/article/category', component: operatCenter},
    {path: '/app', redirect: '/app/article/category', component: operatCenter},
    {path: '/operatCenter', component: operatCenter},

    // 销售中心
    {
      path: '/saleCenter',
      component: saleCenter,
      children: [
        {path: '/saleCenter/sMarketuser', component: sMarketuser},
        {path: '/saleCenter/sSaleuser', component: sSaleuser},
        {path: '/saleCenter/orderControl', component: orderControl},
        {
          path: '/saleCenter/statistics',
          redirect: '/saleCenter/statistics/sIncome',
          children: [
            {path: '/saleCenter/statistics/sIncome', component: sIncome},
            {path: '/saleCenter/statistics/sRegister', component: sRegister},
          ]
        },
      ]
    },

    // 系统管理
    {
      path: '/system',
      component: systemControl,
      children: [
        {path: '/system/admin', component: systemAdmin},
        {path: '/system/role', component: systemAdmin},
        {path: '/system/log', component: systemLog},
        {path: '/system/help', component: addvue},
      ]
    },
    // 运营中心
    {
      path: '/app',
      component: operatCenter,
      children: [
        {
          path: '/app/article',
          redirect: '/app/article/category',

        },
        // 网站内容管理
        {path: '/app/article/category', component: infoClassifyControl},
        {path: '/app/article/category/add', component: addvue,},
        {path: '/app/article/list', component: infoList},
        {path: '/app/article/list/add', component: addInfoList,},
        {path: '/app/notice', component: noticeControl},
        {path: '/app/notice/add', component: addNoticeControl,},
        {path: '/app/carousel', component: slideshowControl},
        {path: '/app/carousel/Slider', component:Slider },
        {path: '/app/video', component: videoControl},

        // 活动管理
        {path: '/app/event/category', component: activeClassifyControl},
        {path: '/app/event/list', component: activeList},

        // 问答管理
        {path: '/app/qa/category', component: typeControl},
        {path: '/app/qa/list', component: answerList},

        // 意见反馈管理
        {path: '/app/feedback/category', component: opinionTypeControl},
        {path: '/app/feedback/list', component: opinionList},

        // 录播课程管理
        {path: '/app/course/category', component: classifyControl},
        {path: '/app/course/category/Sclassify', component: Sclassify},
        {path: '/app/course/type', component: courseTypeControl},
        {path: '/app/course/type/add', component: addCourseControl,},
        {path: '/app/course/list', component: courseList},
        {path: '/app/course/list/add', component: addclasslist},

        // 用户管理
        {path: '/app/user/list', component: registerUserControl},
        // 客服人员管理
        {path: '/app/supporter', component: serviceStaffControl},
        // 兑换卷管理
        {path: '/app/coupon', component: coinControl},
      ]
    },

    // 运维中心
    {
      path: '/saveCenter',
      component: saveCenter,
      children: [
        // 离线包管理  版本管理
        {path: '/saveCenter/leaveBag', component: infoClassifyControl},
        {path: '/saveCenter/versionsControl', component: versionsControl},

      ]
    }

  ]
}
