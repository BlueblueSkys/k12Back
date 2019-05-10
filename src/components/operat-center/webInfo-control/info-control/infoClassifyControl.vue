<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div>
        <!--       s-bolder 加粗           -->
        <span class="s-bolder">首页</span>&nbsp&nbsp>
        <span class="s-bolder">运营中心</span>&nbsp&nbsp>
        <span>资讯管理</span>&nbsp&nbsp>
        <span>分类管理</span>&nbsp&nbsp
      </div>
      <div>
        <!--   s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add"><i class="el-icon-plus"></i>新增资讯管理</el-button>
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
          prop="name"
          label="名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="700">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="50"
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
    name: "infoClassifyControl",
    data() {
      return {
        input:'',
        tableData: [],
      }
    },
    methods: {
      formatStatus:function(row, column, cellValue){
        if(cellValue == "1"){
          return '非正常';
        }else if(cellValue == "0"){
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
      getinfo(){
        this.axios.get('/api/article/categories').then(res=>{
          this.tableData = res.data.data
        }).catch(err=>{
          console.log(err);
        })
      },
    },
    mounted(){
      this.getinfo()
    }
  }
</script>

<style scoped>
 .allright{
   width: 100%;
 }
</style>
