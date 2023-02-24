module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/jsx-key': 'warn',
        'react/no-unescaped-entities': 'warn',
    },
};
