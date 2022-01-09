module.exports = {
  rules: {
    // eslint-disable-next-line max-len
    // 属性排列顺序： v-is > v-for > v-if > v-once > id > key,ref > slot > v-model > 自定义指令 > 自定义属性 > 事件 > v-html
    "vue/attributes-order": [
      "error",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "SLOT",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT",
        ],
      },
    ],
    // <template> 先于 <script> 先于 <style>
    "vue/component-tags-order": [
      "error",
      {
        order: [["script", "template"], "style"],
      },
    ],
    "vue/no-lone-template": "warn",
    // 作用域插槽不能传入多个参数
    "vue/no-multiple-slot-args": "warn",
    // 对v-html的使用没有限制
    "vue/no-v-html": "warn",
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          ["delimiters", "comments"],
          [
            "components",
            "directives",
            "filters",
          ],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "layout",
          "middleware",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "asyncData",
          "data",
          "fetch",
          "head",
          "computed",
          "watch",
          "watchQuery",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
        ],
      },
    ],
    // 在模板中不能使用this
    "vue/this-in-template": "error",
  },
};
