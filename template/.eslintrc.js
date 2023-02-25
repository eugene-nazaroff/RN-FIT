module.exports = {
    ignorePatterns: ['/node_modules/'],
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    rules: {
        'no-inline-comments': 'error',
        'no-console': 'error',
        'max-lines': ['error', {max: 150}],
    },
    plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'unused-imports/no-unused-imports': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'simple-import-sort/imports': 'error',
            },
        },
    ],
};
