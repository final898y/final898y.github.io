<script setup lang="ts">
import { RouterView } from "vue-router";
import AppNavbar from "./components/AppNavbar.vue";
</script>

<template>
  <div class="min-h-screen">
    <!-- 全域導覽列組件 -->
    <AppNavbar />

    <!-- 主要內容 -->
    <main class="pt-24 md:pt-32 pb-32 md:pb-0">
      <RouterView v-slot="{ Component }">
        <transition
          mode="out-in"
          enter-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0 translate-y-2"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- 頁尾 (Footer) -->
    <footer
      class="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-primary/5 mt-20"
    >
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- 左側：品牌與身份 -->
        <div class="flex flex-col items-center md:items-start gap-2">
          <div class="flex items-center gap-3">
            <img src="/FaviconLogo.svg" alt="Logo" class="w-5 h-5 opacity-60" />
            <span
              class="font-serif italic font-bold text-primary tracking-tight"
              >Final898y</span
            >
          </div>
          <p
            class="text-secondary/40 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Full-stack Developer & Digital Architect
          </p>
        </div>

        <!-- 右側：連結與版權 -->
        <div class="flex flex-col items-center md:items-end gap-3">
          <div class="flex gap-6">
            <a
              href="https://github.com/final898y"
              target="_blank"
              class="text-secondary/60 hover:text-primary transition-colors text-sm font-medium"
              >GitHub</a
            >
            <a
              href="mailto:final898y@gmail.com"
              class="text-secondary/60 hover:text-primary transition-colors text-sm font-medium"
              >Contact</a
            >
          </div>
          <p class="text-secondary/40 text-[11px]">
            © 2026 Final898y. Built with
            <span class="text-primary/70 font-medium">Vue 3</span> &
            <span class="text-primary/70 font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全域背景效果保持 */
body {
  background-attachment: fixed;
  background-image:
    radial-gradient(at 0% 0%, rgba(250, 170, 141, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(155, 41, 21, 0.03) 0px, transparent 50%);
}
</style>
