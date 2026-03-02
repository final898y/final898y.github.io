<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const navLinks = [
  { path: "/", label: "Home", icon: "home" },
  { path: "/portfolio", label: "Portfolio", icon: "grid" },
  { path: "/skills", label: "Skills", icon: "zap" },
  { path: "/about", label: "About", icon: "user" },
  {
    path: "https://final898y.github.io/blog/",
    label: "Blog",
    icon: "book",
    isExternal: true,
  },
];

const getCurrentLabel = () => {
  const link = navLinks.find((l) => l.path === route.path);
  return link ? link.label : "";
};
</script>

<template>
  <!-- 頂部導覽列 (Top Navbar) -->
  <nav
    class="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-effect rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center shadow-elegant w-[92%] md:w-auto max-w-7xl justify-between gap-4"
  >
    <!-- Logo & Page Indicator -->
    <div class="flex items-center gap-3">
      <router-link
        to="/"
        class="text-xl md:text-2xl font-serif font-bold text-accent tracking-tighter shrink-0"
      >
        Final898Y.
      </router-link>
      <span class="hidden sm:block w-[1px] h-4 bg-primary/10 md:hidden"></span>
      <span
        class="text-[10px] uppercase tracking-widest font-bold text-primary/40 md:hidden whitespace-nowrap"
      >
        {{ getCurrentLabel() }}
      </span>
    </div>

    <!-- 電腦版連結 (Desktop Links) -->
    <div class="hidden md:flex items-center gap-8 px-4">
      <template v-for="link in navLinks" :key="link.path">
        <router-link
          v-if="!link.isExternal"
          :to="link.path"
          class="nav-link"
          exact-active-class="router-link-active"
        >
          {{ link.label }}
        </router-link>
        <a
          v-else
          :href="link.path"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-link flex items-center gap-1.5 opacity-60 hover:opacity-100"
        >
          {{ link.label }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </template>
    </div>

    <!-- Actions Area (Always visible "Hire Me") -->
    <div class="flex items-center gap-2 md:gap-4">
      <a
        href="mailto:final898y@gmail.com"
        class="btn-primary py-1.5 md:py-2 px-4 md:px-6 text-[10px] md:text-sm uppercase tracking-wider font-bold"
      >
        Hire Me
      </a>
    </div>
  </nav>

  <!-- 行動端底部標籤列 (Mobile Bottom Tab Bar) -->
  <div class="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4">
    <nav
      class="max-w-md mx-auto glass-effect-deep rounded-full shadow-2xl flex items-center justify-around py-3 px-2 border border-white/20"
    >
      <template v-for="link in navLinks" :key="link.path">
        <!-- 內部連結 -->
        <router-link
          v-if="!link.isExternal"
          :to="link.path"
          class="flex flex-col items-center gap-1 transition-all duration-300 group flex-1"
          active-class="active-tab"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group-active:scale-90"
            :class="
              route.path === link.path
                ? 'bg-accent text-surface'
                : 'text-primary/40'
            "
          >
            <!-- SVG Icons (Home, Grid, Zap, User) -->
            <svg
              v-if="link.icon === 'home'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <svg
              v-if="link.icon === 'grid'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
            <svg
              v-if="link.icon === 'zap'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M4 14.71 13.14 3.5a1.2 1.2 0 0 1 1.6 1.68L11 11h9l-9.14 11.2a1.2 1.2 0 0 1-1.6-1.68L13 13H4Z"
              />
            </svg>
            <svg
              v-if="link.icon === 'user'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          </div>
          <span
            class="text-[9px] font-bold uppercase tracking-widest transition-colors duration-300"
            :class="
              route.path === link.path ? 'text-primary' : 'text-primary/30'
            "
          >
            {{ link.label }}
          </span>
        </router-link>

        <!-- 外部連結 (Blog) - 特別樣式 -->
        <a
          v-else
          :href="link.path"
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-col items-center gap-1 transition-all duration-300 group flex-1"
        >
          <div
            class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 group-active:scale-90 text-primary/30 bg-primary/5 border border-primary/5 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20"
          >
            <!-- Book Icon with External arrow hint -->
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"
                />
              </svg>
              <div
                class="absolute -top-1.5 -right-1.5 bg-accent text-white rounded-full p-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </div>
          <span
            class="text-[9px] font-bold uppercase tracking-widest text-primary/30 group-hover:text-accent transition-colors duration-300"
          >
            {{ link.label }}
          </span>
        </a>
      </template>
    </nav>
  </div>
</template>

<style scoped>
.glass-effect {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-color: rgba(254, 239, 221, 0.8);
}

.glass-effect-deep {
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  background-color: rgba(254, 239, 221, 0.95);
}

.active-tab {
  transform: translateY(-4px);
}
</style>
