<template>
  <!--系统管理-->
  <div style="width: 100%; text-align:left; height: 100% ">
    <el-aside class="body-left" width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-menu-item index="1" style="text-indent: 13px;">
          <i class="el-icon-setting"></i>
          <router-link to="/system/admin" class="router-link" style="margin-left: 7px;">管理员管理</router-link>
        </el-menu-item>
        <el-menu-item index="2" style="text-indent: 13px;">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <router-link to="/system/role" class="router-link" style="margin-left: 7px;">角色管理</router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="3" style="text-indent: 13px;">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <router-link to="/system/log" class="router-link" style="margin-right: 7px">系统日志</router-link>
          </template>
        </el-menu-item>
        <el-menu-item index="4" style="text-indent: 13px;">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <router-link to="/system/help" class="router-link" style="margin-right: 7px">帮助文档</router-link>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="right">
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "system-control",
  }
</script>

<style>
</style>
