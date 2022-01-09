module.exports = {
  rules: {
    "vue/block-lang": "warn",
    "vue/block-tag-newline": "error",
    // 模板中的自定义组件需要使用 kebab-case 格式
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      { registeredComponentsOnly: true },
    ],
    // 组件中注册的组件的命名需要采用 PascalCase 格式
    "vue/component-options-name-casing": ["error", "PascalCase"],
    // 自定义的事件名需要使用 kebab-case 格式
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    // 对button是否要带有type属性没有强制要求
    "vue/html-button-has-type": "off",
    // 对模板中的注释没有强制要求
    "vue/html-comment-content-newline": [
      "error",
      {
        singleline: "ignore",
        multiline: "ignore",
      },
    ],
    // 在 <!-- 之后和 --> 注释之前的间距需要保持一致
    "vue/html-comment-content-spacing": ["error", "always"],
    // 模板中的注释的间距没有强制要求
    "vue/html-comment-indent": ["error", 2],
    // 检查jsx文件的文件命名是否与组件的`name`选项一致
    "vue/match-component-file-name": [
      "error",
      {
        extensions: ["jsx"],
        shouldMatchCase: false,
      },
    ],
    // 不要求在 Vue 组件中的多行属性之间强制换行
    "vue/new-line-between-multi-line-property": "off",
    // 对nextTick的使用风格没有强制要求
    "vue/next-tick-style": "off",
    // 可以在模板中直接使用字符串
    "vue/no-bare-strings-in-template": "off",
    "vue/no-boolean-default": ["error", "default-false"],
    // 使用v-text或v-html时，不能带子元素
    "vue/no-child-content": "error",
    "vue/no-duplicate-attr-inheritance": "off",
    // 不能使用空的 <template> <script> <style>
    "vue/no-empty-component-block": "error",
    // 检查`model`选项的不规范格式
    "vue/no-invalid-model-keys": "off",
    // 模板中的class声明，不能是多个对象
    "vue/no-multiple-objects-in-class": "error",
    // 不允许组件选项中出现潜在的拼写错误
    "vue/no-potential-component-option-typo": "error",
    // 自定义组件的命名不能与原生标签和vue内置组件重名
    "vue/no-reserved-component-names": "error",
    // 没有禁止使用的块元素
    "vue/no-restricted-block": "off",
    // 在 `await`语句之后没有禁止使用的语句
    "vue/no-restricted-call-after-await": "off",
    // 没有禁止使用的类名
    "vue/no-restricted-class": "off",
    // 没有禁止使用的组件选项
    "vue/no-restricted-component-options": "off",
    // 没有禁止使用的自定义事件
    "vue/no-restricted-custom-event": "off",
    // 没有禁止使用的prop
    "vue/no-restricted-props": "off",
    // 没有禁止使用的attribute
    "vue/no-restricted-static-attribute": "off",
    // 禁止使用以`v-`开始的属性绑定
    "vue/no-restricted-v-bind": [
      "error",
      {
        argument: "/^v-/",
        message: "Using `:v-xxx` is not allowed. Instead, remove `:` and use it as directive.",
      },
    ],
    // 对模板上的style属性的使用没有强制要求
    "vue/no-static-inline-styles": "off",
    // `a`标签的target属性并不是必须的
    "vue/no-template-target-blank": "off",
    // 在beforeRouteEnter生命周期，不能使用this
    "vue/no-this-in-before-route-enter": "error",
    // 不能使用未定义的属性
    "vue/no-undef-properties": "error",
    // 在本组件内未注册的组件依旧可以在模板中使用
    "vue/no-unregistered-components": "off",
    // 检查是否有未使用的prop
    "vue/no-unused-properties": "error",
    // 检测是否有未使用的ref
    "vue/no-unused-refs": "error",
    // 不能像调用函数一样去使用计算属性
    "vue/no-use-computed-property-like-method": "off",
    // 避免不必要的插值
    "vue/no-useless-mustaches": "error",
    // 避免不必要的v-bind
    "vue/no-useless-v-bind": "error",
    // <template> <script> <style> 这些标签之间需要有两个空格
    "vue/padding-line-between-blocks": ["error", "always"],
    // 静态类型应该和动态类名独立开来
    "vue/prefer-separate-static-class": "error",
    // 应该立刻导出组件对象
    "vue/require-direct-export": "error",
    // name 属性是必须的
    "vue/require-name-property": "error",
    "vue/script-indent": ["error", 2],
    // 组件的class不需要进行排序
    "vue/static-class-names-order": "off",
    // 使用v-for时只能使用`in`关键字，而不是`of`
    "vue/v-for-delimiter-style": ["error", "in"],
    // 事件调用函数在没有传入参数的时候，不需要以函数调用的形式声明
    "vue/v-on-function-call": "error",
  },
};
