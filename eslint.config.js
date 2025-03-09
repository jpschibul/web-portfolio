import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {ignores: ['dist']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: globals.browser
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'esint-config-prettier': eslintConfigPrettier
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
      'no-console': 2,
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);

// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import pluginReact from 'eslint-plugin-react';
// import eslintConfigPrettier from 'eslint-config-prettier';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   pluginJs.configs.recommended,
//   eslintConfigPrettier,
//   {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
//   {
//     languageOptions: {
//       ecmaVersion: 2022,
//       sourceType: 'module',
//       globals: globals.browser
//     }
//   },
//   {ignores: ['**/node_modules/', '.git/', '**/dist/']},
//   {
//     settings: {
//       react: {
//         version: 'detect'
//       }
//     }
//   },
//   {
//     rules: {
//       // 'import/no-unresolved': ['error', {ignore: ['\\.svg\\?react$']}],
//       'react/jsx-uses-react': 'off',
//       'react/react-in-jsx-scope': 'off',
//       'no-prototype-builtins': 'off',
//       'no-console': 2,
//       'no-unused-vars': 'off',
//       '@typescript-eslint/no-unused-vars': ['error'],
//       '@typescript-eslint/no-unused-expressions': ['error', {allowTernary: true}],
//       'no-debugger': 'warn',
//       '@typescript-eslint/no-explicit-any': ['off'],
//       'react/jsx-closing-bracket-location': [
//         1,
//         {'selfClosing': 'line-aligned', nonEmpty: 'after-props'}
//       ]
//     }
//   }
// ];
