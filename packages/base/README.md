![](https://img.shields.io/npm/v/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/dt/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/l/express.svg)


# eslint-config-base
此规则是参考[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)实现的。


## 使用

### 下载

```bash
# npm
npm install @charrue/eslint-config-base
```

### 配置

使用`.eslintrc.js`进行规则配置
```js
module.exports = {
  root: true,
  extends: [
    '@charrue/base',
  ],
  rules: {
    // override/add rules settings
  }
}
```

### 配置
### Best Practices

| 规则名称 | 规则描述 |
|---|---|
| accessor-pairs | 不要求 getter/setter需要成对出现在对象中 |
| array-callback-return | 数组方法的回调函数中需要有 return 语句 |
| block-scoped-var | 需要把变量的使用限制在其定义的作用域范围内 |
| class-methods-use-this | 如果类中的方法没有使用this，则可以替换为静态方法使用 |
| complexity | 对代码的圈复杂度无限制 |
| consistent-return | 使用一致的 return 语句，不要有的返回了值，有的不返回值 |
| curly | 只有在代码块只有一个语句时，可以不使用大括号，在多行就必须使用大括号 |
| default-case | 要求 Switch 语句中有 Default 分支 |
| dot-location | 如果成员表达式中的点操作符需要换行，那么表达式中的点号操作符应该和属性在同一行 |
| dot-notation | 尽可能使用点号 (foo.bar)来访问属性，而不是使用方括号 (foo["bar"]) |
| eqeqeq | 用类型安全的 === 和 !== 操作符代替 == 和 != 操作符 |
| guard-for-in | 使用for-in时，需要判断属性是否在原型上(hasOwnProperty)，方式使用继承到的属性 |
| max-classes-per-file | 一个文件中最多定义1个类 |
| no-alert | 禁用 alert、confirm 和 prompt |
| no-caller | 禁用 arguments.caller 或 arguments.callee |
| no-case-declarations | 禁止在 case 或 default 子句中出现词法声明<br/>该规则旨在避免访问未经初始化的词法绑定以及跨 case 语句访问被提升的函数 |
| no-div-regex | 禁止除法操作符显式的出现在正则表达式开始的位置 |
| no-else-return | 禁止 if 语句中 return 语句之后有 else 块 |
| no-empty-function | 禁止出现空函数，除了箭头函数、常规函数、类方法和对象的方法简写 |
| no-empty-pattern | 禁止使用空解构模式 |
| no-eq-null | 对null进行比较时，最好使用===、!==，但是==或!=也是允许的 |
| no-eval | 禁用 eval() |
| no-extend-native | 禁止扩展原生类型 |
| no-extra-bind | 禁止不必要的 .bind() 调用 |
| no-extra-label | 禁用不必要的`label` |
| no-fallthrough | 每个 case 语句 都需要break或return |
| no-floating-decimal | 对于浮点数，小数点之前或之后，都需要有一个数字 |
| no-global-assign | 禁止对原生对象或只读的全局对象进行赋值 |
| no-implicit-coercion | 禁止使用除了!!之外的短符号进行类型转换 |
| no-implicit-globals | 不限制是否在全局范围内使用变量或函数声明 |
| no-implied-eval | 禁止使用类似 eval() 的方法 |
| no-invalid-this | 允许 this 关键字出现在类和类对象之外 |
| no-iterator | 禁用 __iterator__ 属性 |
| no-lone-blocks | 禁用不必要的嵌套块 |
| no-loop-func | 禁止在循环语句中出现包含不安全引用的函数声明 |
| no-magic-numbers | 代码中的没有明确含义的数字，最好有命名常量替代<br/>与airbnb不同 |
| no-multi-spaces | 禁止使用多个空格 |
| no-multi-str | 禁止使用多行字符串(在 JavaScript 中，可以在新行之前使用斜线创建多行字符串) |
| no-new | 通过禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量 |
| no-new-func | 禁止对 Function 对象使用 new 操作符 |
| no-new-wrappers | 禁止对 String，Number 和 Boolean 使用 new 操作符 |
| no-octal | 禁用八进制字面量 |
| no-octal-escape | 禁止在字符串中使用八进制转义序列 |
| no-param-reassign | 禁止对函数参数再赋值 |
| no-proto | 禁用 __proto__ 属性 |
| no-redeclare | 禁止多次声明同一变量 |
| no-restricted-properties | 禁止使用对象的某些属性 |
| no-return-assign | 禁止在 return 语句中使用赋值语句 |
| no-return-await | 禁用不必要的 return await |
| no-script-url | 禁止使用 `javascript: url`(javascript:void(0)) |
| no-self-assign | 禁止自我赋值 |
| no-self-compare | 禁止自身比较 |
| no-sequences | 禁用将逗号作为操作符使用 |
| no-throw-literal | 禁止抛出异常字面量 |
| no-unmodified-loop-condition | 禁用一成不变的循环条件 |
| no-unused-expressions | 禁止出现未使用过的表达式 |
| no-unused-labels | 禁用出现未使用过的label |
| no-useless-call | 禁止不必要的 .call() 和 .apply() |
| no-useless-catch | 禁止不必要的 catch 子句 |
| no-useless-concat | 禁止不必要的字符串字面量或模板字面量的连接 |
| no-useless-escape | 禁用不必要的转义字符 |
| no-useless-return | 禁止多余的 return 语句 |
| no-void | 禁用 void 操作符 |
| no-warning-comments | 可以在注释中使用特定的警告术语 |
| no-with | 禁用 with 语句 |
| prefer-named-capture-group | 建议在正则表达式中使用命名捕获组 |
| prefer-promise-reject-errors | 要求使用 Error 对象作为 Promise 拒绝的原因 |
| radix | 强制在 parseInt() 使用基数参数 |
| require-await | 禁止使用不带 await 表达式的 async 函数 |
| require-unicode-regexp | 强制在 RegExp 上使用 u 标志 |
| vars-on-top | 要求所有的 var 声明出现在它们所在的作用域顶部 |
| wrap-iife | 要求 IIFE 使用括号括起来 |
| yoda | 不允许出现条件判断中字面量在先而变量在第二的情况(if ("red" === color)) |
<br/>
### Es6

| 规则名称 | 规则描述 |
|---|---|
| arrow-body-style | 要求箭头函数体使用大括号，并显示返回对象字面量<br/>与airbnb不同 |
| arrow-parens | 箭头函数的参数需要使用圆括号 |
| arrow-spacing | 在箭头函数的箭头前后都需要有空格 |
| constructor-super | 要求在构造函数中有 super() 的调用 |
| generator-star-spacing | generator 函数中 * 号 前面不要有空格，后面需要加上空格 |
| no-class-assign | 不允许修改类声明的变量 |
| no-confusing-arrow | 禁止在可能与比较操作符相混淆的地方使用箭头函数 |
| no-const-assign | 禁止修改 const 声明的变量 |
| no-dupe-class-members | 禁止类成员中出现重复的名称 |
| no-duplicate-imports | 禁止重复模块导入 |
| no-new-symbol | 禁止 Symbolnew 操作符和 new 一起使用 |
| no-restricted-imports | 对import的使用没有限制 |
| no-this-before-super | 禁止在构造函数中，在调用 super() 之前使用 this 或 super |
| no-useless-computed-key | 禁止在对象中使用不必要的计算属性 |
| no-useless-constructor | 禁用不必要的构造函数<br/>ES2015 会为没有指定构造函数的类提供了默认构造函数 |
| no-useless-rename | 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 |
| no-var | 要求使用 let 或 const 而不是 var |
| object-shorthand | 要求对象字面量中方法和属性使用简写语法 |
| prefer-arrow-callback | 回调函数使用箭头函数，不能使用命名函数 |
| prefer-const | 要求使用 const 声明那些声明后不再被修改的变量 |
| prefer-destructuring | 变量声明时，优先使用对象解构赋值(如果变量名与键名同名)<br/>赋值表达式中，优先使用数组解构赋值 |
| prefer-numeric-literals | 对于二进制，八进制和十六进制，优先使用字面量声明，而是不是使用parseInt() 和 Number.parseInt()来转换 |
| prefer-rest-params | 要求使用剩余参数而不是 arguments |
| prefer-spread | 建议使用扩展语法而非.apply() |
| prefer-template | 要求使用模板字面量而非字符串连接 |
| require-yield | generator函数内需要使用`yield`关键字 |
| rest-spread-spacing | 要求 generator 函数内有 yield |
| sort-imports | 无需对import进行排序 |
| symbol-description | 使用Symbol时需要传入描述参数 |
| template-curly-spacing | 模板字符串中不要在花括号左右加上空格 |
| yield-star-spacing | 需要在 yield* 表达式中 `*` 周围使用空格 |
<br/>
### Node

| 规则名称 | 规则描述 |
|---|---|
| callback-return | 不强制返回callback函数 |
| global-require | 要求 require() 出现在顶层模块作用域中 |
| handle-callback-err | 不强制回调错误处理 |
| no-buffer-constructor | 禁用 Buffer() 构造函数 |
| no-mixed-requires | 对require的使用没有限制 |
| no-new-require | 禁止调用 require 时使用 new 操作符 |
| no-path-concat | 禁止对 __dirname 和 __filename 进行字符串连接 |
| no-process-env | 不限制使用process.env |
| no-process-exit | 不限制使用process.exit() |
| no-restricted-modules | 不会限制任何模块的使用 |
| no-sync | 不限制同步方法的使用 |
<br/>
### Possible Errors

| 规则名称 | 规则描述 |
|---|---|
| for-direction | for循环需要有一个终止条件 |
| getter-return | getter 函数中需要出现 return 语句 |
| no-async-promise-executor | 禁止使用异步函数作为 Promise executor |
| no-await-in-loop | 禁止在循环中出现 await<br/>应该重构为Promise.all |
| no-compare-neg-zero | 禁止与 -0 进行比较 |
| no-cond-assign | 禁止条件表达式中出现赋值操作符 |
| no-console | 禁用 console |
| no-constant-condition | 禁止在条件判断中使用常量表达式 |
| no-control-regex | TODO<br/>禁止在正则表达式中使用控制字符 |
| no-debugger | 禁用 debugger |
| no-dupe-args | 禁止 function 定义中出现重名参数 |
| no-dupe-keys | 禁止对象字面量中出现重复的 key |
| no-duplicate-case | 禁止出现重复的 case 标签 |
| no-empty | 禁止出现空语句块 |
| no-empty-character-class | 禁止在正则表达式中使用空字符集 |
| no-ex-assign | 禁止对 catch 子句的参数重新赋值 |
| no-extra-boolean-cast | 禁止不必要的布尔转换 |
| no-extra-parens | 禁止不必要的括号 |
| no-extra-semi | 禁止不必要的分号 |
| no-func-assign | 禁止对 function 声明重新赋值 |
| no-inner-declarations | 禁止在嵌套的块中出现变量声明或 function 声明 |
| no-invalid-regexp | 禁止 RegExp 构造函数中存在无效的正则表达式字符串 |
| no-irregular-whitespace | 禁止不规则的空白 |
| no-misleading-character-class | 不允许在字符类语法中出现由多个代码点组成的字符 |
| no-obj-calls | 禁止把全局对象作为函数调用 |
| no-prototype-builtins | 禁止直接调用 Object.prototypes 的内置属性 |
| no-regex-spaces | 禁止正则表达式字面量中出现多个空格 |
| no-sparse-arrays | 禁用稀疏数组 |
| no-template-curly-in-string | 禁止在常规字符串中出现模板字面量占位符语法 |
| no-unreachable | 在 return、throw、continue 和 break 语句之后不应该继续出现任何代码 |
| no-unreachable-loop | 禁止带有仅允许一次迭代的主体的循环(for循环一次后就break了) |
| no-unsafe-finally | 禁止对关系运算符的左操作数使用否定操作符 |
| no-unsafe-negation | 禁止对关系运算符的左操作数使用否定操作符 |
| require-atomic-updates | 不要把awaited Promise直接作为值来使用，需要把他赋值给其他的变量后再使用 |
| use-isnan | 要求使用 isNaN() 检查 NaN |
| valid-typeof | 强制 typeof 表达式与有效的字符串进行比较 |
<br/>
### Stylistic

| 规则名称 | 规则描述 |
|---|---|
| array-bracket-newline | 如果数组元素内或元素间有换行，则要求换行<br/>与airbnb不同 |
| array-bracket-spacing | 在数组括号内使用一个或多个空格、或折行<br/>如果数组内只有一个元素，则两侧方括号需要留有空格<br/>如果数组两侧的方括号，与数组内的数组相邻(即`[ [` 或 `] ]`)，则两侧方括号需要留有空格<br/>与airbnb不同 |
| array-element-newline | 如果数组元素中间有换行，则要求全部换行<br/>与airbnb不同 |
| block-spacing | 要求在代码块中左花括号后面和右花括号前面，留有空格 |
| brace-style | 需要将大括号放在控制语句或声明语句同一行的位置 |
| camelcase | 不检查属性名称的骆驼拼,不检查解构标识符的骆驼拼写 |
| capitalized-comments | 对注释的首字母大小写没有任何的限制 |
| comma-dangle | 对于数组、对象、ES模块的import声明、export声明、函数声明都需要加上拖尾逗号 |
| comma-spacing | 禁止在逗号前使用空格,要求在逗号后使用一个或多个空格 |
| comma-style | 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行 |
| computed-property-spacing | 禁止在计算属性(`obj[prop]`)中使用空格 |
| consistent-this | 可以使用this别名 |
| eol-last | 要求文件末尾留有换行 |
| func-call-spacing | 在函数名和开括号之间不需要存在空格 |
| func-name-matching | 函数名与赋值给它们的变量名或属性名不需要相匹配 |
| func-names | 函数表达式需要加上name |
| func-style | 对于函数的定义，需要使用函数表达式而不是函数声明<br/>与airbnb不同 |
| function-paren-newline | 要求在函数括号的参数，使用一致的换行<br/>如果函数括号内只有一个参数，则禁止换行<br/>与airbnb不同 |
| id-blacklist | 不会禁用特定的标识符(变量命名) |
| id-length | 不会限制标识符命名长度 |
| id-match | 对标识符命名无特殊格式要求 |
| implicit-arrow-linebreak | 要求在箭头函数体之前出现换行 |
| indent | 使用2个空格的缩进 |
| jsx-quotes | 强制所有不包含双引号的 JSX 属性值使用双引号 |
| key-spacing | 对象字面量的键名和`:`之间不要存在空格<br/>在对象字面量的值和`:`之间需要留有一个空格 |
| keyword-spacing | 在关键字的前后至少有一个空格<br/>return、throw、case 后面至少有一个空格 |
| line-comment-position | 行注释的位置可以在代码上方，也可以在代码行后面 |
| linebreak-style | 对换行符使用`LF`还是`CRLF`没有要求<br/>与airbnb不同 |
| lines-around-comment | 对注释周围是否要有空行没有要求 |
| lines-between-class-members | 类的方法之间需要留有一个空行 |
| max-depth | 块语句的最大可嵌套深度为4层 |
| max-len | 单行最多有100个字符 |
| max-lines | 忽略空行与注释，一个文件最多只能有700行<br/>与airbnb不同 |
| max-lines-per-function | 对函数的行数不限制 |
| max-nested-callbacks | 对回调函数最大嵌套深度无限制 |
| max-params | 函数定义中最大参数个数为5个 |
| max-statements | 一个函数体内最多只能存在20个变量声明<br/>与airbnb不同 |
| max-statements-per-line | 一行最多定义一个语句 |
| multiline-comment-style | 不要求在块级注释的前必须携带`*` |
| multiline-ternary | 三元表达式要么都在同一行，要么在三元操作数之间进行换行<br/>与airbnb不同 |
| new-cap | 要求构造函数首字母大写 |
| new-parens | 调用无参构造函数时需要带括号 |
| newline-per-chained-call | 方法链中如果调用数量超过了4个，就需要换行 |
| no-array-constructor | 禁止使用Array构造函数 |
| no-bitwise | 禁止使用按位操作符 |
| no-continue | 禁止使用continue 语句 |
| no-inline-comments | 可以使用内联注释 |
| no-lonely-if | 如果 if 语句作为唯一的语句出现在 else 语句块中，往往使用 else if 形式会使代码更清晰 |
| no-mixed-operators | 不同的操作符混合使用时使用括号进行包裹 |
| no-mixed-spaces-and-tabs | 禁止使用 空格 和 tab 混合缩进 |
| no-multi-assign | 禁止连续赋值 |
| no-multiple-empty-lines | 最多连续空两行 |
| no-negated-condition | 可以使用否定的表达式 |
| no-nested-ternary | 不要使用嵌套的三元表达式 |
| no-new-object | 禁止使用 Object 构造函数 |
| no-plusplus | 不允许使用 一元操作符 ++ 和 --<br/>可以使用`i += n`代替 |
| no-restricted-syntax | 禁用 for in、for of、label、with语法 |
| no-tabs | 不允许使用tab |
| no-ternary | 对三元操作符的使用无限制 |
| no-trailing-spaces | 禁止在空行使用空白符，禁止在注释块中使用空白符 |
| no-underscore-dangle | 禁止标识符中有悬空下划线(_foo) |
| no-unneeded-ternary | 尽量使用更简单的结构来代替三元操作符 |
| no-whitespace-before-property | 不允许在对象的点号(foo. bar)周围，或对象属性(foo [bar])之前的左括号前出现空白 |
| nonblock-statement-body-position | 禁止单行语句之前有换行(if (foo) bar();) |
| object-curly-newline | 在花括号内需要使用一致的换行 |
| object-curly-spacing | 花括号之间需要有空格 |
| object-property-newline | 不能把对象的属性声明在同一行中 |
| one-var | 不能用一个关键字，声明多个变量 |
| one-var-declaration-per-line | 每声明一个变量就需要换行 |
| operator-assignment | 需要尽可能地简化赋值操作 |
| operator-linebreak | 当语句太长需要换行时，换行符放在操作符前面 |
| padded-blocks | 在块语句和类的开始和末尾，不要出现空行 |
| padding-line-between-statements | 对是否要在语句中需要填充空行无限制 |
| prefer-object-spread | 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展 |
| quote-props | 对象字面量属性名称不要使用引号 |
| quotes | 使用双引号 |
| semi | 在语句末尾需要使用分号 |
| semi-spacing | 分号前后不能有空格 |
| semi-style | 在行尾使用分号，而不是在行首 |
| sort-keys | 无需对对象属性进行排序 |
| sort-vars | 无需对声明的变量进行排序 |
| space-before-blocks | 语句块之前需要加一个空格 |
| space-before-function-paren | 函数圆括号之前需要有一个空格 |
| space-in-parens | 圆括号内不需要存在空格 |
| space-infix-ops | 运算符周围需要有空格 |
| space-unary-ops | 在一元操作符之前或之后需要存在空格 |
| spaced-comment | 在注释 // 或 /* 后需要加一个空格 |
| switch-colon-spacing | 在switch的右侧需要加一个空格 |
| template-tag-spacing | 禁止在一个标记的函数和它的模板字面量之间有空格 |
| unicode-bom | 文件不能以 Unicode BOM 开头 |
<br/>
### Variables

| 规则名称 | 规则描述 |
|---|---|
| init-declarations | 禁止使用var声明变量 |
| no-delete-var | 禁止delete 操作符的使用 |
| no-label-var | 同一作用域下，不允许标签与变量同名 |
| no-restricted-globals | 全局范围内禁用`isFinite`和`isNaN` |
| no-shadow | 局部变量不能覆盖全局变量，即不能重名 |
| no-shadow-restricted-names | 变量命名不能和关键字同名 |
| no-undef | 禁用未声明的变量 |
| no-undef-init | 禁止将变量初始化为 undefined |
| no-undefined | 禁止将 undefined 作为标识符 |
| no-unused-vars | 禁止出现未使用过的变量 |
| no-use-before-define | 禁止在变量定义之前使用它们 |
<br/>
