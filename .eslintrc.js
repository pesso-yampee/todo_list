module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['@typescript-eslint'],
  "ignorePatterns": [
    "*.config.js"
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:tailwindcss/recommended",
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    "no-console": "error",
  }
};