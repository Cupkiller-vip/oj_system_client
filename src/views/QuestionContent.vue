<template>
  <div class="questionContent">
    <div class="insideHeader">
      <div class="insideId">{{ props.message.id }}</div>
      <div class="insideName">{{ props.message.name }}</div>
    </div>
    <div class="insideMore">
      <div>{{ props.message.level }}</div>
      <div>{{ props.message.rate }}</div>
      <div style="margin-left: auto">{{ props.message.date }}</div>
    </div>
    <div class="smallerLine"></div>
    <div class="insideDetail">{{ props.message.detail }}</div>
    <pre
      v-for="(item, index) in props.message.example"
      :key="index"
      class="example"
    >
      <strong>输入：</strong>{{ item.input }}
      <strong>输出：</strong>{{ item.output }}
    </pre>
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
  font-size: 0.1rem;
}
.insideHeader {
  display: flex;
  align-items: center;
  font-size: 0.2rem;
}
.insideId {
  margin-right: 0.2rem;
}
.insideMore {
  display: flex;
  align-items: center;
  height: 0.2rem;
}
.insideMore > div + div {
  margin-left: 0.2rem;
}
.smallerLine {
  height: 0.01rem;
  background-color: #409eff;
}
.example {
  border-radius: 0.02rem;
  background-color: rgba(0, 10, 32, 0.05);
  overflow: auto;
  white-space: pre-line;
}
</style>
