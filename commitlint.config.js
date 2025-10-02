const configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [1, "always", 100],
    "subject-case": [
      2,
      "never",
      [
        "camel-case",
        "kebab-case",
        "lower-case",
        "pascal-case",
        "snake-case",
        "upper-case",
      ],
    ],
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", Number.POSITIVE_INFINITY],
    "footer-max-line-length": [1, "always", Number.POSITIVE_INFINITY],
  },
};

export default configuration;
