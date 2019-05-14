<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>公告列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <el-button class="s-add" @click="addNoticeControl"><i class="el-icon-plus"></i>新增公告</el-button>
        <el-button type="danger">删除</el-button>
        <!--  搜索   -->
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
          prop="title"
          label="标题"
          width="750">
        </el-table-column>
        <el-table-column
          prop="sort"
          label="排序"
          width="50">
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
            @click="editNotice(scope.row.id)">编辑
            </el-button>
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    name: "noticeControl",
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
      getdata(){
        this.axios.get('/api/notices').then(res =>{
          this.tableData = res.data.data
        }).catch(err => {
          console.log(err)
        });
      },
      getstatus(row,column,cellValue){
        if (cellValue=='1'){
          return '停用'
        }else{
          return '正常'
        }
      },
      addNoticeControl(){
        this.$router.push('/app/notice/add')
      },
      editNotice(ids){
        this.$router.push({name:'editNotice',params:{id:ids}});
        // this.$router.push('/app/notice/edit/'+ids);
      },
      del(num){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/api/notice/'+num).then(res=>{
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
    mounted(){
      this.getdata();
    },
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
