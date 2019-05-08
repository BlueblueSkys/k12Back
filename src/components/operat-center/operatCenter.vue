<template>
  <div>
    <div></div>
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>网站内容管理</template>
      <el-submenu index="1-1" class="el-submenu">
        <template slot="title">资讯管理</template>
        <el-menu-item index="1-1-1">资讯分类管理</el-menu-item>
        <el-menu-item index="1-1-2">资讯列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="1-2" class="el-menu-item">
        <template slot="title">公告管理</template>
      </el-menu-item>
      <el-menu-item index="1-3">
        <template slot="title">视频管理</template>
      </el-menu-item>
      <el-menu-item index="1-4">
        <template slot="title">轮播图管理</template>
      </el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>APP内容管理</template>
      <el-submenu index="2-1">
        <template slot="title">活动管理</template>
        <el-menu-item index="2-1-1">活动分类管理</el-menu-item>
        <el-menu-item index="2-1-2">活动列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2-2">
        <template slot="title">问答管理</template>
        <el-menu-item index="2-2-2">类型管理</el-menu-item>
        <el-menu-item index="2-2-3">问答列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2-3">
        <template slot="title">意见反馈管理</template>
        <el-menu-item index="2-3-1">类型管理</el-menu-item>
        <el-menu-item index="2-3-2">问答反馈列表</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>录播课程管理</template>
      <el-menu-item index="3-1">
        <template slot="title">分类管理</template>
      </el-menu-item>
      <el-menu-item index="3-2">
        <template slot="title">类型管理</template>
      </el-menu-item>
      <el-menu-item index="3-3">
        <template slot="title">课程列表</template>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="4" style="text-indent: 13px;">
      <i class="el-icon-setting"></i>
      <span slot="title" style="margin-left: 7px">注册用户管理</span>
    </el-menu-item>
    <el-menu-item index="5" style="text-indent: 13px">
      <i class="el-icon-setting"></i>
      <span slot="title" style="margin-left: 7px">客服人员管理</span>
    </el-menu-item>
    <el-menu-item index="6" style="text-indent: 13px">
      <i class="el-icon-setting"></i>
      <span slot="title" style="margin-left: 7px">兑换券管理</span>
    </el-menu-item>
  </div>
</template>

<script>
    export default {
        name: "operatCenter",
        components:{}
    }
</script>

<style scoped>
  .el-menu-item{
    text-indent: 40px;
    text-align: left;
  }
  .el-submenu{
    text-align: center;
  }
</style>
