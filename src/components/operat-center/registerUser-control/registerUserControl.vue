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
          <el-button type="danger" @click="alldel">删除</el-button>
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
            placeholder="注册开始日期"
            @input="changestart"
          >
          </el-date-picker>
          ~
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="注册结束日期"
            @input="changeend"
          >
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
      <el-dialog :visible.sync="delVisible" title="提示" width="30%">
        <span>确定要删除吗</span>
        <span slot="footer">
<!--            @click="multiDelete"-->
          <el-button type="primary" @click="deleteRow">确 定</el-button>
          <el-button @click="delVisible = false">取 消</el-button>
        </span>
      </el-dialog>
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
          prop="phone"
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
          prop="address"
          label="地址"
          width="120">
        </el-table-column>
        <el-table-column
          prop="school"
          label="孩子所在学校"
          width="120">
        </el-table-column>

        <el-table-column
          prop="gender"
          label="性别"
          width="50"
          :formatter="formatgender">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="注册时间"
          width="200">
          <template slot-scope="scope">
            <p>{{scope.row.createTime|format(scope.row.createTime)}}</p>
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
              type="primary" @click="edit(scope.row.id)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger" @click="del(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--  分页  -->
    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size='size'
        layout="total, sizes, prev, pager, next, jumper"
        :total='totalNum'
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "registerUserControl",
    data() {
      return {
        newobj: '',
        multipleSelection: [],
        input: '',
        delVisible: false,
        delarr: [],
        value1: '',
        value2: '',
        input: '',
        select: '全部',
        datas: [],
        newdatas: [],
        boor: false,
        flag: false,
        currentPage: 1,
        // 每页数量
        size: 10,
        // 页数
        page: 1,
        totalNum: 0,
      }
    },
    methods: {
      // 改变
      changestart() {
        if (this.value1 != null) {
          this.boor = true
          if (this.boor && this.flag) {
            for (var i = 0; i < this.datas.length; i++) {
              if (this.value1.getTime() < this.datas[i].createTime < this.value2.getTime()) {
                this.newdatas.push(this.datas[i])
                this.datas = this.newdatas
              }
            }
          }
        } else {
          getdate()
          this.newdatas = []
        }

      },
      changeend() {
        if (this.value2 != null) {
          this.flag = true

          if (this.boor && this.flag) {
            for (var i = 0; i < this.datas.length; i++) {
              if (this.value1.getTime() < this.datas[i].createTime < this.value2.getTime()) {
                console.log(this.datas[i]);
                this.newdatas.push(this.datas[i])
                this.datas = this.newdatas
                // console.log(1)
              }
            }
          }
        } else {
          this.getdate()

        }

      },


      // 编辑
      edit(id) {
        this.$router.push({
          name: 'editregisteruser',
          params: {
            id: id
          }
        })
      }
      ,




      formatStatus: function (row, column, cellVale) {
        if (cellVale == "0") {
          return '正常'
        } else if (cellVale == '1') {
          return '停用'
        }

      },

      formatgender: function (row, column, cellVale) {
        if (cellVale == "0") {
          return '男'
        } else if (cellVale == '1') {
          return '女'
        }

      }
      ,
      getdate() {
        console.log(this.page);
        console.log(this.size);
        this.axios.get('/api/users?page=' + this.page + '&size=' + this.size).then(res => (
          this.datas = res.data.data

        )).catch(err => (
          console.log(err)
        ))
      }
      ,
      // 删除
      del(id) {
        console.log(id);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.axios.delete('/api/user/' + id).then(res => {
            console.log(res);
            console.log('删除成功');

          }).catch(err => {
            console.log(err);
          })
        });
      },
      // 分页
      handleSizeChange(pagenum) {
        this.size = pagenum
        this.currentPage = 1
        console.log(this.currentPage);
        this.getdate(1, pagenum);
        // console.log(`每页 ${pagenum} 条`);
      }
      ,
      handleCurrentChange(val) {
        // console.log(val);
        this.page = val
        // console.log(this.size);
        this.getdate(val, this.size);
        // console.log(`当前页: ${val}`);
      }
      ,

      // 操作多选框
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      }
      ,
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
      ,
      // 批量删除
      alldel() {
        this.delarr = []
        console.log(this.multipleSelection.length);

        this.delVisible = true;//显示删除弹框

        const length = this.multipleSelection.length;

        for (let i = 0; i < length; i++) {

          this.delarr.push(this.multipleSelection[i].id)


        }
        console.log(this.delarr);

      },

// 确定删除

      deleteRow() {

        for (var i = 0; i < this.delarr.length; i++) {
          console.log(this.delarr[i]);
          this.newobj += this.delarr[i] + ','

        }
        console.log(this.newobj);

        this.axios.delete("/api/users/" + this.newobj).then(res => {

          this.getdate()

        }).catch(error => {

          console.log(error);

          this.$message.error('包装删除失败')

        })

        this.delVisible = false;//关闭删除提示模态框

      },
    },
    mounted() {
      getdate:this.axios.get('/api/users').then(res => (
        this.datas = res.data.data,
          console.log( res.data.data),
          this.totalNum = res.data.paging.total


      )).catch(err => (
        console.log(err)
      ))
    },

    filters: {
      format: function (time) {
        var dt = new Date(time);
        var y = dt.getFullYear();
        var m = dt.getMonth() + 1;
        var d = dt.getDate();
        var h = dt.getHours();
        var min = dt.getMinutes();
        var s = dt.getSeconds();
        m = m.toString().padStart(2, 0)
        d = d.toString().padStart(2, 0)
        h = h.toString().padStart(2, 0)
        min = min.toString().padStart(2, 0)
        s = s.toString().padStart(2, 0)

        return `${y}-${m}-${d} ${h}:${min}:${s}`
      }
    }

  }
</script>

<style scoped>
.userCon{
  height: 300px !important;
}
</style>
