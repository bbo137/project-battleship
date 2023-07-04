module.exports = {
  env: {
    browser: true,
    es2021: false,
  },
  extends: ['airbnb-base',
    'prettier'],
  overrides: [
    {
      'files': [
        '**/*.test.js'
      ],
      'env': {
        'jest': true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
