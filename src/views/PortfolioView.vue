<template>
  <div class="container">
    <h1 class="section-title">Personal Portfolio</h1>

    <div class="section">
      <div v-for="project in projects" :key="project.id" class="card">
        <div class="card-img-wrapper">
          <img :src="project.image" :alt="project.title" />
        </div>

        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <p class="card-text">{{ project.description }}</p>

          <a :href="project.link" target="_blank" class="btn-link">查看專案</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* 這裡我們定義一個名為 projects 的陣列 (Array)。
  每個物件 { ... } 代表一個專案的資訊。
  未來你想增加新作品，只需要在這個陣列最後面增加一個物件即可。
*/
const projects = [
  {
    id: 1,
    title: '1A2B 猜數字遊戲',
    description: '經典邏輯遊戲，練習 JavaScript 的陣列運算與條件判斷。',
    image: '/images/cardimg-1A2Bgame.png',
    link: '../projects/1A2Bgame.html',
    tags: ['JavaScript', 'CSS'],
  },
  {
    id: 2,
    title: '終極密碼',
    description: '與電腦對決的範圍猜測遊戲，著重於狀態管理與 UI 更新。',
    image: '/images/cardimg-guessNumbergame.png',
    link: '../projects/guessNumber.html',
    tags: ['JavaScript', 'DOM 操作'],
  },
  {
    id: 3,
    title: '小瑪莉隨機轉盤',
    description: '模擬復古遊戲機檯，練習計時器 (setInterval) 與隨機算法。',
    image: '/images/cardimg-LittleMarygame.png',
    link: '../playground/LittleMary.html',
    tags: ['JavaScript', '動畫效果'],
  },
  {
    id: 4,
    title: 'FlipQuiz 翻測卡',
    description: '具備 SM-2 記憶演算法的學習工具，支援深色模式與 PWA。',
    image: '/images/cardimg-FlipQuiz.png',
    link: '../playground/FlipQuiz/index.html',
    tags: ['JavaScript', 'SRS 演算法', 'CSS 變數'],
  },
]
</script>

<style scoped>
/* 基礎容器設定 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: 'PingFang TC', 'Microsoft JhengHei', sans-serif;
}

.section-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  position: relative;
}

/* 卡片排版容器 */
.section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}

/* 單個卡片樣式 */
.card {
  width: 320px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* 圖片處理：確保不同尺寸的圖片都能完美填滿 */
.card-img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 關鍵：這會像背景圖片一樣填滿區塊，不會壓扁圖片 */
  transition: transform 0.5s ease;
}

.card:hover img {
  transform: scale(1.1); /* 滑鼠懸停時圖片輕微放大，增加動感 */
}

/* 內容區塊 */
.card-body {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 讓內容自動撐開，確保按鈕在底部對齊 */
}

.card-title {
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  color: #333;
}

/* 技術標籤樣式 */
.tags {
  margin-bottom: 12px;
}

.tag {
  display: inline-block;
  background: #e1f0f7;
  color: #4d869c;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 5px;
  font-weight: bold;
}

.card-text {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* 按鈕樣式 */
.btn-link {
  display: block;
  text-align: center;
  padding: 12px;
  background-color: #4d869c;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-link:hover {
  background-color: #fa7070;
}
</style>
