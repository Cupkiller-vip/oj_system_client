<template>
  <div class="container">
    <div class="main animate__animated animate__fadeInUpBig">
      <div class="form">
        <div class="formTitle">REGISTER</div>
        <el-form size="large" class="realForm">
          <el-form-item label="昵称">
            <el-input v-model="state.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="state.email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="state.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="state.againPassword"></el-input>
          </el-form-item>
        </el-form>
        <el-button size="large" @click="register" class="button"
          >注册</el-button
        >
        <el-link @click="goLogin">已有账号？点此登录</el-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { userApi } from "@/api/userApi";
import { userStore } from "../stores/user";
import { ElMessage } from "element-plus";

const user = userStore()
const $router = useRouter();
const state = reactive({
  name: "",
  email: "",
  password: "",
  againPassword: "",
});
async function register() {
  if (state.password !== state.againPassword) {
    return;
  }
  let req = {
    name: state.name,
    email: state.email,
    password: state.password,
  };
  let res = await userApi.register(req);
  if(!res.data.result){
    user.input(res.data);
    ElMessage({
      message: "注册成功",
      type: "success",
    });
    $router.push({
      name:"home"
    })
  }else {
    ElMessage({
      message:res.data.result,
      type:"error"
    })
  }
}
function goLogin() {
  $router.push({
    name: "login",
  });
}
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-size: 0.1rem;
  width: 3.2rem;
  height: 3.5rem;
  background-color: lightblue;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formTitle {
  font-family: Cantarell;
  font-size: 0.5rem;
  margin-bottom: 0.15rem;
}
.realForm {
  width: 2rem;
}
.realForm > div + div {
  margin-top: 0.25rem;
}
.button {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
</style>
