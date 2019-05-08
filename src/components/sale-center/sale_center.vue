<template>
  <!--  销售中心 左边框-->
  <div style="text-align:left">
    <el-menu-item index="1" style="text-indent: 13px;">
      <i class="el-icon-setting"></i>
      <router-link to="/saleCenter/sSaleuser" class="router-link" style="margin-left: 7px">消费用户</router-link>
    </el-menu-item>
    <el-menu-item index="2" style="text-indent: 13px;">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <router-link to="/saleCenter/sMarketuser" class="router-link" style="margin-left: 7px">销售跟进用户</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="3" style="text-indent: 13px;">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/saleCenter/orderControl" class="router-link" style="margin-left: 7px">订单管理</router-link>
      </template>
    </el-menu-item>

    <el-submenu index="4" class="el-submenu" style="text-indent: 13px;">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/saleCenter/statistics" class="router-link" style="margin-left: 7px">统计分析</router-link>
      </template>
      <el-menu-item index="4-1">
        <router-link to="/saleCenter/statistics/sIncome" class="router-link" >收入统计</router-link>
      </el-menu-item>
      <el-menu-item index="4-2">
        <router-link to="/saleCenter/statistics/sRegister" class="router-link" >注册统计</router-link>
      </el-menu-item>
    </el-submenu>





  </div>
</template>

<script>
  // 引入统计分析

  // // 引入 销售跟进用户
  // import sMarketuser from './s-marketuser'
  // // 引入消费用户
  // import sSaleuser from './s-saleuser'
  // //  引入右边主要
  // import saleCentermain from './saleCentermain'
  // // 引入订单管理
  // import orderControl from './order-control'

  export default {
    name: "sale_center",
    components: {}
  }
</script>

<style scoped>
  .router-link {
    color: #303133;
    text-decoration: none;
  }
</style>
