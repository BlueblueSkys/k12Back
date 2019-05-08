<template>
  <!--系统管理-->
  <div style="text-align:left">
    <el-menu-item index="1">
      <i class="el-icon-setting"></i>
      <router-link to="/system/admin" class="router-link">管理员管理</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <router-link to="/system/role" class="router-link">角色管理</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="3">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/system/log" class="router-link">系统日志</router-link>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <router-link to="/system/role" class="router-link">帮助文档</router-link>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
    export default {
        name: "system-control"
    }
</script>

<style scoped>

</style>
