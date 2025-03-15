<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo"> My Portfolio </router-link>

      <button
        class="menu-toggle"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ 'nav-active': isMobileMenuOpen }">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/skills" class="nav-link">Skills</router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link to="/dashboard" class="nav-link"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <template v-if="isAuthenticated">
              <button @click="logout" class="btn btn-primary">Logout</button>
            </template>
            <template v-else>
              <router-link to="/login" class="btn btn-primary"
                >Login</router-link
              >
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMobileMenuOpen = ref(false);
const isAuthenticated = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const logout = () => {
  localStorage.removeItem("isAuthenticated");
  isAuthenticated.value = false;
  router.push("/login");
};

// 检查用户是否已登录
onMounted(() => {
  isAuthenticated.value = localStorage.getItem("isAuthenticated") === "true";
  window.addEventListener("click", (e) => {
    const nav = document.querySelector(".nav");
    const menuToggle = document.querySelector(".menu-toggle");
    if (
      isMobileMenuOpen.value &&
      nav &&
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  window.addEventListener("storage", () => {
    isAuthenticated.value = localStorage.getItem("isAuthenticated") === "true";
  });
});

onUnmounted(() => {
  window.removeEventListener("click", closeMobileMenu);
  window.removeEventListener("storage", () => {});
});
</script>

<style scoped>
.header {
  background-color: var(--light-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  position: relative;
  z-index: 2;
}

.menu-toggle span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  transition: all 0.3s ease;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.router-link-active {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--light-color);
    padding: 5rem 1.5rem 2rem;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }

  .nav-active {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
