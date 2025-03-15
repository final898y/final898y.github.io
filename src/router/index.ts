import { createRouter, createWebHistory } from "vue-router";

// 导入视图组件
import Home from "../views/HomeView.vue";
import Portfolio from "../views/PortfolioView.vue";
import Skills from "../views/SkillsView.vue";
import Login from "../views/LoginView.vue";
import NotFound from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: { requiresAuth: false },
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫，用于验证用户身份
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
