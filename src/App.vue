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
import { onMounted } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheHero from './components/TheHero.vue'

onMounted(() => {
  document.title = 'My Portfolio'
})
</script>

<style>
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

@media (max-width: 768px) {
  .main-content {
    padding: 10px;
  }

  .section {
    padding: 1rem;
  }
}
</style>
