const { config } = require('@dhis2/cli-style')

module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', config.eslint],
    rules: {
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    },
}
