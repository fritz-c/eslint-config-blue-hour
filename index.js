module.exports = {
    parser: 'babel-eslint',
    'extends': 'airbnb',
    'rules': {
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

        'indent': [2, 4],
        'react/sort-comp': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],

        'comma-dangle': 0,
        'quote-props': [2, 'as-needed', { keywords: true, unnecessary: false }],
        'key-spacing': [1, { beforeColon: false, afterColon: true, mode: 'minimum' }],
        'max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreTrailingComments: true,
            ignoreUrls: true
        }],
        'consistent-return': 0,
        'no-multi-spaces': 0,
        'object-curly-spacing': 0,
        'prefer-template': 0,
    }
};
