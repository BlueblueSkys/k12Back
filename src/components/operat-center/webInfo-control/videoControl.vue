<template>
  <div>
    <el-header style="text-align: left; font-size: 16px; height:150px">
      <div>
        <!--       s-bolder 加粗           -->
        <span class="s-bolder">首页</span>&nbsp&nbsp>
        <span class="s-bolder">系统视频</span>&nbsp&nbsp>
        <span>视频视频</span>&nbsp&nbsp
      </div>
      <div>
        <!--   s-add 添加  s-del 删除     el-input不能输入 疑似没有给data值-->
        <el-button class="s-add"><i class="el-icon-plus"></i>上传视频</el-button>
        <el-button type="danger">删除</el-button>
        <el-input placeholder="请输入内容" class="input-with-select" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-header>
    <template>
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange">
        <el-table-column
          label="#"
          width="50">
          <template slot-scope="scope">{{ scope.row.id}}</template>
        </el-table-column>
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="name"
          label="视频名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="serial"
          label="视频编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="size"
          label="文件大小"
          width="150">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          width="50">
        </el-table-column>
        <el-table-column
          prop="time"
          label="上传时间"
          width="200">
          <template slot-scope="scope">{{ scope.row.time}}</template>
        </el-table-column>
        <el-table-column
          prop="comment"
          label="备注"
          width="150">
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
        name: "videoControl",
      data() {
        return {
          input:'',
          tableData: [{
            id: '1',
            name: '王小虎',
            comment: '上海市普陀区金沙江路 1518 弄',
            state: '正常'
          }, {
            id: '2',
            name: '王小虎',
            comment: '上海市普陀区金沙江路 1518 弄',
            state: '正常'
          }],
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
        }
      }
    }
</script>

<style scoped>

</style>
