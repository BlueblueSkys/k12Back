<template>
  <div style="width: 100%;">
      <el-aside class="body-left" width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="openlist">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>网站内容管理</template>
            <el-submenu index="10" class="el-submenu">
              <template slot="title">
                <router-link to="/app/article">资讯管理</router-link>
              </template>
              <el-menu-item index="1-1-1">
                <router-link to="/app/article/category">资讯分类管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-2">
                <router-link to="/app/article/list">资讯列表</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="1-2" class="el-menu-item">
              <template slot="title">
                <router-link to="/app/notice">公告管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="1-3">
              <template slot="title">
                <router-link to="/app/carousel">轮播图管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="1-4">
              <template slot="title">
                <router-link to="/app/video">视频管理</router-link>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>APP内容管理</template>
            <el-submenu index="2-1">
              <template slot="title">
                <router-link to="/app/event">活动管理</router-link>
              </template>
              <el-menu-item index="2-1-1">
                <router-link to="/app/event/category">活动分类管理</router-link>
              </el-menu-item>
              <el-menu-item index="2-1-2">
                <router-link to="/app/event/list">活动列表</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">
                <router-link to="/app/qa">问答管理</router-link>
              </template>
              <el-menu-item index="2-2-2">
                <router-link to="/app/qa/category">类型管理</router-link>
              </el-menu-item>
              <el-menu-item index="2-2-3">
                <router-link to="/app/qa/list">问答列表</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">
                <router-link to="/app/feedback">意见反馈管理</router-link>
              </template>
              <el-menu-item index="2-3-1">
                <router-link to="/app/feedback/category">类型管理</router-link>
              </el-menu-item>
              <el-menu-item index="2-3-2">
                <router-link to="/app/feedback/list">问答反馈列表</router-link>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>录播课程管理</template>
            <el-menu-item index="3-1">
              <template slot="title">
                <router-link to="/app/course/category">分类管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="3-2">
              <template slot="title">
                <router-link to="/app/course/type">类型管理</router-link>
              </template>
            </el-menu-item>
            <el-menu-item index="3-3">
              <template slot="title">
                <router-link to="/app/course/list">课程列表</router-link>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="4" style="text-indent: 13px;">
            <i class="el-icon-setting"></i>
            <span slot="title" style="margin-left: 7px"><router-link to="/app/user/list">注册用户管理</router-link></span>
          </el-menu-item>
          <el-menu-item index="5" style="text-indent: 13px">
            <i class="el-icon-setting"></i>
            <span slot="title" style="margin-left: 7px"><router-link to="/app/supporter">客服人员管理</router-link></span>
          </el-menu-item>
          <el-menu-item index="6" style="text-indent: 13px">
            <i class="el-icon-setting"></i>
            <span slot="title" style="margin-left: 7px"><router-link to="/app/coupon">兑换券管理</router-link></span>
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
    name: "operatCenter",
    data(){
      return{
        openlist:['1','10']
      }
    },
    components: {}
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

  .body-left {
    float: left;
  }

  .right {
    float: left;
   border-right:1px solid lightgray;
  }
</style>
