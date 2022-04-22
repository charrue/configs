const ConfusingBrowserGlobals = [
  "addEventListener",
  "blur",
  "close",
  "closed",
  "confirm",
  "defaultStatus",
  "defaultstatus",
  "event",
  "external",
  "find",
  "focus",
  "frameElement",
  "frames",
  "history",
  "innerHeight",
  "innerWidth",
  "length",
  "location",
  "locationbar",
  "menubar",
  "moveBy",
  "moveTo",
  "name",
  "onblur",
  "onerror",
  "onfocus",
  "onload",
  "onresize",
  "onunload",
  "open",
  "opener",
  "opera",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "print",
  "removeEventListener",
  "resizeBy",
  "resizeTo",
  "screen",
  "screenLeft",
  "screenTop",
  "screenX",
  "screenY",
  "scroll",
  "scrollbars",
  "scrollBy",
  "scrollTo",
  "scrollX",
  "scrollY",
  "self",
  "status",
  "statusbar",
  "stop",
  "toolbar",
  "top",
];

module.exports = {
  rules: {

    /**
     * 禁止使用var声明变量
     */
    "init-declarations": "error",

    /**
     * 禁止delete 操作符的使用
     */
    "no-delete-var": "error",

    /**
     * 同一作用域下，不允许标签与变量同名
     */
    "no-label-var": "error",

    /**
     * 全局范围内禁用`isFinite`和`isNaN`
     */
    "no-restricted-globals": [
      "error",
      {
        name: "isFinite",
        message:
          "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
      },
      {
        name: "isNaN",
        message:
          "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
      },
    ].concat(ConfusingBrowserGlobals),

    /**
     * 局部变量不能覆盖全局变量，即不能重名
     */
    "no-shadow": "error",

    /**
     * 变量命名不能和关键字同名
     */
    "no-shadow-restricted-names": "error",

    /**
     * 禁用未声明的变量
     */
    "no-undef": "error",

    /**
     * 禁止将变量初始化为 undefined
     */
    "no-undef-init": "error",

    /**
     * 禁止将 undefined 作为标识符
     */
    "no-undefined": "off",

    /**
     * 禁止出现未使用过的变量
     */
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: true }],

    /**
     * 禁止在变量定义之前使用它们
     */
    "no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
  },
};
