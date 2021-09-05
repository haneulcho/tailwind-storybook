/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true,
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  ignorePatterns: [
    'dist/', 'node_modules/'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'accessor-pairs': 'error',
    'array-callback-return': 'warn',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'comma-spacing': 'off',
    'consistent-return': 'warn',
    'default-case': 'warn',
    'func-names': 'off',
    'guard-for-in': 'warn',
    'indent': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'line-comment-position': ['error', {
      position: 'above'
    }],
    'max-classes-per-file': 'off',
    'max-len': ['error', {
      code: 200
    }],
    'max-depth': ['error', 3],
    'new-cap': 'off',
    'no-case-declarations': 'warn',
    'no-else-return': ['warn', {
      allowElseIf: true
    }],
    'no-empty': 'off',
    'no-eq-null': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-floating-promises': 'off',
    'no-invalid-this': 'error',
    'no-lonely-if': 'warn',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'warn',
    'no-nested-ternary': 'warn',
    'no-param-reassign': 'warn',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'warn',
    'no-undef': 'warn',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'warn',
    'no-unsafe-call': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-useless-return': 'warn',
    'no-tabs': 'off',
    'object-curly-spacing': 'off',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    'quotes': 'off',
    'semi': 'warn',
    'space-before-function-paren': 'off',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'off',
    'strict': 'off',
    'yoda': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          'js',
          'ts'
        ]
      }
    }
  }
};
