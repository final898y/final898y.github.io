---
title: 程式設計文章
date: 2025-06-01
---

# 程式設計文章

這裡是所有關於程式設計的文章集合，涵蓋 VitePress、JavaScript、CSS 等主題。這些文章適合初學者，幫助您快速掌握程式設計基礎。

## 文章列表

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

// 獲取所有頁面的元數據
const { pages } = useData()

// 篩選標籤包含「程式設計」的文章，添加防錯處理
const programmingPosts = computed(() => {
  // 如果 pages 未定義或不是陣列，返回空陣列
  if (!pages || !Array.isArray(pages)) return []
  
  return pages
    .filter(page => 
      // 確保 frontmatter 和 tags 存在，且包含「程式設計」
      page.frontmatter?.tags?.includes('程式設計') && 
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
  <li v-for="post in programmingPosts" :key="post.path">
    <a :href="post.path">{{ post.frontmatter.title || '未命名文章' }}</a> - {{ post.frontmatter.date || '無日期' }}
    <p v-if="post.frontmatter.description">{{ post.frontmatter.description }}</p>
  </li>
  <li v-if="!programmingPosts.length">暫無程式設計文章，請稍後查看！</li>
</ul>

## 為什麼學習程式設計？

程式設計就像學習如何與電腦對話！透過撰寫程式碼，您可以創建網站、應用程式，甚至解決日常生活中的問題。這些文章將一步步引導您，從基礎到進階，逐步提升技能。

如果您有任何問題或想看特定主題的文章，歡迎留言或聯繫我！

---

_最後更新於 {{ $frontmatter.date }}_
