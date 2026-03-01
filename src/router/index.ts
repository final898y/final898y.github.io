import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

// GitHub Pages Refresh Fix: 偵測從 404.html 轉發過來的路徑
router.beforeEach((_to, _from, next) => {
  const redirect = sessionStorage.getItem("redirect");

  if (redirect) {
    sessionStorage.removeItem("redirect");
    // 如果 redirect 包含路徑，則跳轉 (例如 "/portfolio")
    if (redirect !== "/" && redirect !== window.location.pathname) {
      next({ path: redirect });
      return;
    }
  }
  next();
});

export default router;
