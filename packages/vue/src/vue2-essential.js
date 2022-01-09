module.exports = {
  rules: {
    // 组件名需要使用复数的单词
    "vue/multi-word-component-names": "error",
    // watch的handler不能使用箭头函数，箭头函数会绑定到父级作用域
    "vue/no-arrow-functions-in-watch": "error",
    // computed属性不应该是异步函数，异步操作可能无法按预期工作并且可能导致意外行为
    "vue/no-async-in-computed-properties": "error",
    // 计算属性不能在data中访问，因为还没有初始化
    "vue/no-computed-properties-in-data": "error",
    // 防止重复的属性名称声明
    "vue/no-dupe-keys": "error",
    // 在同一 v-if / v-else-if 链中不允许出现重复条件
    "vue/no-dupe-v-else-if": "error",
    // 组件上不能使用重复的属性名称
    "vue/no-duplicate-attributes": "error",
    // 不能手动的修改props的值
    "vue/no-mutating-props": "error",
    // 检查template上的语法错误
    "vue/no-parsing-error": "error",
    // 属性名不能使用保留关键字
    "vue/no-reserved-keys": "error",
    // 在组件上使用 data 属性时，值必须是返回对象的函数
    "vue/no-shared-component-data": "error",
    // 在计算属性和函数中不能使用产生副作用的代码
    "vue/no-side-effects-in-computed-properties": "error",
    // 在template标签上不能使用 `key` 属性
    "vue/no-template-key": "error",
    // 在`<textarea>` 元素需要使用v-model而不是使用插值语法
    "vue/no-textarea-mustache": "error",
    // 检测出在组件中注册了的，但是在模板中未使用的组件
    "vue/no-unused-components": "error",
    // 检测出v-for 或 作用域中未使用的变量
    "vue/no-unused-vars": "error",
    // v-if 和 v-for 不能同时使用
    "vue/no-use-v-if-with-v-for": "error",
    // 不要在`<template>`上使用无用的属性
    "vue/no-useless-template-attributes": "error",
    // 使用`<component>`是需要使用`is`属性
    "vue/require-component-is": "error",
    // 组件的props的type需要使用构造函数而不是字符串
    "vue/require-prop-type-constructor": "error",
    // 强制渲染函数始终需要有返回值
    "vue/require-render-return": "error",
    // v-for需要必须要使用`key`属性
    "vue/require-v-for-key": "error",
    // 如果是props的类型是`Array` 或 `Object`，则默认值应该是一个函数
    "vue/require-valid-default-prop": "error",
    // 在计算属性中需要有返回值
    "vue/return-in-computed-property": "error",
    // 当有另一个带修饰符的 v-on 时，必须要在 v-on 上使用精确修饰符
    "vue/use-v-on-exact": "error",
    // 在没有传递回调并且没有等待返回的 Promise 的情况下调用 Vue.nextTick 或 vm.$nextTick 可能是一个错误
    "vue/valid-next-tick": "error",
    // `<template>`不能做为根组件
    "vue/valid-template-root": "error",
    // 检测v-bind的不规范使用
    "vue/valid-v-bind": "error",
    // 检测v-cloak的不规范使用
    "vue/valid-v-cloak": "error",
    // 检测v-else-if的不规范使用
    "vue/valid-v-else-if": "error",
    // 检测v-else的不规范使用
    "vue/valid-v-else": "error",
    // 检测v-for的不规范使用
    "vue/valid-v-for": "error",
    // 检测v-html的不规范使用
    "vue/valid-v-html": "error",
    // 检测v-if的不规范使用
    "vue/valid-v-if": "error",
    // 检测v-model的不规范使用
    "vue/valid-v-model": "error",
    // 检测v-on的不规范使用
    "vue/valid-v-on": "error",
    // 检测v-once的不规范使用
    "vue/valid-v-once": "error",
    // 检测v-pre的不规范使用
    "vue/valid-v-pre": "error",
    // 检测v-show的不规范使用
    "vue/valid-v-show": "error",
    // 检测v-show的不规范使用
    "vue/valid-v-slot": "error",
    // 检测v-textk的不规范使用
    "vue/valid-v-text": "error",
  },
};
