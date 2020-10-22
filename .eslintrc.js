module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module'
    },
    env: {
      es6: true,
      browser: true
    },
    rules: {
      "import/no-mutable-exports": 0,
      "no-labels": 0,
      "no-restricted-syntax": 0,
      "@typescript-eslint/ban-ts-comment": 0
    },
    plugins: ["@typescript-eslint", "svelte3"],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:eslint-comments/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
    overrides: [
      {
        files: ["**/*.svelte"],
        processor: "svelte3/svelte3",
      },
    ],
  };