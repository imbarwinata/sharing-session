/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const componentsGenerator = require('./components')
const hooksGenerator = require('./hooks')

module.exports = (plop) => {
  plop.setGenerator('component', componentsGenerator)
  plop.setGenerator('hooks', hooksGenerator)
}