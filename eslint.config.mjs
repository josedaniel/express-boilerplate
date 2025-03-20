import eslint from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  prettierConfig,
  {
    ignores: ['node_modules/', 'public/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'error',
      'no-console': 'off',
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'comma-dangle': 'off',
      camelcase: [
        'error',
        {
          properties: 'never',
          ignoreDestructuring: true,
          allow: ['^[a-z]+(_[a-z]+)+$'] // Permite snake_case
        }
      ]
    }
  }
];
