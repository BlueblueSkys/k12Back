<template>
  <div style="text-align: left">
    <el-menu>
      <el-menu-item index="1" style="text-indent: 13px;">
        <i class="el-icon-setting"></i>
        <router-link to="/saveCenter/leaveBag" class="router-link" style="margin-left: 7px">离线包管理</router-link>
      </el-menu-item>
      <el-menu-item index="2" style="text-indent: 13px;">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <router-link to="/saveCenter/versionsControl" class="router-link" style="margin-left: 7px">版本管理</router-link>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: "save_center",
    components: {}
  }
</script>

<style scoped>
  .router-link {
    color: #303133;
    text-decoration: none;
  }

</style>
