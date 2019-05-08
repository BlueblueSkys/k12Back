<template>
  <!--  销售中心 左边框-->
  <div style="text-align:left">

    <el-menu-item index="1">
      <i class="el-icon-setting"></i>
      <router-link to="/sSaleuser" class="router-link">消费用户</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <router-link to="/sMarketuser" class="router-link">销售跟进用户</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/orderControl" class="router-link">订单管理</router-link>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
  // 引入统计分析
  // 引入 销售跟进用户
  import sMarketuser from './s-marketuser'
  // 引入消费用户
  import sSaleuser from './s-saleuser'
  //  引入右边主要
  import saleCentermain from './saleCentermain'
  // 引入订单管理
  import orderControl from './order-control'

  export default {
    name: "sale_center",
    components: {
      sSaleuser,
      sMarketuser,
      saleCentermain,
      orderControl,
    }
  }
</script>

<style scoped>
.router-link{
  color:#303133;
  text-decoration: none;
}
</style>
