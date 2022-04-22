module.exports = {
  rules: {

    /**
     * 如果数组元素内或元素间有换行，则要求换行
     * 与airbnb不同
     */
    "array-bracket-newline": ["warn", { multiline: true }],

    /**
     * 在数组括号内使用一个或多个空格、或折行
     * 如果数组内只有一个元素，则两侧方括号需要留有空格
     * 如果数组两侧的方括号，与数组内的数组相邻(即`[ [` 或 `] ]`)，则两侧方括号需要留有空格
     * 与airbnb不同
     */
    "array-bracket-spacing": ["warn", "never", { arraysInArrays: true, singleValue: true }],

    /**
     * 如果数组元素中间有换行，则要求全部换行
     * 与airbnb不同
     */
    "array-element-newline": ["warn", "consistent", { multiline: true }],

    /**
     * 要求在代码块中左花括号后面和右花括号前面，留有空格
     */
    "block-spacing": ["error", "always"],

    /**
     * 需要将大括号放在控制语句或声明语句同一行的位置
     */
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],

    /**
     * 不检查属性名称的骆驼拼,不检查解构标识符的骆驼拼写
     */
    camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

    /**
     * 对注释的首字母大小写没有任何的限制
     */
    "capitalized-comments": [
      "off",
      "never",
      {
        line: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    /**
     * 对于数组、对象、ES模块的import声明、export声明、函数声明都需要加上拖尾逗号
     */
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],

    /**
     * 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
     */
    "comma-spacing": ["error", { before: false, after: true }],

    /**
     * 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
     */
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    /**
     * 禁止在计算属性(`obj[prop]`)中使用空格
     */
    "computed-property-spacing": ["error", "never"],

    /**
     * 可以使用this别名
     */
    "consistent-this": "off",

    /**
     * 要求文件末尾留有换行
     */
    "eol-last": ["error", "always"],

    /**
     * 在函数名和开括号之间不需要存在空格
     */
    "func-call-spacing": ["error", "never"],

    /**
     * 函数名与赋值给它们的变量名或属性名不需要相匹配
     */
    "func-name-matching": [
      "off",
      "always",
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    /**
     * 函数表达式需要加上name
     */
    "func-names": ["off", "as-needed"],

    /**
     * 对于函数的定义，需要使用函数表达式而不是函数声明
     * 与airbnb不同
     */
    "func-style": ["warn", "expression"],

    /**
     * 要求在函数括号的参数，使用一致的换行
     * 如果函数括号内只有一个参数，则禁止换行
     * 与airbnb不同
     */
    "function-paren-newline": ["error", "multiline"],

    /**
     * 不会禁用特定的标识符(变量命名)
     */
    "id-blacklist": "off",

    /**
     * 不会限制标识符命名长度
     */
    "id-length": "off",

    /**
     * 对标识符命名无特殊格式要求
     */
    "id-match": "off",

    /**
     * 要求在箭头函数体之前出现换行
     */
    "implicit-arrow-linebreak": ["error", "beside"],

    /**
     * 使用2个空格的缩进
     */
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,

        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,

        ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXFragment", "JSXOpeningFragment", "JSXClosingFragment", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
        ignoreComments: false,
      },
    ],

    /**
     * 强制所有不包含双引号的 JSX 属性值使用双引号
     */
    "jsx-quotes": ["error", "prefer-double"],

    /**
     * 对象字面量的键名和`:`之间不要存在空格
     * 在对象字面量的值和`:`之间需要留有一个空格
     */
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    /**
     * 在关键字的前后至少有一个空格
     * return、throw、case 后面至少有一个空格
     */
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    /**
     * 行注释的位置可以在代码上方，也可以在代码行后面
     */
    "line-comment-position": [
      "off",
      {
        position: "above",
        ignorePattern: "",
        applyDefaultPatterns: true,
      },
    ],
    /**
     * 对换行符使用`LF`还是`CRLF`没有要求
     * 与airbnb不同
     */
    "linebreak-style": "off",

    /**
     * 对注释周围是否要有空行没有要求
     */
    "lines-around-comment": [ "off" ],

    /**
     * 类的方法之间需要留有一个空行
     */
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],

    /**
     * 块语句的最大可嵌套深度为4层
     */
    "max-depth": ["off", 4],

    /**
     * 单行最多有100个字符
     */
    "max-len": [
      "error",
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    /**
     * 忽略空行与注释，一个文件最多只能有700行
     * 与airbnb不同
     */
    "max-lines": [
      "warn",
      {
        max: 700,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    /**
     * 对函数的行数不限制
     */
    "max-lines-per-function": [
      "off",
      {
        max: 100,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    /**
     * 对回调函数最大嵌套深度无限制
     */
    "max-nested-callbacks": "off",

    /**
     * 函数定义中最大参数个数为5个
     */
    "max-params": ["warn", { max: 5 }],

    /**
     * 一个函数体内最多只能存在20个变量声明
     * 与airbnb不同
     */
    "max-statements": ["warn", 20],

    /**
     * 一行最多定义一个语句
     */
    "max-statements-per-line": ["warn", { max: 1 }],

    /**
     * 不要求在块级注释的前必须携带`*`
     */
    "multiline-comment-style": ["off", "starred-block"],

    /**
     * 三元表达式要么都在同一行，要么在三元操作数之间进行换行
     * 与airbnb不同
     */
    "multiline-ternary": ["warn", "always-multiline"],

    /**
     * 要求构造函数首字母大写
     */
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
      },
    ],

    /**
     * 调用无参构造函数时需要带括号
     */
    "new-parens": "error",

    /**
     * 方法链中如果调用数量超过了4个，就需要换行
     */
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

    /**
     * 禁止使用Array构造函数
     */
    "no-array-constructor": "error",

    /**
     * 禁止使用按位操作符
     */
    "no-bitwise": "error",

    /**
     * 禁止使用continue 语句
     */
    "no-continue": "error",

    /**
     * 可以使用内联注释
     */
    "no-inline-comments": "off",

    /**
     * 如果 if 语句作为唯一的语句出现在 else 语句块中，往往使用 else if 形式会使代码更清晰
     */
    "no-lonely-if": "error",

    /**
     * 不同的操作符混合使用时使用括号进行包裹
     */
    "no-mixed-operators": [
      "error",
      {

        /*
         * the list of arithmetic groups disallows mixing `%` and `**`
         * with other arithmetic operators.
         */
        groups: [ ["%", "**"], ["%", "+"], ["%", "-"], ["%", "*"], ["%", "/"], ["/", "*"], ["&", "|", "<<", ">>", ">>>"], ["==", "!=", "===", "!=="], ["&&", "||"] ],
        allowSamePrecedence: false,
      },
    ],

    /**
     * 禁止使用 空格 和 tab 混合缩进
     */
    "no-mixed-spaces-and-tabs": "error",

    /**
     * 禁止连续赋值
     */
    "no-multi-assign": [ "error" ],

    /**
     * 最多连续空两行
     */
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

    /**
     * 可以使用否定的表达式
     */
    "no-negated-condition": "off",

    /**
     * 不要使用嵌套的三元表达式
     */
    "no-nested-ternary": "error",

    /**
     * 禁止使用 Object 构造函数
     */
    "no-new-object": "error",

    /**
     * 不允许使用 一元操作符 ++ 和 --
     * 可以使用`i += n`代替
     */
    "no-plusplus": "error",

    /**
     * 禁用 for in、for of、label、with语法
     */
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message: "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message: "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message: "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message: "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    /**
     * 不允许使用tab
     */
    "no-tabs": "error",

    /**
     * 对三元操作符的使用无限制
     */
    "no-ternary": "off",

    /**
     * 禁止在空行使用空白符，禁止在注释块中使用空白符
     */
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    /**
     * 禁止标识符中有悬空下划线(_foo)
     */
    "no-underscore-dangle": [
      "error",
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    /**
     * 尽量使用更简单的结构来代替三元操作符
     */
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    /**
     * 不允许在对象的点号(foo. bar)周围，或对象属性(foo [bar])之前的左括号前出现空白
     */
    "no-whitespace-before-property": "error",

    /**
     * 禁止单行语句之前有换行(if (foo) bar();)
     */
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

    /**
     * 在花括号内需要使用一致的换行
     */
    "object-curly-newline": [
      "error", {
        ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
        ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      },
    ],

    /**
     * 花括号之间需要有空格
     */
    "object-curly-spacing": ["error", "always"],

    /**
     * 不能把对象的属性声明在同一行中
     */
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],

    /**
     * 不能用一个关键字，声明多个变量
     */
    "one-var": ["error", "never"],

    /**
     * 每声明一个变量就需要换行
     */
    "one-var-declaration-per-line": ["error", "always"],

    /**
     * 需要尽可能地简化赋值操作
     */
    "operator-assignment": ["error", "always"],

    /**
     * 当语句太长需要换行时，换行符放在操作符前面
     */
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

    /**
     * 在块语句和类的开始和末尾，不要出现空行
     */
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "never",
        switches: "never",
      },
      { allowSingleLineBlocks: true },
    ],

    /**
     * 对是否要在语句中需要填充空行无限制
     */
    "padding-line-between-statements": [ "off" ],

    /**
     * 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展
     */
    "prefer-object-spread": "error",

    /**
     * 对象字面量属性名称不要使用引号
     */
    "quote-props": [
      "error",
      "as-needed",
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],

    /**
     * 使用双引号
     */
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],

    /**
     * 在语句末尾需要使用分号
     */
    semi: ["error", "always"],

    /**
     * 分号前后不能有空格
     */
    "semi-spacing": ["error", { before: false, after: false }],

    /**
     * 在行尾使用分号，而不是在行首
     */
    "semi-style": ["error", "last"],

    /**
     * 无需对对象属性进行排序
     */
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    /**
     * 无需对声明的变量进行排序
     */
    "sort-vars": "off",

    /**
     * 语句块之前需要加一个空格
     */
    "space-before-blocks": "error",

    /**
     * 函数圆括号之前需要有一个空格
     */
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],

    /**
     * 圆括号内不需要存在空格
     */
    "space-in-parens": ["error", "never"],

    /**
     * 运算符周围需要有空格
     */
    "space-infix-ops": "error",

    /**
     * 在一元操作符之前或之后需要存在空格
     */
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    /**
     * 在注释 // 或 /* 后需要加一个空格
     */
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"],
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
          balanced: true,
        },
      },
    ],

    /**
     * 在switch的右侧需要加一个空格
     */
    "switch-colon-spacing": ["error", { after: true, before: false }],

    /**
     * 禁止在一个标记的函数和它的模板字面量之间有空格
     */
    "template-tag-spacing": ["error", "never"],

    /**
     * 文件不能以 Unicode BOM 开头
     */
    "unicode-bom": ["error", "never"],

    "wrap-regex": "off",
  },
};
