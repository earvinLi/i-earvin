// External Dependencies
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
), {
    languageOptions: {
        globals: {
            ...globals.browser,
        },
        ecmaVersion: 5,
        sourceType: "script",
        parserOptions: {
            project: "tsconfig.json",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        // Todo: check more about whether to use this rule or not
        "react/require-default-props": "off",
        // Todo: find better solution for '@typescript-eslint' plugin
        "@typescript-eslint/brace-style": "off",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/comma-spacing": "off",
        "@typescript-eslint/func-call-spacing": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/keyword-spacing": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/space-before-blocks": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/object-curly-spacing": "off"
    },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@/modules/*", "./app/_modules"],
          ["@/components", "./app/_components"],
          ["@/hooks", "./app/_hooks"],
          ["@/actions", "./app/_actions"],
          ["@/utilities/*", "./app/_utilities"],
          ["@/constants/*", "./app/_constants"],
        ],
        extensions: [".ts", ".tsx"],
      }
    },
  },
}];
