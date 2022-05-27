import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/UserView.vue"),
    },
    {
      path: "/question/:id",
      name: "question",
      component: () => import("@/views/QuestionMessageView.vue"),
      props: true,
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestView.vue"),
    },
  ],
});

export default router;
