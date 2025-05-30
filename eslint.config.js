const { defineConfig, globalIgnores } = require('eslint/config');

const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const tailwindcss = require('eslint-plugin-tailwindcss');
const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:tailwindcss/recommended',
      'prettier',
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      tailwindcss,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'tailwindcss/classnames-order': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },

    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:tailwindcss/recommended',
      'prettier',
    ),

    rules: {
      'tailwindcss/classnames-order': 'off',
    },
  },
  globalIgnores([
    '**/node_modules',
    '**/.idea',
    '**/.next',
    '**/.husky',
    '**/.prettierignore',
  ]),
]);
