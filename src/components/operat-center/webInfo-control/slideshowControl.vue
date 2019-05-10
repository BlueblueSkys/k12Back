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
        <el-button type="danger" >删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
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
          <template   slot-scope="scope">
            <img :src="scope.row.image"  min-width="70" height="70" />
          </template>

        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
          prop="sort"
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
            @click="editSlider">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger" @click="sdel">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    name: "slideshowControl",
    data() {
      return {
        input: '',
        tableData: [],

      }
    },
    methods: {
      formatStatus:function(row, column,cellVale){
        if(cellVale=="0"){
          return '正常'
        }else if(cellVale == '1'){
          return '停用'
        }
      },
      sdel() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      getdate() {
        this.axios.get('/api/carousels').then(res => (
          this.tableData = res.data.data,
          console.log(res.data)
        )).catch( err=> (
          console.log(err)
        ))

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
      Slider(){
        this.$router.push('/app/carousel/Slider');
      },
      editSlider(){
        this.$router.push('/app/carousel/edit');
      }
    },
    mounted() {
      this.getdate()
    },

    filters: {
      format: function () {
        var dt = new Date();
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

