// Node dependencies
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ESLint config dependencies
import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

// Plugin and parser dependencies
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:tailwindcss/recommended',
      'prettier',
    ),
    rules: {
      'tailwindcss/classnames-order': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    extends: compat.extends(
      'next/typescript',
      'plugin:@typescript-eslint/recommended-type-checked',
    ),
    rules: {
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
