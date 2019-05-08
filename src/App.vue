<template>
  <div id="app">
    <el-container>
      <el-container class="head">
        <el-header class="theNav">
          <div class="navtext">极灵兔编程</div>
          <el-menu  class="el-menu-demo nav-ul" mode="horizontal" >
            <el-menu-item class="nav-item">
              <router-link to="/operatCenter">运营中心</router-link>
            </el-menu-item>
            <el-menu-item  class="nav-item">
              <router-link to="/saleCenter">销售中心</router-link>
            </el-menu-item >
            <el-menu-item  class="nav-item">
              <router-link to="/saleCenter">消息中心</router-link>
            </el-menu-item >
            <el-menu-item  class="nav-item">
              <router-link to="/system">系统管理</router-link>
            </el-menu-item >
          </el-menu>
        </el-header>
      </el-container>

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <!--<saleCenter></saleCenter>-->
          <router-view></router-view>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {


  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
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
  .el-menu-demo{
    float: left;
  }
  .nav-item{
    width: 100px;
    padding: 0;
  }
  .nav-item a{
    /*background-color: black;*/
    /*color: white;*/
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .theNav{
    background-color: black ;
    padding: 0;
  }
  .navtext{
    width: 200px;
    height: 100%;
    color: white;
    float: left;
  }
  .nav-ul{
    border: none !important;
    height: 100%;
    background-color: black;
  }
</style>
