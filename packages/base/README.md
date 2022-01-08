![](https://img.shields.io/npm/v/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/dt/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/l/express.svg)


# @charrue/eslint-base-config

此规则是参考[eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)实现的。



## 使用

### 下载

```bash
# npm
npm install @charrue/esling-config-base

# yarn
yarn add @charrue/esling-config-base

# pnpm
pnpm add @charrue/esling-config-base
```



### 配置

Use `.eslintrc.*` file to configure rules. 

Example **.eslintrc.js**:

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

## 规则

### Stylistic

| 规则                             | 说明                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| array-bracket-newline            | 在数组开括号后和闭括号前强制换行                             |
| array-bracket-spacing            | 在数组括号内使用一个或多个空格、或折行                       |
| array-element-newline            | 强制数组元素间出现换行<br />只有在数组元素大于等于3个时候，才需要换行 |
| block-spacing                    | 在代码块中开括号前和闭括号后有空格                           |
| brace-style                      | 大括号风格要求(将大括号放在控制语句或声明语句同一行)         |
| camelcase                        | 命名变量风格采用骆驼拼写法(不检查属性名称，对解构标识符强制使用驼峰风格) |
| comma-dangle                     | 使用拖尾逗号（对于数组、对象、ES模块的import声明、export声明、函数声明，当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，要求使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号） |
| comma-spacing                    | 强制在逗号周围使用空格(禁止在逗号前使用空格,要求在逗号后使用一个或多个空格) |
| comma-style                      | 逗号风格（要求逗号放在数组元素、对象属性或变量声明之后，且在同一行） |
| computed-property-spacing        | 禁止在计算的属性的方括号中使用空格                           |
| consistent-this                  | 可以使用this别名                                             |
| eol-last                         | 要求文件末尾使用换行                                         |
| func-call-spacing                | 在函数名和开括号之间不需要存在空格                           |
| func-name-matchin                | 函数名与赋值给它们的变量名或属性名不需要相匹配 该规则会忽略 module.exports 和 module["exports"]，但是会检测 Object.create、Object.defineProperty、Object.defineProperties 和 Reflect.defineProperty 的使用 |
| func-names                       | 函数表达式需要加上name                                       |
| func-style                       | 要求使用函数表达式而不是函数声明                             |
| function-paren-newline           | 要求每个括号使用一致的换行。如果一个括号有换行，另一个括号没有换行，则报错 |
| implicit-arrow-linebreak         | 禁止在箭头函数体之前出现换行                                 |
| indent                           | 使用2 个空格缩进                                             |
| jsx-quotes                       | 强制所有不包含双引号的 JSX 属性值使用双引号                  |
| key-spacing                      | 对象字面量的键和冒号之间不要存在空格 在对象字面量的冒号和值之间只存在有一个空格 |
| keyword-spacing                  | 在关键字之前、之后需要有一个空格 return、throw、case 后面至少有一个空格 |
| line-comment-position            | 强制行注释只在代码上方，单独成行                             |
| lines-around-comment             | 在块级注释之前需要有一空行                                   |
| lines-between-class-members      | 要求在类成员之后有一行空行                                   |
| multiline-comment-style          | 禁止使用连续的行注释来表示块注释。另外，要求块注释的每行之前有一个 * |
| max-depth                        | 块语句的最大可嵌套深度为4层                                  |
| max-len                          | 单行最大100个字符                                            |
| max-lines                        | 忽略空行与注释，一个文件最多500行                            |
| max-lines-per-function           | 忽略空行与注释，一个函数最多50行                             |
| max-nested-callbacks             | 对回调函数最大嵌套深度无限制                                 |
| max-params                       | 函数定义中最大参数个数为5个                                  |
| max-statements                   | 函数块中最多定义10个语句                                     |
| max-statements-per-line          | 一行最多定义一个语句                                         |
| multiline-comment-style          | 块级注释的每行之前有一个 *                                   |
| multiline-ternary                | 三元表达式要么都在同一行，要么在三元操作数之间进行换行       |
| new-cap                          | 要求构造函数首字母大写                                       |
| new-parens                       | 调用无参构造函数时需要带括号                                 |
| newline-per-chained-call         | 方法链中如果调用数量超过了2个，就需要换行                    |
| no-array-constructor             | 禁止使用Array构造函数                                        |
| no-bitwise                       | 禁止使用按位操作符                                           |
| no-continue                      | 禁止使用continue 语句                                        |
| no-inline-comments               | 可以在代码后使用内联注释                                     |
| no-lonely-if                     | 禁止 if 语句作为唯一语句出现在 else 语句块中 如果 if 语句作为唯一的语句出现在 else 语句块中，往往使用 else if 形式会使代码更清晰 |
| no-mixed-operators               | 不同的操作符混合使用时使用括号进行包裹                       |
| no-mixed-spaces-and-tabs         | 禁止使用 空格 和 tab 混合缩进                                |
| no-multi-assign                  | 禁止连续赋值                                                 |
| no-multiple-empty-lines          | 最多连续空两行                                               |
| no-trailing-spaces               | 行尾不要空白                                                 |
| no-unneeded-ternary              | 当有更简单的结构可以代替三元操作符时，该规则禁止使用三元操作符 |
| no-new-object                    | 禁止使用 Object 构造函数                                     |
| no-plusplus                      | 不限制使用 一元操作符 ++ 和 —                                |
| no-trailing-spaces               | 禁止在空行使用空白符,禁止在注释块中使用空白符                |
| no-underscore-dangle             | 禁止标识符中有悬空下划线                                     |
| no-unneeded-ternary              | 使用更简单的结构来代替三元操作符                             |
| no-whitespace-before-property    | 禁止属性前有空白                                             |
| nonblock-statement-body-position | 禁止单行语句之前有换行                                       |
| object-curly-newline             | 花括号内，如果属性多于4个，则需要换行                        |
| object-curly-spacing             | 花括号之间需要有空格                                         |
| object-property-newline          | 不能把对象的属性声明在同一行中                               |
| one-var                          | 不能用一个关键字，连续声明多个变量                           |
| one-var-declaration-per-line     | 每声明一个变量就需要换行                                     |
| operator-assignment              | 需要尽可能地简化赋值操作                                     |
| operator-linebreak               | 当语句太长需要换行时，换行符放在操作符前面                   |
| padded-blocks                    | 在块语句和类的开始和末尾，不要出现空行                       |
| padding-line-between-statements  | return 之前需要空一行 let、const、var、import、require、export下面需要空一行 |
| prefer-object-spread             | 对象字面量属性名称尽量不要使用引号                           |
| quotes                           | 使用双引号                                                   |
| semi                             | 在语句末尾需要使用分号                                       |
| semi-spacing                     | 分号前后不能有空格                                           |
| semi-style                       | 在行尾使用分号，而不是在行首                                 |
| space-before-blocks              | 语句块之前需要加一个空格                                     |
| space-before-function-paren      | 函数圆括号之前不要带有空格                                   |
| space-in-parens                  | 圆括号内不需要存在空格                                       |
| space-infix-ops                  | 操作符周围需要带有空格                                       |
| spaced-comment                   | 在注释 // 或 /* 后需要加一个空格                             |
| switch-colon-spacing             | 在 switch 的冒号左右需要有空格                               |
| template-tag-spacing             | 禁止在一个标记的函数和它的模板字面量之间有空格               |



### Variables

| 规则                       | 说明                                 |
| -------------------------- | ------------------------------------ |
| init-declarations          | 禁止使用var声明变量                  |
| no-delete-var              | 禁止delete 操作符的使用              |
| no-label-var               | 同一作用域下，不允许标签与变量同名   |
| no-shadow                  | 局部变量不能覆盖全局变量，即不能重名 |
| no-shadow-restricted-names | 变量命名不能和关键字同名             |
| no-undef                   | 禁用未声明的变量                     |
| no-undef-init              | 禁止将变量初始化为 undefined         |
| no-undefined               | 禁止将 undefined 作为标识符          |
| no-unused-vars             | 禁止出现未使用过的变量               |
| no-use-before-define       | 禁止在变量定义之前使用它们           |



### ECMAScript 6

| 规则                    | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| arrow-body-style        | 要求箭头函数体使用大括号，并显示返回对象字面量               |
| arrow-parens            | 箭头函数的参数需要使用圆括号                                 |
| arrow-spacing           | 在箭头函数的箭头前后都需要有空格                             |
| constructor-super       | 要求在构造函数中有 super() 的调用                            |
| generator-star-spacing  | generator 函数中 * 号 前面不要有空格，后面需要加上空格       |
| no-class-assign         | 不允许修改类声明的变量                                       |
| no-confusing-arrow      | 禁止在可能与比较操作符相混淆的地方使用箭头函数               |
| no-const-assign         | 禁止修改 const 声明的变量                                    |
| no-dupe-class-members   | 禁止类成员中出现重复的名称                                   |
| no-duplicate-imports    | 禁止重复模块导入                                             |
| no-new-symbol           | 禁止 Symbolnew 操作符和 new 一起使用                         |
| no-this-before-super    | 禁止在构造函数中，在调用 super() 之前使用 this 或 super      |
| no-useless-computed-key | 禁止在对象中使用不必要的计算属性                             |
| no-useless-constructor  | 用不必要的构造函数 ES2015 会为没有指定构造函数的类提供了默认构造函数 |
| no-useless-rename       | 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字 |
| no-var                  | 要求使用 let 或 const 而不是 var                             |
| object-shorthand        | 要求对象字面量中方法和属性使用简写语法                       |
| prefer-arrow-callback   | 回调函数使用箭头函数，不能使用命名函数                       |
| prefer-const            | 要求使用 const 声明那些声明后不再被修改的变量                |
| prefer-destructuring    | 变量声明时，优先使用对象解构赋值(如果变量名与键名同名)       |
| prefer-numeric-literals | 对于二进制，八进制和十六进制，优先使用字面量声明，而是不是使用parseInt() 和 Number.parseInt()来转换 |
| prefer-rest-params      | 要求使用剩余参数而不是 arguments                             |
| prefer-spread           | 建议使用扩展语法而非.apply()                                 |
| prefer-template         | 要求使用模板字面量而非字符串连接                             |
| rest-spread-spacing     | 要求 generator 函数内有 yield                                |
| symbol-description      | 使用Symbol时需要传入描述参数                                 |
| template-curly-spacing  | 模板字符串中不要在花括号左右加上空格                         |
| yield-star-spacing      | 强制在 yield* 表达式中 * 周围使用空格                        |



### Nodejs

| 规则                  | 说明                                          |
| --------------------- | --------------------------------------------- |
| callback-return       | 不强制返回callback函数                        |
| global-require        | 要求 require() 出现在顶层模块作用域中         |
| handle-callback-err   | 不强制回调错误处理                            |
| no-buffer-constructor | 禁用 Buffer() 构造函数                        |
| no-mixed-requires     |                                               |
| no-new-require        | 禁止调用 require 时使用 new 操作符            |
| no-path-concat        | 禁止对 __dirname 和 __filename 进行字符串连接 |
| no-process-env        | 不限制使用process.env                         |
| no-process-exit       | 不限制使用process.exit()                      |
| no-restricted-modules | 不会限制任何模块的使用                        |
| no-sync               | 不限制同步方法的使用                          |



### Best Practices

| 规则                         | 说明                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| accessor-pairs               | getter/setter需要成对出现在对象中                            |
| array-callback-return        | 数组方法的回调函数中需要有 return 语句                       |
| block-scoped-var             | 需要把变量的使用限制在其定义的作用域范围内                   |
| class-methods-use-this       | 如果类中的方法没有使用this，则可以替换为静态方法使用         |
| complexity                   | 代码的圈复杂度最多为20                                       |
| consistent-return            | 使用一致的 return 语句，不要有的返回了值，有的不返回值       |
| curly                        | 只有在代码块只有一个语句时，可以不使用大括号，在多行就必须使用大括号 |
| default-case                 | 要求 Switch 语句中有 Default 分支                            |
| dot-location                 | 如果成员表达式中的点操作符需要换行，那么表达式中的点号操作符应该和属性在同一行 |
| dot-notation                 | 尽可能使用点号 (foo.bar)来访问属性，而不是使用方括号 (foo["bar"]) |
| eqeqeq                       | 用类型安全的 === 和 !== 操作符代替 == 和 != 操作符           |
| guard-for-in                 | 使用for-in时，需要判断属性是否在原型上(hasOwnProperty)，方式使用继承到的属性 |
| max-classes-per-file         | 一个文件中最多定义3个类                                      |
| no-alert                     | 禁用 alert、confirm 和 prompt                                |
| no-caller                    | 禁用 arguments.caller 或 arguments.callee                    |
| no-case-declarations         | 禁止在 case 或 default 子句中出现词法声明 该规则旨在避免访问未经初始化的词法绑定以及跨 case 语句访问被提升的函数 |
| no-div-regex                 | 禁止除法操作符显式的出现在正则表达式开始的位置               |
| no-else-return               | 禁止 if 语句中 return 语句之后有 else 块                     |
| no-empty-function            | 禁止出现空函数，除了箭头函数、常规函数、类方法和对象的方法简写 |
| no-empty-pattern             | 禁止使用空解构模式                                           |
| no-eq-null                   | 对null进行比较时，最好使用===、!==，但是==或!=也是允许的     |
| no-eval                      | 禁用 eval()                                                  |
| no-extend-native             | 禁止扩展原生类型                                             |
| no-extra-bind                | 禁止不必要的 .bind() 调用                                    |
| no-fallthrough               | 每个 case 语句 都需要break或return                           |
| no-floating-decimal          | 对于浮点数，小数点之前或之后，都需要有一个数字               |
| no-global-assign             | 禁止对原生对象或只读的全局对象进行赋值                       |
| no-implicit-coercion         | 禁止使用除了!!之外的短符号进行类型转换                       |
| no-implied-eval              | 禁止使用类似 eval() 的方法                                   |
| no-iterator                  | 禁用 iterator 属性                                           |
| no-lone-blocks               | 禁用不必要的嵌套块                                           |
| no-loop-func                 | 禁止在循环语句中出现包含不安全引用的函数声明                 |
| no-magic-numbers             | 代码中的没有明确含义的数字，最好有命名常量替代               |
| no-multi-spaces              | 禁止使用多个空格                                             |
| no-multi-str                 | 禁止使用多行字符串                                           |
| no-new                       | 禁止使用 new 以避免产生副作用                                |
| no-new-func                  | 禁止对 Function 对象使用 new 操作符                          |
| no-new-wrappers              | 禁止对 String，Number 和 Boolean 使用 new 操作符             |
| no-octal                     | 禁用八进制字面量                                             |
| no-octal-escape              | 禁止在字符串中使用八进制转义序列                             |
| no-param-reassign            | 禁止对函数参数再赋值                                         |
| no-proto                     | 禁用 proto 属性                                              |
| no-redeclare                 | 禁止多次声明同一变量                                         |
| no-return-assign             | 禁止在 return 语句中使用赋值语句                             |
| no-return-await              | 禁用不必要的 return await                                    |
| no-script-url                | 禁止使用 javascript: url                                     |
| no-self-assign               | 禁止自我赋值                                                 |
| no-self-compare              | 禁止自身比较                                                 |
| no-sequences                 | 禁用逗号操作符                                               |
| no-throw-literal             | 禁止抛出异常字面量                                           |
| no-unmodified-loop-condition | 禁用一成不变的循环条件                                       |
| no-unused-expressions        | 禁止出现未使用过的表达式                                     |
| no-useless-call              | 禁止不必要的 .call() 和 .apply()                             |
| no-useless-catch             | 禁止不必要的 catch 子句                                      |
| no-useless-concat            | 禁止不必要的字符串字面量或模板字面量的连接                   |
| no-useless-escape            | 禁用不必要的转义字符                                         |
| no-useless-return            | 禁止多余的 return 语句                                       |
| no-void                      | 禁用 void 操作符                                             |
| no-with                      | 禁用 with 语句                                               |
| prefer-promise-reject-errors | 要求使用 Error 对象作为 Promise 拒绝的原因                   |
| radix                        | 强制在 parseInt() 使用基数参数                               |
| require-await                | 禁止使用不带 await 表达式的 async 函数                       |
| vars-on-top                  | 要求所有的 var 声明出现在它们所在的作用域顶部                |
| wrap-iife                    | 要求 IIFE 使用括号括起来                                     |



### Possible Errors

| 规则                          | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| for-direction                 | for循环需要有一个终止条件                                    |
| getter-return                 | getter 函数中需要出现 return 语句                            |
| no-async-promise-executor     | 禁止使用异步函数作为 Promise executor                        |
| no-await-in-loop              | 禁止在循环中出现 await 应该重构为Promise.all                 |
| no-compare-neg-zero           | 禁止与 -0 进行比较                                           |
| no-cond-assign                | 禁止条件表达式中出现赋值操作符                               |
| no-console                    | 禁用 console                                                 |
| no-constant-condition         | 禁止在条件判断中使用常量表达式                               |
| no-control-regex              | 禁止在正则表达式中使用控制字符                               |
| no-debugger                   | 禁用 debugger                                                |
| no-dupe-args                  | 禁止 function 定义中出现重名参数                             |
| no-dupe-keys                  | 禁止对象字面量中出现重复的 key                               |
| no-duplicate-case             | 禁止出现重复的 case 标签                                     |
| no-empty                      | 禁止出现空语句块                                             |
| no-empty-character-class      | 禁止在正则表达式中使用空字符集                               |
| no-ex-assign                  | 禁止对 catch 子句的参数重新赋值                              |
| no-extra-boolean-cast         | 禁止不必要的布尔转换                                         |
| no-extra-parens               | 禁止不必要的括号                                             |
| no-extra-semi                 | 禁止不必要的分号                                             |
| no-func-assign                | 禁止对 function 声明重新赋值                                 |
| no-inner-declarations         | 禁止在嵌套的块中出现变量声明或 function 声明                 |
| no-invalid-regexp             | 禁止 RegExp 构造函数中存在无效的正则表达式字符串             |
| no-irregular-whitespace       | 禁止不规则的空白                                             |
| no-misleading-character-class | 不允许在字符类语法中出现由多个代码点组成的字符               |
| no-obj-calls                  | 禁止把全局对象作为函数调用                                   |
| no-prototype-builtins         | 禁止直接调用 Object.prototypes 的内置属性                    |
| no-regex-spaces               | 禁止正则表达式字面量中出现多个空格                           |
| no-sparse-arrays              | 禁用稀疏数组                                                 |
| no-template-curly-in-string   | 禁止在常规字符串中出现模板字面量占位符语法                   |
| no-unreachable                | 在 return、throw、continue 和 break 语句之后不应该继续出现任何代码 |
| no-unreachable-loop           | 禁止在 finally 语句块中出现控制流语句                        |
| no-unsafe-finally             | 禁止对关系运算符的左操作数使用否定操作符                     |
| no-unsafe-negation            | 禁止对关系运算符的左操作数使用否定操作符                     |
| require-atomic-updates        | 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值    |
| use-isnan                     | 要求使用 isNaN() 检查 NaN                                    |
| valid-typeof                  | 强制 typeof 表达式与有效的字符串进行比较                     |