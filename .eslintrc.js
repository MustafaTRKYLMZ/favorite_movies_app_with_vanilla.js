module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb/base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: "off",
    camelcase: "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
  },
};
