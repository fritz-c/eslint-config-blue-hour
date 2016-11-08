module.exports = {
    'extends': 'airbnb',
    'rules': {
        // ----------------------------
        // Built-in settings
        // ----------------------------
        'array-bracket-spacing': 0,
        'comma-dangle': 0,
        'consistent-return': 0,
        'indent': [2, 4],
        'key-spacing': [1, { beforeColon: false, afterColon: true, mode: 'minimum' }],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [1, {
            code: 120,
            tabWidth: 4,
            ignoreTrailingComments: true,
            ignoreUrls: true,
        }],
        'no-continue': 0,
        'no-mixed-operators': [2, { allowSamePrecedence: true }],
        'no-multi-spaces': 0,
        'no-plusplus': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': ['error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
        }],
        'object-curly-spacing': 0,
        'one-var': 0,
        'prefer-template': 0,
        'quote-props': [2, 'as-needed', { keywords: true, unnecessary: false }],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],

        // ----------------------------
        // Import settings
        // ----------------------------
        'import/prefer-default-export': 0,
        'import/extensions': [2, { js: 'never' }],

        // ----------------------------
        // JSX a11y settings
        // ----------------------------
        'jsx-a11y/no-static-element-interactions': 1,

        // ----------------------------
        // React settings
        // ----------------------------
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'react/prefer-es6-class': 0,
        'react/prefer-stateless-function': 0,
        'react/sort-comp': 0,
    }
};
