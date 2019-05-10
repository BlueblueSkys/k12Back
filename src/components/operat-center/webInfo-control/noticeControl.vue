<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>公告管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add"><i class="el-icon-plus"></i>新增资讯管理</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
      <el-table
        ref="multipleTable"
        :data="datas"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          width="30">
        </el-table-column>
        <el-table-column
          label="#"
          width="80">
          <template slot-scope="scope">{{scope.$index+1}}</template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="100">
        </el-table-column>
        <el-table-column
          prop="title"
          label="名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="content"
          label="备注"
          width="400">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="120"
          :formatter="getstatus">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="修改时间"
          width="180">
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
    name: "noticeControl",
    data() {
      return {

        datas:[]
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
        this.axios.get('/api/notices').then(res => (
          this.datas = res.data.data,
            console.log(res.data)
        )).catch(err => (
          console.log(err)
        ));
      },
      getstatus(row,column,cellValue){
          if (cellValue=='1'){
            return '非正常'
          }else{
            return '正常'
          }
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
        m = m.toString().padStart(2,0)
        d = d.toString().padStart(2,0)
        h = h.toString().padStart(2,0)
        min = min.toString().padStart(2,0)
        s = s.toString().padStart(2,0)

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
