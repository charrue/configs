const MAX_COMPLEXITY_NUM = 20;
const MAX_CLASS_NUM_PER_FILE = 1;

module.exports = {
  rules: {

    /**
     * 不要求 getter/setter需要成对出现在对象中
     */
    "accessor-pairs": "off",

    /**
     * 数组方法的回调函数中需要有 return 语句
     */
    "array-callback-return": ["error", { allowImplicit: true }],

    /**
     * 需要把变量的使用限制在其定义的作用域范围内
     */
    "block-scoped-var": "error",

    /**
     * 如果类中的方法没有使用this，则可以替换为静态方法使用
     */
    "class-methods-use-this": ["error", { exceptMethods: [] }],

    /**
     * 对代码的圈复杂度无限制
     */
    complexity: ["off", MAX_COMPLEXITY_NUM],

    /**
     * 使用一致的 return 语句，不要有的返回了值，有的不返回值
     */
    "consistent-return": "error",

    /**
     * 只有在代码块只有一个语句时，可以不使用大括号，在多行就必须使用大括号
     */
    curly: ["error", "multi-line"],

    /**
     * 要求 Switch 语句中有 Default 分支
     */
    "default-case": ["error", { commentPattern: "^no default$" }],

    /**
     * 如果成员表达式中的点操作符需要换行，那么表达式中的点号操作符应该和属性在同一行
     */
    "dot-location": ["error", "property"],

    /**
     * 尽可能使用点号 (foo.bar)来访问属性，而不是使用方括号 (foo["bar"])
     */
    "dot-notation": ["error", { allowKeywords: true }],

    /**
     * 用类型安全的 === 和 !== 操作符代替 == 和 != 操作符
     */
    eqeqeq: [
      "error",
      "always",
      { null: "ignore" },
    ],

    /**
     * 使用for-in时，需要判断属性是否在原型上(hasOwnProperty)，方式使用继承到的属性
     */
    "guard-for-in": "error",

    /**
     * 一个文件中最多定义1个类
     */
    "max-classes-per-file": ["error", MAX_CLASS_NUM_PER_FILE],

    /**
     * 禁用 alert、confirm 和 prompt
     */
    "no-alert": "warn",

    /**
     * 禁用 arguments.caller 或 arguments.callee
     */
    "no-caller": "error",

    /**
     * 禁止在 case 或 default 子句中出现词法声明
     * 该规则旨在避免访问未经初始化的词法绑定以及跨 case 语句访问被提升的函数
     */
    "no-case-declarations": "error",

    /**
     * 禁止除法操作符显式的出现在正则表达式开始的位置
     */
    "no-div-regex": "off",

    /**
     * 禁止 if 语句中 return 语句之后有 else 块
     */
    "no-else-return": ["error", { allowElseIf: false }],

    /**
     * 禁止出现空函数，除了箭头函数、常规函数、类方法和对象的方法简写
     */
    "no-empty-function": [
      "error",
      {
        allow: [
          "arrowFunctions",
          "functions",
          "methods",
        ],
      },
    ],

    /**
     * 禁止使用空解构模式
     */
    "no-empty-pattern": "error",

    /**
     * 对null进行比较时，最好使用===、!==，但是==或!=也是允许的
     */
    "no-eq-null": "off",

    /**
     * 禁用 eval()
     */
    "no-eval": "error",

    /**
     * 禁止扩展原生类型
     */
    "no-extend-native": "error",

    /**
     * 禁止不必要的 .bind() 调用
     */
    "no-extra-bind": "error",

    /**
     * 禁用不必要的`label`
     */
    "no-extra-label": "error",

    /**
     * 每个 case 语句 都需要break或return
     */
    "no-fallthrough": "error",

    /**
     * 对于浮点数，小数点之前或之后，都需要有一个数字
     */
    "no-floating-decimal": "error",

    /**
     * 禁止对原生对象或只读的全局对象进行赋值
     */
    "no-global-assign": ["error", { exceptions: [] }],

    /**
     * 禁止使用除了!!之外的短符号进行类型转换
     */
    "no-implicit-coercion": [
      "off",
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    /**
     * 不限制是否在全局范围内使用变量或函数声明
     */
    "no-implicit-globals": "off",

    /**
     * 禁止使用类似 eval() 的方法
     */
    "no-implied-eval": "error",

    /**
     * 允许 this 关键字出现在类和类对象之外
     */
    "no-invalid-this": "off",

    /**
     * 禁用 __iterator__ 属性
     */
    "no-iterator": "error",

    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

    /**
     * 禁用不必要的嵌套块
     */
    "no-lone-blocks": "error",

    /**
     * 禁止在循环语句中出现包含不安全引用的函数声明
     */
    "no-loop-func": "error",

    /**
     * 代码中的没有明确含义的数字，最好有命名常量替代
     * 与airbnb不同
     */
    "no-magic-numbers": [
      "warn",
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    /**
     * 禁止使用多个空格
     */
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],

    /**
     * 禁止使用多行字符串(在 JavaScript 中，可以在新行之前使用斜线创建多行字符串)
     */
    "no-multi-str": "error",

    /**
     * 通过禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
     */
    "no-new": "error",

    /**
     * 禁止对 Function 对象使用 new 操作符
     */
    "no-new-func": "error",

    /**
     * 禁止对 String，Number 和 Boolean 使用 new 操作符
     */
    "no-new-wrappers": "error",

    /**
     * 禁用八进制字面量
     */
    "no-octal": "error",

    /**
     * 禁止在字符串中使用八进制转义序列
     */
    "no-octal-escape": "error",

    /**
     * 禁止对函数参数再赋值
     */
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "e",
          "ctx",
          "context",
          "req",
          "request",
          "res",
          "response",
          "staticContext",
        ],
      },
    ],

    /**
     * 禁用 __proto__ 属性
     */
    "no-proto": "error",

    /**
     * 禁止多次声明同一变量
     */
    "no-redeclare": "error",

    /**
     * 禁止使用对象的某些属性
     */
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        object: "global",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "self",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "window",
        property: "isFinite",
        message: "Please use Number.isFinite instead",
      },
      {
        object: "global",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "self",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        object: "window",
        property: "isNaN",
        message: "Please use Number.isNaN instead",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "Math",
        property: "pow",
        message: "Use the exponentiation operator (**) instead.",
      },
    ],

    /**
     * 禁止在 return 语句中使用赋值语句
     */
    "no-return-assign": ["error", "always"],

    /**
     * 禁用不必要的 return await
     */
    "no-return-await": "error",

    /**
     * 禁止使用 `javascript: url`(javascript:void(0))
     */
    "no-script-url": "error",

    /**
     * 禁止自我赋值
     */
    "no-self-assign": ["error", { props: true }],

    /**
     * 禁止自身比较
     */
    "no-self-compare": "error",

    /**
     * 禁用将逗号作为操作符使用
     */
    "no-sequences": "error",

    /**
     * 禁止抛出异常字面量
     */
    "no-throw-literal": "error",

    /**
     * 禁用一成不变的循环条件
     */
    "no-unmodified-loop-condition": "warn",

    /**
     * 禁止出现未使用过的表达式
     */
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    /**
     * 禁用出现未使用过的label
     */
    "no-unused-labels": "error",

    /**
     * 禁止不必要的 .call() 和 .apply()
     */
    "no-useless-call": "off",

    /**
     * 禁止不必要的 catch 子句
     */
    "no-useless-catch": "error",

    /**
     * 禁止不必要的字符串字面量或模板字面量的连接
     */
    "no-useless-concat": "warn",

    /**
     * 禁用不必要的转义字符
     */
    "no-useless-escape": "error",

    /**
     * 禁止多余的 return 语句
     */
    "no-useless-return": "error",

    /**
     * 禁用 void 操作符
     */
    "no-void": "error",

    /**
     * 可以在注释中使用特定的警告术语
     */
    "no-warning-comments": [
      "off",
      {
        terms: ["todo", "fixme"],
        location: "start",
      },
    ],

    /**
     * 禁用 with 语句
     */
    "no-with": "error",

    /**
     * 建议在正则表达式中使用命名捕获组
     */
    "prefer-named-capture-group": "off",

    /**
     * 要求使用 Error 对象作为 Promise 拒绝的原因
     */
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

    /**
     * 强制在 parseInt() 使用基数参数
     */
    radix: "error",

    /**
     * 禁止使用不带 await 表达式的 async 函数
     */
    "require-await": "warn",

    /**
     * 强制在 RegExp 上使用 u 标志
     */
    "require-unicode-regexp": "off",

    /**
     * 要求所有的 var 声明出现在它们所在的作用域顶部
     */
    "vars-on-top": "error",

    /**
     * 要求 IIFE 使用括号括起来
     */
    "wrap-iife": [
      "error",
      "outside",
      { functionPrototypeMethods: false },
    ],

    /**
     * 不允许出现条件判断中字面量在先而变量在第二的情况(if ("red" === color))
     */
    yoda: "error",
  },
};
