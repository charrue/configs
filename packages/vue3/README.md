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
    '@charrue/vue2',
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // override/add rules settings
  }
}
```
> `@charrue/eslint-config-vue3`需要使用`@babel/eslint-parser`进行文件解析，并且项目内`eslint-plugin-vue`的版本需要在`7.2.0`以上，因为有些vue的rule只有在`7.2.0`版本才会提供

