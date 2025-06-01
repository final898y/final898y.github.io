<template>
  <section class="hero">
    <v-img height="40dvh" cover src="/images/hero-background.webp">
      <div class="overlay"></div>

      <div class="d-flex flex-column fill-height justify-center align-center">
        <h1 class="hero-title slide-in-right">Welcome to My Portfolio</h1>
        <p class="hero-description slide-in-right">
          I'm a passionate developer creating awesome web experiences
        </p>
        <div class="hero-buttons">
          <router-link to="/portfolio" class="btn btn-primary rounded-xl shadow-pop-br"
            >View My Work</router-link
          >
          <router-link to="/skills" class="btn btn-primary rounded-xl shadow-pop-br"
            >My Skills</router-link
          >
        </div>
      </div>
    </v-img>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 40dvh; /* 保持與 `v-img` 相同的高度 */
}
.hero-title {
  font-size: clamp(32px, 3vw, 48px);
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow:
    /* 左上-1px -1px 0 black, */
    /* 右上 1px -1px 0 black,*/ 
    /* 左下 -3px 3px 0 black,*/  
    /* 右下 */ 3px
    3px 0 var(--primary-color);
  /* background-color: var(--secondary-color); */
}

.hero-description {
  font-size: clamp(24px, 2vw, 32px);
  margin-bottom: 2rem;
  color: #ffffff;
  justify-content: center;
  text-shadow:
    /* 左上-1px -1px 0 black, */
    /* 右上 1px -1px 0 black,*/ 
    /* 左下 -3px 3px 0 black,*/ 
    /* 右下 */ 3px
    3px 0 var(--primary-color);
  /* background-color: var(--secondary-color); */
}

.hero-buttons {
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
  z-index: 1;
}

.d-flex {
  position: relative;
  z-index: 2; /* 確保內容在遮罩上方 */
}

.shadow-pop-br:hover {
  -webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
.slide-in-right {
  -webkit-animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}
</style>
