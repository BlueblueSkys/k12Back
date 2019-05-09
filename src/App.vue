<template>
  <div id="app">
    <el-container>
      <el-container class="head">
        <el-header class="theNav">
          <div class="navtext">机灵兔编程</div>
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item class="nav-item" index="1">
              <router-link to="/operatCenter">运营中心</router-link>
            </el-menu-item>
            <el-menu-item class="nav-item" index="2">
              <router-link to="/saleCenter">销售中心</router-link>
            </el-menu-item>
            <el-menu-item class="nav-item">
              <router-link to="/saveCenter">消息中心</router-link>
            </el-menu-item>
            <el-menu-item class="nav-item">
              <router-link to="/system">系统管理</router-link>
            </el-menu-item>
          </el-menu>
        </el-header>
      </el-container>

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <!--<saleCenter></saleCenter>-->
          <router-view></router-view>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 16px; height:150px">

          <div>
            <!--       s-bolder 加粗           -->
            <span class="s-bolder">首页</span>&nbsp&nbsp>
            <span class="s-bolder">运营中心</span>&nbsp&nbsp>
            <span>资讯管理</span>&nbsp&nbsp>
            <span>分类管理</span>&nbsp&nbsp
          </div>
          <div>
            <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
            <el-button class="s-add"><i class="el-icon-plus"></i>新增资讯管理</el-button>
            <el-button class="s-del">删除</el-button>
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>

          </div>


        </el-header>
      </el-container>


    </el-container>


  </div>
</template>

<script>


  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .head {
    padding: 0;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2019;
  }

  .el-menu-demo {
    float: left;
  }

  .nav-item {
    color: white !important;
    background-color: black;
  }

  .theNav {
    background-color: black;
    padding: 0;
  }

  .navtext {
    width: 200px;
    height: 100%;
    color: white;
    float: left;
  }

  .input-with-select {
    width: 400px;
    margin-left: 680px;
  }
</style>
