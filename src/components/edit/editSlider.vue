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
        <el-input v-model="ruleForm.pic"></el-input>
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
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "editSlider",

    data() {
      return {
        newobj: '',
        id: '',
        boor: '',
        slide: '',
        ruleForm: {
          pic: '',
          title: '',
          type: '',
          link: '',
          description: '',
          status: ''
        },
        rules: {
          // pic: [
          //   {required: true, message: '请输入图片地址', trigger: 'blur'},
          //   {message: '请输入图片地址', trigger: 'blur'}
          // ],
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.id);
            // this.newobj+='image='+(this.ruleForm.pic).http+'&'
            this.newobj += 'description=' + this.ruleForm.description + '&'
            this.newobj += 'link=' + this.ruleForm.link + '&'
            this.newobj += 'type=' + this.ruleForm.type + '&'
            this.ruleForm.status = '正常' ? '0' : '1'
            this.newobj += 'status=' + this.ruleForm.status + '&'
            this.newobj += 'title=' + this.ruleForm.title
            console.log(this.newobj)
            // console.log(this.$route.params.id);
            this.axios.put('api/carousel/'+this.id, this.newobj).then(res => {
              console.log('修改成功');
              console.log(res);
              this.$router.push('/app/carousel')
            })

          } else {
            console.log('error submit!!');
            // console.log(this.newobj);
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      this.id = this.$route.params.id
      // console.log(this.$route.params.id)
      this.axios.get('api/carousel/' + this.$route.params.id).then(res => {
        // console.log(res.data);
        this.slide = res.data.data[0];
        // console.log(this.slide.type);
        this.ruleForm.pic = this.slide.image;
        this.ruleForm.title = this.slide.title;
        this.ruleForm.type = this.slide.type.toString();
        this.ruleForm.link = this.slide.link;
        this.ruleForm.description = this.slide.description;
        this.ruleForm.status = this.slide.status;

        this.ruleForm.status = '0' ? '正常' : '停用';
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

</style>
