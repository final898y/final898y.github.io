import { describe, it, expect, beforeEach, vi } from "vitest";
import router from "../../src/router";

// 模擬所有 View 組件，避免圖片解析錯誤
vi.mock("../../src/views/HomeView.vue", () => ({
  default: { template: "<div>Home</div>" },
}));
vi.mock("../../src/views/PortfolioView.vue", () => ({
  default: { template: "<div>Portfolio</div>" },
}));
vi.mock("../../src/views/AboutView.vue", () => ({
  default: { template: "<div>About</div>" },
}));
vi.mock("../../src/views/SkillsView.vue", () => ({
  default: { template: "<div>Skills</div>" },
}));
vi.mock("../../src/views/NotFoundView.vue", () => ({
  default: { template: "<div>404</div>" },
}));

describe("Router", () => {
  beforeEach(async () => {
    // 每次測試前重置 sessionStorage 並回到首頁
    sessionStorage.clear();
    await router.push("/");
    await router.isReady();
    vi.clearAllMocks();
  });

  it("navigates to home by default", () => {
    expect(router.currentRoute.value.path).toBe("/");
  });

  it("navigates to portfolio", async () => {
    await router.push("/portfolio");
    expect(router.currentRoute.value.path).toBe("/portfolio");
  });

  it("handles unknown routes by showing 404 page", async () => {
    await router.push("/invalid-path");
    expect(router.currentRoute.value.name).toBe("not-found");
  });

  it("handles github pages redirect from sessionStorage", async () => {
    // 模擬 404.html 存入的重導向路徑
    sessionStorage.setItem("redirect", "/about");

    // 重新載入時觸發 beforeEach
    await router.push({ path: "/", force: true });

    // 預期 sessionStorage 已被清空，且路徑跳轉至 /about
    expect(sessionStorage.getItem("redirect")).toBeNull();
    expect(router.currentRoute.value.path).toBe("/about");
  });
});
