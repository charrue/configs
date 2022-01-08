module.exports = {
  rules: {

    /**
     * 在数组开括号后和闭括号前强制换行
     * 如果数组元素内或元素间有换行，则要求换行
     * https://cn.eslint.org/docs/rules/array-bracket-newline
     */
    "array-bracket-newline": ["warn", { multiline: true }],

    /**
     * 在数组括号内使用一个或多个空格、或折行
     * https://cn.eslint.org/docs/rules/array-bracket-spacing
     */
    "array-bracket-spacing": ["warn", "never"],

    /**
     * https://cn.eslint.org/docs/rules/array-element-newline
     * 强制数组元素间出现换行
     * 只有在数组元素大于等于3个时候，才需要换行
     */
    "array-element-newline": ["warn", { multiline: true, minItems: 3 }],

    /**
     * 禁止或强制在代码块中开括号前和闭括号后有空格
     * https://cn.eslint.org/docs/rules/block-spacing
     */
    "block-spacing": ["error", "always"],

    /**
     * 大括号风格要求
     * https://cn.eslint.org/docs/rules/brace-style
     * 将大括号放在控制语句或声明语句同一行的位置
     */
    "brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true },
    ],

    /**
     * 要求使用骆驼拼写法
     * https://cn.eslint.org/docs/rules/camelcase
     * 不检查属性名称,不检查解构标识符
     */
    camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

    /**
     * 强制或禁止对注释的第一个字母大写
     * https://cn.eslint.org/docs/rules/capitalized-comments
     * 不会对大小写有任何的限制
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
     * 要求或禁止使用拖尾逗号
     * https://cn.eslint.org/docs/rules/comma-dangle
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
     * 强制在逗号周围使用空格
     * https://cn.eslint.org/docs/rules/comma-spacing
     * 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
     */
    "comma-spacing": ["error", { before: false, after: true }],

    /**
     * 逗号风格
     * https://cn.eslint.org/docs/rules/comma-style
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
     * 禁止或强制在计算属性中使用空格
     * https://cn.eslint.org/docs/rules/computed-property-spacing
     * 禁止在计算属性中使用空格
     */
    "computed-property-spacing": ["error", "never"],

    /**
     * 要求一致的 This
     * https://cn.eslint.org/docs/rules/consistent-this
     * 可以使用this别名
     */
    "consistent-this": "off",

    /**
     * 要求或禁止文件末尾保留一行空行
     * https://cn.eslint.org/docs/rules/eol-last
     * 要求文件末尾使用换行
     */
    "eol-last": ["error", "always"],

    /**
     * 要求或禁止在函数标识符和其调用之间有空格
     * https://cn.eslint.org/docs/rules/func-call-spacing
     * 在函数名和开括号之间不需要存在空格
     */
    "func-call-spacing": ["error", "never"],

    /**
     * 要求函数名与赋值给它们的变量名或属性名相匹配
     * https://cn.eslint.org/docs/rules/func-name-matching
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
     * 要求或禁止命名的 function 表达式
     * https://cn.eslint.org/docs/rules/func-names
     * 函数表达式需要加上name
     */
    "func-names": ["off", "as-needed"],

    /**
     * 强制 function 声明或表达式的一致性
     * https://cn.eslint.org/docs/rules/func-style
     * 要求使用函数表达式而不是函数声明
     */
    "func-style": ["off", "expression"],

    /**
     * TODO
     * 强制在函数括号内使用一致的换行
     * https://cn.eslint.org/docs/rules/function-paren-newline
     * 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错
     */
    "function-paren-newline": ["error", "consistent"],

    /**
     * 禁用指定的标识符
     */
    "id-blacklist": "off",

    /**
     * 强制标识符的最小和最大长度
     */
    "id-length": "off",

    /**
     * 要求标识符匹配一个指定的正则表达式
     */
    "id-match": "off",

    /**
     * 禁止在箭头函数体之前出现换行
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
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,

        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    /**
     * 强制所有不包含双引号的 JSX 属性值使用双引号
     */
    "jsx-quotes": ["error", "prefer-double"],

    /**
     * 对象字面量的键和冒号之间不要存在空格
     * 在对象字面量的冒号和值之间只存在有一个空格
     */
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    /**
     * 在关键字之前至少有一个空格
     * 要求在关键字之后至少有一个空格
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
     * 强制行注释只在代码上方，单独成行
     */
    "line-comment-position": [
      "off",
      {
        position: "above",
        ignorePattern: "",
        applyDefaultPatterns: true,
      },
    ],
    "linebreak-style": "off",

    /**
     * 在块级注释之前需要有一空行
     */
    "lines-around-comment": [
      "off",
      {
        beforeLineComment: false,
        beforeBlockComment: true,
      },
    ],

    /**
     * 要求在类成员之后有一行空行
     */
    "lines-between-class-members": ["warn", "always"],

    /**
     * 块语句的最大可嵌套深度为4层
     */
    "max-depth": ["off", 4],

    /**
     * 单行最大100个字符
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
     * 忽略空行与注释，一个文件最多500行
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
     * 忽略空行与注释，一个函数最多50行
     */
    "max-lines-per-function": [
      "warn",
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
     * 函数块中最多定义20个语句
     */
    "max-statements": ["warn", 20],

    /**
     * 一行最多定义一个语句
     */
    "max-statements-per-line": ["warn", { max: 1 }],

    /**
     * 块级注释的每行之前有一个 *
     */
    "multiline-comment-style": ["off", "starred-block"],

    /**
     * 三元表达式要么都在同一行，要么在三元操作数之间进行换行
     */
    "multiline-ternary": ["off", "always-multiline"],

    /**
     * 要求构造函数首字母大写
     */
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
      },
    ],

    /**
     * 调用无参构造函数时需要带括号
     */
    "new-parens": "error",

    /**
     * 方法链中如果调用数量超过了2个，就需要换行
     */
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],

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
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          [
            "&",
            "|",
            "<<",
            ">>",
            ">>>",
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
          ],
          ["&&", "||"],
        ],
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
    "no-multi-assign": ["error"],

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
     * 不限制使用 一元操作符 ++ 和 --
     */
    "no-plusplus": "off",

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

    "no-tabs": "error",

    "no-ternary": "off",

    /**
     * 禁止在空行使用空白符,禁止在注释块中使用空白符
     */
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    /**
     * 禁止标识符中有悬空下划线
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
     * 使用更简单的结构来代替三元操作符
     */
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],

    /**
     * 禁止属性前有空白
     */
    "no-whitespace-before-property": "error",

    /**
     * 禁止单行语句之前有换行
     */
    "nonblock-statement-body-position": [
      "error",
      "beside",
      { overrides: {} },
    ],

    // TODO
    "object-curly-newline": [
      "error",
      {
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
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

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
    "operator-linebreak": [
      "error",
      "before",
      { overrides: { "=": "none" } },
    ],

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
      {
        allowSingleLineBlocks: true,
      },
    ],

    /**
     * 在特定语句中需要填充空行
     */
    "padding-line-between-statements": ["off"],

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
      { keywords: false, unnecessary: true, numbers: false },
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

    "sort-keys": [
      "off",
      "asc",
      { caseSensitive: false, natural: true },
    ],

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
        overrides: {
        },
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
          markers: [
            "=",
            "!",
            "/",
          ],
        },
        block: {
          exceptions: ["-", "+"],
          markers: [
            "=",
            "!",
            ":",
            "::",
          ],
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
