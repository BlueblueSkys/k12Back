<template>

  <el-submenu index="4">
    <template slot="title"><i class="el-icon-setting"></i>统计分析</template>
    <el-menu-item-group >
      <el-menu-item index="4-1" style="text-indent: 20px">
        <router-link to="sIncome" class="router-link">收入统计</router-link></el-menu-item>
      <el-menu-item index="4-2" style="text-indent: 20px">
        <router-link to="sRegister" class="router-link">注册统计</router-link></el-menu-item>
    </el-menu-item-group>

  </el-submenu>

</template>

<script>
  import sIncome from './s-income'
  import sRegister from './s-register'

  export default {
    name: "statistics",
    components: {
      sIncome,
      sRegister
    }
  }
</script>

<style scoped>

</style>
