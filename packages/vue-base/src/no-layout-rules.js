module.exports = {
  rules: {
    // 在数组开括号后和闭括号前强制换行, 如果数组元素内或元素间有换行，则要求换行
    // https://cn.eslint.org/docs/rules/array-bracket-newline
    "vue/array-bracket-newline": ["warn", { multiline: true }],
    // https://cn.eslint.org/docs/rules/array-bracket-spacing
    // 在数组括号内使用一个或多个空格、或折行
    "vue/array-bracket-spacing": ["warn", "never"],
    // https://cn.eslint.org/docs/rules/arrow-spacing
    //  在箭头函数的箭头前后都需要有空格
    "vue/arrow-spacing": ["error", { before: true, after: true }],
    // https://cn.eslint.org/docs/rules/block-spacing
    // 强制在代码块中开括号前和闭括号后有空格
    "vue/block-spacing": ["error", "always"],
    // https://cn.eslint.org/docs/rules/brace-style
    // 将大括号放在控制语句或声明语句同一行的位置
    "vue/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true },
    ],
    // https://cn.eslint.org/docs/rules/comma-spacing
    // 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
    "vue/comma-spacing": ["error", { before: false, after: true }],
    // https://cn.eslint.org/docs/rules/comma-style
    // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    "vue/comma-style": [
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
    //  https://cn.eslint.org/docs/rules/dot-location
    // 如果成员表达式中的点操作符需要换行，那么表达式中的点号操作符应该和属性在同一行
    "vue/dot-location": ["error", "property"],
    //  https://cn.eslint.org/docs/rules/func-call-spacing
    // 在函数名和开括号之间不需要存在空格
    "vue/func-call-spacing": ["error", "never"],
    // 在关键字前后至少有一个空格，return、throw、case 后面至少有一个空格
    // https://cn.eslint.org/docs/rules/keyword-spacing
    "vue/keyword-spacing": [
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
    // https://cn.eslint.org/docs/rules/max-len
    // 单行最大100个字符
    "vue/max-len": [
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
    // https://cn.eslint.org/docs/rules/no-extra-parens
    // 不必要的括号需要酌情使用
    "vue/no-extra-parens": [
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
    // https://cn.eslint.org/docs/rules/no-sparse-arrays
    // 避免不必要的稀疏数组的使用
    "vue/no-sparse-arrays": "warn",
    // https://cn.eslint.org/docs/rules/no-useless-concat
    // 避免没有必要的字符拼接
    "vue/no-useless-concat": "warn",
    // https://cn.eslint.org/docs/rules/object-curly-newline
    "vue/object-curly-newline": ["warn", { multiline: true }],
    // https://cn.eslint.org/docs/rules/object-curly-spacing
    // 在花括号中需要留有一个空格
    "vue/object-curly-spacing": ["warn", "always"],
    // https://cn.eslint.org/docs/rules/object-property-newline
    // 如果所有属性不在同一行，则所有属性都需要换行
    "vue/object-property-newline": ["warn", { allowAllPropertiesOnSameLine: false }],
    // https://cn.eslint.org/docs/rules/operator-linebreak
    // 操作符需要使用一致的换行符风格
    "vue/operator-linebreak": [
      "warn",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    // https://cn.eslint.org/docs/rules/prefer-template
    // 使用模板字符串代替字符串的拼接
    "vue/prefer-template": "warn",
    // https://cn.eslint.org/docs/rules/space-in-parens
    // 圆括号内的不需要留有空格
    "vue/space-in-parens": ["warn", "never"],
    // https://cn.eslint.org/docs/rules/space-infix-ops
    // 要求中缀操作符前后有空格
    "vue/space-infix-ops": ["warn", { int32Hint: true }],
    // https://cn.eslint.org/docs/rules/space-unary-ops
    // 在 单词类一元操作符 后面需要留有一个空格，在符号类的一元操作符后面，不需要留有空格
    "vue/space-unary-ops": [
      "warn",
      {
        words: true,
        nonwords: false,
      },
    ],
    // https://cn.eslint.org/docs/rules/template-curly-spacing
    // 在模板字符串的花括号内需要留有空格
    "vue/template-curly-spacing": ["warn", "always"],
    "vue/v-for-delimiter-style": "off",
  },
};
