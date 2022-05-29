<template>
  <div class="navItem hvr-sweep-to-right" @click="listGet">
    {{ props.name }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { homeStore } from "../stores/home";
import homeApi from "../api/homeApi";
import { ElMessage } from "element-plus";

const home = homeStore();
const props = defineProps({
  id: String,
  name: String,
});
async function listGet() {
  let req = {
    id: props.id,
  };
  let res = await homeApi.listGet(req);
  if (!res.data.result) {
    home.input(res.data);
  } else {
    ElMessage({
      message: res.data.result,
      type: "error",
    });
  }
}
</script>
<style scoped>
.navItem {
  height: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.4rem;
  padding: 0 0.05rem;
  cursor: pointer;
}
.hvr-sweep-to-right:before {
  background-color: #a0cfff;
}
</style>
