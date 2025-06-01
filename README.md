# GitHub Pages

這是一個使用 Vite + Vue 3 開發的專案，並透過 GitHub Actions 自動部署到 GitHub Pages。  
專案文件使用 VitePress 建立，未來將遷移至獨立倉庫並透過子目錄整合至主頁。

---

## 🚀 技術棧

| 技術           | 說明                                     |
| -------------- | ---------------------------------------- |
| Vite           | 快速現代化前端開發建構工具               |
| Vue 3          | 使用 Composition API 的前端框架          |
| VitePress      | 用於撰寫與產生專案說明文件的靜態網站工具 |
| GitHub Pages   | GitHub 提供的免費靜態網站託管服務        |
| GitHub Actions | 自動部署流程（CI/CD）                    |
| Node.js 20     | 開發與部署的執行環境                     |

---

## 📁 專案結構

```
your-project/
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions 自動部署設定
├── dist/                            # 打包後的靜態檔案（自動產生）
├── docs/                            # VitePress 文件目錄
│   ├── .vitepress/                  # VitePress 配置文件與資料
│   │   ├── data/                    # 動態資料載入器
│   │   │   ├── posts.data.ts        # 首頁文章列表的 TypeScript 資料載入器
│   │   │   ├── programming.data.ts  # 程式設計分類頁面的資料載入器
│   │   │   └── lifestyle.data.ts    # 生活隨筆分類頁面的資料載入器
│   │   └── config.mjs               # VitePress 配置文件（主題、導航等）
│   ├── articles/                    # 文章檔案
│   │   ├── my-first-programming-post.md  # 程式設計文章範例
│   │   ├── my-learning-journey.md        # 生活隨筆文章範例
│   │   └── category/                # 分類頁面
│   │       ├── programming.md       # 程式設計分類頁面
│   │       └── lifestyle.md         # 生活隨筆分類頁面
│   └── index.md                     # 首頁，展示所有文章與分類連結
├── src/                             # Vue 前端程式碼
├── package.json                     # NPM 套件與指令定義
├── tsconfig.json                    # TypeScript 配置文件
├── vite.config.js                   # Vite 設定
└── LICENSE.md                       # MIT License 授權檔案
```

### 結構說明

- **`.github/workflows/deploy.yml`**：定義 GitHub Actions 自動部署流程，負責建置並上傳靜態檔案至 GitHub Pages。
- **`dist/`**：Vite 和 VitePress 建置後生成的靜態檔案，部署至 GitHub Pages 的內容。
- **`docs/`**：VitePress 文件的根目錄，包含所有文章和網站配置。
  - **`.vitepress/data/`**：存放 TypeScript 資料載入器，使用 `createContentLoader` 動態載入文章：
    - `posts.data.ts`：為首頁生成所有文章列表，按日期排序。
    - `programming.data.ts`：為程式設計分類頁面載入標籤為「程式設計」的文章。
    - `lifestyle.data.ts`：為生活隨筆分類頁面載入標籤為「生活隨筆」的文章。
  - **`.vitepress/config.mjs`**：VitePress 的配置文件，定義網站標題、導航列、基礎路徑（`base: '/blog/'`）等。
  - **`articles/`**：存放所有 Markdown 文章檔案：
    - `my-first-programming-post.md`：範例文章，標籤為「程式設計」。
    - `my-learning-journey.md`：範例文章，標籤為「生活隨筆」。
    - `category/`：存放分類頁面，動態顯示特定標籤的文章。
  - **`index.md`**：網站首頁，動態顯示最新文章列表和分類連結。
- **`src/`**：Vue 3 前端程式碼（若有），目前主要由 VitePress 管理靜態內容。
- **`package.json`**：定義專案依賴（例如 `vitepress`, `typescript`）和腳本（`docs:dev`, `docs:build`）。
- **`tsconfig.json`**：TypeScript 配置，確保資料載入器和 VitePress 腳本的型別安全。
- **`vite.config.js`**：Vite 配置文件，定義建置和開發選項。
- **`LICENSE.md`**：MIT License 授權檔案，說明專案的開源許可條款。

---

## ⚙️ 開發與建置

### 主專案

```bash
# 安裝相依套件
npm install

# 本地開發（啟動 Vite 伺服器）
npm run dev

# 建置靜態檔案
npm run build
```

### VitePress 文件

```bash
# 啟動文件預覽（本地伺服器）
npm run docs:dev

# 打包文件（生成靜態檔案至 dist/）
npm run docs:build
```

---

## 🚀 自動部署（GitHub Actions）

當您將程式碼推送到 `main` 分支時：

1. GitHub Actions 會自動執行部署流程：

   - 安裝 Node.js 與依賴。
   - 執行 `npm run docs:build` 打包 VitePress 文件。
   - 上傳 `dist/` 資料夾內容至 GitHub Pages。

2. 網站會自動更新至：
   🔗 [https://final898y.github.io/blog/](https://final898y.github.io/blog/)

### 注意事項

- 確保 `docs/.vitepress/config.mjs` 中的 `base: '/blog/'` 與 GitHub Pages 的子目錄配置一致。
- 每次推送後，檢查 GitHub Actions 的執行日誌，確認部署成功。

---

## 📚 文件說明（VitePress）

目前文件位於 `/docs` 目錄，使用 VitePress 建立，支援動態文章載入和分類展示：

- **首頁** (`index.md`)：展示最新文章列表（按日期排序）和分類連結。
- **分類頁面**：
  - `programming.md`：顯示標籤為「程式設計」的文章。
  - `lifestyle.md`：顯示標籤為「生活隨筆」的文章。
- **文章管理**：
  - 所有文章存放於 `docs/articles/`，使用 Markdown 撰寫，包含 `frontmatter` 元數據（`title`, `date`, `tags`, `description`）。
  - 使用 TypeScript 資料載入器（`.vitepress/data/`）動態生成文章列表，支援日期格式化（例如 `2025年06月01日`）。

### 添加新文章

1. 在 `docs/articles/` 新增 Markdown 檔案，例如：
   ```yaml
   ---
   title: 新程式設計文章
   date: 2025-06-02
   tags: [程式設計, JavaScript]
   description: 學習 JavaScript 的基礎技巧。
   ---
   # 新程式設計文章
   ```
2. 執行 `npm run docs:dev` 預覽，確認文章出現在首頁和分類頁面。
3. 推送至 `main` 分支，自動部署。

---

## 🧭 未來規劃

- [ ] 將 VitePress 文件遷移至獨立倉庫。
- [ ] 使用 GitHub Actions 自動將文件部署回主頁的 `/blog/`。
- [ ] 加入測試（例如 Jest）、自動格式化（Prettier）和 Lint（ESLint）。
- [ ] 設定自訂網域（如有需要）。
- [ ] 新增搜尋功能（例如 VitePress 內建搜尋或 Algolia）。
- [ ] 實現分頁功能，支援大量文章展示。

---

## 🙌 貢獻與回饋

歡迎任何建議與貢獻 🙏  
如需回報錯誤或功能請求，請建立 Issues。

---

## 📄 授權條款

本專案採用 MIT License，詳見 [LICENSE.md](./LICENSE.md) 檔案。
