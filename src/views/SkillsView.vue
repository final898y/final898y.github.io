<script setup lang="ts">
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Web & Frontend",
    skills: [
      { name: "Vue.js (Composition API)", level: 85 },
      { name: "JavaScript (ES6+) / TS", level: 80 },
      { name: "HTML5 / CSS3 / Tailwind", level: 90 },
    ],
  },
  {
    category: "Backend & Languages",
    skills: [
      { name: "Node.js (Express)", level: 75 },
      { name: "Python (FastAPI / Automation)", level: 70 },
      { name: "C# / .NET Basics", level: 60 },
      { name: "PostgreSQL / Firebase", level: 65 },
    ],
  },
];

const education = [
  {
    date: "2016 - 2019",
    title: "Master of Soil and Water Conservation",
    org: "National Chung Hsing University (NCHU)",
    desc: "專注於坡地災害防治與水文分析研究，並順利取得碩士學位。",
  },
  {
    date: "2012 - 2016",
    title: "Bachelor of Soil and Water Conservation",
    org: "National Chung Hsing University (NCHU)",
    desc: "奠定土木工程基礎、流體力學及水土保持工程學等核心知識。",
  },
];

const experience = [
  {
    date: "Jun 2024 - Present",
    title: "Self-Taught Developer",
    org: "Personal Learning Journey",
    desc: "開啟跨領域學習，從 C# 起步並橫跨 Web 前後端技術（HTML/CSS/JS, Node.js）與 Python，致力於技術開發與應用。",
  },
  {
    date: "2026 (民國 115 年)",
    title: "Professional Engineer (Soil & Water Conservation)",
    org: "Examination Yuan",
    desc: "通過專門職業及技術人員高等考試，成功取得「水土保持技師」證照，具備專業執業資格。",
  },
  {
    date: "2019 - Present",
    title: "Public Servant (Senior Examination)",
    org: "Public Sector",
    desc: "通過國家高等考試（高考），深耕水土保持行政事務與工程實務，累積多年紮實的公務體系經驗。",
  },
];
</script>

<template>
  <div class="section-container">
    <h1 class="section-title">Skills & Experience</h1>

    <!-- 技能部分 (Skills Section) -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 lg:grid-rows-[auto_1fr] mt-16 mb-24"
    >
      <template v-for="(cat, i) in skillCategories" :key="cat.category">
        <h2
          class="flex items-center gap-4 pb-4 border-b border-primary/5 lg:self-end mb-10 transition-all duration-500 hover:text-accent group"
          :class="[
            i === 0
              ? 'lg:col-start-1 lg:row-start-1'
              : 'lg:col-start-2 lg:row-start-1 mt-16 lg:mt-0',
          ]"
        >
          <span
            class="w-8 h-1 bg-accent shrink-0 group-hover:w-12 transition-all duration-500"
          ></span>
          {{ cat.category }}
        </h2>

        <div
          class="space-y-8"
          :class="[
            i === 0
              ? 'lg:col-start-1 lg:row-start-2'
              : 'lg:col-start-2 lg:row-start-2',
          ]"
        >
          <div v-for="skill in cat.skills" :key="skill.name">
            <div class="flex justify-between items-end mb-3">
              <span class="font-medium text-lg">{{ skill.name }}</span>
              <span class="text-accent font-serif italic"
                >{{ skill.level }}%</span
              >
            </div>
            <div class="h-1.5 bg-primary/5 rounded-full overflow-hidden">
              <div
                class="h-full bg-accent transition-all duration-1000 ease-out"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- 經歷部分 (Journey Section) -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-0 lg:grid-rows-[auto_1fr]"
    >
      <!-- Academic Header -->
      <h2
        class="flex items-center gap-4 text-secondary pb-4 border-b border-primary/5 lg:row-start-1 lg:col-start-1 lg:self-end mb-12"
      >
        <span class="badge">Academic</span>
        Education & Training
      </h2>

      <!-- Academic Content -->
      <div
        class="space-y-12 relative border-l border-primary/10 pl-8 ml-2 lg:row-start-2 lg:col-start-1 mb-20 lg:mb-0"
      >
        <div v-for="edu in education" :key="edu.title" class="relative group">
          <div
            class="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-surface group-hover:scale-125 transition-transform"
          ></div>
          <span class="badge mb-3">{{ edu.date }}</span>
          <h3 class="mb-1 group-hover:text-accent transition-colors">
            {{ edu.title }}
          </h3>
          <div class="text-secondary font-medium mb-4 italic">
            {{ edu.org }}
          </div>
          <p class="text-secondary/70 leading-relaxed">{{ edu.desc }}</p>
        </div>
      </div>

      <!-- Professional Header -->
      <h2
        class="flex items-center gap-4 text-secondary pb-4 border-b border-primary/5 lg:row-start-1 lg:col-start-2 lg:self-end mb-12 mt-16 lg:mt-0"
      >
        <span class="badge">Professional</span>
        Work Experience
      </h2>

      <!-- Professional Content -->
      <div
        class="space-y-12 relative border-l border-primary/10 pl-8 ml-2 lg:row-start-2 lg:col-start-2"
      >
        <div v-for="exp in experience" :key="exp.title" class="relative group">
          <div
            class="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-soft border-4 border-surface group-hover:scale-125 transition-transform"
          ></div>
          <span class="badge mb-3">{{ exp.date }}</span>
          <h3 class="mb-1 group-hover:text-accent transition-colors">
            {{ exp.title }}
          </h3>
          <div class="text-secondary font-medium mb-4 italic">
            {{ exp.org }}
          </div>
          <p class="text-secondary/70 leading-relaxed">{{ exp.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
