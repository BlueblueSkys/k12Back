<template>
  <div class="addwrap">
    <div class="navt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运营中心</el-breadcrumb-item>
        <el-breadcrumb-item>咨询管理</el-breadcrumb-item>
        <el-breadcrumb-item>新增咨询管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称" prop="name">
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
    name: "editinfoClassify",
    data() {
      return {
        sid:this.$router.id,
        ruleForm: {
          name: '',
          remark: '',
          status: '',
        },
        rules: {
          name: [
            {required: true, message: '请输入分类名称', trigger: 'change'},
            {min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur'}
          ],
          remark: [
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
            var newobj='';
            newobj += "name="+this.ruleForm.name + "&";
            newobj += 'remark='+this.ruleForm.remark+"&";
            if (this.ruleForm.status=='正常'){
              this.ruleForm.status = 0
            } else{
              this.ruleForm.status = 1
            }
            newobj += 'status='+this.ruleForm.status;
            console.log(newobj);

            this.$confirm('确定添加?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.put('/api/article/category/'+this.sid,newobj).then(res=>{
                console.log(res);
              });
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
      },
    },
    mounted(){
      var id = this.$route.params.id;
      this.sid = id;
      console.log(this.$route.params.id);
      this.axios.get('/api/article/category/'+id).then(res=>{
        this.ruleForm = res.data.data;
        if(this.ruleForm.status =='0'){
          this.ruleForm.status='正常'
        }else if(this.ruleForm.status =='1'){
          this.ruleForm.status='停用'
        }
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
