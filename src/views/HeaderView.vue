<template>
  <div class="header">
    <div class="image"></div>
    <div class="search">
      <input class="input" v-model="state.input"/>
      <div class="searchButton hvr-fade">
        <svg
          class="searchIcon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
        >
          <path
            d="M1005.312 914.752l-198.528-198.464A448 448 0 1 0 0 448a448 448 0 0 0 716.288 358.784l198.4 198.4a64 64 0 1 0 90.624-90.432zM448 767.936A320 320 0 1 1 448 128a320 320 0 0 1 0 640z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <div class="user">
      <div v-if="user.account" style="cursor: pointer">
        <div class="userMessage" @click="goUser">
          <el-avatar class="avatar"></el-avatar>
          {{ user.name }}
        </div>
        <el-link @click="logout">退出登录</el-link>
      </div>
      <div v-else>
        <el-link @click="goLogin">登录</el-link>/<el-link @click="goRegister"
          >注册</el-link
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { userStore } from "../stores/user";
import { useRouter } from "vue-router";
const $router = useRouter();
const user = userStore();
const state = reactive({
  input: "",
});
function goUser() {
  $router.push({
    name: "user",
  });
}
function goLogin() {
  $router.push({
    name: "login",
  });
}
function goRegister() {
  $router.push({
    name: "register",
  });
}
function logout() {
  user.reset();
}
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 0.3rem;
  background-color: #409eff;
}
.image {
  flex: 2;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
}
.input {
  width: 60%;
  height: 50%;
  border-top-left-radius: 0.01rem;
  border-bottom-left-radius: 0.01rem;
  font-size: 0.1rem;
}
.searchButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 50%;
  background-color: #ecf5ff;
  border-top-right-radius: 0.01rem;
  border-bottom-right-radius: 0.01rem;
  cursor: pointer;
}
.user {
  display: flex;
  flex: 2;
}
.user > div {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0.3rem;
  height: 100%;
  font-size: 0.1rem;
}
.userMessage {
  display: flex;
  align-items: center;
  margin-right: 0.05rem;
}
.avatar {
  margin: 0 0.05rem;
}
.el-link {
  font-size: 0.1rem;
}
.hvr-fade:hover,
.hvr-fade:focus,
.hvr-fade:active {
  background-color: #000000;
  color: white;
}
</style>
