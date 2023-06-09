module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    '@vue/typescript/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    endOfLine: 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'arrow-parens': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']]
      }
    ],
    'no-console': 'warn',
    'max-len': [1, 300, 2, { ignoreComments: true }]
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    window: true
  }
}
