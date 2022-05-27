<template>
  <div class="questionContent">
    <div class="insideHeader">
      <div class="insideId">{{ props.message.id }}</div>
      <div class="insideName">{{ props.message.name }}</div>
    </div>
    <div class="insideMore">
      <div>{{ props.message.level }}</div>
      <div>{{ props.message.rate }}</div>
    </div>
    <div class="smallerLine"></div>
    <div class="insideDetail">{{ props.message.detail }}</div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  message: Object,
});
</script>
<style scoped>
.questionContent {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 0.3rem - (100vh - 0.3rem) * 0.05);
  background-color: white;
  padding: 0.5% 2%;
}
.insideHeader {
  display: flex;
  align-items: center;
  font-size: 0.25rem;
}
.insideId {
  margin-right: 0.3rem;
}
.insideMore {
  display: flex;
  align-items: center;
  height: 0.2rem;
  font-size: 0.1rem;
}
.smallerLine {
  height: 0.01rem;
  background-color: #409eff;
}
.insideDetail {
  font-size: 0.15rem;
}
</style>
