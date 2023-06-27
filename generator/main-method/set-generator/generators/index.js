/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const libGenerator = require('./lib')

module.exports = (plop) => {
  plop.setGenerator('lib', libGenerator)
}
