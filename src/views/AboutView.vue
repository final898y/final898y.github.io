<script setup lang="ts">
const philosophies = [
  {
    title: "Simplicity First",
    desc: "I believe that the best solutions are often the most straightforward ones. Clean code leads to maintainable products.",
  },
  {
    title: "User-Centricity",
    desc: "Technology should serve people, not the other way around. Every line of code I write is for the human at the other end.",
  },
  {
    title: "Lifelong Learning",
    desc: "The digital landscape evolves daily. Staying curious is my greatest asset in delivering cutting-edge solutions.",
  },
];

const hobbies = [
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400",
    label: "Coffee Enthusiast",
    desc: "Exploring the perfect pour-over ratio.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400",
    label: "Street Photography",
    desc: "Capturing the rhythm of urban life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=400",
    label: "Hiking",
    desc: "Recharging my creativity in the great outdoors.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    label: "Non-fiction Reader",
    desc: "Learning about psychology and design systems.",
  },
];
</script>

<template>
  <div class="section-container">
    <!-- 敘事首屏 (Narrative Hero) -->
    <header class="max-w-4xl mb-32">
      <div class="badge mb-6">The Story Behind the Code</div>
      <h1 class="font-serif leading-tight mb-12">
        I bridge the gap between <br />
        <span class="text-accent italic">Imagination</span> and
        <span class="text-soft">Reality</span>.
      </h1>
      <p
        class="text-xl md:text-2xl text-secondary/80 font-serif italic border-l-4 border-accent pl-8 py-2"
      >
        "I don't just build websites; I craft digital legacies that resonate
        with users on a human level."
      </p>
    </header>

    <!-- 成長歷程 (My Story) -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-start">
      <div class="space-y-8 text-secondary/80 leading-relaxed">
        <h2 class="section-title">My Journey</h2>
        <p>
          我的職涯起點深植於大地。在國立中興大學水土保持學系完成了學士與碩士學位後，我於民國 108 年通過國家高考，踏入公務體系，致力於國土保安與災害防治的實務工作。
        </p>
        <p>
          在深耕專業領域的同時，我也追求極致的執業資格，並於民國 115 年成功考取「水土保持技師」證照。然而，對技術的渴求並不侷限於土木工程；2024 年 6 月，我開啟了一場跨越領域的冒險——程式開發的自學之旅。
        </p>
        <p>
          從 C# 的邏輯架構出發，逐步橫跨到 Web 前端（Vue 3, Tailwind CSS）與後端技術（Node.js, Python）。我發現工程師對系統精準度的追求，不論是在物理世界的水土保持，還是在數位世界的程式碼中，其核心本質是相通的：都是為了創造更穩定、更高效的解決方案。
        </p>
      </div>
      <div class="relative flex justify-center lg:justify-end">
        <!-- Avatar Circle -->
        <div
          class="w-full max-w-md aspect-square rounded-full overflow-hidden border-8 border-white shadow-elegant relative z-10 bg-white"
        >
          <img
            src="/images/avatar.png"
            alt="F898Y Avatar"
            class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
        <!-- Decorative blobs behind the avatar -->
        <div
          class="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        ></div>
        <div
          class="absolute -top-10 -right-10 w-48 h-48 bg-soft/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"
        ></div>
      </div>
    </section>

    <!-- 核心價值 (Philosophy Grid) -->
    <section class="mb-40">
      <h2 class="section-title mb-16">My Philosophy</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in philosophies"
          :key="item.title"
          class="card-elegant hover:bg-primary hover:text-surface transition-all duration-500 group"
        >
          <h3 class="font-serif mb-6 group-hover:text-soft transition-colors">
            {{ item.title }}
          </h3>
          <p
            class="text-secondary/70 group-hover:text-surface/80 leading-relaxed"
          >
            {{ item.desc }}
          </p>
        </div>
      </div>
    </section>

    <!-- 螢幕之外 (Beyond the Screen) -->
    <section>
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16"
      >
        <div>
          <h2 class="section-title mb-4">When I'm Not Coding</h2>
          <p class="text-secondary/70 max-w-md">
            Balance is the key to sustainable creativity. Here's how I spend my
            time away from the keyboard.
          </p>
        </div>
        <div
          class="badge animate-float bg-soft/10 text-accent border border-soft/20 lowercase"
        >
          #HumanBeing #Explorer
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="hobby in hobbies"
          :key="hobby.label"
          class="group cursor-default"
        >
          <div
            class="relative aspect-square mb-6 overflow-hidden rounded-2xl border border-primary/5"
          >
            <img
              :src="hobby.image"
              :alt="hobby.label"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </div>
          <h4 class="font-bold mb-2 group-hover:text-accent transition-colors">
            {{ hobby.label }}
          </h4>
          <p class="text-sm text-secondary/60 leading-relaxed">
            {{ hobby.desc }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
