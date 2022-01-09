module.exports = {
  rules: {

    /**
     * for循环需要有一个终止条件
     */
    "for-direction": "error",

    /**
     * getter 函数中需要出现 return 语句
     */
    "getter-return": ["error", { allowImplicit: true }],

    /**
     * 禁止使用异步函数作为 Promise executor
     */
    "no-async-promise-executor": "error",

    /**
     * 禁止在循环中出现 await
     * 应该重构为Promise.all
     */
    "no-await-in-loop": "error",

    /**
     * 禁止与 -0 进行比较
     */
    "no-compare-neg-zero": "error",

    /**
     * 禁止条件表达式中出现赋值操作符
     */
    "no-cond-assign": ["error", "always"],

    /**
     * 禁用 console
     */
    "no-console": "warn",

    /**
     * 禁止在条件判断中使用常量表达式
     */
    "no-constant-condition": "warn",

    /**
     * TODO
     * 禁止在正则表达式中使用控制字符
     */
    "no-control-regex": "error",

    /**
     * 禁用 debugger
     */
    "no-debugger": "error",

    /**
     * 禁止 function 定义中出现重名参数
     */
    "no-dupe-args": "error",

    /**
     * 禁止对象字面量中出现重复的 key
     */
    "no-dupe-keys": "error",

    /**
     * 禁止出现重复的 case 标签
     */
    "no-duplicate-case": "error",

    /**
     * 禁止出现空语句块
     */
    "no-empty": "error",

    /**
     * 禁止在正则表达式中使用空字符集
     */
    "no-empty-character-class": "error",

    /**
     * 禁止对 catch 子句的参数重新赋值
     */
    "no-ex-assign": "error",

    /**
     * 禁止不必要的布尔转换
     */
    "no-extra-boolean-cast": "error",

    /**
     * 禁止不必要的括号
     */
    "no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: "all",
        enforceForArrowConditionals: false,
      },
    ],

    /**
     * 禁止不必要的分号
     */
    "no-extra-semi": "error",

    /**
     * 禁止对 function 声明重新赋值
     */
    "no-func-assign": "error",

    /**
     * 禁止在嵌套的块中出现变量声明或 function 声明
     */
    "no-inner-declarations": "error",

    /**
     *  禁止 RegExp 构造函数中存在无效的正则表达式字符串
     */
    "no-invalid-regexp": "error",

    /**
     * 禁止不规则的空白
     */
    "no-irregular-whitespace": "error",

    /**
     * 不允许在字符类语法中出现由多个代码点组成的字符
     */
    "no-misleading-character-class": "error",

    /**
     * 禁止把全局对象作为函数调用
     */
    "no-obj-calls": "error",

    /**
     * 禁止直接调用 Object.prototypes 的内置属性
     */
    "no-prototype-builtins": "error",

    /**
     * 禁止正则表达式字面量中出现多个空格
     */
    "no-regex-spaces": "error",

    /**
     * 禁用稀疏数组
     */
    "no-sparse-arrays": "warn",

    /**
     * 禁止在常规字符串中出现模板字面量占位符语法
     */
    "no-template-curly-in-string": "error",

    "no-unexpected-multiline": "error",

    /**
     * 在 return、throw、continue 和 break 语句之后不应该继续出现任何代码
     */
    "no-unreachable": "error",

    /**
     * TODO
     * 禁止在 finally 语句块中出现控制流语句
     */
    "no-unreachable-loop": ["error", { ignore: [] }],

    /**
     * 禁止对关系运算符的左操作数使用否定操作符
     */
    "no-unsafe-finally": "error",

    /**
     * 禁止对关系运算符的左操作数使用否定操作符
     */
    "no-unsafe-negation": "error",

    /**
     * TODO
     * 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
     */
    "require-atomic-updates": "off",

    /**
     * 要求使用 isNaN() 检查 NaN
     */
    "use-isnan": "error",

    /**
     * 强制 typeof 表达式与有效的字符串进行比较
     */
    "valid-typeof": ["error", { requireStringLiterals: true }],
  },
};
