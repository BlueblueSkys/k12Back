<template>
  <!--编辑公告-->
  <div class="addwrap">
    <div class="navt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运营中心</el-breadcrumb-item>
        <el-breadcrumb-item>编辑公告</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="排序值" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="ruleForm.content"></el-input>
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
    name: "editNotice",
    data() {
      return {
        num1:'',
        ruleForm: {
          title: '',
          content: '',
          status: '正常',
          sort : '',
        },
        rules: {
          title: [
            {required: true, message: '请输入分类名称', trigger: 'blur'},
          ],
          sort: [
            {required: true, message: '请输入备注', trigger: 'change'}
          ],
          content: [
            {required: true, message: '请输入备注', trigger: 'change'}
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
            var newStr = '';
            newStr += 'sort='+this.ruleForm.sort+'&';
            newStr += 'title='+this.ruleForm.title+'&';
            newStr += 'content='+this.ruleForm.content+'&';
            newStr += 'status='+this.ruleForm.status;
            console.log(newStr,this.$route.params.id);
            this.$confirm('确定添加?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.put('/api/notice/'+this.$route.params.id,newStr).then((res)=>(
                console.log(res)
              ))
            }).catch((err) => {
              console.log(err);
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
    },
    mounted(){
      var id = this.$route.params.id;
      console.log(this.$route.params.id);
      this.axios.get('/api/notice/'+id).then(res =>{
        this.ruleForm = res.data.data;
          console.log(res.data);
          this.ruleForm.status = '0'?'正常':'停用'
          // (this.ruleForm.sort).toString();
      })
    },
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
