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
