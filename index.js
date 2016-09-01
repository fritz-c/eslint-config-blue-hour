module.exports = {
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
        'no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        }],

        'indent': [2, 4],
        'react/sort-comp': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/prefer-es6-class': 0,
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
        'no-mixed-operators': [2, { allowSamePrecedence: true }],

        'import/prefer-default-export': 0,

        'comma-dangle': 0,
        'one-var': 0,
        'no-underscore-dangle': 0,
        'no-continue': 0,
        'quote-props': [2, 'as-needed', { keywords: true, unnecessary: false }],
        'key-spacing': [1, { beforeColon: false, afterColon: true, mode: 'minimum' }],
        'array-bracket-spacing': 0,
        'object-curly-spacing': 0,
        'no-multi-spaces': 0,
        'max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreTrailingComments: true,
            ignoreUrls: true
        }],
        'consistent-return': 0,
        'prefer-template': 0,
    }
};
