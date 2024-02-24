module.exports = {
  // Specifying the root of the ESLint configuration
  root: true,

  // Specifying the environment (browser and ES2020)
  env: { browser: true, es2020: true },

  // Extending ESLint configurations
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],

  // Ignoring certain patterns or files
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Parser options for ECMAScript version and source type
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  // Settings for React, specifying the version
  settings: { react: { version: '18.2' } },

  // Plugins used in the configuration
  plugins: ['react-refresh'],

  // Custom ESLint rules
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
