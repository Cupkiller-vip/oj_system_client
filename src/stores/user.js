import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => {
    return {
      name: "",
      account: "",
      token: "",
    };
  },
  actions: {
    input({ name, account, token }) {
      this.name = name;
      this.account = account;
      this.token = token;
    },
    reset() {
      this.name = "";
      this.account = "";
      this.token = "";
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
