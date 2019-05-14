<template>
  <div class="addwrap">
    <div class="navt">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>运营中心</el-breadcrumb-item>
        <el-breadcrumb-item>资讯列表</el-breadcrumb-item>
        <el-breadcrumb-item>新增资讯</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类" prop="cid">
        <el-input v-model="ruleForm.cid"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <div id="editor">
          <!--<el-input v-model="ruleForm.content"></el-input>-->
          <div id="editorElem" style="text-align:left">

          </div>
        </div>
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
  import E from '../../../node_modules/wangeditor/release/wangEditor'

  export default {
    name: "addInfoList",
    data() {
      return {
        editorContent: '',
        img:'',
        dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
        imgLimit: 6,
        ruleForm: {
          title: '',
          cid:'',
          status:''
        },
        rules: {
          cid: [
            {required: true, message: '请输入分类id', trigger: 'change'},
          ],
          title: [
            {required: true, message: '请输入标题', trigger: 'blur'},
          ],
          status: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
        }
      };
    },
    methods: {
      getContent: function () {
        alert(this.editorContent)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var newobj='';
            newobj += "cid="+this.ruleForm.cid + "&";
            newobj += 'title='+this.ruleForm.title+"&";
            newobj += 'content='+this.editorContent+"&";
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
              this.axios.post('/api/article',newobj).then(res=>{
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
      handleRemove(file, fileList) {//移除图片
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {//预览图片时调用
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

      beforeAvatarUpload(file) {//文件上传之前调用做一些拦截限制
        console.log(file);
        // const isJPG = true;
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {//图片上传成功
        console.log(res);
        console.log(file);
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(file.url);
        this.img = file.url;
      }
    },
    mounted() {
      var editor = new E('#editorElem')
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      };
      editor.customConfig.uploadImgServer = '/upload';
      editor.create()
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
  .upimg{
    /*width: 30%;*/
    margin-bottom: 20px;
    text-align: left;
    padding-left: 100px;
  }
</style>
