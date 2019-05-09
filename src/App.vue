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
      <!--  左边框  -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-aside>
      <!--  右边main-->
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
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              width="30">
            </el-table-column>
            <el-table-column
              label="#"
              width="120">
              <template slot-scope="scope">{{ scope.row.id}}</template>
            </el-table-column>
            <el-table-column
              type="selection"
              width="120">
            </el-table-column>
            <el-table-column
              prop="name"
              label="名称"
              width="200">
            </el-table-column>
            <el-table-column
              prop="comment"
              label="备注"
              width="500">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="120">
            </el-table-column>
            <el-table-column
              prop="operate"
              label="操作"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button
                  size="mini">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </template>
      </el-container>
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
      tableData: [{
        id: '1',
        name: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        state:'正常'
      }, {
        id: '2',
        name: '王小虎',
        comment: '上海市普陀区金沙江路 1518 弄',
        state:'正常'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
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
  .el-menu-demo{
    float: left;
  }
  .nav-item{
    color: white !important;
    background-color: black;
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
