module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sort-destructure-keys',
  ],
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'sort-keys': 'error',
    'sort-vars': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'arrow-parens': 0,
    'react/jsx-sort-props': 'error',
    'react/jsx-key': 2,
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          order: 'alphabetically',
        },
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        'html': 'enforce',
        'custom': 'enforce',
        'explicitSpread': 'ignore',
        'exceptions': [
          'Grid',
        ],
      },
    ],
    'no-console': [
      'error'
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'function',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
  },
};
