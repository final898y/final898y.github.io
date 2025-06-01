---
title: 生活隨筆
date: 2025-06-01
---

# 生活隨筆

這裡是我分享生活點滴的地方，包含旅行、學習心得和日常隨想。希望這些文章能帶給您一些靈感或共鳴！

## 文章列表

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

// 獲取所有頁面的元數據
const { pages } = useData()

// 篩選標籤包含「生活隨筆」的文章，添加防錯處理
const lifestylePosts = computed(() => {
  // 如果 pages 未定義或不是陣列，返回空陣列
  if (!pages || !Array.isArray(pages)) return []
  
  return pages
    .filter(page => 
      // 確保 frontmatter 和 tags 存在，且包含「生活隨筆」
      page.frontmatter?.tags?.includes('生活隨筆') && 
      page.path.startsWith('/articles/')
    )
    .sort((a, b) => {
      // 確保日期有效，無效日期排在最後
      const dateA = a.frontmatter.date ? new Date(a.frontmatter.date) : new Date(0)
      const dateB = b.frontmatter.date ? new Date(b.frontmatter.date) : new Date(0)
      return dateB - dateA
    })
})
</script>

<ul>
  <li v-for="post in lifestylePosts" :key="post.path">
    <a :href="post.path">{{ post.frontmatter.title || '未命名文章' }}</a> - {{ post.frontmatter.date || '無日期' }}
    <p v-if="post.frontmatter.description">{{ post.frontmatter.description }}</p>
  </li>
  <li v-if="!lifestylePosts.length">暫無生活隨筆文章，請稍後查看！</li>
</ul>

## 為什麼寫生活隨筆？

生活就像一本書，每天的經歷都是獨特的故事。透過記錄這些隨筆，我希望能記住美好的時刻，並與讀者分享生活的點滴。如果您也有故事想分享，歡迎留言！

---

_最後更新於 {{ $frontmatter.date }}_
