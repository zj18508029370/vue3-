module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'off',
    'prefer-const': 'off',
    'object-curly-spacing': 'off',
    'no-multiple-empty-lines': 'off',
    'quotes': 'off',
    'semi': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
