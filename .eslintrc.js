module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-duplicates': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
  },
};
