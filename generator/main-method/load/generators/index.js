/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
module.exports = async (plop) => {
  await plop.load('./3rd', {}, true)
}
