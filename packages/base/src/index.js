module.exports = {
  extends: [
    "./best-practices.js",
    "./es6.js",
    "./node.js",
    "./possible-errors.js",
    "./style.js",
    "./variables.js",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
