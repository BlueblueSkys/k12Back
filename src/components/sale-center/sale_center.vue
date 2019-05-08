<template>
<!--  销售中心 左边框-->
  <div class="sale_center_main">
    <div class="sale_center_left">
      <div class="s-saveuser">
        <router-link to="sSaleuser">消费用户</router-link>
      </div>
      <div class="s-marketuser">
        <router-link to="sMarketuser">销售跟进用户</router-link>
      </div>
      <div class="order_control">
        <router-link>订单管理</router-link>
      </div>
      <div class="statistics">
        <router-link>统计分析</router-link>
      </div>
    </div>
    <div class="sale_center_right">
      saleCentermain
    </div>
  </div>


</template>

<script>
  import sMarketuser from './s-marketuser'
  import sSaleuser from './s-saleuser'
  import saleCentermain from './saleCentermain'
  export default {
    name: "sale_center",
    components:{
      sSaleuser,
      sMarketuser,
      saleCentermain
    }
  }
</script>

<style scoped>

</style>
