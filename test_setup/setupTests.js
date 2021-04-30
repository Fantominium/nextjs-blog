import "@testing-library/jest-dom";
module.exports = async () => {}

const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  presets: ['react-app'],
})