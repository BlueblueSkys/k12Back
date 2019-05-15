<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>轮播图管理</el-breadcrumb-item>
        </el-breadcrumb>

      </div>
      <div class="inputs">
        <!--            s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add" @click="Slider"><i class="el-icon-plus"></i>新增轮播图</el-button>
        <el-button type="danger" @click="alldel">删除</el-button>
        <el-dialog :visible.sync="delVisible" title="提示" width="30%">
          <span>确定要删除吗</span>
          <span slot="footer">
<!--            @click="multiDelete"-->
          <el-button type="primary" @click="deleteRow">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
        </el-dialog>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          label="#"
          width="80">
          <template slot-scope="scope">
            <span v-text="scope.$index+1"></span>
          </template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="80">
        </el-table-column>
        <el-table-column
          prop="image"
          label="图片"
          width="200">
          <template slot-scope="scope">
            <img :src="scope.row.image" min-width="70" height="70"/>
          </template>

        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          width="100">
        </el-table-column>
        <el-table-column
          prop="link"
          label="链接"
          width="100">
        </el-table-column>
        <el-table-column
          prop="description"
          label="描述"
          width="100">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="80"
          :formatter="formatStatus"
        >
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="修改时间"
          width="200">
          <template slot-scope="scope">
            <p>{{scope.row.createTime|format(scope.row.createTime)}}</p>
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
              @click="editSlider(scope.row.id)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger" @click="sdel(scope.row.id)">删除
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
  import editSlider from "../../edit/editSlider";

  export default {
    name: "slideshowControl",
    data() {
      return {
        newobj: '',
        multipleSelection: [],
        input: '',
        delVisible: false,
        delarr: [],
        tableData: [],
        currentPage: 1,
        // 每页数量
        size: 10,
        // 页数
        page: 1,
        totalNum: 0,

      }
    },
    methods: {
      formatStatus: function (row, column, cellVale) {
        if (cellVale == "0") {
          return '正常'
        } else if (cellVale == '1') {
          return '停用'
        }
      },

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

/// 确定删除

      deleteRow() {

        for (var i = 0; i < this.delarr.length; i++) {
          console.log(this.delarr[i]);
          this.newobj += this.delarr[i] + ','

        }
        console.log(this.newobj);

        this.axios.delete("/api/carousels/" + this.newobj).then(res => {

          this.getdate()

        }).catch(error => {

          console.log(error);

          this.$message.error('包装删除失败')

        })

        this.delVisible = false;//关闭删除提示模态框

      },


      // 删除
      sdel(id) {

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.delete('api/carousel/' + id).then(res => {
            console.log(res);
            this.getdate()
          }).catch(err => {
            console.log(err);
          })

        });


      }
      ,
      // 获取所有数据
      getdate() {
        console.log(this.page);
        console.log(this.size);
        this.axios.get('/api/carousels?page=' + this.page + '&size=' + this.size).then(res => (
          this.tableData = res.data.data

        )).catch(err => (
          console.log(err)
        ))

      }
      ,


      // 跳转添加页面
      Slider() {
        this.$router.push('/app/carousel/Slider');
      }
      ,

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

      // 搜索
      search() {
        console.log(this.tableData);

      }
      ,
      // 跳转编辑页面
      editSlider(id) {
        debugger
        this.$router.push({
          name: editSlider,
          params: {
            id: id
          }
        })
        // this.axios.get('api/carousel/'+id).then(res=>{
        //   console.log(res.data.data);
        // }).catch(err=>{
        //   console.log(err);
        // })
      }
    },
    // 获取并在页面显示
    mounted() {

      getdate:{
        console.log(this.page);
        console.log(this.size);
        this.axios.get('/api/carousels').then(res => (
          this.tableData = res.data.data,

            this.totalNum = res.data.paging.total
        )).catch(err => (
          console.log(err)
        ))

      }

    },

    watch: {
      input: function (val, oldVal) {
        this.tableData = this.otableData.filter(item => (~item.name.indexOf(val)));
      }
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
  .allright {
    width: 100%;
  }
</style>

