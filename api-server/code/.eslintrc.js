module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sort-destructure-keys',
    'graphql',
  ],
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'sort-keys': 'error',
    'sort-vars': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    'arrow-parens': 0,
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
    // 'graphql/template-strings': ['error', {
    //   // Import default settings for your GraphQL client. Supported values:
    //   // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
    //   env: 'apollo',
 
    //   // Import your schema JSON here
    //   schemaJson: require('./schema.json'),
 
    //   // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
    //   // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
 
    //   // OR provide the schema in the Schema Language format
    //   // schemaString: printSchema(schema),
 
    //   // tagName is gql by default
    // }]
  },
};
