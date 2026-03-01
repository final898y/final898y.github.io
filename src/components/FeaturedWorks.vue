<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

defineProps<{
  projects: Project[];
}>();

const visibleSections = ref<boolean[]>([false, false, false]);
const sectionRefs = ref<(HTMLElement | null)[]>([]);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.value.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            visibleSections.value[index] = true;
          }
        }
      });
    },
    { threshold: 0.15 },
  );

  sectionRefs.value.forEach((el) => {
    if (el) observer?.observe(el);
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <section class="section-container py-20 lg:py-40 overflow-hidden">
    <!-- Section Header -->
    <div class="mb-16 lg:mb-32">
      <div class="badge mb-6">Curated Selection</div>
      <h2 class="display-title leading-[0.85] tracking-tighter">
        Featured<br />
        <span class="ml-[0.1em] md:ml-[0.2em]">Works.</span>
      </h2>
    </div>

    <!-- Projects List -->
    <div class="space-y-24 lg:space-y-64">
      <!-- Project 01 -->
      <div
        v-if="projects[0]"
        :ref="(el: any) => (sectionRefs[0] = el)"
        class="group flex flex-col lg:flex-row items-center gap-10 lg:gap-24 relative transition-all duration-1000"
        :class="[
          visibleSections[0]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20 lg:translate-y-32',
        ]"
      >
        <div
          class="w-full lg:w-3/5 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-elegant aspect-[4/3] flex-shrink-0"
        >
          <img
            :src="projects[0].imageUrl"
            class="w-full h-full object-cover transition-transform duration-[2s]"
            :class="visibleSections[0] ? 'scale-100' : 'scale-125'"
          />
        </div>
        <div
          class="w-full lg:w-2/5 stagger-item"
          :class="{ active: visibleSections[0] }"
        >
          <span
            class="text-accent font-serif italic text-3xl md:text-4xl mb-4 md:mb-6 block reveal-index"
            >01/</span
          >
          <h3 class="font-serif mb-4 md:mb-8 leading-tight reveal-title">
            {{ projects[0].title }}
          </h3>
          <p
            class="text-secondary/70 leading-relaxed max-w-md mb-8 reveal-desc"
          >
            {{ projects[0].description }}
          </p>
          <router-link
            to="/portfolio"
            class="nav-link text-xl md:text-2xl reveal-link"
            >View Project &rarr;</router-link
          >
        </div>
      </div>

      <!-- Project 02 -->
      <div
        v-if="projects[1]"
        :ref="(el: any) => (sectionRefs[1] = el)"
        class="group flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-24 transition-all duration-1000"
        :class="[
          visibleSections[1]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20 lg:translate-y-32',
        ]"
      >
        <div
          class="w-full lg:w-1/2 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-elegant aspect-square lg:translate-y-12 flex-shrink-0"
        >
          <img
            :src="projects[1].imageUrl"
            class="w-full h-full object-cover transition-transform duration-[2s]"
            :class="visibleSections[1] ? 'scale-100' : 'scale-125'"
          />
        </div>
        <div
          class="w-full lg:w-1/2 text-left lg:text-right flex flex-col items-start lg:items-end stagger-item"
          :class="{ active: visibleSections[1] }"
        >
          <span
            class="text-accent font-serif italic text-3xl md:text-4xl mb-4 md:mb-6 block reveal-index"
            >02/</span
          >
          <h3 class="font-serif mb-4 md:mb-8 leading-tight reveal-title">
            {{ projects[1].title }}
          </h3>
          <p
            class="text-secondary/70 leading-relaxed max-w-md mb-8 reveal-desc"
          >
            {{ projects[1].description }}
          </p>
          <router-link
            to="/portfolio"
            class="nav-link text-xl md:text-2xl reveal-link"
            >&larr; View Project</router-link
          >
        </div>
      </div>

      <!-- Project 03 -->
      <div
        v-if="projects[2]"
        :ref="(el: any) => (sectionRefs[2] = el)"
        class="group flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-end transition-all duration-1000"
        :class="[
          visibleSections[2]
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20 lg:translate-y-32',
        ]"
      >
        <div
          class="w-full lg:col-span-8 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-elegant aspect-[16/9] flex-shrink-0"
        >
          <img
            :src="projects[2].imageUrl"
            class="w-full h-full object-cover transition-transform duration-[2s]"
            :class="visibleSections[2] ? 'scale-100' : 'scale-125'"
          />
        </div>
        <div
          class="w-full lg:col-span-4 pb-0 lg:pb-12 stagger-item"
          :class="{ active: visibleSections[2] }"
        >
          <span
            class="text-accent font-serif italic text-3xl md:text-4xl mb-4 md:mb-6 block reveal-index"
            >03/</span
          >
          <h3 class="font-serif mb-4 md:mb-8 leading-tight reveal-title">
            {{ projects[2].title }}
          </h3>
          <p class="text-secondary/70 leading-relaxed mb-8 reveal-desc">
            {{ projects[2].description }}
          </p>
          <router-link
            to="/portfolio"
            class="nav-link text-xl md:text-2xl reveal-link"
            >View Project &rarr;</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 雜誌敘事動畫 (Narrative Scroll Animations) */
.stagger-item * {
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateY(20px);
}

.stagger-item.active * {
  opacity: 1;
  transform: translateY(0);
}

/* 分段延遲 (Segmented Delays) */
.stagger-item.active .reveal-index {
  transition-delay: 0.2s;
}
.stagger-item.active .reveal-title {
  transition-delay: 0.4s;
}
.stagger-item.active .reveal-desc {
  transition-delay: 0.6s;
}
.stagger-item.active .reveal-link {
  transition-delay: 0.8s;
}
</style>
