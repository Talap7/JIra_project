const { configure, presets } = require('eslint-kit')

module.exports = configure({
  mode: 'only-errors',
  presets: [
    presets.imports(),
    presets.typescript(),
    presets.node(),
    presets.react({ version: '18.0' }),
    presets.prettier({
      semi: false,
      singleQuote: true
      // ...
    })
  ],
  extend: {
    rules: {
      'some-rule': 'off'
    }
  },

})

