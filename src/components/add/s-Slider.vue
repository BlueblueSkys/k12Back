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
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
             style="margin-top: 15px">
      <el-form-item label="图片" prop="pic">
        <el-upload
          class="avatar-uploader"
          action="api/upload/image"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
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
    name: "Slider",
    data() {
      return {
        imageUrl: '',
        newobj:'',
        ruleForm: {
          pic: '',
          title: '',
          type: '',
          link: '',
          description: '',
          status: '',

        },
        rules: {

          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
            {message: '请输入标题', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请输入类型', trigger: 'blur'},
            {message: '请输入类型', trigger: 'blur'}
          ],
          link: [
            {required: true, message: '请输入链接', trigger: 'blur'},
            {message: '请输入链接', trigger: 'blur'}
          ],
          description: [
            {required: true, message: '请输入描述', trigger: 'blur'},
            {message: '请输入描述', trigger: 'blur'}
          ],
          status: [
            {required: true, message: '请输入状态', trigger: 'blur'},

          ]
        }

      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(res);
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // this.newobj+='image='+(this.ruleForm.pic).http+'&'
            this.newobj+='description=' +this.ruleForm.description+'&'
            this.newobj+='link=' +this.ruleForm.link+'&'
            this. newobj+='type=' +this.ruleForm.type+'&'
            this.ruleForm.status='正常'?'0':'1'
            this.newobj+='status=' +this.ruleForm.status+'&'
            this. newobj+='title=' +this.ruleForm.title

            this.$confirm('此操作将添加该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.post('api/carousel',this.newobj
              ).then(res => (
                console.log(res)
              )).catch(err => {
                console.log(err);
                console.log(this.newobj);
              })
              this.$router.push('/app/carousel')
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
