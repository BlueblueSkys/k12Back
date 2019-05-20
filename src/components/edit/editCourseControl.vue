<template>
  <div class="addwrap">
    <div class="navt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运营中心</el-breadcrumb-item>
        <el-breadcrumb-item>课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>类型管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="类型名称" prop="name">
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
    name: "editCourseControl",
    data() {
      return {
        slide:'',
        newobj:'',
        id:'',
        ruleForm: {
          name: '',
          remark: '',
          status: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入分类名称', trigger: 'blur'},

          ],


          status: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.newobj+='name='+(this.ruleForm.name)+'&'
            this.newobj += 'remark=' + this.ruleForm.remark + '&'

            this.ruleForm.status = '正常' ? '0' : '1'
            this.newobj += 'status=' + this.ruleForm.status + '&'

            this.axios.put('api/course/type/'+this.$route.params.id, this.newobj).then(res => {
              console.log('修改成功');
              console.log(res);
              this.$router.push('/app/course/type')
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },


    mounted(){
      console.log(this.$route.params.id);
      this.axios.get('api/course/type/' + this.$route.params.id).then(res => {
        console.log(res.data);
        this.slide = res.data.data;
        // console.log(this.slide);
        this.ruleForm.name= this.slide.name;
        this.ruleForm.remark = this.slide.remark;
        this.ruleForm.status = this.slide.status;
        this.ruleForm.status = '0' ? '正常' : '停用';
      })
    }
  }
</script>

<style scoped>
  .addwrap{
    position: relative;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    background-color: #F2F6FC;
  }
  .demo-ruleForm{
    background-color: white;
    padding: 50px 0;
    margin-top: 20px;
  }
</style>
