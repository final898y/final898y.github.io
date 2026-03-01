<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="section-container min-h-[70vh] flex flex-col items-center justify-center text-center"
  >
    <!-- 404 視覺標誌 -->
    <div class="relative mb-12">
      <h1
        class="text-[12rem] md:text-[18rem] font-serif font-bold text-primary/5 leading-none select-none"
      >
        404
      </h1>
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="badge animate-float bg-accent text-surface px-6 py-2 text-xl shadow-elegant"
        >
          Page Not Found
        </div>
      </div>
    </div>

    <!-- 文字描述 -->
    <h2 class="text-3xl md:text-5xl font-serif mb-6">
      Lost in the Digital Void?
    </h2>
    <p class="text-secondary/70 max-w-md mx-auto mb-12 text-lg">
      The page you are looking for might have been removed, had its name
      changed, or is temporarily unavailable.
    </p>

    <!-- 導航按鈕 -->
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <RouterLink to="/" class="btn-primary px-10"> Back to Home </RouterLink>
      <RouterLink to="/portfolio" class="btn-outline px-10">
        View Portfolio
      </RouterLink>
    </div>

    <!-- 裝飾元素 -->
    <div
      class="absolute top-1/2 left-10 w-32 h-32 bg-soft/10 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-1/4 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"
    ></div>
  </div>
</template>

<style scoped>
.font-serif {
  letter-spacing: -0.05em;
}
</style>
