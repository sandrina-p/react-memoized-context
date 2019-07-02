module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
      process: false,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['babel', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                semi: false,
                singleQuote: true,
            },
        ],
        'no-console': 0,
        'react/prop-types': 0, // TODO - Add flow / typescript
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            "experimentalObjectRestSpread": true
        },
    },
};
