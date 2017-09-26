
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'brackets',
    'import',
    'fat-arrow-same-line'
  ],
  extends: [
    'eslint:recommended'
  ],
  env: {
    'browser': true
  },
  rules: {
    // ES6
    'arrow-parens': ['error', 'always'],
    'camelcase': ['error', { 'properties': 'never' }],
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'no-var': 'error',
    'no-useless-rename': 'error',
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false
      }
    ],
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'eol-last': ['error', 'always'],
    'quotes': ['error', 'single', { "allowTemplateLiterals": true, "avoidEscape": true }],

    // Overrides for Ember
    'new-cap': ['error', {
      'capIsNewExceptions': ['A']
    }],

    // Prevent using globals, import
    'no-restricted-globals': [
      'error', // Specifies the error level

      'Ember',
      'QUnit',
      'jQuery',
      '$'
    ],

    'no-restricted-imports': [
      'error',

      'ember'
    ],

    // Import plugin rules
    'import/first': 2,
    'import/newline-after-import': 2,

    'brackets/array-bracket-newline': ['error', { onePerLine: true }],
    'brackets/call-parens-newline': ['error', { onePerLine: true }],
    'brackets/conditional-parens-newline': ['error'],
    'brackets/func-parens-newline': ['error', { onePerLine: true }],
    'brackets/object-curly-newline': ['error', { onePerLine: true }],

    'fat-arrow-same-line/fat-arrow-same-line': ['error', {
      allowObjects: true,
      allowArrays: true,
      allowTemplates: true,
      allowNew: true,
      allowBoolExpressions: true,
      allowMembers: ['create']
    }],
  }
};
