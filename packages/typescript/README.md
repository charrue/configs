![](https://img.shields.io/npm/v/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/dt/@charrue/eslint-config-base.svg)![](https://img.shields.io/npm/l/express.svg)


# @charrue/eslint-config-typescript

此规则是参考[apptools-lab](https://github.com/apptools-lab/AppLint/tree/main/packages/eslint-config)实现的。



## 使用

### 下载

```bash
# npm
npm install @charrue/eslint-config-typescript

# yarn
yarn add @charrue/eslint-config-typescript

# pnpm
pnpm add @charrue/eslint-config-typescript
```



### 配置

使用`.eslintrc.js`进行规则配置
```js
module.exports = {
  root: true,
  extends: [
    '@charrue/typescript',
  ],
  rules: {
    // override/add rules settings
  }
}
```



### 规则

| 规则                                    | 说明                                                         |
| --------------------------------------- | ------------------------------------------------------------ |
| lines-between-class-members             | 在类重载后不跳过检查空行                                     |
| no-confusing-non-null-assertion         | 禁止使用容易混淆的非空断言                                   |
| prefer-nullish-coalescing               | 使用可选链式表达式而不是逻辑与运算符<br />比如：使用 a?.b 代替 a && a.b，语法上更简洁 |
| no-non-null-asserted-nullish-coalescing | 不允许非空断言与空值合并同时使用                             |
| space-infix-ops                         | 运算符两侧需要有空格，并增加对枚举类型支持                   |
| keyword-spacing                         | 关键字前后有一个空格，并增加了对函数调用的泛型类型参数的支持 |
| type-annotation-spacing                 | 调用函数时，函数名与括号之间没有空格，并增加了对函数调用的泛型类型参数的支持 |
| func-call-spacing                       | 变量命名不能和关键字同名                                     |
| comma-spacing                           | 逗号前面没空格，后面有空格                                   |
| space-before-function-paren             | 增加了对函数调用的泛型类型参数的支持                         |
| member-delimiter-style                  | interface 和 type 里的成员统一使用分号（;）进行分割，单行类型的最后一个元素不加分号 |
| brace-style                             | 对于非空代码块，采用 Egyptian Brackets 风格                  |
| no-array-constructor                    | 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组 |
| no-unused-vars                          | 使用的变量                                                   |
| ban-types                               | 禁止部分值被作为类型标注，需要对每一种被禁用的类型提供特定的说明 |
| no-confusing-void-expression            | 不允许返回一个类型是 void 的表达式                           |
| no-inferrable-types                     | 不允许不必要的类型标注，但允许类的属性成员进行额外标注       |
| no-unnecessary-type-arguments           | 使用泛型时，不允许指定与默认类型参数一致的类型参数           |
| no-unnecessary-type-constraint          | 不允许与默认约束一致的泛型约束<br />在 TS 3.9 版本以后，对于未指定的泛型约束，默认使用 unknown ，在这之前则是 any |
| no-non-null-asserted-optional-chain     | 不允许非空断言与可选链同时使用                               |
| prefer-for-of                           | 如果索引仅用于访问正在迭代的数组，则首选 for...of 而不是 for 循环遍历数组 |
| adjacent-overload-signatures            | 重载的函数写在一起                                           |
| default-param-last                      | 具有默认值的函数参数应该被放置到参数列表右边                 |
| explicit-member-accessibility           | 设置类的成员的可访问性，public 可省略                        |
| prefer-literal-enum-member              | 对于枚举成员值，只允许使用普通字符串、数字、null、正则，而不允许变量复制、模板字符串等需要计算的操作 |
| await-thenable                          | 只允许对异步函数、Promise、PromiseLike 使用 await 调用       |
| promise-function-async                  | 返回 Promise 的函数必须被标记为 async                        |
| consistent-type-imports                 | 约束使用 import type {} 进行类型的导入                       |
| no-duplicate-imports                    | 不允许对同一模块重复导入，类型可重复导入                     |
| prefer-namespace-keyword                | 禁止使用 module 来定义命名空间                               |
| method-signature-style                  | 接口中的方法使用属性的方式定义。使用属性去定义接口中的方法，可以获得更严格的检查 |
| no-empty-interface                      | 不允许定义空的接口，允许单继承下的空接口                     |
| consistent-type-definitions             | 对于对象类型，优先使用 interface 定义                        |
| no-extra-non-null-assertion             | 不允许额外的非空断言                                         |
| no-unnecessary-type-assertion           | 不允许与实际值一致的类型断言                                 |
| non-nullable-type-assertion-style       | 首选非空断言而不是显式类型转换                               |
| consistent-type-assertions              | 使用 as 进行类型断言而不是 <>                                |
| ban-tslint-comment                      | 禁止使用 `tslint:<rule-flag>` 等相关注释，tslint 已经不再维护了 |
| ban-ts-comment                          | 禁止使用其他 @ts 规则，除非提供必要的说明                    |
| prefer-ts-expect-error                  | 推荐使用 ts-expect-error 而不是 ts-ignore                    |








