/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
 const libGenerator = require('./lib')
 const componentGenerator = require('./component')
 
 module.exports = (plop) => {
   plop.setGenerator('Create a new lib', libGenerator)
   plop.setGenerator('Create a new component', componentGenerator)
 }
 