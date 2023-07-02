/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
const hooksGenerator = require('./hooks')
const serviceGenerator = require('./service')
 
 module.exports = (plop) => {
   plop.setGenerator('Create a new hooks', hooksGenerator)
   plop.setGenerator('Create a new service', serviceGenerator)
 }
 