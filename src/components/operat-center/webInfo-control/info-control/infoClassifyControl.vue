<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item>咨询分类管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--   s-add 添加  s-del 删除  el-input不能输入 疑似没有给data值-->
        <el-button class="s-add" @click="goadd"><i class="el-icon-plus"></i>新增资讯管理</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template v-if="addflag">
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
              type="primary"
            @click="editinfoClassify(scope.row.id)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
            @click="del(scope.row.id)">删除
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
    components:{

    },
    data() {
      return {
        input:'',
        addflag:true,
        tableData: [],
      }
    },
    methods: {
      // 删除
      del(id){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/api/article/categories/'+id).then(res=>{
            console.log(res);
          });
          this.getinfo()
        });
      },
      // 判断状态是否正常
      formatStatus:function(row, column, cellValue){
        if(cellValue == "1"){
          return '停用';
        }else if(cellValue == "0"){
          return '正常';
        }
      },
      // 全选
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
      // 获取全部数据
      getinfo(){
        this.axios.get('/api/article/categories').then(res=>{
          this.tableData = res.data.data,
            console.log(res.data.data)
        }).catch(err=>{
          console.log(err);
        })
      },
      // 添加页面
      goadd(){
        this.$router.push('/app/article/category/add')
      },
      // 编辑页面
      editinfoClassify(sid){
        this.$router.push({name:'editinfoClassify', params:{id:sid}});
      }
    },
    // 刷新页面
    mounted(){
      this.getinfo()
    },
  }
</script>

<style scoped>
 .allright{
   width: 100%;
 }
</style>
