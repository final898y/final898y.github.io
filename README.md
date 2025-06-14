# GitHub Pages

這是一個使用 Vite + Vue 3 開發的主站，部署於 GitHub Pages。  
博客內容已遷移至獨立倉庫，並部署於 `/blog/` 子目錄。

---

## 🚀 技術棧

| 技術           | 說明                            |
| -------------- | ------------------------------- |
| Vite           | 快速現代化前端開發建構工具      |
| Vue 3          | 使用 Composition API 的前端框架 |
| GitHub Pages   | 免費靜態網站託管服務            |
| GitHub Actions | 自動部署流程（CI/CD）           |
| Node.js 20     | 開發與部署的執行環境            |

---

## 📁 專案結構

```
final898y.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions 部署設定
├── dist/                        # 打包後的靜態檔案
├── src/                         # Vue 3 前端程式碼
├── package.json                 # NPM 套件與指令
├── tsconfig.json                # TypeScript 配置
├── vite.config.js               # Vite 配置
├── LICENSE.md                   # MIT License
└── README.md                    # 本文件
```

---

## ⚙️ 開發與建置

```bash
# 安裝相依套件
npm install

# 本地開發
npm run dev

# 建置靜態檔案
npm run build
```

---

## 🚀 自動部署

推送至 `main` 分支時，GitHub Actions 會建置並部署主站至：  
🔗 [https://final898y.github.io/](https://final898y.github.io/)

博客部署於：  
🔗 [https://final898y.github.io/blog/](https://final898y.github.io/blog/)

---

## 🧭 未來規劃

- [ ] 整合主站與博客的導航。
- [ ] 添加留言系統至博客。
- [ ] 加入測試與格式化工具。

---

## 🙌 貢獻與回饋

歡迎提交 Issues 或 Pull Requests！🙏

---

## 📄 授權條款

本專案採用 MIT License，詳見 [LICENSE.md](./LICENSE.md)。
