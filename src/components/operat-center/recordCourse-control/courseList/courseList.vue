<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>课程管理</el-breadcrumb-item>
          <el-breadcrumb-item>课程列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add"><i class="el-icon-plus"></i>新增课程</el-button>
        <el-button type="danger">删除</el-button>
        <el-select placeholder="按类型筛选"></el-select>
        <el-select placeholder="按分类筛选"></el-select>
        <el-input placeholder="请输入内容" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
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
          prop="image"
          label="封面图"
          width="200">
          <template   slot-scope="scope">
            <img :src="scope.row.cover"  min-width="70" height="70" />
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="100">
        </el-table-column>
        <el-table-column
          prop="description"
          label="分类"
          width="100">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格（元/门）"
          width="100">
        </el-table-column>
        <el-table-column
          prop="level"
          label="入门等级"
          width="100">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          :formatter="getstatus">
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="修改时间"
          width="200">
          <template slot-scope="scope">
            <p>{{scope.row.updateTime|format}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="sort"
          label="评论/条"
          width="100">
        </el-table-column>
        <el-table-column
          prop="operate"
          label="操作"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="info">章节管理
            </el-button>
            <el-button
              size="mini"
              type="primary">编辑
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
        this.axios.get('/api/courses').then(res =>{
          this.tableData = res.data.data
        }).catch(err => {
          console.log(err)
        });
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
