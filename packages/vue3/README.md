![](https://img.shields.io/npm/v/@charrue/eslint-config-vue3.svg)![](https://img.shields.io/npm/dt/@charrue/eslint-config-vue3.svg)![](https://img.shields.io/npm/l/express.svg)


# @charrue/eslint-config-vue3

此规则是基于[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)实现的，覆盖其原有的rules。


## 使用

### 下载

```bash
# npm
npm install @charrue/eslint-config-vue3

# yarn
yarn add @charrue/eslint-config-vue3

# pnpm
pnpm add @charrue/eslint-config-vue3
```



### 配置


使用`.eslintrc.js`进行规则配置
```js
module.exports = {
  root: true,
  extends: [
    // ... 其他的eslint config
    '@charrue/vue3',
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // ...
  }
}
```
> `@charrue/eslint-config-vue2`需要使用`@babel/eslint-parser`进行文件解析，并且`eslint`的版本不能是`8.x`，否则会出现`Syntax Error: TypeError: eslint.CLIEngine is not a constructor`的问题，详见[Issue #15175](https://github.com/eslint/eslint/issues/15175)。
>
> eslint可以使用`7.x`的版本如`^7.3.0`。

