module.exports = {
    globals: {
        'PROJECT_NAME': true,
        "ASSETS_PATH": true
    },
    'extends': 'react-app',
    'plugins': [
        'react-hooks'
    ],
    'rules': {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: 'React default is automatically imported by webpack.',
                    },
                ],
            },
        ]
    }
}