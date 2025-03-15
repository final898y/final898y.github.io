<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3>My Portfolio</h3>
          <p>A showcase of my skills and projects</p>
        </div>

        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/skills">Skills</router-link></li>
          </ul>
        </div>

        <div class="footer-social">
          <h4>Connect With Me</h4>
          <div class="social-icons">
            <a href="#" aria-label="GitHub"
              ><i class="icon-github">GitHub</i></a
            >
            <a href="#" aria-label="LinkedIn"
              ><i class="icon-linkedin">LinkedIn</i></a
            >
            <a href="#" aria-label="Twitter"
              ><i class="icon-twitter">Twitter</i></a
            >
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} My Portfolio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: var(--text-color);
  color: var(--light-color);
  padding: 2rem 0 0.5rem;
  margin-top: 3rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.footer-links h4,
.footer-social h4 {
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--light-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  color: var(--light-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
