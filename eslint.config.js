import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'esint-config-prettier': eslintConfigPrettier,
      'eslint-plugin-tailwindcss': tailwind
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      'no-console': 2,
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
      // 'tailwindcss/classnames-order': 'warn',
      // 'tailwindcss/no-custom-classname': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);
