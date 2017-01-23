/* eslint-disable */

module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import"
  ],
  parserOptions: {
    // "ecmaVersion": 5,
    'sourceType': 'module'
  },
  "env": {
    "browser": true,
    "node": true,
    "amd": true,
    "mocha": true,
    "commonjs": true
  },
  "globals": {
    // "define": true,
    "$": true
  },
  "rules": {
    // 要求使用 let 或 const 而不是 var
    'no-var': 'off',
    // 要求使用点号 (dot-notation)
    'dot-notation': [0, {
      'allowKeywords': false
    }],
    // 要求或禁止命名的 function 表达式 (func-names)
    'func-names': 0,
    // 要求将变量声明放在它们作用域的顶部 (vars-on-top)
    'vars-on-top': 'off',
    // 禁止定义前使用 (no-use-before-define)
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true
    }],
    // 要求对象字面量属性名称使用引号 (quote-props)
    'quote-props': [2, 'as-needed', {
      'keywords': false,
      'unnecessary': false,
      'numbers': false
    }],
    // 要求或禁止使用拖尾逗号 (comma-dangle)
    "comma-dangle": [0, 'never'],
    // 建议使用模板而非字符串连接 (prefer-template)
    'prefer-template': 0,
    // 要求使用箭头函数作为回调
    'prefer-arrow-callback': [0, {
      'allowNamedFunctions': false,
      'allowUnboundThis': true,
    }],
  }
};