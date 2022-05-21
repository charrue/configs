const rules = {

  /**
   * 不强制返回callback函数
   */
  "callback-return": "off",

  /**
   * 推荐 require() 出现在顶层模块作用域中，但是不会强制要求
   */
  "global-require": "off",

  /**
   * 不强制回调错误处理
   */
  "handle-callback-err": "off",

  /**
   * 禁用 Buffer() 构造函数
   */
  "no-buffer-constructor": "error",

  /**
   * 对require的使用没有限制
   */
  "no-mixed-requires": ["off", false],

  /**
   * 禁止调用 require 时使用 new 操作符
   */
  "no-new-require": "error",

  /**
   * 禁止对 __dirname 和 __filename 进行字符串连接
   */
  "no-path-concat": "error",

  /**
   * 不限制使用process.env
   */
  "no-process-env": "off",

  /**
   * 不限制使用process.exit()
   */
  "no-process-exit": "off",

  /**
   * 不会限制任何模块的使用
   */
  "no-restricted-modules": "off",

  /**
   * 不限制同步方法的使用
   */
  "no-sync": "off",
};

module.exports = {
  env: { node: true },
  rules,
};
