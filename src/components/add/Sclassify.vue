<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:50px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>课程管理</el-breadcrumb-item>
          <el-breadcrumb-item>分类管理</el-breadcrumb-item>
        </el-breadcrumb>

      </div>

    </el-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
             style="margin-top: 15px">
      <el-form-item label="封面图" prop="cover">
        <el-input v-model="ruleForm.cover"></el-input>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="ruleForm.remark"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio label="正常"></el-radio>
          <el-radio label="停用"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Sclassify",
    data() {
      return {
        ruleForm: {
          cover: '',
          name: '',
         remark: '',
          status: ''
        },
        rules: {
         cover: [
            {required: true, message: '请输入图片地址', trigger: 'blur'},
            {message: '请输入图片地址', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入标题', trigger: 'blur'},
            {message: '请输入标题', trigger: 'blur'}
          ],
          remark: [
            {required: true, message: '请输入类型', trigger: 'blur'},
            {message: '请输入类型', trigger: 'blur'}
          ],

          status: [
            {required: true, message: '请输入状态', trigger: 'blur'},

          ]
        }

      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('此操作将添加该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.post('api/course/category', {
                cover: this.ruleForm.cover,
                name: this.ruleForm.name,
                remark: this.ruleForm.remark,
                status: this.ruleForm.status,
              }).then(res => (
                console.log(res)
              )).catch(err => {
                console.log(err);
              })
              this.$router.push('/app/course/category')
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

</style>
