<script setup lang="ts">
import HeroSection from "../components/HeroSection.vue";
import FeaturedWorks from "../components/FeaturedWorks.vue";

const techStack = [
  "JavaScript",
  "TypeScript",
  "Vue 3",
  "Node.js",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
  "Vite",
];

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const featuredProjects: Project[] = [
  {
    title: "Travelogue",
    description:
      "輕量化、視覺優先的個人旅行計畫 PWA。基於 Firebase 實作，支援多端同步與離線快取，為熱愛美感的使用者打造的行程管理工具。",
    imageUrl: "/images/cardimg-Travelogue.png",
  },
  {
    title: "LineNexus | AI 指令樞紐",
    description:
      "LINE 聊天機器人的多功能 AI 助手。採用 Clean Architecture 與 Command-based 架構，結合數據分析與 Prompt 工程化設計。",
    imageUrl: "/images/test-placeholder.png",
  },
  {
    title: "Final898y's Blog",
    description:
      "技術筆記 × 生活隨筆的靜態博客。使用 VitePress 建置並整合 Giscus 留言系統，透過 GitHub Pages 實現自動化部署與互動交流。",
    imageUrl: "/images/cardimg-blog.png",
  },
];
</script>

<template>
  <div
    class="relative overflow-hidden bg-surface min-h-screen selection:bg-accent/20"
  >
    <!-- Hero Section Component -->
    <HeroSection />

    <!-- 技術名詞跑馬燈 (Infinite Tech Marquee) -->
    <div
      class="marquee-wrapper relative py-10 backdrop-blur-xl bg-white/10 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <div class="marquee-container flex whitespace-nowrap">
        <div class="marquee-content flex gap-16 items-center">
          <span
            v-for="tech in [...techStack, ...techStack, ...techStack]"
            :key="tech"
            class="text-xl md:text-2xl font-medium tracking-widest uppercase text-primary/30 hover:text-accent transition-colors cursor-default"
          >
            {{ tech }}
            <span class="ml-16 text-accent/10">•</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Featured Works Component -->
    <FeaturedWorks :projects="featuredProjects" />

    <!-- Footer CTA - Optimized with Fluid Typography -->
    <section class="section-container pt-0 pb-24 md:pb-40">
      <div
        class="p-8 sm:p-16 md:p-32 rounded-[2.5rem] md:rounded-[4rem] bg-primary text-surface relative overflow-hidden group"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        ></div>
        <div class="relative z-10">
          <h2
            class="display-title mb-10 md:mb-12 text-surface leading-[1.1] tracking-tight"
          >
            Let's create something<br />extraordinary.
          </h2>
          <router-link
            to="/about"
            class="btn-secondary px-10 md:px-14 py-4 md:py-6 bg-surface text-primary hover:bg-soft border-none text-base md:text-xl shadow-elegant inline-flex"
            >Get in touch</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 使用 CSS Mask 代替背景顏色漸層，解決邊緣顏色不一致問題 */
.marquee-wrapper {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 200px,
    black calc(100% - 200px),
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 200px,
    black calc(100% - 200px),
    transparent
  );
  transform: translateZ(0);
}

/* 無限輪轉動畫 (Infinite Marquee) */
.marquee-content {
  animation: scroll 60s linear infinite;
  display: flex;
  width: max-content;
}

.marquee-wrapper:hover .marquee-content {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
}
</style>
