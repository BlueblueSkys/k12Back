<template>
    <div>
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
    </div>
</template>

<script>

  import offlineBag from 'offline-bag'
    export default {
        name: "save_center",
      components:[

      ]
    }
</script>

<style scoped>

</style>
