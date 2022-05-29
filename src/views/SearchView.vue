<template>
  <headerView></headerView>
</template>
<script setup>
import { defineProps, onMounted } from "vue";
import HeaderView from "./HeaderView.vue";
import searchApi from "../api/searchApi";
const props = defineProps({
  content: String,
});
onMounted(async () => {
  let req = {
    content: props.content,
  };
  await searchApi.searchMain(req);
});
</script>
<style scoped></style>
