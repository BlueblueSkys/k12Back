<template>
  <div id="app">
    <el-container>
      <el-container class="head">
        <el-header class="theNav">
          <div class="navtext">机灵兔编程</div>
          <el-menu class="el-menu-demo" router mode="horizontal">
            <div class="item" v-for="(item,index) in mymenu" :key="index">
              <el-menu-item :index='item.url'>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-header>
      </el-container>


      <keep-alive>
        <router-view></router-view>
      </keep-alive>

    </el-container>
  </div>
</template>

<script>


  export default {
    name: 'App',
    data() {
      return {
        mymenu: [
          {name: '运营中心', url: "/app"},
          {name: '销售中心', url: "/saleCenter"},
          {name: '运维中心', url: "/saveCenter"},
          {name: '系统管理', url: "/system"},
        ],
      }
    },
    methods: {

    },
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

  /*4个*/
  .item {
    float: left;
    height: 60px;
  }

  .item li {
    height: 100%;
  }

  .item li .is-active {
    background-color: blue;
    color: white;
  }

  .input-with-select {
    width: 400px;
    margin-left: 680px;
  }

</style>
