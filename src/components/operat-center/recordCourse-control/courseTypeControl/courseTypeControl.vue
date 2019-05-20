<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>课程管理</el-breadcrumb-item>
          <el-breadcrumb-item>类型管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="inputs">
        <!--   s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add" @click="addCourseControl"><i class="el-icon-plus"></i>新增课程类型</el-button>
        <el-button type="danger" @click="alldel">删除</el-button>
        <el-dialog :visible.sync="delVisible" title="提示" width="30%">
          <span>确定要删除吗</span>
          <span slot="footer">
<!--            @click="multiDelete"-->
          <el-button type="primary" @click="deleteRow">确 定</el-button>
          <el-button @click="delVisible = false">取 消</el-button>
        </span>
        </el-dialog>
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
          width="700">
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
              @click="editCourseControl(scope.row.id)">编辑
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
  import addCourseControl from "../../../add/addCourseControl"

  export default {
    name: "infoClassifyControl",
    data() {

      return {
        currentPage: 1,
        // 每页数量
        size: 10,
        // 页数
        page: 1,
        totalNum:0,
        newobj:'',
        multipleSelection: [],
        input: '',
        delVisible: false,
        delarr: [],
        input: '',
        tableData: [],
        addflag: true,
      }
    },

    methods: {


      // 操作多选

      handleSelectionChange(val) {

        this.multipleSelection = val;

      },

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

        this.axios.delete("/api/course/types/" + this.newobj).then(res => {

          this.getdate()

        }).catch(error => {

          console.log(error);

          this.$message.error('包装删除失败')

        })

        this.delVisible = false;//关闭删除提示模态框

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

      // 删除
      del(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('/api/course/type/' + id).then(res => {
            console.log(res);
          });
          this.getinfo()
        });
      },
      // 判断状态
      formatStatus: function (row, column, cellValue) {
        if (cellValue == "1") {
          return '停用';
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
      // 获取全部数据
      getinfo() {
        this.axios.get('/api/course/types?page=' + this.page + '&size=' + this.size).then(res => {
          console.log(res.data.data);
          this.tableData = res.data.data
        }).catch(err => {
          console.log(err);
        })
      },
      // 添加页面
      addCourseControl() {
        this.$router.push('/app/course/type/add')
      },
      // 编辑页面
      editCourseControl(id) {
        this.$router.push({
          name: 'editCourseControl',
          params: {
            id: id
          }
        })
      },
    },
    // 刷新页面
    mounted() {
      this.axios.get('/api/course/types').then(res => (
        this.tableData = res.data.data,
          console.log(res.data.data),
          this.totalNum = res.data.paging.total
      )).catch(err => (
        console.log(err)
      ))
    }
  }
</script>

<style scoped>
  .allright {
    width: 100%;
  }
</style>
