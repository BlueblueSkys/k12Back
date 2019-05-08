<template>
  <!--  销售中心 左边框-->
  <div style="text-align:left">
    <el-menu-item index="1"  style="text-indent: 13px;">
      <i class="el-icon-setting"></i>
      <router-link to="/sSaleuser" class="router-link"  style="margin-left: 7px">消费用户</router-link>
    </el-menu-item>
    <el-menu-item index="2"  style="text-indent: 13px;">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <router-link to="/sMarketuser" class="router-link"  style="margin-left: 7px">销售跟进用户</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="3"  style="text-indent: 13px;">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/orderControl" class="router-link"  style="margin-left: 7px">订单管理</router-link>
      </template>
    </el-menu-item>
  </div>
</template>

<script>

  export default {
    name: "sale_center",
    components: {
    }
  }
</script>

<style scoped>
.router-link{
  color:#303133;
  text-decoration: none;
}
</style>
