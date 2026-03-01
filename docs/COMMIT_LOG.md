# Commit Log

## [2026-02-28] feat(chore): 專案重啟與基礎建設配置

- Hash: `b7fef62`
- 改動方向: 初始化專案基礎結構，升級 Vite 8 與 Vitest 4。
- 具體內容:
  - 更新 `package.json` 加入 `test`, `lint`, `format` 等工程化腳本。
  - 將 `vitest` 更新至 `v4.0.18`，`vite` 升級至 `v8.0.0-beta.16`。
  - 優化 `.gitignore` 包含 `coverage`, `dist`, `.env` 等。
  - 建立 `.prettierignore` 並完成全域格式化。
  - 初始化 `docs/COMMIT_LOG.md` 紀錄。

## [2026-02-28] feat(ui): 實作個人網站設計系統與 SPA 路由架構

- Hash: `82ffc2a`
- 改動方向: 根據指定色票定義 Tailwind 4 主題，並建立支援 GitHub Pages 刷新的路由系統。
- 具體內容:
  - 於 `src/style.css` 定義 brand 色票與基礎組件。
  - 實作 `vue-router` 基礎架構，包含 Home, Portfolio, Skills, About 等頁面。
  - 解決 GitHub Pages 刷新問題 (404.html)。
  - 通過完整的 `lint` 與 `build` 驗證。

## [2026-02-28] feat(ui): 優化 Skills 頁面內容與結構

- Hash: `dfa1a55`
- 改動方向: 細化技能列表並拆分經歷區塊為學歷與工作背景。
- 具體內容:
  - 更新 `src/views/SkillsView.vue` 內容，細化技術棧。
  - 將 Journey 區塊重構為 Education & Certifications 與 Work Experience。

## [2026-02-28] feat(ui): 實作 Portfolio 專案卡片組件與頁面佈局

- Hash: `b429528`
- 改動方向: 建立模組化專案卡片組件，並優化作品集展示頁面。
- 具體內容:
  - 建立 `src/components/ProjectCard.vue`，支援預覽圖、標籤、展示網址與選填的 GitHub 連結。
  - 更新 `src/views/PortfolioView.vue`，導入動態專案資料並實作響應式網格佈局。

## [2026-03-01] feat(ui): 實作敘事風 About 頁面與視覺優化

- Hash: `16fb5da`
- 改動方向: 建立敘事風格的 About 頁面，並將個人興趣區塊升級為圖片展示。
- 具體內容:
  - 於 `src/views/AboutView.vue` 實作敘事首屏、成長歷程與核心價值區塊。
  - 將 "When I'm Not Coding" 區塊的 Emoji 替換為高品質 Unsplash 圖片。

## [2026-03-01] test(unit): 補齊組件與路由單元測試架構

- Hash: `16fb5da`
- 改動方向: 根據 AGENTS.md 規範補齊自動化測試，確保系統穩定性。
- 具體內容:
  - 安裝 `@vue/test-utils` 與 `jsdom` 環境。
  - 實作 `ProjectCard.test.ts` 與 `Router.test.ts` 驗證核心邏輯。
  - 修正 `vite.config.ts` 以支援 `vitest` 的型別檢查。

## [2026-03-01] feat(ui): 實作手機版漢堡選單與響應式導航優化

- Hash: `94f7d8d`
- 改動方向: 為行動裝置使用者提供更佳的導航體驗，實作全螢幕抽屜選單。
- 具體內容:
  - 於 `App.vue` 實作手機版漢堡按鈕及其動畫效果。
  - 建立具備毛玻璃質感的行動版選單抽屜 (Mobile Drawer)。

## [2026-03-01] feat(ui): 實作 404 錯誤頁面與路由處理

- Hash: `e27816e`
- 改動方向: 提供更友善的無效網址引導與錯誤頁面。
- 具體內容:
  - 建立 `src/views/NotFoundView.vue` 提供 404 視覺標誌與導航按鈕。
  - 於 `src/router/index.ts` 加入萬用路由匹配。

## [2026-03-01] feat(ui): 優化 Portfolio 瀑布流佈局為橫向分組模式

- Hash: `df5f4a2`
- 改動方向: 解決 CSS Columns 導致的高度不均與空白問題，提升視覺平衡感。
- 具體內容:
  - 重構 `PortfolioView.vue` 採用「多欄 Flexbox」分組邏輯。
  - 實作響應式欄數偵測與動態調整。
  - 修正 TypeScript 型別錯誤並通過驗證。

## [2026-03-01] feat(ui): 重構 Home 頁面組件化與滾動敘事升級

- Hash: `d44d931`
- 改動方向: 將首頁核心區塊拆分為獨立組件，並導入動態滾動觸發敘事。
- 具體內容:
  - 建立 `src/components/HeroSection.vue` 與 `src/components/FeaturedWorks.vue`。
  - 實作「圖片縮放進入」與「文字分段延遲（Staggered Reveal）」效果。
  - 修正跑馬燈區域在部分顯示時的顏色不一致問題（改用 CSS Masking）。

## [2026-03-01] style(ui): 實作流體字體系統與手機版導覽優化

- Hash: `3437177`
- 改動方向: 建立全域響應式字體規範，解決手機版排版溢出與導覽列空洞問題。
- 具體內容:
  - 於 `style.css` 導入 `clamp()` 流體字體規模，統一全站標題自動縮放。
  - 實作全域防溢出機制，解決長單字撐破手機畫面問題。
  - 優化手機版 Navbar，加入「當前頁面指示器」與「點擊遮罩關閉」機制。
  - 重構全站 .vue 檔案移除硬編碼字體類別，回歸語意化標籤標籤 (h1-h3)。

## [2026-03-01] refactor(ui): 捨棄漢堡選單，改採行動端底部標籤導覽 (v0.2.0)

- Hash: `TBD`
- 改動方向: 提升行動端使用者體驗 (UX)，採用拇指友善的底部導航設計。
- 具體內容:
  - 重構 `src/components/AppNavbar.vue`，移除漢堡選單與全螢幕抽屜。
  - 實作行動端專用的底部浮動導覽列 (Mobile Bottom Tab Bar)，包含 SVG 圖示與 Active 狀態。
  - 簡化頂部導覽列在行動端的顯示，僅保留 Logo 與 "Hire Me" 按鈕。
  - 更新 `src/App.vue` 為行動端內容增加底部內距 (`pb-32`) 防止遮擋。
  - 升級專案版本號至 `0.2.0`。
  - 通過完整的自動化測試、Lint 檢查與生產環境建置。

## [2026-03-01] style(ui): 全站佈局優化與跨裝置對齊修正 (v0.2.1)

- Hash: `TBD`
- 改動方向: 解決行動端與桌機端在複雜 Grid 佈局下的順序與對齊衝突，提升視覺平衡。
- 具體內容:
  - **HeroSection**: 手機端改為自然頂部對齊而非強制全螢幕置中，提升資訊密度。
  - **FeaturedWorks**: 大幅縮減組件垂直間距，解決頁面空洞感，營造更連貫的敘事節奏。
  - **SkillsView**: 採用「混合定位技術」重構 Grid，確保手機端 DOM 順序正確（標題緊接內容）的同時，桌機端標題能保持水平線對齊。
  - **全站**: 優化行動端字體、按鈕間距與微互動動畫。
  - 升級版本號至 `0.2.1`。
  - 通過自動化測試與生產環境建置。

## [2026-03-01] feat(ui): 在導覽列整合個人博客連結 (v0.3.1)

- Hash: `TBD`
- 改動方向: 在全站導航中加入指向外部博客的入口，整合內容生態。
- 具體內容:
  - 更新 `src/components/AppNavbar.vue`: 在 `navLinks` 中新增指向 `https://final898y.github.io/blog/` 的連結。
  - 實作外部連結識別邏輯，在桌機與行動端皆能以新分頁開啟外部站點。
  - 在行動端底部導覽列新增第 5 個導航項「Blog」，並配置對應的 Book SVG 圖示。
  - 升級版本號至 `0.3.1`。
  - 通過自動化測試與生產環境建置。

## [2026-03-01] feat(ui): 更新真實個人履歷與成長背景 (v0.3.0)

- Hash: `TBD`
- 改動方向: 將網站內容由佔位資料替換為真實的水土保持技師與程式自學經歷。
- 具體內容:
  - 更新 `src/views/SkillsView.vue`: 導入中興大學水保學士/碩士、高考錄取、技師證照（115年）等真實學經歷。
  - 更新 `src/views/AboutView.vue`: 重寫「My Journey」敘事，將工程師思維與程式開發自學旅程（2024年起）相融合。
  - 同步更新技能標籤，包含 C#、Python、Node.js 與 Vue 3。
  - 升級版本號至 `0.3.0`。
  - 通過自動化測試與生產環境建置。

## [2026-03-01] feat(ui): 實作作品集瀑布流 (Masonry) 佈局 (v0.2.2)

- Hash: `TBD`
- 改動方向: 支援作品集圖片依原始比例顯示，不再強制裁切為 16:9。
- 具體內容:
  - 更新 `src/components/ProjectCard.vue`，移除圖片的 `aspect-video` 限制，改採 `w-full h-auto` 自適應高度。
  - 優化卡片內部內距與字體大小，提升小螢幕下的閱讀性。
  - 配合 `PortfolioView.vue` 的多欄 Flex 佈局，實現非對稱的瀑布流視覺效果。
  - 升級版本號至 `0.2.2`。
  - 通過自動化測試與生產環境建置。
