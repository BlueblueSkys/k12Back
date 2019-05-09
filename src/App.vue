<template>
  <div id="app">
    <el-container>
      <el-container class="head">
        <el-header class="theNav">
          <div class="navtext">机灵兔编程</div>
          <el-menu  class="el-menu-demo" mode="horizontal" >
            <el-menu-item class="nav-item" index="1">
              <router-link to="/operatCenter">运营中心</router-link>
            </el-menu-item>
            <el-menu-item class="nav-item" index="2">
              <router-link to="/saleCenter">销售中心</router-link>
            </el-menu-item >
            <el-menu-item  class="nav-item">
              <router-link to="/saveCenter">消息中心</router-link>
            </el-menu-item >
            <el-menu-item  class="nav-item">
              <router-link to="/system">系统管理</router-link>
            </el-menu-item >
          </el-menu>
        </el-header>
      </el-container>

      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <router-view></router-view>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 16px">
          <div >
            <span class="">首页</span>&nbsp&nbsp>
            <span>首页</span>&nbsp&nbsp>
            <span>首页</span>&nbsp&nbsp>
            <span>首页</span>&nbsp&nbsp
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
  components: {}
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
</style>
