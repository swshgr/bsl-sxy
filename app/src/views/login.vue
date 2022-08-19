<template>
  <div class="box1">
    <div class="box">
         <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username:'',
       password:'',

      },
    };
  },
   methods: {
      login() {
        this.axios.post('http://shiyansong.cn:8888/api/private/v1/login',this.form).then(res=>{
            console.log(res);
            sessionStorage.setItem('token',res.data.data.token)
            this.$router.push('/home')
        })

      }
    }
};
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    margin: auto;
}
.box1{
    width: 100%;
    height: 100%;
    display: inline-block;

}
.box {
    margin-top: 200px;
    text-align: center;
  width: 400px;
  height: 400px;
//   background-color: aqua;
//   background: rgb(0, 51, 255);
}
</style>
