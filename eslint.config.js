import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import globals from "globals";
import vitest from "@vitest/eslint-plugin";
import prettier from "eslint-config-prettier";
import { jsdoc } from "eslint-plugin-jsdoc";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath),
  {
    ignores: ["docs/**"],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.test.*"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  jsdoc({
    config: "flat/recommended",
    files: ["src/**/*.js"],
    ignores: ["**/*.test.js"],
    rules: {
      "jsdoc/tag-lines": [
        "warn",
        "any",
        {
          startLines: 1,
          endLines: 1,
          applyToEndTag: false,
          tags: {
            type: {
              lines: "never",
            },
          },
        },
      ],
    },
  }),
]);
