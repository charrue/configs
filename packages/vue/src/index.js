module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["./base.js", "./vue2-essential.js"],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["vue"],
};
