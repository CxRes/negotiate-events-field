export default {
  $schema: "https://unpkg.com/knip@5/schema.json",
  entry: ["*.config.js"],
  project: ["src/**/*.js"],
  ignoreDependencies: ["@commitlint/*"],
};
