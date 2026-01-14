# Final898y's Main Site

歡迎來到我的主站倉庫！這是一個個人網站，展示我的專案與內容，博客部分則由獨立的 `final898y/blog` 倉庫提供。網站部署於 GitHub Pages，網址為 [https://final898y.github.io/](https://final898y.github.io/)。

## 專案概述

- **主站**：存放於 `main` 分支的原始碼（例如 `src/`），建置後部署至 `gh-pages` 分支的根目錄（`root`）。
- **博客**：由 [final898y/blog](https://github.com/final898y/blog) 倉庫建置，部署至 `gh-pages` 分支的 `blog/` 子目錄，訪問 [https://final898y.github.io/blog/](https://final898y.github.io/blog/)。
- **技術棧**：主站使用 Vite，博客使用 VitePress。
- **許可證**：MIT License。

## 檔案結構

```
final898y.github.io/
├── main 分支
│   ├── src/              # 主站原始碼（例如 Vite 程式碼）
│   ├── package.json      # 依賴與腳本
│   ├── .github/workflows/ # GitHub Actions 部署流程
│   ├── LICENSE.md        # MIT 許可證
│   └── README.md         # 本文件
├── gh-pages 分支
│   ├── index.html      # 主站首頁
│   ├── assets/           # 主站資產（CSS、JS 等）
│   ├── blog/            # 博客內容（由 `final898y/blog` 部署）
│   │   ├── index.html         # 博客首頁
│   │   ├── articles/         # 博客文章
│   │   ├── assets/           # 博客資產
│   │   └── 404.html        # 博客 404
│   └── README.md         # 分支說明
```

## 部署流程

- **主站**：
  1. 推送至 `main` 分支觸發 `.github/workflows/deploy.yml`。
  2. 使用 `peaceiris/actions-gh-pages@v4` 將建置的 `dist/` 推送至 `gh-pages` 分支的根目錄，排除 `blog/`。
  3. GitHub Pages 從 `gh-pages` 的 `/ (root)` 提供主站內容。
- **博客**：
  - 由 `final898y/blog` 倉庫獨立部署，推送 VitePress 的 `dist/` 至 `gh-pages` 的 `blog/`。
  - 使用 Deploy Key 授權跨倉庫推送。

## 開發與測試

### 本地運行

```bash
npm install
npm run dev
```

訪問 `http://localhost:3000` 查看主站。

### 建置

```bash
npm run build
```

輸出至 `dist/`，檢查 `index.html` 與 `assets/`。

### 部署

- 推送至 `main`：

```bash
git push origin main
```

- 檢查 Actions 日誌，確認 `gh-pages` 更新。

### 注意

- 博客內容由 `final898y/blog` 管理，勿直接修改 `gh-pages` 的 `blog/`。
- 主站部署不會覆蓋 `blog/`（因 `exclude_assets: 'blog'`）。

## 問題排查

- **主站 404**：檢查 `gh-pages` 的 `index.html`，確認 Actions 成功。
- **博客 404**：檢查 `final898y/blog` 的 Actions，確保 `blog/` 存在於 `gh-pages`。
- **Deploy Key 無效**：重新生成 Deploy Key（見 `final898y/blog` README）。

## 聯繫

有問題或建議？請開 [Issue](https://github.com/final898y/final898y.github.io/issues) 或聯繫我！

## 許可證

[MIT License](LICENSE.md)
