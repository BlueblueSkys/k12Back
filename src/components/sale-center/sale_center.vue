<template>
  <!--  销售中心 左边框-->
  <el-row class="tac">
    <el-col :span="12">
      <h5>默认颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title"><router-link to="/sSaleuser">消费用户</router-link></span>
          </template>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title"> <router-link to="/sMarketuser">销售跟进用户</router-link></span>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title"> <router-link to="/orderControl">订单管理</router-link></span>
        </el-menu-item>

        <el-submenu index="4">
          <i class="el-icon-setting"></i>
          <span slot="title"><router-link to="/statistics">统计分析</router-link></span>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>


<!--  <div class="sale_center_main">-->
<!--    <div class="sale_center_left">-->
<!--      <div class="s-saveuser">-->
<!--        <router-link to="/sSaleuser">消费用户</router-link>-->
<!--      </div>-->
<!--      <div class="s-marketuser">-->
<!--        <router-link to="/sMarketuser">销售跟进用户</router-link>-->
<!--      </div>-->
<!--      <div class="order_control">-->
<!--        <router-link to="/orderControl">订单管理</router-link>-->
<!--      </div>-->
<!--      <div class="statistics">-->
<!--        <router-link to="/statistics">统计分析</router-link>-->

<!--      </div>-->
<!--    </div>-->

<!--    <saleCentermain></saleCentermain>-->

<!--  </div>-->


</template>

<script>
  // 引入统计分析
  import statistics from './statistics'
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
      statistics
    }
  }
</script>

<style scoped>

</style>
