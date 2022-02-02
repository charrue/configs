module.exports = {
  rules: {
    // 强制在 Vue 模板中的自定义组件上使用带连字符的属性名称
    "vue/attribute-hyphenation": "warn",
    // 组件命名使用 PascalCase 或 kebab-case 格式
    "vue/component-definition-name-casing": "warn",
    // 组件属性在同行展示还是要换行展示
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below",
      },
    ],
    // 在组件的闭标签之前需要换行
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    // 在闭标签的前后不能留有空格，但是在自闭合标签的闭标签之前需要留有空格
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],
    // 检查不规范的闭合标签
    "vue/html-end-tags": "warn",
    // 组件属性应该换行显示并空两格
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    // 组件属性使用双引号
    "vue/html-quotes": [
      "warn",
      "double",
      { avoidEscape: false },
    ],
    // 组件不使用自闭合标签
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "never",
        },
        svg: "always",
        math: "always",
      },
    ],
    // 组件每行最多展示1个属性
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    // 在多行元素的内容之前和之后需要强制换行
    "vue/multiline-html-element-content-newline": "warn",
    // 插值语法的左右需要保留一个空格
    "vue/mustache-interpolation-spacing": "warn",
    // 删除标签中不用于缩进的多个空格
    "vue/no-multi-spaces": "warn",
    // 模板中等号左右不需要空格
    "vue/no-spaces-around-equal-signs-in-attribute": "warn",
    // 检测 v-for 指令或作用域属性的变量定义，如果它们隐藏了父作用域中的变量
    "vue/no-template-shadow": "warn",
    // 每个组件只能声明一个组件
    "vue/one-component-per-file": "warn",
    // 组件的属性需要使用驼峰式命名
    "vue/prop-name-casing": ["error", "camelCase"],
    // 未标记为必须的属性，应该具备一个默认值
    "vue/require-default-prop": "off",
    // 组件的属性都要有类型声明
    "vue/require-prop-types": "warn",
    // 在单行元素的内容之前和之后需要强制换行
    "vue/singleline-html-element-content-newline": "warn",
    // v-bind需要使用简写
    "vue/v-bind-style": ["error", "shorthand"],
    // v-on需要使用简写
    "vue/v-on-style": ["error", "shorthand"],
    // 对插槽的缩写没有限制
    "vue/v-slot-style": "warn",
  },
};
