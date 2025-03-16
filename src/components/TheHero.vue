<template>
  <section class="hero">
    <v-layout height="600px">
      <v-parallax scale="0.8" src="/images/hero-background.webp">
        <div class="d-flex flex-column fill-height justify-center align-center">
          <h1 class="hero-title">Welcome to My Portfolio</h1>
          <p class="hero-description">
            I'm a passionate developer creating awesome web experiences
          </p>
          <div class="hero-buttons">
            <router-link to="/portfolio" class="btn btn-primary rounded-xl"
              >View My Work</router-link
            >
            <router-link to="/skills" class="btn btn-primary rounded-xl">My Skills</router-link>
          </div>
        </div>
      </v-parallax>
    </v-layout>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow:
    /* 左上 */
    -1px -1px 0 black,
    /* 右上 */ 1px -1px 0 black,
    /* 左下 */-1px 1px 0 black,
    /* 右下 */ 1px 1px 0 black;
  /* background-color: var(--secondary-color); */
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow:
    /* 左上 */
    -1px -1px 0 black,
    /* 右上 */ 1px -1px 0 black,
    /* 左下 */-1px 1px 0 black,
    /* 右下 */ 1px 1px 0 black;
  /* background-color: var(--secondary-color); */
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
