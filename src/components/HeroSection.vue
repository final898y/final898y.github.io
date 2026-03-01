<script setup lang="ts">
import { onMounted, ref } from "vue";

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <section
    class="section-container min-h-0 md:min-h-[85vh] pt-32 pb-20 md:py-0 flex flex-col justify-start md:justify-center relative"
  >
    <div class="max-w-5xl">
      <div
        class="badge mb-6 md:mb-8 inline-block transition-all duration-700 delay-100 transform"
        :class="[
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        ]"
      >
        Available for new projects
      </div>

      <h1 class="mb-8 md:mb-10 leading-[1.1] tracking-tight">
        <div
          class="transition-all duration-1000 delay-300 transform"
          :class="[
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-x-10',
          ]"
        >
          Crafting
          <span class="italic font-serif font-normal text-secondary/60"
            >Digital</span
          >
        </div>

        <div
          class="relative inline-block transition-all duration-1000 delay-500 transform"
          :class="[
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ]"
        >
          <span class="relative z-10">Experiences.</span>
          <span
            class="absolute bottom-2 md:bottom-4 left-0 h-3 md:h-4 bg-soft/40 -z-10 transition-all duration-[1.5s] delay-[1.2s] ease-in-out"
            :style="{ width: isLoaded ? '100%' : '0%' }"
          ></span>
        </div>
      </h1>

      <div
        class="transition-all duration-1000 delay-700 transform"
        :class="[
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        ]"
      >
        <p
          class="max-w-2xl text-secondary/80 mb-10 md:mb-12 leading-relaxed text-sm md:text-base"
        >
          我是一位全端工程師，擅長將複雜的邏輯轉化為直覺且精緻的介面。熟悉多種程式語言與技術，能靈活打造兼具美感與高效能的網頁與系統解決方案。
        </p>

        <div class="flex flex-col sm:flex-row gap-4 md:gap-6">
          <router-link
            to="/portfolio"
            class="btn-primary group px-8 md:px-10 py-3 md:py-4"
          >
            探索作品集
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
          <router-link
            to="/about"
            class="btn-secondary px-8 md:px-10 py-3 md:py-4"
          >
            關於我
          </router-link>
        </div>
      </div>
    </div>

    <!-- Scroll hint (Hidden on mobile for better density) -->
    <div
      class="hidden md:flex absolute bottom-10 left-0 items-center gap-4 transition-all duration-1000 delay-[2s]"
      :class="[isLoaded ? 'opacity-40' : 'opacity-0']"
    >
      <div class="w-12 h-[1px] bg-primary"></div>
      <span class="text-[10px] uppercase tracking-[0.3em] font-bold"
        >Scroll to explore</span
      >
    </div>
  </section>
</template>
