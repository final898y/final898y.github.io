<template>
  <section class="hero">
    <v-parallax :scale="0.4" src="src/assets/pic/hero-background.png">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="hero-title">Welcome to My Portfolio</h1>
        <p class="hero-description">I'm a passionate developer creating awesome web experiences</p>
        <div class="hero-buttons">
          <router-link to="/portfolio" class="btn btn-primary">View My Work</router-link>
          <router-link to="/skills" class="btn btn-primary">My Skills</router-link>
        </div>
      </div>
    </v-parallax>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  height: 70vh;
  min-height: 500px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 0 0 20px 20px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow:
    -1px -1px 0 black,
    /* 左上 */ 1px -1px 0 black,
    /* 右上 */ -1px 1px 0 black,
    /* 左下 */ 1px 1px 0 black; /* 右下 */
  /* background-color: var(--secondary-color); */
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow:
    -1px -1px 0 black,
    /* 左上 */ 1px -1px 0 black,
    /* 右上 */ -1px 1px 0 black,
    /* 左下 */ 1px 1px 0 black; /* 右下 */
  /* background-color: var(--secondary-color); */
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
