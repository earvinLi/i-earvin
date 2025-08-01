// External Dependencies
import type { Config } from 'prettier';

// Todo: better to list all rules (even with default value) here for a clear formatting picture?
const config: Config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  objectWrap: 'preserve',
  singleAttributePerLine: false,
  singleQuote: true,
  jsxSingleQuote: true
};

export default config;
