<template>
  <div class="home">
    <section class="section introduction">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <v-img :aspect-ratio="1" width="250" alt="Reddogs" src="/images/avatar.png"></v-img>
        <div class="about-text">
          <p>
            Hello! I'm a passionate web developer with expertise in front-end and back-end
            technologies. I love creating responsive, user-friendly websites and applications.
          </p>
          <p>
            My journey in web development started several years ago, and since then, I've been
            continuously learning and improving my skills to stay up-to-date with the latest
            technologies and best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech, contributing to open-source
            projects, or enjoying outdoor activities.
          </p>
        </div>
      </div>
    </section>

    <section class="section featured-work">
      <h2 class="section-title">Featured Projects</h2>
      <div class="cards-grid">
        <div class="card" v-for="(project, index) in featuredProjects" :key="index">
          <div class="card-image">
            <img :src="project.image" :alt="project.title" />
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-description">{{ project.description }}</p>
            <div class="card-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>
            <router-link :to="`/portfolio#project-${index}`" class="btn btn-primary">
              View Details
            </router-link>
          </div>
        </div>
      </div>
      <div class="view-all">
        <router-link to="/portfolio" class="btn btn-secondary">View All Projects</router-link>
      </div>
    </section>
    <section class="section contact">
      <h2 class="section-title">Get In Touch</h2>
      <p class="contact-text">Have a project in mind or want to chat? Feel free to reach out!</p>
      <a href="mailto:youremail@example.com" class="btn btn-primary">Contact Me</a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const featuredProjects = ref([
  {
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce website with secure payment processing.',
    image: '/images/test-placeholder.png',
    tags: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    description: 'A productivity application to help users organize and track their tasks.',
    image: '/images/test-placeholder.png',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website for a professional photographer.',
    image: '/images/test-placeholder.png',
    tags: ['Vue.js', 'SCSS', 'Responsive Design'],
  },
])
</script>

<style scoped>
.btn-secondary {
  background-color: transparent;
  border: 2px solid var(--light-color);
  color: var(--light-color);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  gap: 2rem;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 50%;
  box-shadow: var(--card-shadow);
}

.about-text p {
  margin-bottom: 1rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.card-image {
  height: 300px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.card-description {
  margin-bottom: 1rem;
  color: var(--text-color);
}

.card-tags {
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

.view-all {
  text-align: center;
}

.contact {
  text-align: center;
}

.contact-text {
  max-width: 600px;
  margin: 0 auto 2rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .about-image {
    max-width: 250px;
    margin: 0 auto;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
