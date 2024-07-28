import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@views/Home.view.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@views/About.view.vue"),
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@views/Resume.view.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/views/portfolio/Portfolio.view.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.view.vue"),
    },
  ],
});

export default router;
