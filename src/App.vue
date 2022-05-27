<script setup>
import { RouterView } from "vue-router";
function refreshRem() {
  var docEl = document.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rem = width / 10;
  docEl.style.fontSize = rem + "px";
}
window.addEventListener("load", refreshRem);
window.addEventListener("resize", refreshRem);
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@font-face {
  font-family: "Cantarell";
  src: url("@/assets/Cantarell-BoldOblique.ttf");
}

#app {
  font-weight: normal;
  width: 100%;
  height: 100vh;
}
input {
  outline-style: none;
  border: 0;
  padding: 0;
}
.el-message > .el-icon {
  font-size: 0.1rem;
}
</style>
