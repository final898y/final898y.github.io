<template>
  <div class="portfolio">
    <div class="page-header">
      <h1 class="page-title">My Portfolio</h1>
      <p class="page-description">
        A collection of my recent projects and work
      </p>
    </div>

    <div class="filter-controls">
      <button
        v-for="category in categories"
        :key="category"
        @click="setActiveCategory(category)"
        class="filter-btn"
        :class="{ active: activeCategory === category }"
      >
        {{ category }}
      </button>
    </div>

    <div class="projects-grid">
      <div
        v-for="(project, index) in filteredProjects"
        :key="index"
        class="project-card"
        :id="`project-${index}`"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
        </div>
        <div class="project-content">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span
              v-for="(tag, tagIndex) in project.tags"
              :key="tagIndex"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          <div class="project-links">
            <a
              :href="project.demoLink"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              :href="project.codeLink"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design"];
const activeCategory = ref("All");

const projects = ref([
  {
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce website with secure payment integration, product filtering, and user authentication.",
    image: "../assets/project1-placeholder.png",
    category: "Web Development",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application to help users organize and track their tasks, with features like task prioritization, due dates, and reminders.",
    image: "../assets/project2-placeholder.png",
    category: "Web Development",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website for a professional photographer, featuring a gallery, about page, and contact form.",
    image: "../assets/project3-placeholder.png",
    category: "Web Development",
    tags: ["Vue.js", "SCSS", "Responsive Design"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Fitness Tracker Mobile App",
    description:
      "A mobile application for tracking workouts, setting fitness goals, and monitoring progress over time.",
    image: "../assets/project4-placeholder.png",
    category: "Mobile Apps",
    tags: ["React Native", "Redux", "Firebase"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Restaurant Website Redesign",
    description:
      "A complete redesign of a restaurant website, focusing on improving user experience and conversion rates.",
    image: "../assets/project5-placeholder.png",
    category: "UI/UX Design",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current weather conditions and forecasts for any location.",
    image: "../assets/project6-placeholder.png",
    category: "Web Development",
    tags: ["JavaScript", "API Integration", "CSS3"],
    demoLink: "#",
    codeLink: "#",
  },
]);

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") {
    return projects.value;
  }
  return projects.value.filter(
    (project) => project.category === activeCategory.value
  );
});
</script>

<style scoped>
.portfolio {
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.filter-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background-color: var(--primary-color);
  color: var(--light-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--light-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.project-description {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-secondary:hover {
  background-color: rgba(255, 87, 34, 0.1);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .filter-controls {
    flex-direction: column;
    align-items: center;
  }
}
</style>
