// 從 'eslint' 套件中匯入 Linter 類型，這仍然是必要的，讓 TypeScript 知道相關的類型定義
import type { Linter } from 'eslint'

import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import { vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// 移除斷言，讓 TypeScript 自動推斷類型
export default [
  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    name: 'files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  // 這些展開的配置物件如果本身就符合 Linter.FlatConfig 類型，則無需斷言
  ...pluginVue.configs['flat/essential'],

  // 這個物件如果其內部結構完全符合 Linter.FlatConfig，則無需斷言
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/**/*.{ts,tsx}'],
  },
  // 這個物件如果其內部結構完全符合 Linter.FlatConfig，則無需斷言
  skipFormatting,
]
