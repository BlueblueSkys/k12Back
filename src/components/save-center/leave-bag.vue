<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div>
        <!--       s-bolder 加粗           -->
        <span class="s-bolder">首页</span>&nbsp&nbsp>
        <span class="s-bolder">运营中心</span>&nbsp&nbsp>
        <span>轮播图管理</span>

      </div>
      <div>
        <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add"><i class="el-icon-plus"></i>新增资讯管理</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
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
          label="#"
          width="80">
          <template slot-scope="scope">{{ scope.row.id}}</template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="图片"
          width="200">
        </el-table-column>
        <el-table-column
          prop="comment"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="链接"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="描述"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="100">
        </el-table-column>
        <el-table-column
          prop="state"
          label="修改时间"
          width="200">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              size="mini">编辑
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
    name: "infoClassifyControl",
    data(){
      return{
        input:'',
        tableData: [{
          id: '1',
          name: '王大虎',
          comment: '上海市普陀区金沙江路 1518 弄',
          state: '正常'
        }, {
          id: '2',
          name: '王大虎',
          comment: '上海市普陀区金沙江路 1518 弄',
          state: '正常'
        }],
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
    }
  }
</script>

<style scoped>

</style>

