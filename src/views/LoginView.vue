<template>
  <div class="container">
    <div class="main animate__animated animate__fadeInUpBig">
      <div class="item image">
        <img src="@/assets/user.svg" />
      </div>
      <div class="line"></div>
      <div class="item form">
        <div class="formTitle">LOGIN</div>
        <el-form size="large" class="realForm">
          <el-form-item label="账号">
            <el-input
              v-model="state.account"
              placeholder="请在此处输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="state.password"
              placeholder="请在此处输入密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button size="large" @click="login" class="button">登录</el-button>
        <el-link @click="goRegister">没有账号？点此注册</el-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { userApi } from "../api/userApi";
import { userStore } from "../stores/user";
import { ElMessage } from "element-plus";

const $router = useRouter();
const user = userStore();
const state = reactive({
  account: "",
  password: "",
});
async function login() {
  let req = {
    account: state.account,
    password: state.password,
  };
  let res = await userApi.login(req);
  if (!res.data.result) {
    user.input(res.data);
    ElMessage({
      message: "登录成功",
      type: "success",
    });
    $router.push({
      name: "home",
    });
  } else {
    ElMessage({
      message: res.data.result,
      type: "error",
    });
  }
}
function goRegister() {
  $router.push({
    name: "register",
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
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  font-size: 0.1rem;
  width: 6rem;
  height: 3rem;
  background-color: bisque;
}
.item {
  width: 2.2rem;
  height: 2.2rem;
}
.line {
  height: 2rem;
  border: 1px solid #dedfe0;
  border-radius: 1px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formTitle {
  font-family: Cantarell;
  font-size: 0.5rem;
}
.realForm {
  width: 2rem;
}
.realForm > div {
  margin-bottom: 0;
}
.realForm > div + div {
  margin-top: 0.2rem;
}
.button {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
</style>
