/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const { toSlug } = require('../lib/string')
const componentsGenerator = require('./components')
const hooksGenerator = require('./hooks')

module.exports = (plop) => {
  plop.setHelper('toSlug', (text) => toSlug(text))
  plop.setPartial('componentName', '{{ properCase type }}{{ properCase name }}{{ properCase variant }}')
  plop.setGenerator('component', componentsGenerator)
  plop.setGenerator('hooks', hooksGenerator)
}
