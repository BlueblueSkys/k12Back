<template>
  <div class="allright">
    <el-header style="text-align: left; font-size: 16px; height:50px">
      <div class="navt">
        <!--       s-bolder 加粗           -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>运营中心</el-breadcrumb-item>
          <el-breadcrumb-item>轮播图管理</el-breadcrumb-item>
        </el-breadcrumb>

      </div>

    </el-header>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 15px">
      <el-form-item label="图片"  prop="pic">
        <el-input v-model="ruleForm.pic"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="link">
        <el-input v-model="ruleForm.link"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
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
    name: "editSlider",
    data(){
      return{
        ruleForm:{
          pic:'',
          title:'',
          sort:'',
          link:'',
          description:'',
          status:''
        },
        rules:{
          pic:[
            {required: true, message: '请输入图片地址', trigger: 'blur'},
            {message: '请输入图片地址', trigger: 'blur'}
          ],
          title:[
            {required: true, message: '请输入标题', trigger: 'blur'},
            {message: '请输入标题', trigger: 'blur'}
          ],
          sort:[
            {required: true, message: '请输入类型', trigger: 'blur'},
            {message: '请输入类型', trigger: 'blur'}
          ],
          link:[
            {required: true, message: '请输入链接', trigger: 'blur'},
            {message: '请输入链接', trigger: 'blur'}
          ],
          description:[
            {required: true, message: '请输入描述', trigger: 'blur'},
            {message: '请输入描述', trigger: 'blur'}
          ],
          status:[
            {required: true, message: '请输入状态', trigger: 'blur'},

          ]
        }

      }
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

</style>
