const typescriptEslintRecommended = require('@typescript-eslint/eslint-plugin').configs.recommended;

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'react-app', 'plugin:jsx-a11y/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
      }),
    },
    {
      files: ['**/sagas.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      typescript: {},
      // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-nested-ternary': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          'src/components/atomic/.storybook/**',
          'src/components/atomic/*/**.stories.tsx',
          'src/components/atomic/*/**.stories.js',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
