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
    'react/jsx-sort-props': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          order: 'alphabetically',
        },
      },
    ],
    'no-console': [
      'error'
    ],
  },
};
