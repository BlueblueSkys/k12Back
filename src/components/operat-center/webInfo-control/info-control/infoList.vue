<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>资讯列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add" @click="addInfoList"><i class="el-icon-plus"></i>新增资讯</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template v-if="addflag">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          label="#"
          width="50">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="cid"
          label="文章分类"
          width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="200">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          width="700"
          show-tooltip-when-overflow="hidden"
          context="ellipsis"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          :formatter="getstatus">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="修改时间"
          width="200">
          <template slot-scope="scope">
            <p>{{scope.row.createTime|format}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
            @click="editInfoList">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger" @click="del(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  import addInfoList from '../../../add/addInfoList'
  export default {
    name: "infoList",
    components:{
      addInfoList
    },
    data() {
      return {
        tableData: [],
        addflag:true
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
      // 获取所有数据
      getdata(){
        this.axios.get('/api/articles').then(res =>{
          this.tableData = res.data.data
        }).catch(err => {
          console.log(err)
        });
      },
      // 判断状态
      getstatus(row,column,cellValue){
        if (cellValue=='1'){
          return '停用'
        }else{
          return '正常'
        }
      },
      // 添加页面
      addInfoList(){
        this.$router.push('/app/article/list/add')
      },
      // 编辑页面
      editInfoList(){
        this.$router.push('/app/article/list/edit')
      },
      // 删除
      del(num){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/api/article/categories/'+num).then(res=>{
            console.log(res);
          });
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },
    // 刷新页面
    mounted(){
      this.getdata();
    },
    // 时间过滤器
    filters:{
      format:function(){
        var dt = new Date();
        var y = dt.getFullYear();
        var m = dt.getMonth()+1;
        var d = dt.getDate();
        var h = dt.getHours();
        var min = dt.getMinutes();
        var s = dt.getSeconds();
        m = m.toString().padStart(2,0);
        d = d.toString().padStart(2,0);
        h = h.toString().padStart(2,0);
        min = min.toString().padStart(2,0);
        s = s.toString().padStart(2,0);
        return `${y}-${m}-${d} ${h}:${min}:${s}`
      }
    }
  }
</script>

<style scoped>
  .allright{
    width: 100%;
  }

</style>
