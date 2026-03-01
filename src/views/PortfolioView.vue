<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

const projects = [
  {
    title: "Travelogue",
    description: `
輕量化、視覺優先的個人旅行計畫 PWA。
為那些熱愛規劃細節、追求美感的使用者打造的行程管理工具。
基於 Firebase Firestore 實作，支援多端同步與離線快取，隨時記錄靈感。
    `,
    imageUrl: "/images/cardimg-Travelogue.png",
    demoUrl: "https://travelogue.final898y.com/",
    githubUrl: "https://github.com/final898y/Travelogue",
    tags: ["JavaScript", "Firebase", "PWA"],
  },
  {
    title: "LineNexus | AI 指令樞紐",
    description: ` LINE 聊天機器人的多功能 AI 助手。
     採用 Command-based 架構與 Clean Architecture， 
     結合數據富集分析、Prompt 工程化與雙層異常處理。 `,
    imageUrl: "/images/test-placeholder.png",
    githubUrl: "https://github.com/final898y/LineNexus",
    tags: ["Python", "FastAPI", "AI", "Clean Architecture"],
  },

  {
    title: "Final898y's Blog",
    description: `
技術筆記 × 生活隨筆的靜態博客。
使用 VitePress + TypeScript 建置，部署於 GitHub Pages。
整合 Giscus 留言系統，支援互動交流與自動化部署。
  `,
    imageUrl: "/images/cardimg-blog.png",
    demoUrl: "https://final898y.github.io/blog/",
    githubUrl: "https://github.com/final898y/final898y-blog",
    tags: ["VitePress", "TypeScript", "GitHub Pages"],
  },
  {
    title: "FlipQuiz 翻測卡",
    description: `
翻牌記憶 × 測驗練習 (SRS)。
內建 SM-2 演算法，支援翻卡與選擇題，
提供瀏覽、手動/自動 SRS 與快速測驗四種模式。
響應式設計、深色模式與快捷鍵操作，輕量卻強大。
  `,
    imageUrl: "/images/cardimg-FlipQuiz.png",
    demoUrl: "/playground/FlipQuiz/index.html",
    githubUrl: "https://github.com/final898y/FlipQuiz",
    tags: ["JavaScript", "Markdown"],
  },

  {
    title: "1A2B 猜數字遊戲",
    description: "經典邏輯遊戲，練習 JavaScript 的陣列運算與條件判斷。",
    imageUrl: "/images/cardimg-1A2Bgame.png",
    demoUrl: "/playground/1A2Bgame.html",
    tags: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "終極密碼",
    description: "與電腦對決的範圍猜測遊戲，著重於狀態管理與 UI 更新。",
    imageUrl: "/images/cardimg-guessNumbergame.png",
    demoUrl: "/playground/guessNumber.html",
    tags: ["JavaScript", "CSS", "DOM 操作"],
  },
  {
    title: "小瑪莉隨機轉盤",
    description: "模擬復古遊戲機檯，練習計時器 (setInterval) 與隨機算法。",
    imageUrl: "/images/cardimg-LittleMarygame.png",
    demoUrl: "/playground/LittleMary.html",
    tags: ["JavaScript"],
  },
];

const columnsCount = ref(3);

const updateColumnsCount = () => {
  if (window.innerWidth < 768) {
    columnsCount.value = 1;
  } else if (window.innerWidth < 1024) {
    columnsCount.value = 2;
  } else {
    columnsCount.value = 3;
  }
};

onMounted(() => {
  updateColumnsCount();
  window.addEventListener("resize", updateColumnsCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateColumnsCount);
});

const groupedProjects = computed(() => {
  const cols = Array.from(
    { length: columnsCount.value },
    () => [] as typeof projects,
  );
  projects.forEach((project, index) => {
    cols[index % columnsCount.value]!.push(project);
  });
  return cols;
});
</script>

<template>
  <div class="section-container">
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
    >
      <div>
        <div class="badge mb-4">Crafting Excellence</div>
        <h1 class="section-title italic">Selected Works.</h1>
      </div>
      <p class="max-w-md text-secondary/70">
        A collection of projects where design meets functionality, focusing on
        user-centric digital experiences.
      </p>
    </div>

    <div class="flex flex-row gap-8 items-start mt-12">
      <div
        v-for="(column, colIndex) in groupedProjects"
        :key="colIndex"
        class="flex flex-col gap-8 flex-1"
      >
        <ProjectCard
          v-for="project in column"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>

    <!-- 呼籲行動 (Call to Action) -->
    <div class="mt-32 p-16 rounded-[3rem] bg-primary text-surface text-center">
      <h2 class="mb-8 text-surface">Have a project in mind?</h2>
      <p class="text-surface/70 mb-12 max-w-xl mx-auto">
        I'm always looking for new challenges and interesting collaborations.
        Let's build something amazing together.
      </p>
      <router-link to="/about" class="btn-secondary px-12"
        >Get In Touch</router-link
      >
    </div>
  </div>
</template>
