<template>
  <div>
    <MonacoEditor
      :editorTheme="state.theme"
      :editorLanguage="state.language"
      v-model="state.code"
      :editorFontSize="state.fontSize"
      :editorTabSize="state.tabSize"
    ></MonacoEditor>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import MonacoEditor from "../components/MonacoEditor.vue";
const state = reactive({
  theme: "vs",
  language: "javascript",
  code: "",
  fontSize: 32,
  tabSize: 2,
});
</script>
<style scoped></style>
