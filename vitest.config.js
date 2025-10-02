import { configDefaults, defineConfig } from "vitest/config";
import parseGitignore from "parse-gitignore";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const exclude = [
  ...configDefaults.exclude,
  ...parseGitignore
    .file(resolve(__dirname, ".gitignore"))
    .patterns.map((p) => `**/${p}`),
  "**/*.d.ts",
];

export default defineConfig({
  test: {
    name: "unit",
    dir: "src",
    exclude,
    coverage: {
      include: ["src/"],
    },
  },
});
