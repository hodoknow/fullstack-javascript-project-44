import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Кавычки — разрешены любые (ошибки не будет)
      '@stylistic/quotes': 'off',

      // Точки с запятой — всегда
      '@stylistic/semi': ['error', 'always'],

      // Отступы — табуляция, но пробелы только предупреждение (или 'off' для полного отключения)
      // '@stylistic/indent': ['warn', 'tab'],
      '@stylistic/indent': 'off',

      // Разрешённые ++ и --
      'no-plusplus': 'off',
      'no-minusminus': 'off',

      // Висячие запятые — только в многострочных
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
