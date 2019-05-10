<template>
  <div class="addwrap">
    <div class="navt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运营中心</el-breadcrumb-item>
        <el-breadcrumb-item>录播课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>课程列表</el-breadcrumb-item>
        <el-breadcrumb-item>新增课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="封面图片" prop="pic">
        <el-input v-model="ruleForm.pic"></el-input>
      </el-form-item>
      <el-form-item label="课程名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="入门等级" prop="level">
        <el-input v-model="ruleForm.level"></el-input>
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
    name: "DXclasslist",
    data() {
      return {
        ruleForm: {
          pic:'',
          name: '',
          type:'',
          price:'',
          level:'',
          status: '',
          createTime:''
        },
        rules: {
          name: [
            {required: true, message: '请输入分类名称', trigger: 'blur'},
          ],
          pic: [
            {required: true, message: '请输入地址', trigger: 'change'}
          ],
          type : [
            {required: true, message: '请选择类型', trigger: 'change'}
          ],
          price : [
            {required: true, message: '请输入价格', trigger: 'change'}
          ],
          level : [
            {required: true, message: '请输入等级', trigger: 'change'}
          ],
          status : [
            {required: true, message: '请选择状态', trigger: 'change'}
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
  .addwrap{
    position: relative;
    padding-top: 10px;
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
