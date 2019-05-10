<template>
  <div class="addwrap">
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

    </el-header>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号码" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="姓氏" prop="lastname">
        <el-input v-model="ruleForm.lastname"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="city">
        <el-input v-model="ruleForm.city"></el-input>
      </el-form-item>
      <el-form-item label="孩子所在学校" prop="childSchool">
        <el-input v-model="ruleForm.childSchool"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="ruleForm.gender"></el-input>
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
    name: "editregisteruser",
    data() {
      return {
        ruleForm: {
          tel: '',
          nickname: '',
          lastname: '',
          city: '',
          childSchool: '',
          gender: '',
          status: ''
        },
        rules: {
          tel: [
            {required: true, message: '请输入正确手机号', trigger: 'blur'},
            {message: '请输入正确手机号', trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'},
            {message: '请输入昵称', trigger: 'blur'}
          ],
          lastname: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {message: '请输入姓名', trigger: 'blur'}
          ],
          city: [
            {required: true, message: '请输入地址', trigger: 'blur'},
            {message: '请输入地址', trigger: 'blur'}
          ],
          childSchool: [
            {required: true, message: '请输入孩子所在学校', trigger: 'blur'},
            {message: '请输入孩子所在学校', trigger: 'blur'}
          ],
          gender: [
            {required: true, message: '请输入性别', trigger: 'blur'},
            {message: '请输入性别', trigger: 'blur'}
          ],
          status: [
            {required: true, message: '请输入状态', trigger: 'blur'},
            {message: '请输入状态', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
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
  .addwrap {
    position: relative;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    background-color: #F2F6FC;
  }

  .demo-ruleForm {
    background-color: white;
    padding: 50px 0;
    margin-top: 20px;
  }
</style>
