/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const libGenerator = require('./lib')
const { toCamelCase } = require('./utils')

module.exports = (plop) => {
  plop.setGenerator('lib', libGenerator)
  plop.setHelper('toCamelCase', (text) => toCamelCase(text))
  plop.setPartial('libName', '{{ toCamelCase name }}')
}
