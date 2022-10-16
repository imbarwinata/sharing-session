/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const { toSlug } = require('../lib/string')
const componentsGenerator = require('./components')
const pagesGenerator = require('./pages')
const hooksGenerator = require('./hooks')
// const promptsGenerator = require('./prompts')

module.exports = async (plop) => {
  plop.setHelper('toSlug', (text) => toSlug(text))
  plop.setHelper('isIndex', (text) => text === 'index' ? '' : text)
  plop.setPartial('componentName', '{{ properCase type }}{{ properCase name }}{{ properCase variant }}')
  plop.setActionType('log', (_answers, config) => console.log(config.message))
  plop.setGenerator('page', pagesGenerator)
  plop.setGenerator('component', componentsGenerator)
  plop.setGenerator('hooks', hooksGenerator)
  // plop.setGenerator('prompts', promptsGenerator)
  // load another plopfile
  await plop.load('./load', {}, true)
}
