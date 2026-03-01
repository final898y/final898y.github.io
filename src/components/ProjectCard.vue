<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string; // 選填 (Optional)
  githubUrl?: string; // 選填 (Optional)
  tags: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="card-elegant group flex flex-col overflow-hidden p-0 h-fit">
    <!-- 預覽圖區域 (Image Area - Optimized for Masonry) -->
    <div class="relative overflow-hidden rounded-t-[2rem] w-full">
      <img
        :src="imageUrl"
        :alt="title"
        class="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
        loading="lazy"
      />
      <!-- 懸浮時的微弱漸層遮罩 (Subtle overlay) -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      ></div>
    </div>

    <!-- 內容區域 (Content Area) -->
    <div class="p-6 md:p-8 flex flex-col flex-grow">
      <!-- 標籤雲 (Tags) -->
      <div class="flex flex-wrap gap-2 mb-4 md:mb-6">
        <span
          v-for="tag in tags"
          :key="tag"
          class="badge lowercase text-[10px] py-0.5 px-2 bg-accent/5 text-accent border border-accent/10"
        >
          {{ tag }}
        </span>
      </div>

      <h3
        class="font-serif mb-2 md:mb-3 text-xl md:text-2xl group-hover:text-accent transition-colors duration-300"
      >
        {{ title }}
      </h3>

      <p class="text-secondary/70 text-sm leading-relaxed mb-6 md:mb-8">
        {{ description }}
      </p>

      <!-- 連結按鈕 (Action Links) -->
      <div class="flex items-center gap-3 md:gap-4 mt-auto">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary py-2 px-4 md:px-6 text-[10px] md:text-xs flex-1 text-center"
        >
          Live Demo
        </a>
        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline py-2 px-4 md:px-6 text-[10px] md:text-xs flex-1 text-center"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
</template>
