import { defineStore } from "pinia";

export const editorStore = defineStore({
  id: "editor",
  state: () => ({
    theme: "vs",
    language: "javascript",
    value: "123",
    originalValue: "123",
    fontSize: 20,
    tabSize: 2,
    hasReset: false,
  }),
  actions: {
    updateValue(data) {
      this.value = data;
    },
  },
});
