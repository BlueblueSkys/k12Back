<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <span class="s-bolder">首页</span>&nbsp&nbsp>
        <span class="s-bolder">运营中心</span>&nbsp&nbsp>
        <span>资讯管理</span>&nbsp&nbsp>
        <span>分类管理</span>&nbsp&nbsp
      </div>
      <div class="inputs">
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
              size="mini"
              type="primary">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    name: "videoControl",
    data() {
      return {
        tableData: [{
          id: '1',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄',
          state: '正常'
        }, {
          id: '2',
          name: '王小虎',
          comment: '上海市普陀区金沙江路 1518 弄',
          state: '正常'
        }],
        data:''
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
      },
      getdata(){
        // this.$axios.get('/api/notices').then(res => (
        //   console.log(res.data)
        // )).catch(err => (
        //   console.log(err)
        // ));
      }
    },
    mounted(){
      // this.getdata();
    }
  }
</script>

<style scoped>
  .allright{
    width: 100%;
  }
</style>
