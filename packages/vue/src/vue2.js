module.exports = {
  plugin: ["vue"],
  extends: [
    "./base.js",
    "./no-layout-rules.js",
    "./recommended.js",
    "./strongly-recommended.js",
    "./strongly-recommended.js",
    "./uncategorized.js",
    "./vue2-essential.js",
  ],
  rules: {
    // 不能在v-model上使用自定义修饰符
    "vue/no-custom-modifiers-on-v-model": "error",
    // template 需要包含一个根元素
    "vue/no-multiple-template-root": "error",
    // 不允许在props中使用保留关键字
    "vue/no-reserved-props": ["error", { vueVersion: 2 }],
    // 使用v-for时，不允许在`<template>`中使用key
    "vue/no-v-for-template-key": "error",
    // 在自定义组件上使用v-model时不允许带有的参数
    "vue/no-v-model-argument": "error",
    // 检查 v-bind 指令上的每个 .sync 修饰符是否有效
    "vue/valid-v-bind-sync": "error",
  },
};
