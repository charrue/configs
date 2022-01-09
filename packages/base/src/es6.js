const rules = {

  // TODO
  /**
   * 要求箭头函数体使用大括号，并显示返回对象字面量
   */
  "arrow-body-style": [
    "error",
    "as-needed",
    { requireReturnForObjectLiteral: true },
  ],

  /**
   * 箭头函数的参数需要使用圆括号
   */
  "arrow-parens": ["error", "always"],

  /**
   * 在箭头函数的箭头前后都需要有空格
   */
  "arrow-spacing": ["error", { before: true, after: true }],

  /**
   * 要求在构造函数中有 super() 的调用
   */
  "constructor-super": "error",

  /**
   * generator 函数中 * 号 前面不要有空格，后面需要加上空格
   */
  "generator-star-spacing": ["error", { before: false, after: true }],

  /**
   * 不允许修改类声明的变量
   */
  "no-class-assign": "error",

  /**
   * 禁止在可能与比较操作符相混淆的地方使用箭头函数
   */
  "no-confusing-arrow": ["error", { allowParens: true }],

  /**
   * 禁止修改 const 声明的变量
   */
  "no-const-assign": "error",

  /**
   * 禁止类成员中出现重复的名称
   */
  "no-dupe-class-members": "error",

  /**
   * 禁止重复模块导入
   */
  "no-duplicate-imports": "off",

  /**
   * 禁止 Symbolnew 操作符和 new 一起使用
   */
  "no-new-symbol": "error",

  /**
   * https://cn.eslint.org/docs/rules/no-restricted-imports
   * TODO
   */
  "no-restricted-imports": [
    "off",
    {
      paths: [],
      patterns: [],
    },
  ],

  /**
   * 禁止在构造函数中，在调用 super() 之前使用 this 或 super
   */
  "no-this-before-super": "error",

  /**
   * 禁止在对象中使用不必要的计算属性
   */
  "no-useless-computed-key": "error",

  /**
   * 禁用不必要的构造函数
   * ES2015 会为没有指定构造函数的类提供了默认构造函数
   */
  "no-useless-constructor": "error",

  /**
   * 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
   */
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  /**
   * 要求使用 let 或 const 而不是 var
   */
  "no-var": "error",

  /**
   * 要求对象字面量中方法和属性使用简写语法
   */
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  /**
   * 回调函数使用箭头函数，不能使用命名函数
   */
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  /**
   * 要求使用 const 声明那些声明后不再被修改的变量
   */
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: true,
    },
  ],

  /**
   * 变量声明时，优先使用对象解构赋值(如果变量名与键名同名)
   * 赋值表达式中，优先使用数组解构赋值
   */
  "prefer-destructuring": [
    "error",
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    { enforceForRenamedProperties: false },
  ],

  /**
   * 对于二进制，八进制和十六进制，优先使用字面量声明，而是不是使用parseInt() 和 Number.parseInt()来转换
   */
  "prefer-numeric-literals": "error",

  /**
   * 要求使用剩余参数而不是 arguments
   */
  "prefer-rest-params": "error",

  /**
   * 建议使用扩展语法而非.apply()
   */
  "prefer-spread": "error",

  /**
   * 要求使用模板字面量而非字符串连接
   */
  "prefer-template": "error",

  "require-yield": "error",

  /**
   * 要求 generator 函数内有 yield
   */
  "rest-spread-spacing": ["error", "never"],

  /**
   * 对于import的成员进行排序，忽略大小写
   * 1. import 没有输出绑定的模块
   * 2. import 所有输出绑定的成员
   * 3. import 多个成员
   * 4. import 单个成员
   */
  "sort-imports": [
    "off",
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [
        "none",
        "all",
        "multiple",
        "single",
      ],
    },
  ],

  /**
   * 使用Symbol时需要传入描述参数
   */
  "symbol-description": "error",

  /**
   * 模板字符串中不要在花括号左右加上空格
   */
  "template-curly-spacing": "error",

  /**
   * 强制在 yield* 表达式中 * 周围使用空格
   */
  "yield-star-spacing": ["error", "after"],
};

module.exports = {
  rules,
  env: {
    // 支持ES6全局变量
    es6: true,
  },
  parserOptions: {
    // 支持ES6语法，此设置不会自动启用ES6全局变量
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },
};
