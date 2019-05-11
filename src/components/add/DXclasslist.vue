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
      <el-form-item label="课程分类ID" prop="cid">
        <el-input v-model="ruleForm.cid"></el-input>
      </el-form-item>
      <el-form-item label="封面图片" prop="cover">
        <el-input v-model="ruleForm.cover"></el-input>
      </el-form-item>
      <el-form-item label="课程名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="tid">
        <el-input v-model="ruleForm.tid"></el-input>
      </el-form-item>
      <el-form-item label="课程排序" prop="sort">
      <el-input v-model="ruleForm.sort"></el-input>
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
          cid:'',
          cover:'',
          name: '',
          tid:'',
          price:'',
          level:'',
          status: '',
          sort:'',
          createTime:''
        },
        rules: {
          name: [
            {required: true, message: '请输入分类名称', trigger: 'blur'},
          ],
          cover: [
            {required: true, message: '请输入地址', trigger: 'change'}
          ],
          tid : [
            {required: true, message: '请选择类型', trigger: 'change'}
          ],
          price : [
            {required: true, message: '请输入价格', trigger: 'change'}
          ],
          cid : [
            {required: true, message: '请输入课程分类ID', trigger: 'change'}
          ],
          sort : [
            {required: true, message: '请选择课程排序', trigger: 'change'}
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
            this.$confirm('确定要添加吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.axios.post('/api/course',{
                name:this.ruleForm.name,
                cid:this.ruleForm.cid,
                cover:this.ruleForm.cover,
                tid:this.ruleForm.tid,
                price:this.ruleForm.price,
                level:this.ruleForm.level,
                sort:this.ruleForm.sort,
                status:this.ruleForm.status
              }).then(res=>{
                console.log(res);
                this.$router.push('/app/course/list');
              });
            })
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
