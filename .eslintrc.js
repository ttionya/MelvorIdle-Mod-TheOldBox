module.exports = {
  globals: {
    $: 'readonly',
    game: 'readonly',
    mod: 'readonly',
    Player: 'readonly',
  },

  plugins: ['jsdoc'],

  extends: ['@ttionya/eslint-config/base', 'plugin:jsdoc/recommended-error'],

  rules: {
    'no-var': 'warn',

    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-property': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/no-undefined-types': 'off',
  },
}
