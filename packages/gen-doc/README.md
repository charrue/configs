## gen-doc

根据JSDoc生成ESLint Rule的说明文档。

``` js
// base-practices.js
module.exports = {
  rules: {
    /**
     * 不要求 getter/setter需要成对出现在对象中
     */
    "accessor-pairs": "off",
  }
}
```
以上代码将会被转换为以下格式

``` md
### Base Practices

| 规则名称 | 规则描述 |
|---|---|
| accessor-pairs | 不要求 getter/setter需要成对出现在对象中 |

```