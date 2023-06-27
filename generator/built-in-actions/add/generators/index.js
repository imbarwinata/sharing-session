/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const libGeneratorByTemplate = require('./lib/use-template')
const libGeneratorByTemplateFile = require('./lib/use-templateFile')

module.exports = (plop) => {
  plop.setGenerator('lib (use template)', libGeneratorByTemplate)
  plop.setGenerator('lib (use templateFile)', libGeneratorByTemplateFile)
}
