/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const { toSlug } = require('../lib/string')
const componentsGenerator = require('./components')
const pagesGenerator = require('./pages')
const hooksGenerator = require('./hooks')
const commitGenerator = require('./commit')

module.exports = (plop) => {
  plop.setHelper('toSlug', (text) => toSlug(text))
  plop.setHelper('isIndex', (text) => text === 'index' ? '' : text)
  plop.setPartial('componentName', '{{ properCase type }}{{ properCase name }}{{ properCase variant }}')
  plop.setGenerator('page', pagesGenerator)
  plop.setGenerator('component', componentsGenerator)
  plop.setGenerator('hooks', hooksGenerator)
  plop.setGenerator('commit', commitGenerator)
}
