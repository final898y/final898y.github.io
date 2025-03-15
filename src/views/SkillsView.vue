<template>
  <div class="skills">
    <div class="page-header">
      <h1 class="page-title">My Skills</h1>
      <p class="page-description">
        A comprehensive overview of my technical skills and expertise
      </p>
    </div>

    <section class="section">
      <h2 class="section-title">Technical Skills</h2>

      <div class="skills-categories">
        <div
          class="skill-category"
          v-for="(category, index) in skillCategories"
          :key="index"
        >
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-list">
            <div
              class="skill-item"
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
            >
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-progress">
                <div
                  class="skill-progress-bar"
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Education & Certifications</h2>

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in educationItems"
          :key="index"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-period">{{ item.period }}</p>
            <p class="timeline-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Work Experience</h2>

      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in experienceItems"
          :key="index"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-subtitle">{{ item.company }}</p>
            <p class="timeline-period">{{ item.period }}</p>
            <ul class="timeline-list">
              <li
                v-for="(point, pointIndex) in item.responsibilities"
                :key="pointIndex"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const skillCategories = ref([
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3/SCSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
      { name: "Python", level: 65 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 70 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
]);

const educationItems = ref([
  {
    title: "Bachelor of Science in Computer Science",
    period: "2018 - 2022",
    description:
      "Graduated with honors, specialized in web development and software engineering.",
  },
  {
    title: "Full Stack Web Development Bootcamp",
    period: "2022",
    description:
      "Intensive 12-week program focused on modern web technologies and best practices.",
  },
  {
    title: "AWS Certified Developer",
    period: "2023",
    description:
      "Professional certification for designing and developing AWS cloud-based solutions.",
  },
]);

const experienceItems = ref([
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    responsibilities: [
      "Lead the development of responsive web applications using Vue.js and Nuxt",
      "Implemented reusable component libraries that improved development efficiency by 30%",
      "Collaborated with UX designers to create intuitive user interfaces",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Web Developer",
    company: "Digital Innovations",
    period: "2021 - 2023",
    responsibilities: [
      "Developed and maintained client websites using React and Node.js",
      "Created RESTful APIs for backend services",
      "Improved website performance by optimizing code and assets",
      "Integrated third-party services and payment gateways",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2020 - 2021",
    responsibilities: [
      "Designed and developed custom websites for small businesses",
      "Implemented e-commerce solutions using Shopify and WooCommerce",
      "Provided ongoing maintenance and support for client websites",
      "Created responsive designs that work across all devices",
    ],
  },
]);
</script>

<style scoped>
.skills {
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

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.category-title {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
}

.skill-level {
  color: var(--primary-color);
}

.skill-progress {
  height: 8px;
  background-color: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress-bar {
  height: 100%;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  border-radius: 4px;
  transition: width 1s ease;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 7px;
  height: 100%;
  width: 2px;
  background-color: var(--secondary-color);
}

.timeline-item {
  position: relative;
  padding-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  top: 5px;
  left: -2rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: 2px solid var(--light-color);
  z-index: 1;
}

.timeline-title {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
}

.timeline-subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.timeline-period {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
}

.timeline-description {
  margin-bottom: 0.5rem;
}

.timeline-list {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.timeline-list li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
}
</style>
