import { defineStore } from "pinia";

export const homeStore = defineStore({
  id: "home",
  state: () => {
    return {
      theme: "",
      detail: "",
      list: [],
    };
  },
  actions: {
    input({ theme, detail, list }) {
      this.theme = theme;
      this.detail = detail;
      this.list = list;
    },
    reset() {
      this.theme = "";
      this.detail = "";
      this.list = [];
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
