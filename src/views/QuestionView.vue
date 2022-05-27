<template>
  <div class="question hvr-shadow" @click="goQuestion">
    <div class="id inside">{{ props.id }}</div>
    <div class="line"></div>
    <div class="info inside">
      <div class="name">{{ props.name }}</div>
      <div class="time">{{ props.date }}</div>
    </div>
    <div class="line"></div>
    <div class="statistics inside">
      <div class="rate">{{ props.rate }}</div>
      <div class="level">{{ props.level }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const props = defineProps({
  id: String,
  name: String,
  date: String,
  rate: String,
  level: String,
});
function goQuestion() {
  $router.push({
    name: "question",
    params: {
      id: props.id,
    },
  });
}
</script>
<style scoped>
.question {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  height: 0.3rem;
  margin: 0.05rem 0;
  font-size: 0.12rem;
  background-color: white;
  border-radius: 2px;
  cursor: pointer;
}
.id {
  flex: 1;
}
.line {
  height: 0.2rem;
  border: 1px solid #dedfe0;
  border-radius: 1px;
}
.info {
  flex: 4;
  display: flex;
}
.time {
  margin-left: auto;
}
.statistics {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
}
.inside {
  padding: 0 0.05rem;
}
</style>
