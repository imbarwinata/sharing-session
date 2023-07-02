/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const prompts = require('./prompts')

module.exports = (plop) => {
  plop.setGenerator('prompts', prompts)
}
