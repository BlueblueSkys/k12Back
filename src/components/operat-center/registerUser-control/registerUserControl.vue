<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:50px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>系统管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <div style="overflow: hidden">
          <h2 style="float: left">注册用户: <span style="color:green">1058</span></h2>
          <h2 style="float: left;margin-left: 60px">会员: <span style="color:orange">33</span></h2>
        </div>

        <div>
          <el-button type="primary"><i class="el-icon-folder-opened"></i>导出excel</el-button>
          <el-button type="danger">删除</el-button>
        </div>

        <div>
          <router-link to="" class="s-router-link">今日</router-link>
          <router-link to="" class="s-router-link">昨日</router-link>
          <router-link to="" class="s-router-link">最近7天</router-link>
          <router-link to="" class="s-router-link">最近30天</router-link>
        </div>

        <template>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="注册开始日期">
          </el-date-picker>
          ~
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="注册结束日期">
          </el-date-picker>

          &nbsp&nbsp会员:
          <el-select v-model="select" slot="prepend">
            <el-option label="Vip会员" value="1"></el-option>
            <el-option label="全部" value="2"></el-option>
          </el-select>
        </template>


        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
      <el-table
        ref="multipleTable"
        :data="datas"
        tooltip-effect="dark"
        border
        @selection-change="handleSelectionChange">
        <el-table-column
          prop="date"
          label="#"
          width="50">
          <template slot-scope="scope">
            <span v-text="scope.$index+1"></span>
          </template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="手机号吗"
          width="150">
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="昵称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="lastname"
          label="姓氏"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="地址"
          width="120">
        </el-table-column>
        <el-table-column
          prop="childSchool"
          label="孩子所在学校"
          width="120">
        </el-table-column>

        <el-table-column
          prop="gender"
          label="性别"
          width="50">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="注册时间"
          width="200">
          <template   slot-scope="scope">
            <p>{{scope.row.createTime|format}}</p>
          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="120">
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
              type="primary" @click="edit">编辑
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
    name: "registerUserControl",
    data() {
      return {
        value1: '',
        value2: '',
        input: '',
        select: '全部',
        datas:[],
      }
    },
    methods:{
      edit(){
        this.$router.push('/app/user/list/editregisteruser')
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
      formatStatus:function(row, column,cellVale){
        if(cellVale=="0"){
          return '正常'
        }else if(cellVale == '1'){
          return '停用'
        }

      },
      getdate(){
        this.axios.get('/api/users').then(res =>(
          this.datas = res.data.data
        )).cath(err=>(
          console.log(err)
        ))
      }
    },
    mounted() {
      this.getdate()
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

</style>
