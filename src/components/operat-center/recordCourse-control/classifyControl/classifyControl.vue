<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>课程管理</el-breadcrumb-item>
          <el-breadcrumb-item>分类管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--   s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add" @click="Sclassify"><i class="el-icon-plus"></i>新增资讯管理</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange">
        <el-table-column
          label="#"
          width="50">
          <template slot-scope="scope"><span v-text="scope.$index+1"></span></template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="cover"
          label="封面图"
          width="200">
          <template slot-scope="scope">
            <img :src="scope.row.cover" min-width="70" height="70"/>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="620">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          :formatter="formatStatus">
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
    name: "classifyControl",
    data() {
      return {
        input: '',
        tableData: [],
      }
    },
    methods: {
      Sclassify() {
        this.$router.push('/app/course/category/Sclassify')
      },
      formatStatus: function (row, column, cellValue) {
        if (cellValue == "1") {
          return '非正常';
        } else if (cellValue == "0") {
          return '正常';
        }
      },
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
      getinfo() {
        this.axios.get('/api/course/categories').then(res => {
          console.log(res.data);
          this.tableData = res.data.data
        }).catch(err => {
          console.log(err);
        })
      },
    },
    mounted() {
      this.getinfo()
    }
  }
</script>

<style scoped>
  .allright {
    width: 100%;
  }
</style>


