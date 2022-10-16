/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
 const example1Generator = require('./example1')
 const example2Generator = require('./example2')
 
 module.exports = (plop) => {
   plop.setGenerator('example 1 - Add a new example 1', example1Generator)
   plop.setGenerator('example 2 - Add a new example 2', example2Generator)
 }
 