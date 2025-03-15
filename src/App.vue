<template>
  <div class="app">
    <TheHeader />
    <TheHero />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHero from "./components/TheHero.vue";


onMounted(() => {
  document.title = "My Portfolio";
});
</script>

<style>
:root {
  --primary-color: #4d869c;
  --secondary-color: #7ab2b2;
  --accent-color: #fa7070;
  --text-color: #333333;
  --light-color: #cde8e5;
  --background-color: #eef7ff;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: var(--light-color);
  color: var(--text-color);
}

.btn-primary:hover {
  background-color: #e64a19;
}

.section {
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: var(--light-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
}

.section-title {
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-size: 1.8rem;
}

.card {
  background: var(--light-color);
  border-radius: 8px;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .main-content {
    padding: 10px;
  }

  .section {
    padding: 1rem;
  }
}
</style>
