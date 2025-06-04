// Node dependencies
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ESLint config dependencies
import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// Plugin and parser dependencies
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tailwindcss from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = defineConfig([
  {
    languageOptions: {
      parser: tsParser,
    },
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:tailwindcss/recommended',
      'prettier',
    ),
    plugins: {
      '@typescript-eslint': typescriptEslint,
      tailwindcss,
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
      '@typescript-eslint/no-misused-promises': [2, {
        'checksVoidReturn': {
          'attributes': false
        },
      }],
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

export default eslintConfig;
