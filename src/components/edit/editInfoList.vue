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
    name: "editInfoList",
    data() {
      return {
        editorContent: '',
        ruleForm: {
          cid: '',
          status: '',
          title: ""
        },
        rules: {
          cid: [
            {required: true, message: '请输入分类名称', trigger: 'blur'},
          ],
          status: [
            {required: true, message: '请选择状态', trigger: 'change'}
          ],
          title: [
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
            newStr+= 'cid='+this.ruleForm.cid+'&';
            newStr+= 'title=' + this.ruleForm.title+'&';
            if (this.ruleForm.status=='正常'){
              this.ruleForm.status = 0
            } else{
              this.ruleForm.status = 1
            }
            newStr += 'status='+this.ruleForm.status+"&";
            newStr += 'content='+this.editorContent;
            console.log(newStr);
            this.$confirm('确定添加?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.put('/api/article/'+this.$route.params.id,newStr).then(res=>{
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
      }
    },
    mounted() {
      var editor = new E('#editorElem');
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      };
      // editor.customConfig.uploadImgServer = '/upload';
      editor.create();

      var id = this.$route.params.id;
      console.log(this.$route.params.id);
      this.axios.get('/api/article/' + id).then(res => {
        this.ruleForm = res.data.data,
          this.ruleForm.status = '0' ? '正常' : '停用',
          this.ruleForm = res.data.data,
          editor.txt.html(res.data.data.content);
          this.editorContent = res.data.data.content;
          console.log(res.data.data)
      });

    },

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
