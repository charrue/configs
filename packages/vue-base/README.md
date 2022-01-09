![](https://img.shields.io/npm/v/@charrue/eslint-config-vue-base.svg)![](https://img.shields.io/npm/dt/@charrue/eslint-config-vue-base.svg)![](https://img.shields.io/npm/l/express.svg)


# @charrue/eslint-config-vue-base

此规则是基于[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)实现的，覆盖其原有的rules。


## 使用

### 下载

```bash
# npm
npm install @charrue/eslint-config-vue-base

# yarn
yarn add @charrue/eslint-config-vue-base

# pnpm
pnpm add @charrue/eslint-config-vue-base
```



### 配置


使用`.eslintrc.js`进行规则配置
```js
module.exports = {
  root: true,
  extends: [
    // ... 其他的eslint config
    '@charrue/vue-base',
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    // override/add rules settings
  }
}
```