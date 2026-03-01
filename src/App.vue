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

    <!-- 頁尾 -->
    <footer
      class="section-container border-t border-primary/5 text-center mt-20"
    >
      <p class="text-secondary/50 text-sm">
        © 2026 Final898y. Crafted with
        <span class="text-accent">Oxidized Iron</span> &
        <span class="text-soft">Tangerine Dream</span>.
      </p>
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
