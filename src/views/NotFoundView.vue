<template>
  <div class="not-found">
    <div class="error-container">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Page Not Found</h2>
      <p class="error-message">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <router-link to="/" class="btn btn-primary">Go Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.error-message {
  max-width: 500px;
  margin: 0 auto 2rem;
  color: #666;
}
</style>
