/**
 * generators/index.js
 * 
 * Exports the generators so plop knows them
 */
import libGenerator from './lib/index.js'

export default function (plop) {
  plop.setGenerator('lib', libGenerator)
}
