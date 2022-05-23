"use strict";

// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)

module.exports = {
  //   env: {
  //     browser: true,
  //     node: true,
  //     es2021: true
  //   },
  rules: {
    // 整个文件的长度
    "max-lines": [
      "error",
      { max: 500, skipBlankLines: true, skipComments: true },
    ],
    // 有多少层if else嵌套
    "max-depth": ["error", 4],
    // 单行代码的长度
    "max-len": [
      "error",
      {
        code: 200,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    // function的长度
    "max-lines-per-function": [
      "error",
      {
        max: 120,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    // 有多少层回调
    "max-nested-callbacks": ["error", 4],
    // function多少个请求参数
    "max-params": ["error", 4],
    // 分析复杂度
    complexity: ["error", { max: 15 }],
    // 禁止三目运算符嵌套
    "no-nested-ternary": "error",
  },
  // 定义全局变量
  //   globals: {
  //     location: "readonly",
  //   },
};
