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
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="姓氏" prop="lastname">
        <el-input v-model="ruleForm.lastname"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="孩子所在学校" prop="school">
        <el-input v-model="ruleForm.school"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-input v-model="ruleForm.gender"></el-input>
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
    name: "editregisteruser",
    data() {
      return {
        newobj:'',
        ruleForm: {
          phone: '',
          nickname: '',
          lastname: '',
          address: '',
          school: '',
          gender: '',
          status: '',
          remark:'',
        },
        rules: {
          phone: [
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
          address: [
            {required: true, message: '请输入地址', trigger: 'blur'},
            {message: '请输入地址', trigger: 'blur'}
          ],
          school: [
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
            this.newobj += 'phone=' + this.ruleForm.phone + '&'
            this.newobj += 'nickname=' + this.ruleForm.nickname + '&'
            this.newobj += 'lastname=' + this.ruleForm.lastname + '&'
            this.ruleForm.status = '正常' ? '0' : '1'
            this.newobj += 'status=' + this.ruleForm.status + '&'
            this.newobj += 'address=' + this.ruleForm.address+ '&'
            this.newobj += 'school=' + this.ruleForm.school+ '&'
            this.newobj += 'remark=' + this.ruleForm.remark+ '&'
            this.ruleForm.gender = '男' ? '0' : '1'
            this.newobj += 'gender=' + this.ruleForm.gender

            this.axios.put('api/user/'+this.id, this.newobj).then(res => {
              console.log('修改成功');
              console.log(res);
              this.$router.push('/app/user/list')
            })

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
    },
    mounted() {
      this.id = this.$route.params.id;
      console.log(this.$route.params.id);
      // console.log(this.$route.params.id)
      this.axios.get('/api/user/' + this.$route.params.id).then(res => {
        console.log(res.data);
        this.slide = res.data.data[0];
        console.log(this.slide.gender);
        this.ruleForm.phone = this.slide.phone;
        this.ruleForm.nickname = this.slide.nickname;
        this.ruleForm.lastname = this.slide.lastname;
        this.ruleForm.address = this.slide.address;
        this.ruleForm.school = this.slide.school;
        this.ruleForm.status = this.slide.status;
        this.ruleForm.remark = this.slide.remark;
        this.ruleForm.status = '0' ? '正常' : '停用';
        this.ruleForm.gender = this.slide.gender;
        this.ruleForm.gender = '1' ? '男' : '女';

        // if(this.ruleForm.status==0){
        //   this.ruleForm.status='正常'
        // }else if(this.ruleForm.status==1){
        //   this.ruleForm.status='停用'
        // }


      })
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
