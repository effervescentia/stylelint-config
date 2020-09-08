module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin'
  ],
  rules: {
    'declaration-empty-line-before': null,
    'order/properties-order': [
      [],
      {
        severity: 'warning'
      }
    ],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true
      }
    ]
  }
}