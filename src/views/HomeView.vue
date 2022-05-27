<template>
  <div class="container">
    <headerView></headerView>
    <main>
      <div class="nav">
        <navItemView
          v-for="item in nav"
          :sort="item.sort"
          :id="item.id"
        ></navItemView>
      </div>
      <div class="questions">
        <div class="introduce">
          <div class="theme">{{ home.theme }}</div>
          <div class="detail">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ home.detail }}
          </div>
        </div>
        <div class="list">
          <questionView
            v-for="item in home.list"
            :id="item.id"
            :name="item.name"
            :date="item.date"
            :rate="item.rate"
            :level="item.level"
          ></questionView>
        </div>
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          background
          style="align-self: center; margin-top: auto"
        ></el-pagination>
      </div>
    </main>
    <footer></footer>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { homeApi } from "../api/homeApi";
import { homeStore } from "../stores/home";
import QuestionView from "./QuestionView.vue";
import NavItemView from "./NavItemView.vue";
import HeaderView from "./HeaderView.vue";

const home = homeStore();
let nav = ref([]);
onMounted(async () => {
  let res = await homeApi.navGet();
  nav.value = res.data;
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
main {
  display: flex;
  justify-content: space-between;
  width: 75%;
  overflow: hidden;
}
.nav {
  display: flex;
  flex-direction: column;
  width: 30%;
  min-height: 100vh;
  background-color: #fafcff;
}
.questions {
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 100vh;
}
.introduce {
  height: 0.8rem;
  padding: 0 0.05rem;
  border-bottom: 0.01rem solid #409eff;
}
.theme {
  width: 100%;
  height: 60%;
  font-size: 0.3rem;
  font-family: 楷体;
}
.detail {
  width: 100%;
  height: 40%;
  font-size: 0.1rem;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer {
  width: 100%;
  height: 1rem;
  background-color: #606266;
}
</style>
